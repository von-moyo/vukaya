import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { HeroSection } from '../../components';
import Footer from '../../components/footer';
import HorizonReportSection from '../../components/home/horizon-report';
import Testimoninals from '../../components/home/testimonials';
import AdvisoryServices from '../../components/home/services';
import FortifiedStats from '../../components/home/impact-section';
import AwardsCarousel from '../../components/home/awards';
import MembershipsCarousel from '../../components/home/membership';
import CaseStudySlider from '../../components/home/case-study';


// Central Command Section Component
const CentralCommandSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-teal-600 font-semibold text-lg">FORTIFIED CENTRAL COMMAND</div>
            <h2 className="text-5xl font-bold text-gray-900">Cyber Made Simple</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover how Central Command can simplify the complexity of managing your Fortified cybersecurity services.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Central Command consolidates your cybersecurity program in one location, making it easier for you to manage risks, monitor threats, quickly respond to incidents, and work more efficiently.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              GET THE DETAILS
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                >
                  <Play className="w-8 h-8 text-gray-800 ml-1" />
                </motion.div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center justify-between text-white text-sm">
                  <span>0:08 / 1:46</span>
                  <div className="flex items-center space-x-2">
                    <button className="hover:text-teal-400 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Main Landing Page Component
const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      {/* <CaseStudySection /> */}
      <AwardsCarousel />
      <AdvisoryServices />
      <CentralCommandSection />
      <CaseStudySlider />
      <FortifiedStats />
      <HorizonReportSection />
      <MembershipsCarousel />
      <Testimoninals />
      <Footer />
    </div>
  );
};

export default Home;