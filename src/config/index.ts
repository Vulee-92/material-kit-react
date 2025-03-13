const isProduction = process.env.NODE_ENV === 'production';

export const CONFIG = {
  baseUrl: isProduction 
    ? 'https://f991-42-116-239-85.ngrok-free.app'
    : '', // Empty string will use relative URLs, which will be handled by the proxy
  isProduction,
} as const;

export const API_ROUTES = {
  auth: {
    login: '/auth/login',
    me: '/auth/me',
  },
} as const;

export const STORAGE_KEYS = {
  token: 'access_token',
  user: 'user_data',
  refreshToken: 'refresh_token',
} as const; 