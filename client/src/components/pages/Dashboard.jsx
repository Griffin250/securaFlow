import React from "react";
import Alerts from "./Alerts";

const Dashboard = () => {
  const alerts = [
    {
      id: 1,
      title: "Unauthorized Access Attempt",
      severity: "high",
      time: "2 minutes ago",
      description: "Multiple failed login attempts detected from unknown IP",
    },
    {
      id: 2,
      title: "Database Anomaly",
      severity: "medium",
      time: "15 minutes ago",
      description: "Unusual query patterns detected in customer database",
    },
    {
      id: 3,
      title: "System Update Available",
      severity: "low",
      time: "1 hour ago",
      description: "New security patch available for installation",
    },
  ];

  const stats = [
    {
      name: "Total Threats Blocked",
      value: "1,248",
      change: "+12%",
      changeType: "positive",
    },
    {
      name: "Vulnerabilities Detected",
      value: "24",
      change: "-3%",
      changeType: "negative",
    },
    {
      name: "Active Users",
      value: "143",
      change: "+5%",
      changeType: "positive",
    },
    {
      name: "Security Score",
      value: "92/100",
      change: "+2%",
      changeType: "positive",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Security Dashboard
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">
              {stat.value}
            </p>
            <p
              className={`mt-1 text-sm ${stat.changeType === "positive" ? "text-green-600" : "text-red-600"}`}
            >
              {stat.change} from last week
            </p>
          </div>
        ))}
      </div>

      {/* Alerts Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">
            Recent Security Alerts
          </h3>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {alerts.map((alert) => (
            <Alerts key={alert.id} alert={alert} />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
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

export default Dashboard;
