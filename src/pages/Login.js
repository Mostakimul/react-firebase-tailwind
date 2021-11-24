import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import TheGoogleSignBtn from '../components/Common/TheGoogleSignBtn';
import TheNavbar from '../components/Common/TheNavbar';
import TheSpinner from '../components/Common/TheSpinner';
import useAuth from '../hooks/useAuth';

const Login = () => {
  // user from auth
  const { loginUser, user, isLoading, authError } = useAuth();

  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // redirect
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || '/';

  // redireact user if logged in
  if (user?.email) {
    navigate(from, { replace: true });
  }

  // subnitting register form
  const onSubmit = (data) => {
    loginUser(data.email, data.password, navigate, location);
    reset({});
  };

  return (
    <div className="container">
      <TheNavbar />
      <section className="px-2 py-5">
        <div className="bg-gray-800 md:w-2/5 mx-auto rounded-lg py-3">
          {isLoading ? (
            <TheSpinner />
          ) : (
            <>
              <h2 className="text-center text-xl font-semibold mb-5">Sign in</h2>
              {/* form */}
              <form onSubmit={handleSubmit(onSubmit)} className="px-5 space-y-3">
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
                <button className="form-btn">Sign in</button>
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
        <div className="py-5">
          <p className="text-center">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-300">
              register here
            </Link>
          </p>
          <p className="text-center">
            Forgot your password?{' '}
            <Link to="/reset-password" className="text-blue-300">
              reset here
            </Link>{' '}
          </p>
        </div>
        {/* Google Sign in */}
        <TheGoogleSignBtn />
      </section>
    </div>
  );
};

export default Login;
