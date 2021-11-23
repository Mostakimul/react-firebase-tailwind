import React from 'react';
import Loader from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  // setting loader
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loader type="Puff" color="#19752f" height={100} width={100} timeout={3000} />
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
