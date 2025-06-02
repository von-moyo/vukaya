import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(true);
  const containerVariants = {
    initial: { width: 80 },
    hover: { width: 240, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const textVariants = {
    initial: { opacity: 0, x: -20 },
    hover: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  };

  const iconVariants = {
    initial: { x: 0 },
    hover: { x: -10, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative w-full h-[60dvh] overflow-hidden">
      <div className="bg bg-desktop absolute inset-0">
        <div className="img-bg absolute inset-0">
          <img
            src="https://fortifiedhealthsecurity.com/wp-content/uploads/2024/01/FHC_Hero_V1cp.png"
            alt="Fortified Health Security Background"
            className="img-fluid w-full h-full object-cover object-center"
            style={{
              '--smush-placeholder-width': '1426px',
              '--smush-placeholder-aspect-ratio': '1426/802'
            } as React.CSSProperties & Record<string, any>}
          />
        </div>

        <video
          width="1920"
          height="1080"
          preload="none"
          muted
          autoPlay
          loop
          playsInline
          className="absolute right-0 top-0 w-full h-full object-cover"
          style={{
            objectPosition: 'top 50% right 18%'
          }}
        >
          <source
            src="https://fortifiedhealthsecurity.com/wp-content/uploads/2024/03/Security_V4cp_UpdatedVein.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto lg:px-6">
          <div className="flex items-center justify-between h-full">
            <div className="w-full lg:w-1/2 text-left">
              <motion.h1
                className="text-5xl lg:text-6xl xl:text-7xl text-white mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Your<br />
                Healthcare<br />
                Cybersecurity<br />
                <span className="text-[#2ea38f] font-bold">Partner</span>
              </motion.h1>

              <motion.p
                className="text-lg lg:text-sm text-gray-200 mb-8 leading-relaxed max-w-[clamp(240px,21vw,440px)]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Customized services that strengthen cybersecurity resiliency, protect patients, and defend against threats. Discover why{' '}
                <span className="text-[#2ea38f] font-semibold">Fortified Health Security</span>{' '}
                is the MSSP partner of choice for healthcare systems in the U.S. and across the globe.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <motion.button
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-xs cursor-pointer font-bold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Talk to an Expert
                </motion.button>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-5 pointer-events-none">
        <svg
          className="w-full h-full opacity-30"
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hexPattern" x="0" y="0" width="120" height="104" patternUnits="userSpaceOnUse">
              <path
                d="M60 2 L90 24 L90 56 L60 78 L30 56 L30 24 Z"
                stroke="rgba(45, 163, 143, 0.3)"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexPattern)" />
        </svg>
      </div>

      {/* Sticky Menu */}
      <div className="fixed right-0 top-1/2 z-30 transform -translate-y-1/2">
        <div className="flex flex-col space-y-1">
          {/* <motion.div
            className="relative overflow-hidden"
            initial={{ width: 80 }}
            whileHover={{ width: 320 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
              height: '60px'
            }}
          >
            <motion.a
              href="https://platform.fortified.io/login"
              className="absolute inset-0 bg-blue-600 hover:bg-blue-700 flex items-center px-4 transition-colors duration-300"
              style={{
                clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)'
              }}
            >
              <motion.span
                className="text-white font-medium text-sm mr-4"
                initial={{ opacity: 0, x: -20 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Fortified Central Command
              </motion.span>
              
              <motion.div
                className="ml-auto"
                initial={{ x: 0 }}
                whileHover={{ x: -10 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  <circle cx="12" cy="12" r="10" strokeWidth={2} fill="none" />
                </svg>
              </motion.div>
            </motion.a>
          </motion.div> */}

          {/* Security Incident */}

          <motion.div
            className="relative overflow-hidden flex"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ width: 80 }}
            animate={{ width: isHovered ? 180 : 80 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              height: "60px",
            }}
          >
            <div className='bg-orange-600 w-[30px] h-[30px] top-1/2 transform -translate-y-1/2 rotate-45 absolute ml-8'></div>
            <a
              href="https://fortifiedhealthsecurity.com/security-incident/"
              className="absolute inset-0 bg-orange-600 hover:bg-orange-700 flex items-center px-4 transition-colors duration-300"
            >
              <motion.div
                className="mr-4"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth={2} />
                  <path d="M9 9l6 6m0-6l-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </motion.div>
              <motion.span
                className="text-white font-medium text-sm mr-4 whitespace-nowrap"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : -20,
                }}
                transition={{ duration: 0.2 }}
              >
                Security Incident
              </motion.span>
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
};