import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="container">
      <div className="min-h-screen flex items-center justify-center text-center">
        <div className="bg-gray-800 md:w-3/5 lg:w-2/5 rounded-lg shadow-lg py-10">
          <h2 className="my-3 text-5xl">Page not found!!!</h2>
          <div className="flex justify-center">
            <Link to="/" className="bg-blue-500 py-1.5 px-3 my-3 rounded-lg shadow-lg">
              Back to home page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
