import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import TopNavbar from '../components/dashboard/TopNavbar';
const AdminDashboard = () => {
  return (
    <div className="grid grid-flow-col grid-cols-12 gap-2 min-h-screen">
      {/* side bar div for desktop */}
      <div className="col-span-3 m-5 p-5 text-center rounded-lg shadow-lg bg-gray-800 hidden md:block">
        <nav className="space-y-3">
          <NavLink to="/dashboard" className="dash-side-nav">
            Dashboard
          </NavLink>
          <NavLink to="/dashboard/all-users" className="dash-side-nav">
            Users
          </NavLink>
          <NavLink to="/dashboard/all-orders" className="dash-side-nav">
            Orders
          </NavLink>
        </nav>
      </div>
      {/* content page */}
      <div className="col-span-full md:col-start-4 md:col-end-13 b m-3">
        {/* mobile Menu */}
        <TopNavbar />
        {/* content section */}
        <div className="dash-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
