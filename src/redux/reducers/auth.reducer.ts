import { createReducer } from '@reduxjs/toolkit';
import { STORAGE_KEYS } from 'src/config';
import { 
  loginRequest, 
  loginSuccess, 
  loginFailure, 
  logout,
  getMeRequest,
  getMeSuccess,
  getMeFailure,
} from '../types/auth.types';
import type { AuthState } from '../types/auth.types';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem(STORAGE_KEYS.token),
  refreshToken: localStorage.getItem(STORAGE_KEYS.refreshToken),
  loading: false,
  error: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(loginSuccess, (state, action) => {
      // Save tokens to localStorage
      localStorage.setItem(STORAGE_KEYS.token, action.payload.accessToken);
      localStorage.setItem(STORAGE_KEYS.refreshToken, action.payload.refreshToken);
      
      state.isAuthenticated = true;
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.loading = false;
      state.error = null;
    })
    .addCase(loginFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(getMeRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getMeSuccess, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(getMeFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(logout, (state) => {
      // Clear localStorage
      localStorage.removeItem(STORAGE_KEYS.token);
      localStorage.removeItem(STORAGE_KEYS.refreshToken);
      
      // Reset state
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.loading = false;
      state.error = null;
    });
});

export default authReducer; 