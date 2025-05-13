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
        
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
