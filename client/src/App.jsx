import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import NotFound from "./components/pages/NotFound";
import Sidebar from "./components/Sidebar";
import Reports from "./components/pages/Reports";
import Alert from "./components/pages/Alert";
import Settings from "./components/pages/Settings";
import VisitorTracker from "./components/pages/VisitorTracker";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

import ActivityMap from "./components/pages/ActivityMap";
import Companies from "./components/Companies";
import { Features } from "./components/features/Features";
import TrackerDashboard from "./components/layouts/TrackerDashboard";

import CreateTracker from "./components/layouts/CreateTracker";
import { TrackerTest } from "./components/layouts/TrackerTest";
const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/alerts" element={<Alert />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/visitortracker" element={<VisitorTracker />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/activitymap" element={<ActivityMap />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/features" element={<Features />} />
        <Route path="/trackerDashboard" element={<TrackerDashboard trackerId="6659a8123b0f42a21c94e1c8"/>} />
        <Route path="/createTrackers" element={<CreateTracker />} />
        <Route path="/trackerTest" element={<TrackerTest />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
