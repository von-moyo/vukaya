import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { HeroSection } from '../../components';
import Footer from '../../components/footer';
import HorizonReportSection from '../../components/home/horizon-report';
import Testimoninals from '../../components/home/testimonials';

// Case Study Section Component
const CaseStudySection: React.FC = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref);

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-700 mb-2">Citizens</div>
                    <div className="text-xl text-gray-500">Medical Center</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
            }}
            className="space-y-6"
          >
            <div className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold"
              >
                Case Study
              </motion.div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Citizens Medical Center faced a 75% increase in annual cyber insurance premiums
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              After partnering with Fortified to augment their cybersecurity program with Managed SIEM, Managed EDR, and Managed Connected Medical Device services, they were able to meet the requirements for the new cybersecurity coverage without any increase in premiums.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 hover:bg-blue-700 transition-colors shadow-lg"
            >
              <span>READ MORE</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Awards Section Component
const AwardsSection: React.FC = () => {
  const awards = [
    { year: '2022', type: 'KLAS' },
    { year: '2023', type: 'KLAS' },
    { year: '2024', type: 'KLAS' },
    { year: '2025', type: 'KLAS' },
    { type: 'Practices Award' },
    { type: 'MedTech Breakthrough' },
    { type: 'MedTech Breakthrough' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Awarded for Excellence</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
            >
              <div className="text-center">
                <div className="text-white font-bold text-sm">{award.type}</div>
                {award.year && <div className="text-white text-xs">{award.year}</div>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Advisory Services */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-500"></div>
            <div className="relative h-full p-12 flex flex-col justify-center text-white">
              <h3 className="text-4xl font-bold mb-4">Advisory Services</h3>
              <p className="text-lg mb-8 opacity-90">
                Healthcare-specific expertise to help you enhance cybersecurity and protect patient data.
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-white font-semibold"
              >
                <span>EXPLORE ALL</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Threat Defense */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-96 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700"></div>
            <div className="relative h-full p-12 flex flex-col justify-center text-white">
              <h3 className="text-4xl font-bold mb-4">Threat Defense</h3>
              <p className="text-lg mb-8 opacity-90">
                24/7 cybersecurity to safeguard your healthcare organization, day and night.
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-white font-semibold"
              >
                <span>EXPLORE ALL</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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

// Stats Section Component
const StatsSection: React.FC = () => {
  const stats = [
    { number: '98%', label: 'Threat Defense client retention' },
    { number: '24/7', label: 'Monitoring & Response' },
    { number: '500+', label: 'Healthcare Organizations Protected' },
    { number: '15+', label: 'Years of Healthcare Focus' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-teal-200 font-semibold text-lg mb-4">FORTIFIED BY THE NUMBERS</div>
          <h2 className="text-5xl font-bold text-white">Our Impact</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-4">{stat.number}</div>
              <div className="text-teal-100 text-lg">{stat.label}</div>
            </motion.div>
          ))}
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
      <CaseStudySection />
      <AwardsSection />
      <ServicesSection />
      <CentralCommandSection />
      <StatsSection />
      <HorizonReportSection/>
      <Testimoninals/>
      <Footer/>
    </div>
  );
};

export default Home;