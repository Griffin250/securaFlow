import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <span className="text-2xl font-bold"><NavLink to="/" className="title"> Secura Flow</NavLink></span>
        </div>

        <div className="hidden md:flex space-x-6">
          <NavLink className="hover:text-blue-400" to="/">
            Home
          </NavLink>
          <NavLink className="hover:text-blue-400" to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className="hover:text-blue-400" to="/alerts">
            Alerts
          </NavLink>
          <NavLink className="hover:text-blue-400" to="/reports">
            Reports
          </NavLink>
          <NavLink className="hover:text-blue-400" to="/profileboard">
            Profile
          </NavLink>
          <NavLink className="hover:text-blue-400" to="/settings">
            Settings
          </NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-sm font-bold">TM</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
