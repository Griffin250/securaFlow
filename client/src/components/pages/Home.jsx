import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-700 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-blue-500/20 p-3 rounded-lg">
              <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold mb-6">Secura Flow</h1>
          <p className="text-xl text-gray-300 mb-10">
            Advanced security monitoring and threat detection for modern applications
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/dashboard" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/features" 
              className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-16">Comprehensive Security Solutions</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
            <div className="bg-blue-500/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-time Threat Detection</h3>
            <p className="text-gray-400">
              Continuously monitor your systems for suspicious activities and potential threats with our advanced detection algorithms.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
            <div className="bg-blue-500/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Access Control</h3>
            <p className="text-gray-400">
              Granular permission management with role-based access control to ensure only authorized personnel can access sensitive data.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
            <div className="bg-blue-500/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Compliance Reporting</h3>
            <p className="text-gray-400">
              Automated reports for regulatory compliance including GDPR, HIPAA, and PCI-DSS requirements.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-16">How Secura Flow Works</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-blue-500/20 w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-blue-400">
                1
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3">Connect Your Systems</h3>
              <p className="text-gray-400">
                Integrate Secura Flow with your existing infrastructure through our simple API or supported plugins. 
                We support cloud, on-premise, and hybrid environments.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-blue-500/20 w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-blue-400">
                2
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3">Configure Security Policies</h3>
              <p className="text-gray-400">
                Set up your security parameters and thresholds. Our intuitive interface makes it easy to define what 
                constitutes normal behavior and what should trigger alerts.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-blue-500/20 w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-blue-400">
                3
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3">Monitor and Respond</h3>
              <p className="text-gray-400">
                Receive real-time alerts and detailed analytics. Our dashboard gives you complete visibility into 
                your security posture with actionable insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Applications?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Join hundreds of organizations that trust Secura Flow for their critical security needs.
          </p>
          <Link 
            to="/signup" 
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </div>

 
    </div>
  );
};

export default Home;