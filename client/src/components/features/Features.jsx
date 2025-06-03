import React from "react";
import { Link } from "react-router-dom";

export const Features = () => {
  return (
    <div className="bg-gray-100 py-12 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Features
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the powerful features of our invisible tracker.
          </p>
        </div>
        <div className="text-center mt-4">
          <Link
            to="/visitortracker"
            className="inline-block m-6  bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Start Tracking Now{" "}
          </Link>
          
             <Link
            to="/trackerDashboard"
            className="inline-block m-6  bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Tracker Dashboard{" "}
          </Link>
             <Link
            to="/createTrackers"
            className="inline-block m-6  bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Generate Image Logger{" "}
          </Link>
             <Link
            to="/trackerTest"
            className="inline-block m-6  bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Tracker Test{" "}
          </Link>
          
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">
              Real-time Tracking
            </h3>
            <p className="mt-2 text-gray-600">
              Monitor visitor activity in real-time with detailed logs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">
              Geolocation Data
            </h3>
            <p className="mt-2 text-gray-600">
              Get insights into visitor locations and demographics.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">
              Customizable Alerts
            </h3>
            <p className="mt-2 text-gray-600">
              Set up alerts for specific visitor actions or events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
