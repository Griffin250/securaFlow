import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md">
        <h1 className="text-9xl font-bold text-blue-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-white transition-colors"
          >
            Return Home
          </Link>
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium text-white transition-colors"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
      
      <div className="mt-16 text-gray-500 text-sm">
        <p>If you believe this is an error, please contact our support team.</p>
      </div>
    </div>
  );
};

export default NotFound;