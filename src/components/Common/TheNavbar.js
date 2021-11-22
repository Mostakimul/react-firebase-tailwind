import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const TheNavbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const handleNav = () => {
    setIsNavShowing(!isNavShowing);
  };
  // For controling window size
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isNavShowing) {
        setIsNavShowing(false);
      }
    };
    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  }, [isNavShowing]);

  return (
    <div className="bg-gray-800 flex justify-between items-center p-2 mt-2 rounded-lg">
      {/* logo */}
      <div>
        <NavLink to="/" className="text-lg font-semibold font-jos">
          MK LOGO
        </NavLink>
      </div>
      {/* mobile humberger icon */}
      <div onClick={handleNav} className="md:hidden">
        {isNavShowing ? (
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </div>
      {/* mobile nav NavLinks */}
      <nav
        className={`md:hidden absolute top-0 left-0 bg-gray-800 text-white h-screen w-2/4 rounded-r-lg shadow text-center space-y-3 pt-5 transition duration-150 transform ${
          isNavShowing ? '-translate-x-0' : '-translate-x-full'
        }`}>
        <NavLink
          className={({ isActive }) => (isActive ? 'mobile-nav-active' : 'mobile-nav')}
          to="/">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'mobile-nav-active' : 'mobile-nav')}
          to="/login">
          Sign in
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'mobile-nav-active' : 'mobile-nav')}
          to="/register">
          Sign up
        </NavLink>
      </nav>

      {/* nav NavLink desktop */}
      <nav className="space-x-3 hidden md:flex md:items-center">
        <NavLink className={({ isActive }) => (isActive ? 'desk-nav-active' : 'desk-nav')} to="/">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'desk-nav-active' : 'desk-nav')}
          to="/login">
          Sign in
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'desk-nav-active' : 'desk-nav')}
          to="/register">
          Sign up
        </NavLink>
      </nav>
    </div>
  );
};

export default TheNavbar;
