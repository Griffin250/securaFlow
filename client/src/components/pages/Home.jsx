import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faUserLock,
  faFileAlt,
  faChartLine,
  faServer,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto  bg-gray-50 shadow-lg rounded-xl p-8 border border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10">
          <div className="flex justify-center mb-8">
            <div className="bg-blue-100 p-4 rounded-full border border-blue-200">
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="w-12 h-12 text-blue-600"
              />
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-6 text-gray-900">SecuraFlow</h1>
          <p className="text-xl text-gray-600 mb-10">
            Advanced security monitoring and threat detection for modern
            applications
          </p>
          <p className="text-xl text-gray-600 mb-6">
            Enterprise-Grade Security Intelligence Platform
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Secura Flow provides comprehensive protection for your digital
            assets with real-time threat detection, automated compliance
            reporting, and intelligent access controls. Our AI-powered platform
            gives security teams complete visibility across cloud, on-premise,
            and hybrid environments.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/dashboard"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-blue-500/20"
            >
              Get Started
            </Link>
            <Link
              to="/features"
              className="px-8 py-3 bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 rounded-lg font-medium transition-colors shadow-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="md:text-3xl text-xl font-bold text-center mb-16">
          <span className="border-b-2 border-blue-500 pb-2">
            Comprehensive Security Solutions
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: faChartLine,
              title: "Real-time Threat Detection",
              description:
                "Continuously monitor your systems for suspicious activities and potential threats with our advanced detection algorithms.",
            },
            {
              icon: faUserLock,
              title: "Access Control",
              description:
                "Granular permission management with role-based access control to ensure only authorized personnel can access sensitive data.",
            },
            {
              icon: faFileAlt,
              title: "Compliance Reporting",
              description:
                "Automated reports for regulatory compliance including GDPR, HIPAA, and PCI-DSS requirements.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="w-6 h-6 text-blue-600"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="border-b-2 border-blue-500 pb-2">
              How Secura Flow Works
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "1",
                icon: faServer,
                title: "Connect Your Systems",
                description:
                  "Integrate Secura Flow with your existing infrastructure through our simple API or supported plugins. We support cloud, on-premise, and hybrid environments.",
              },
              {
                step: "2",
                icon: faCogs,
                title: "Configure Security Policies",
                description:
                  "Set up your security parameters and thresholds. Our intuitive interface makes it easy to define what constitutes normal behavior and what should trigger alerts.",
              },
              {
                step: "3",
                icon: faShieldAlt,
                title: "Monitor and Respond",
                description:
                  "Receive real-time alerts and detailed analytics. Our dashboard gives you complete visibility into your security posture with actionable insights.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 mb-12 items-center"
              >
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 border-2 border-blue-200">
                    <FontAwesomeIcon icon={step.icon} className="w-8 h-8" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-16 bg-white">
        <h2 className="md:text-3xl text-xl font-bold text-center mb-16">
          <span className="border-b-2 border-blue-500 pb-2">
            Trusted by Security Teams
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "24/7", label: "Monitoring" },
            { value: "99.9%", label: "Uptime" },
            { value: "500+", label: "Protected Systems" },
            { value: "50ms", label: "Alert Response" },
          ].map((stat, index) => (
            <div key={index} className="p-6">
              <p className="text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Secure Your Applications?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join hundreds of organizations that trust Secura Flow for their
            critical security needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-blue-500/20"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="px-8 py-3 bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 rounded-lg font-medium transition-colors shadow-sm"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
