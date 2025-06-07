import React from 'react';
import { Check } from 'lucide-react';

interface ProviderListProps {
  title?: string;
  providers?: string[];
  className?: string;
}

const defaultProviders = [
  'Post-acute Care Centers',
  'Surgical Centers',
  'Rehabilitation Facilities',
  'Physician Practices',
  'Behavioral Health Providers',
  'Home Health Providers',
  'Telehealth / Telemedicine',
  'Specialty Care Providers',
  'Ambulatory Care Centers',
  'Wellness Care'
];

const ProviderList: React.FC<ProviderListProps> = ({
  title = "Provider groups continue to grow in size, complexity, and attack surface. Fortified provides Advisory and Threat Defense Services to help you strengthen your cybersecurity posture and improve your resilience across multiple care sites. We have the experience and understanding to support:",
  providers = defaultProviders,
  className = ""
}) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 ${className}`}>
      <div className="mb-8 lg:mb-12">
        <p className="text-gray-700 text-xs sm:text-base leading-relaxed text-center">
          {title}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 lg:gap-x-[12%] lg:gap-y-3 gap-y-1">
        {providers.map((provider, index) => (
          <div className=' border-b border-[#C7C7C7] lg:pb-3 pb-1'>
            <div key={index} className="flex items-center relative pl-12 sm:pl-16">
              <div
                className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center rounded-full"
                style={{
                  width: 'clamp(20px, 1.8229166667vw, 35px)',
                  height: 'clamp(20px, 1.8229166667vw, 35px)',
                  backgroundColor: '#054479',
                  color: '#FFFFFF'
                }}
              >
                <Check
                  size="clamp(10px, 0.8333333333vw, 16px)"
                  className="text-white"
                  style={{
                    fontSize: 'clamp(10px, 0.8333333333vw, 16px)'
                  }}
                />
              </div>

              <span className="text-[#414141] text-sm sm:text-base leading-relaxed">
                {provider}
              </span>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default ProviderList;