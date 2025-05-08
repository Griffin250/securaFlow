import React from 'react';

const Alerts = ({ alert }) => {
  const severityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-blue-100 text-blue-800'
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4">
        <div className="flex items-start">
          <div className={`flex-shrink-0 px-2 py-1 rounded-md text-xs font-medium ${severityColors[alert.severity]}`}>
            {alert.severity.toUpperCase()}
          </div>
          <div className="ml-3 flex-1">
            <h4 className="text-sm font-medium text-gray-900">{alert.title}</h4>
            <p className="mt-1 text-sm text-gray-500">{alert.description}</p>
            <div className="mt-2 flex items-center text-xs text-gray-500">
              <svg className="flex-shrink-0 mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {alert.time}
            </div>
          </div>
          <div className="ml-4 flex-shrink-0">
            <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
              Investigate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;