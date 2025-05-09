import React, { useEffect, useState } from "react";
import { ShieldExclamationIcon, EnvelopeIcon, UserIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

function ProfileDashboard({ keycloak }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const userProfile = await keycloak.loadUserProfile();
        setProfile(userProfile);
      } catch (err) {
        console.error("Failed to load profile:", err);
        setError("Failed to load user profile");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [keycloak]);

  const handleLogout = () => {
    keycloak.logout({ redirectUri: window.location.origin });
  };

  if (loading) {
    return (
      <div className="p-6 max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-8 bg-gray-700 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg text-red-400">
        <div className="flex items-center gap-2 mb-4">
          <ShieldExclamationIcon className="h-6 w-6" />
          <h2 className="text-xl font-bold">Profile Error</h2>
        </div>
        <p>{error}</p>
        <button
          onClick={handleLogout}
          className="mt-4 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          Return to Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg text-gray-100">
      <div className="flex items-center gap-2 mb-6">
        <ShieldExclamationIcon className="h-8 w-8 text-blue-400" />
        <h1 className="text-2xl font-bold text-white">SecuraFlow Profile</h1>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-md">
          <UserIcon className="h-5 w-5 text-blue-400" />
          <div>
            <p className="text-sm text-gray-400">Username</p>
            <p className="font-medium">{profile.username}</p>
          </div>
        </div>

        {profile.email && (
          <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-md">
            <EnvelopeIcon className="h-5 w-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium">{profile.email}</p>
            </div>
          </div>
        )}

        {profile.firstName && (
          <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-md">
            <UserIcon className="h-5 w-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-400">Name</p>
              <p className="font-medium">
                {profile.firstName} {profile.lastName}
              </p>
            </div>
          </div>
        )}

        <button
          onClick={handleLogout}
          className="w-full mt-6 flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default ProfileDashboard;