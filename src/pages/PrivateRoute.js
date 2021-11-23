import React from 'react';
import { Navigate, useLocation } from 'react-router';
import TheSpinner from '../components/Common/TheSpinner';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  // setting loader
  if (isLoading) {
    return <TheSpinner />;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
