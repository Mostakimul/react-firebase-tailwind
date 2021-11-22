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
        <h3>Hello From Home</h3>
      </div>
    </div>
  );
};

export default Home;
