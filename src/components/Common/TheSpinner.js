import React from 'react';
import Loader from 'react-loader-spinner';

const TheSpinner = () => {
  return (
    <div className="flex justify-center">
      <Loader type="Puff" color="#19752f" height={100} width={100} timeout={3000} />
    </div>
  );
};

export default TheSpinner;
