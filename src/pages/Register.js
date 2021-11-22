import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import TheGoogleSignBtn from '../components/Common/TheGoogleSignBtn';
import TheNavbar from '../components/Common/TheNavbar';

const Register = () => {
  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // subnitting register form
  const onSubmit = (data) => {
    console.log(data);
    reset({});
  };

  return (
    <div className="container">
      <TheNavbar />
      <section className="px-2 py-5">
        <div className="bg-gray-800 md:w-2/5 mx-auto rounded-lg py-3">
          {/* loader */}

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
