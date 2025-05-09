import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { 
  faFileAlt,
  faCalendarAlt,
  faChartBar,
  faDownload,
  faClock
} from '@fortawesome/free-solid-svg-icons';

const Reports = ({ keycloak }) => {
  // State for report data and filters
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7d');
  const [reportType, setReportType] = useState('threats');
  const [exportFormat, setExportFormat] = useState('pdf');

  // Sample threat data - replace with API calls
  const threatData = [
    { name: 'Brute Force', count: 42, severity: 'High' },
    { name: 'Malware', count: 18, severity: 'Critical' },
    { name: 'Phishing', count: 35, severity: 'Medium' },
    { name: 'DDoS', count: 8, severity: 'High' },
    { name: 'Insider', count: 5, severity: 'Low' },
  ];

  // Simulate API call
  useEffect(() => {
    const fetchReports = async () => {
      setIsLoading(true);
      try {
        setTimeout(() => {
          setReports([
            { id: 1, name: 'Threat Analysis', date: '2023-06-15', generatedBy: keycloak.tokenParsed?.preferred_username },
            { id: 2, name: 'Access Logs', date: '2023-06-10', generatedBy: 'system' },
          ]);
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error("Failed to load reports:", error);
        setIsLoading(false);
      }
    };

    fetchReports();
  }, [timeRange, reportType, keycloak]);

  // Export handler
  const handleExport = () => {
    alert(`Exporting ${reportType} report as ${exportFormat.toUpperCase()}`);
  };

  return (
    <div className="p-6 bg-white text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <FontAwesomeIcon icon={faFileAlt} className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold">Security Reports</h1>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Time Range</label>
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Report Type</label>
            <select 
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="threats">Threat Analysis</option>
              <option value="access">Access Logs</option>
              <option value="system">System Events</option>
              <option value="compliance">Compliance</option>
            </select>
          </div>

          <div className="flex items-end gap-2">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1 text-gray-700">Export As</label>
              <select 
                value={exportFormat}
                onChange={(e) => setExportFormat(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="pdf">PDF</option>
                <option value="csv">CSV</option>
                <option value="json">JSON</option>
              </select>
            </div>
            <button 
              onClick={handleExport}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors shadow-sm hover:shadow-md"
            >
              <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
              Export
            </button>
          </div>
        </div>

        {/* Report Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Threat Visualization */}
          <div className="lg:col-span-2 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 text-gray-800">
              <FontAwesomeIcon icon={faChartBar} className="h-5 w-5 text-green-600" />
              Threat Distribution
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={threatData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#4b5563" />
                  <YAxis stroke="#4b5563" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white',
                      borderColor: '#e5e7eb',
                      color: '#111827',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Legend />
                  <Bar 
                    dataKey="count" 
                    fill="#3B82F6" 
                    name="Occurrences"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Reports */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 text-gray-800">
              <FontAwesomeIcon icon={faClock} className="h-5 w-5 text-yellow-600" />
              Recent Reports
            </h2>
            {isLoading ? (
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-16 bg-gray-100 rounded-md animate-pulse"></div>
                ))}
              </div>
            ) : (
              <ul className="space-y-3">
                {reports.map((report) => (
                  <li key={report.id} className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors border border-gray-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-800">{report.name}</h3>
                        <p className="text-sm text-gray-500">{report.date}</p>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {report.generatedBy}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Full Report Table */}
        <div className="mt-8 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Event</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Source IP</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Severity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Timestamp</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[...Array(5)].map((_, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {['Brute Force', 'Malware Detected', 'Unauthorized Access', 'Policy Violation', 'System Anomaly'][i]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    192.168.{i}.{Math.floor(Math.random() * 255)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      ['bg-red-100 text-red-800', 'bg-yellow-100 text-yellow-800', 
                       'bg-red-100 text-red-800', 'bg-blue-100 text-blue-800', 
                       'bg-green-100 text-green-800'][i]
                    }`}>
                      {['Critical', 'Medium', 'Critical', 'Low', 'Info'][i]}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {new Date(Date.now() - i * 3600000).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;