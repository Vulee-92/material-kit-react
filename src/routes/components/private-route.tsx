import { Navigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMeRequest } from 'src/redux/types/auth.types';
import { STORAGE_KEYS } from 'src/config';

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuthenticated, user, loading } = useSelector((state: any) => state.auth);
  const token = localStorage.getItem(STORAGE_KEYS.token);

  useEffect(() => {
    // If we have a token but no user data, fetch it
    if (token && !user && !loading) {
      dispatch(getMeRequest());
    }
  }, [token, user, dispatch, loading]);

  // If no token, redirect to sign-in
  if (!token) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  // If we have a token but auth state is false and we're not loading,
  // it means the token is invalid
  if (!isAuthenticated && !loading && !user) {
    localStorage.removeItem(STORAGE_KEYS.token);
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  // Show loading state while checking auth
  if (loading) {
    return <div>Loading...</div>; // You can replace this with a proper loading component
  }

  return <>{children}</>;
} 