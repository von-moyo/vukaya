import React from 'react';
import { Hexagon } from '../../hexagon';

const AdvisoryServices: React.FC = () => {
  const tealServices = [
    'Virtual CISO Services',
    'Security Risk Assessment Services',
    'Third-Party Risk Management',
    'Incident Response Services',
    'Advanced Penetration Testing & Red Team Services',
    'Managed Security Awareness Training Program',
    'Expertise on Demand'
  ];

  const blueServices = [
    'Managed XDR',
    'Managed Endpoint Detection & Response',
    'Managed SIEM',
    'Emergency Response',
    'Managed Connected Medical Device Security',
    'Attack Surface Monitoring',
    'Vulnerability Threat Management',
    'Managed Phishing Services'
  ];
  return (
    <div className="">
      <div className="grid grid-cols-2">
        <div>
          <div className="relative w-full lg:h-full flex items-center bg-cover bg-center" style={{
            backgroundImage: `linear-gradient(to right, #2ea38f 0%, #2a9684 15%, rgba(34, 119, 105, 0.65) 50%, rgba(184, 209, 205, 0.1) 85%, rgba(248, 248, 248, 0.1) 100%), url('https://fortifiedhealthsecurity.com/wp-content/uploads/2023/12/AdobeStock_470778397-1024x683.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <div className="absolute inset-0 z-30"></div>
            <div className="flex flex-col justify-center pl-28 text-white">
              <h2 className="text-5xl font-bold">
                Advisory
              </h2>
              <p className='text-4xl font-light mb-8'>Services</p>
              <p className="mb-6 w-[80%]">
                Healthcare-specific expertise to help you enhance cybersecurity and protect patient
                data.
              </p>
              <a
                href="/services/?tab=services-tab-1"
                className="flex items-center text-white font-semibold text-xs hover:underline"
              >
                EXPLORE ALL →
              </a>
            </div>
          </div>
        </div>
        <div className="relative h-[468px]">
          <div className="relative h-full">
            <div className="h-full">
              <div className="relative w-full lg:h-full flex items-center bg-cover bg-center" style={{
                backgroundImage: `linear-gradient(to right, #1c4375 0%, #1c4375 15%, rgba(28, 67, 117, 0.65) 50%, rgba(173, 185, 200, 0.1) 85%, rgba(235, 235, 235, 0.1) 100%), url('	https://fortifiedhealthsecurity.com/wp-content/uploads/2023/10/AdobeStock_570692595-1024x585.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <div className="absolute inset-0 z-30"></div>
                <div className="flex flex-col justify-center pl-28 text-white">
                  <h2 className="text-5xl font-bold">
                    Threat
                  </h2>
                  <p className='text-4xl font-light mb-8'>Defense</p>
                  <p className="mb-6 w-[85%]">
                    24/7 cybersecurity to safeguard your healthcare organization, day and night.
                  </p>
                  <a
                    href="/services/?tab=services-tab-1"
                    className="flex items-center text-white font-semibold text-xs hover:underline"
                  >
                    EXPLORE ALL →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pb-20 shadow-lg z-[99]"
        style={{
          backgroundImage: `url('https://fortifiedhealthsecurity.com/wp-content/themes/fortifiedhealthsecurity/assets/images/pattern-hd.png')`,
          backgroundPosition: 'center -100px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          boxShadow: 'inset 0 40px 30px -30px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className='grid grid-cols-2 -mt-14'>
          <div>
            <div className="flex flex-wrap items-center max-w-4xl">
              {tealServices.slice(0, 4).map((service, index) => (
                <div key={index} className="col-span-1 flex justify-center">
                  <Hexagon
                    subpage={{label: service, href: ''}} service={{hexColor: 'green'}}
                  />
                </div>
              ))}
            </div>
            <div className='flex flex-wrap items-center ml-15 -mt-6'>
              {tealServices.slice(4).map((service, index) => (
                <div key={index + 4} className="col-span-1 flex justify-center">
                  <Hexagon
                    subpage={{label: service, href: ''}} service={{hexColor: 'green'}}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap items-center max-w-4xl">
              {blueServices.slice(0, 4).map((service, index) => (
                <div key={index} className="col-span-1 flex justify-center">
                  <Hexagon
                    subpage={{label: service, href: ''}} service={{hexColor: 'blue'}}
                  />
                </div>
              ))}
            </div>
            <div className='flex flex-wrap items-center ml-15 -mt-6'>
              {blueServices.slice(4).map((service, index) => (
                <div key={index + 4} className="col-span-1 flex justify-center">
                  <Hexagon
                    subpage={{label: service, href: ''}} service={{hexColor: 'blue'}}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>


      </section>
    </div >
  );
};

export default AdvisoryServices;