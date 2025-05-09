import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationTriangle,
  faSearch,
  faFilter,
  faBell,
  faEye,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

const Alert = () => {
  const [alerts, setAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    severity: 'all',
    status: 'all',
    timeRange: '24h'
  });

  useEffect(() => {
    // Simulate API call
    const fetchAlerts = async () => {
      setIsLoading(true);
      try {
        setTimeout(() => {
          setAlerts([
            {
              id: 1,
              title: 'Multiple failed login attempts',
              source: '192.168.1.45',
              severity: 'high',
              status: 'new',
              timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString()
            },
            {
              id: 2,
              title: 'Unusual database query pattern',
              source: 'Internal',
              severity: 'medium',
              status: 'investigating',
              timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString()
            },
            {
              id: 3,
              title: 'New vulnerability detected',
              source: 'System Scan',
              severity: 'critical',
              status: 'resolved',
              timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString()
            }
          ]);
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error("Failed to load alerts:", error);
        setIsLoading(false);
      }
    };

    fetchAlerts();
  }, []);

  const handleMarkAsRead = (id) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, status: 'read' } : alert
    ));
  };

  const handleResolve = (id) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, status: 'resolved' } : alert
    ));
  };

  const filteredAlerts = alerts.filter(alert => {
    // Search filter
    const matchesSearch = alert.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         alert.source.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Severity filter
    const matchesSeverity = filters.severity === 'all' || 
                           alert.severity === filters.severity;
    
    // Status filter
    const matchesStatus = filters.status === 'all' || 
                         alert.status === filters.status;
    
    return matchesSearch && matchesSeverity && matchesStatus;
  });

  const severityColors = {
    critical: 'bg-red-100 text-red-800',
    high: 'bg-orange-100 text-orange-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-blue-100 text-blue-800'
  };

  const statusColors = {
    new: 'bg-purple-100 text-purple-800',
    investigating: 'bg-blue-100 text-blue-800',
    resolved: 'bg-green-100 text-green-800',
    read: 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="p-6 bg-white text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <FontAwesomeIcon icon={faExclamationTriangle} className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold">Security Alerts</h1>
        </div>

        {/* Filters and Search */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search alerts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full bg-white border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Severity</label>
            <select
              value={filters.severity}
              onChange={(e) => setFilters({...filters, severity: e.target.value})}
              className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Severities</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
              className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="investigating">Investigating</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>

        {/* Alerts List */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          {isLoading ? (
            <div className="p-6 space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-20 bg-gray-100 rounded-md animate-pulse"></div>
              ))}
            </div>
          ) : filteredAlerts.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              <FontAwesomeIcon icon={faBell} className="h-12 w-12 mx-auto text-gray-300 mb-4" />
              <p className="text-lg">No alerts match your filters</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {filteredAlerts.map((alert) => (
                <li key={alert.id} className="hover:bg-gray-50 transition-colors">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${severityColors[alert.severity]}`}>
                          {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[alert.status]}`}>
                          {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                        </span>
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {alert.title}
                        </p>
                      </div>
                      <div className="ml-2 flex-shrink-0 flex space-x-2">
                        {alert.status !== 'read' && (
                          <button
                            onClick={() => handleMarkAsRead(alert.id)}
                            className="text-sm text-blue-600 hover:text-blue-800"
                          >
                            <FontAwesomeIcon icon={faEye} className="h-4 w-4" />
                          </button>
                        )}
                        {alert.status !== 'resolved' && (
                          <button
                            onClick={() => handleResolve(alert.id)}
                            className="text-sm text-green-600 hover:text-green-800"
                          >
                            <FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          Source: {alert.source}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <p>
                          {new Date(alert.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>




              ))}
            </ul>
          )}
        </div>
        
      </div>


      
      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6 max-w-7xl mx-auto mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <svg
              className="w-8 h-8 text-blue-600 mb-2"
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
            <span className="text-sm font-medium">Access Review</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <svg
              className="w-8 h-8 text-green-600 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-sm font-medium">Run Scan</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <svg
              className="w-8 h-8 text-purple-600 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span className="text-sm font-medium">Generate Report</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <svg
              className="w-8 h-8 text-yellow-600 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span className="text-sm font-medium">System Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;