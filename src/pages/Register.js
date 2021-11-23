import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import Loader from 'react-loader-spinner';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import TheGoogleSignBtn from '../components/Common/TheGoogleSignBtn';
import TheNavbar from '../components/Common/TheNavbar';
import useAuth from '../hooks/useAuth';

const Register = () => {
  // importing firebase auth
  const { user, registerUser, isLoading, authError } = useAuth();

  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // subnitting register form
  const onSubmit = (data) => {
    registerUser(data.email, data.password, data.name, navigate, location);
    reset({});
  };

  // toast
  const notify = () =>
    toast.success('User created successfully!', {
      duration: 4000,
      position: 'top-center',
      // Styling
      style: {
        background: '#202120',
        color: '#F6F6F6',
      },
      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#09D60E',
        secondary: '#fff',
      },
    });

  useEffect(() => {
    if (user?.email) {
      notify();
    }
  }, [user]);

  // redirect
  let navigate = useNavigate();
  let location = useLocation();

  // redireact user if logged in
  if (user?.email) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return (
    <div className="container">
      <TheNavbar />
      <section className="px-2 py-5">
        {/* totast */}
        <Toaster />
        <div className="bg-gray-800 md:w-2/5 mx-auto rounded-lg py-3">
          {/* loader */}
          {isLoading ? (
            <div className="flex justify-center">
              <Loader type="Puff" color="#19752f" height={100} width={100} timeout={3000} />
            </div>
          ) : (
            <>
              <h2 className="text-center text-xl font-semibold mb-5">Create an Account</h2>
              {/* form */}
              <form onSubmit={handleSubmit(onSubmit)} className="px-5 space-y-3">
                <div>
                  {/* Your name */}
                  <label htmlFor="name" className="font-medium">
                    Name:{' '}
                  </label>
                  <input
                    {...register('name', { required: true })}
                    id="name"
                    type="text"
                    className="form-input"
                  />
                  {errors.name && <span>This field is required</span>}
                </div>
                <div>
                  {/* Your Email */}
                  <label htmlFor="email" className="font-medium">
                    Email:{' '}
                  </label>
                  <input
                    {...register('email', { required: true })}
                    id="email"
                    type="email"
                    className="form-input"
                  />
                  {errors.email && <span>This field is required</span>}
                </div>
                <div>
                  {/* Your Pass */}
                  <label htmlFor="password" className="font-medium">
                    Password:{' '}
                  </label>
                  <input
                    {...register('password', { required: true })}
                    id="password"
                    type="password"
                    className="form-input"
                  />
                  {errors.password && <span>This field is required</span>}
                </div>

                {/* Button */}
                <button className="form-btn">Sign up</button>
              </form>
              {/* error */}
              {authError && (
                <p className="bg-red-700 text-gray-50 text-center p-1 m-2 rounded font-mon text-sm">
                  {authError}
                </p>
              )}
            </>
          )}
        </div>
        {/* Already */}
        <div>
          <p className="text-center py-5">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-300">
              login here
            </Link>
          </p>
        </div>
        {/* Google Sign in */}
        <TheGoogleSignBtn />
      </section>
    </div>
  );
};

export default Register;
