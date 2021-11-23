import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';

const TheGoogleSignBtn = () => {
  const { googleRegister, authError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    googleRegister(navigate, location);
  };

  return (
    <div className="bg-gray-800 md:w-2/5 mx-auto rounded-lg py-3">
      <button onClick={handleGoogleSignIn} className="block mx-auto">
        <img
          className="inline-block w-10"
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          alt="google"
        />{' '}
        Sign in with google
      </button>
      {/* error */}
      {authError && (
        <p className="bg-red-700 text-gray-50 text-center p-1 m-2 rounded font-mon text-sm">
          {authError}
        </p>
      )}
    </div>
  );
};

export default TheGoogleSignBtn;
