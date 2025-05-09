import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserShield,
  faBell,
  faLock,
  faShieldAlt,
  faSave,
  faUndo
} from '@fortawesome/free-solid-svg-icons';

const Settings = ({ keycloak }) => {
  const [settings, setSettings] = useState({
    twoFactorAuth: true,
    notificationLevel: 'high',
    sessionTimeout: 30,
    dataRetention: 90,
    darkMode: false
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      alert('Settings saved successfully!');
    }, 1000);
  };

  const handleReset = () => {
    if (window.confirm('Reset all settings to default?')) {
      setSettings({
        twoFactorAuth: true,
        notificationLevel: 'high',
        sessionTimeout: 30,
        dataRetention: 90,
        darkMode: false
      });
    }
  };

  return (
    <div className="p-6 bg-white text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <FontAwesomeIcon icon={faUserShield} className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold">Security Settings</h1>
        </div>

        {/* Settings Sections */}
        <div className="space-y-8">
          {/* Authentication Section */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 text-gray-800">
              <FontAwesomeIcon icon={faLock} className="h-5 w-5 text-blue-600" />
              Authentication
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="twoFactorAuth" className="block text-sm font-medium text-gray-700">
                    Two-Factor Authentication
                  </label>
                  <p className="text-sm text-gray-500">Extra layer of security for your account</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="twoFactorAuth"
                    name="twoFactorAuth"
                    checked={settings.twoFactorAuth}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div>
                <label htmlFor="sessionTimeout" className="block text-sm font-medium text-gray-700 mb-1">
                  Session Timeout
                </label>
                <select
                  id="sessionTimeout"
                  name="sessionTimeout"
                  value={settings.sessionTimeout}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="120">2 hours</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 text-gray-800">
              <FontAwesomeIcon icon={faBell} className="h-5 w-5 text-blue-600" />
              Notifications
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notification Level
                </label>
                <div className="space-y-2">
                  {['high', 'medium', 'low'].map((level) => (
                    <div key={level} className="flex items-center">
                      <input
                        id={`notification-${level}`}
                        name="notificationLevel"
                        type="radio"
                        value={level}
                        checked={settings.notificationLevel === level}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label htmlFor={`notification-${level}`} className="ml-2 block text-sm text-gray-700 capitalize">
                        {level} ({(level === 'high' && 'All alerts') || 
                                 (level === 'medium' && 'Critical only') || 
                                 (level === 'low' && 'System alerts only')})
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Data Retention Section */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 text-gray-800">
              <FontAwesomeIcon icon={faShieldAlt} className="h-5 w-5 text-blue-600" />
              Data & Privacy
            </h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="dataRetention" className="block text-sm font-medium text-gray-700 mb-1">
                  Log Retention Period
                </label>
                <select
                  id="dataRetention"
                  name="dataRetention"
                  value={settings.dataRetention}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="30">30 days</option>
                  <option value="60">60 days</option>
                  <option value="90">90 days</option>
                  <option value="180">6 months</option>
                  <option value="365">1 year</option>
                </select>
                <p className="text-sm text-gray-500 mt-1">How long we keep your security logs</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition-colors shadow-sm"
            >
              <FontAwesomeIcon icon={faUndo} className="h-4 w-4" />
              Reset Defaults
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors shadow-sm disabled:opacity-70"
            >
              <FontAwesomeIcon icon={faSave} className="h-4 w-4" />
              {isSaving ? 'Saving...' : 'Save Settings'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;