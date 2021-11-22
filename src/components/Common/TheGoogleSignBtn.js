import React from 'react';

const TheGoogleSignBtn = () => {
  return (
    <div className="bg-gray-800 md:w-2/5 mx-auto rounded-lg py-3">
      <button className="block mx-auto">
        <img
          className="inline-block w-10"
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          alt="google"
        />{' '}
        Sign in with google
      </button>
    </div>
  );
};

export default TheGoogleSignBtn;
