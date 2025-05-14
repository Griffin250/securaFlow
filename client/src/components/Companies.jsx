import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import securaFlowLogo from '../assets/logo/securaflow.png'; 

const Companies = () => {

  const companies = [
    { name: 'TechSecure', logo: securaFlowLogo },
    { name: 'CyberGuard', logo: securaFlowLogo },
    { name: 'DataShield', logo: securaFlowLogo},
    { name: 'SafeNet', logo: securaFlowLogo },
    { name: 'Fortress', logo: securaFlowLogo},
    { name: 'SecurePlus', logo: securaFlowLogo},
    { name: 'Vault', logo: securaFlowLogo },
    { name: 'DefendX', logo: securaFlowLogo},
  ];

  // Duplicate the array for seamless looping
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon 
              icon={faShieldAlt} 
              className="w-10 h-10 text-blue-600 bg-blue-100 p-2 rounded-full" 
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Security Leaders Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Secura Flow protects critical infrastructure for enterprises across finance, healthcare, 
            and government sectors. Our clients trust us to safeguard their most sensitive data 
            against evolving threats.
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
                  <div className="w-32 h-32 bg-white rounded-xl cursor-pointer shadow-sm p-4 flex items-center justify-center 
                                 transition-all duration-300 group-hover:shadow-md group-hover:border-blue-500 group-hover:border-2">
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="h-16 object-contain grayscale-75 group-hover:grayscale-25 transition-all duration-300"
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