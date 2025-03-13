import { createAction } from '@reduxjs/toolkit';

export const AUTH_ACTION_TYPES = {
  LOGIN_REQUEST: 'auth/loginRequest',
  LOGIN_SUCCESS: 'auth/loginSuccess',
  LOGIN_FAILURE: 'auth/loginFailure',
  LOGOUT: 'auth/logout',
  GET_ME_REQUEST: 'auth/getMeRequest',
  GET_ME_SUCCESS: 'auth/getMeSuccess',
  GET_ME_FAILURE: 'auth/getMeFailure',
} as const;

export interface User {
  id: string;
  email: string;
  role: string;
  name?: string;
  avatar?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  }
}

export interface MeResponse {
  data: User;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;
}

// Action Creators
export const loginRequest = createAction<LoginPayload>(AUTH_ACTION_TYPES.LOGIN_REQUEST);
export const loginSuccess = createAction<LoginResponse['data']>(AUTH_ACTION_TYPES.LOGIN_SUCCESS);
export const loginFailure = createAction<string>(AUTH_ACTION_TYPES.LOGIN_FAILURE);
export const logout = createAction(AUTH_ACTION_TYPES.LOGOUT);

export const getMeRequest = createAction(AUTH_ACTION_TYPES.GET_ME_REQUEST);
export const getMeSuccess = createAction<User>(AUTH_ACTION_TYPES.GET_ME_SUCCESS);
export const getMeFailure = createAction<string>(AUTH_ACTION_TYPES.GET_ME_FAILURE); 