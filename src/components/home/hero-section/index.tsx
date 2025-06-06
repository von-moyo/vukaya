import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StickyMenu } from '../sticky-menu';

export const HeroSection = () => {
  return (
    <section className="relative w-full sm:h-[60dvh] h-auto sm:pb-0 pb-[250px] overflow-hidden">
      <div className="bg bg-desktop absolute inset-0">
        <div className="img-bg absolute inset-0">
          <img
            src="https://fortifiedhealthsecurity.com/wp-content/uploads/2024/01/FHC_Hero_V1cp.png"
            alt="Qorwyn Health Security Background"
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
          className="absolute right-0 sm:top-0 top-[35%] w-full sm:h-full h-[65%] object-cover"
          style={{
            objectPosition: 'top 50% right 18%'
          }}
        >
          <source
            src="https://fortifiedhealthsecurity.com/wp-content/uploads/2024/03/Security_V4cp_UpdatedVein.mp4"
            type="video/mp4"
          />
        </video>
        <style jsx>{`
          @media (max-width: 640px) {
            .bg:before {
              content: "";
              width: 530%;
              left: 0;
              bottom: 100%;
              position: absolute;
              z-index: 2;
              transform: rotate(0);
              background: radial-gradient(circle, #03182a 0%, #03182b 100%);
              box-shadow: 0px 250px 20px 7px #021729;
              height: 300px;
            }
          }
        `}</style>
      </div>

      <div className="relative z-10 flex sm:items-center h-full">
        <div className="container mx-auto lg:px-6">
          <div className="flex sm:flex-row sm:items-center justify-between h-full sm:ml-0 ml-8 sm:mt-0 mt-8">
            <div className="w-full lg:w-1/2 text-left">
              <motion.h1
                className="sm:text-5xl  text-4xl lg:text-6xl xl:text-7xl text-white sm:mb-8 mb-6 max-w-[50%]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Your
                Healthcare
                Cybersecurity<br />
                <span className="text-[#2ea38f] font-bold">Partner</span>
              </motion.h1>

              <motion.p
                className="text-xs sm:text-sm lg:text-base text-gray-200 mb-8 leading-relaxed sm:max-w-[55%] max-w-[75%]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Customized services that strengthen cybersecurity resiliency, protect patients, and defend against threats. Discover why{' '}
                <span className="text-[#2ea38f] font-semibold">Qorwyn Health Security</span>{' '}
                is the MSSP partner of choice for healthcare systems in the U.S. and across the globe.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <motion.button
                  className="bg-[#BE4623] hover:bg-[#95381D] text-white px-4 py-3 rounded-[5px]  text-[10px] sm:text-xs cursor-pointer font-bold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
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

      <StickyMenu />
    </section>
  );
};