import { API_ROUTES, CONFIG } from 'src/config';
import { LoginPayload, LoginResponse, MeResponse } from 'src/redux/types/auth.types';
import { api } from './api';

export const authService = {
  async login(params: LoginPayload): Promise<LoginResponse['data']> {
    try {
      const response = await api.post<LoginResponse>(API_ROUTES.auth.login, {
        email: params.email,
        password: params.password,
      });
      
      if (!CONFIG.isProduction) {
        console.log('Login response:', response);
      }
      
      // Return only the data part of the response
      return response.data.data;
    } catch (error: any) {
      if (!CONFIG.isProduction) {
        console.error('Login error:', error);
      }

      // Enhance error message
      const errorMessage = error.response?.data?.message 
        || error.message 
        || 'Login failed. Please try again.';
      
      throw new Error(errorMessage);
    }
  },

  async getMe(): Promise<MeResponse['data']> {
    try {
      const response = await api.get<MeResponse>(API_ROUTES.auth.me);
      
      if (!CONFIG.isProduction) {
        console.log('Get me response:', response);
      }
      
      return response.data.data;
    } catch (error: any) {
      if (!CONFIG.isProduction) {
        console.error('Get me error:', error);
      }

      const errorMessage = error.response?.data?.message 
        || error.message 
        || 'Failed to get user info';
      
      throw new Error(errorMessage);
    }
  },
}; 