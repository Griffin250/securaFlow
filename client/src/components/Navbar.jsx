import { faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() =>{
const handleScroll = () =>{
  if(window.scrollY > lastScrollY){
    setShowNavbar(false);
  } else 
  setShowNavbar(true);
  setLastScrollY(window.scrollY);
};
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
  },[lastScrollY])

  return (
    <nav className={`bg-gray-900 text-white fixed p-4 shadow-md w-full transition-transform z-50 duration-300 ${showNavbar ?  "translate-y-0" : "-translate-y-full"}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
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
          <span className="text-3xl font-bold">
            <NavLink to="/" className="title">
              SecuraFlow
            </NavLink>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLink className="hover:text-blue-400 font-bold" to="/" onClick={scrollToTop}>
            Home
          </NavLink>
          <NavLink className="hover:text-blue-400 font-bold" to="/dashboard" onClick={scrollToTop}>
            Dashboard
          </NavLink>
          <NavLink className="hover:text-blue-400 font-bold" to="/alerts" onClick={scrollToTop}>
            Alerts
          </NavLink>
          <NavLink className="hover:text-blue-400 font-bold" to="/reports" onClick={scrollToTop}>
            Reports
          </NavLink>
          <NavLink className="hover:text-blue-400 font-bold" to="/activitymap" onClick={scrollToTop}>
            Map
          </NavLink>
          <NavLink className="hover:text-blue-400 font-bold" to="/settings" onClick={scrollToTop}>
            Settings
          </NavLink>
          <NavLink className="hover:text-blue-400 font-bold" to="visitortracker" onClick={scrollToTop}>
            IP Logger
          </NavLink>
          <div className="flex space-x-4">
            <NavLink to="/login" className="cursor-pointer" onClick={scrollToTop}>
              <button className="px-4 py-2 text-sm cursor-pointer font-medium bg-gray-400 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out">
                Login
              </button>
            </NavLink>
            <NavLink to="/register" className="cursor-pointer" onClick={scrollToTop}>
              <button className="px-4 py-2 text-sm cursor-pointer font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transition duration-150 ease-in-out">
                Register
              </button>
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <FontAwesomeIcon 
              icon={isMobileMenuOpen ? faTimes : faBars} 
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Icons Section (Visible on all screens) */}
        <div className="hidden md:flex items-center space-x-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:bg-gray-500 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
          </label>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-sm font-bold">
              <FontAwesomeIcon icon={faUser} className="text-white text-xl" />
            </span>
          </div>
          <div className="relative">
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
            <NavLink to="/alerts" className="bell-icon">
              <svg
                className="w-7 h-7"
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
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 mt-4 rounded-lg p-4">
          <div className="flex flex-col space-y-4">
            <NavLink 
              className="hover:text-blue-400 font-bold py-2" 
              to="/"
              onClick={() => { toggleMobileMenu(); scrollToTop(); }}
            >
              Home
            </NavLink>
            <NavLink 
              className="hover:text-blue-400 font-bold py-2" 
              to="/dashboard"
              onClick={() => {toggleMobileMenu(); scrollToTop();}}
            >
              Dashboard
            </NavLink>
            <NavLink 
              className="hover:text-blue-400 font-bold py-2" 
              to="/alerts"
              onClick={() => {toggleMobileMenu(); scrollToTop();}}
            >
              Alerts
            </NavLink>
            <NavLink 
              className="hover:text-blue-400 font-bold py-2" 
              to="/reports"
              onClick={() => {toggleMobileMenu(); scrollToTop();}}
            >
              Reports
            </NavLink>
            <NavLink 
              className="hover:text-blue-400 font-bold py-2" 
              to="/activitymap"
              onClick={() => {toggleMobileMenu(); scrollToTop();}}
            >
              Map
            </NavLink>
            <NavLink 
              className="hover:text-blue-400 font-bold py-2" 
              to="/settings"
              onClick={() => {toggleMobileMenu(); scrollToTop();}}
            >
              Settings
            </NavLink>
            <NavLink 
              className="hover:text-blue-400 font-bold py-2" 
              to="visitortracker"
              onClick={() => {toggleMobileMenu(); scrollToTop();}}
            >
              IP Logger
            </NavLink>
            <div className="flex space-x-4 pt-2">
              <NavLink to="/login" className="w-full" onClick={() => {toggleMobileMenu(); scrollToTop();}}>
                <button className="w-full px-4 py-2 text-sm font-medium bg-gray-400 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register" className="w-full" onClick={() => {toggleMobileMenu(); scrollToTop();}}>
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transition duration-150 ease-in-out">
                  Register
                </button>
              </NavLink>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-700">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:bg-gray-500 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
              </label>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <FontAwesomeIcon icon={faUser} className="text-white text-xl" />
                </div>
                <div className="relative">
                  <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                  <NavLink to="/alerts" onClick={() => {toggleMobileMenu(); scrollToTop();}}>
                    <svg
                      className="w-7 h-7"
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
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;