import React from "react";
import Lottie from "lottie-react";
import LockAnimation from "../../src/components/ui/LockAnimation.json";
import CyberGuard from "../assets/companies/cyberguard.png";
import DataShield from "../assets/companies/DataShield.png";
import SafeNet from "../assets/companies/safeNet.png";
import Fortress from "../assets/companies/fortress.png";
import Vault from "../assets/companies/vault.png";
import DefendX from "../assets/companies/Defendx.png";
const Companies = () => {
  const companies = [
    { name: "CyberGuard", logo: CyberGuard },
    { name: "DataShield", logo: DataShield },
    { name: "SafeNet", logo: SafeNet },
    { name: "Fortress", logo: Fortress },
    { name: "Vault", logo: Vault },
    { name: "DefendX", logo: DefendX },
  ];

  // Duplicate the array for seamless looping
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Lottie
              animationData={LockAnimation}
              loop={true}
              className="w-16 h-16 mr-4"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Security Leaders Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Secura Flow protects critical infrastructure for enterprises across
            finance, healthcare, and government sectors. Our clients trust us to
            safeguard their most sensitive data against evolving threats.
          </p>
        </div>

        {/* Infinite scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          <div className="flex items-center">
            <div className="animate-infinite-scroll whitespace-nowrap">
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="inline-flex flex-col items-center mx-8 group"
                >
                  <div
                    className="w-28 h-28 bg-white rounded-xl cursor-pointer shadow-sm p-2 flex items-center justify-center
                                 transition-all duration-300 group-hover:shadow-md group-hover:border-t-blue-500 group-hover:border-b-blue-500 group-hover:border-b-2 group-hover:border-t-2"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-16 object-contain grayscale-50 group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <span className="mt-3 text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          display: inline-block;
          animation: scroll 30s linear infinite;
          white-space: nowrap;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Companies;
