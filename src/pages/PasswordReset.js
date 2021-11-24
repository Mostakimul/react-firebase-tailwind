import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import TheNavbar from '../components/Common/TheNavbar';
import useAuth from '../hooks/useAuth';

const PasswordReset = () => {
  // use auth hook
  const { isReset, resetPass, authError } = useAuth();
  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // subnitting reset form
  const onSubmit = (data) => {
    resetPass(data.email);
    reset({});
  };
  return (
    <div className="container">
      <TheNavbar />
      <section className="px-2 py-5">
        <div className="bg-gray-800 md:w-3/5 lg:w-2/5 mx-auto rounded-lg py-3">
          {isReset ? (
            <>
              <h2 className="text-center text-xl font-semibold mb-5">
                <svg
                  className="w-14 h-14 text-green-500 block mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Password reset link sent successfully!
              </h2>
              <div className="flex justify-center">
                <Link to="/login" className="bg-blue-500 py-1.5 px-3 rounded-lg shadow-lg">
                  Back to login
                </Link>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-center text-xl font-semibold mb-5">Reset Password</h2>
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
                {/* Button */}
                <button className="form-btn">Reset</button>
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
      </section>
    </div>
  );
};

export default PasswordReset;
