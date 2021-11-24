import React from 'react';
import TheNavbar from '../components/Common/TheNavbar';

const Home = () => {
  return (
    <div>
      {/* nav bar */}
      <div className="container">
        <TheNavbar />
      </div>
      <div className="container">
        <h3 className="text-center py-2 text-xl">Hello From Home</h3>
      </div>
    </div>
  );
};

export default Home;
