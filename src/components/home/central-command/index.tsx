import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export const CentralCommandSection: React.FC = () => {
  return (
    <section className="lg:pt-40 pt-15">
      <div className="lg:pl-[8%]">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:space-y-6 space-y-4 lg:ml-0 ml-[5%]"
          >
            <div className="text-[#2ea38f] font-extrabold text-lg">QORWYN CENTRAL COMMAND</div>
            <h2 className="text-4xl lg:text-5xl font-medium text-[#414141]">Cyber Made Simple</h2>
            <p className="text-[#414141] font-semibold text-sm lg:w-full max-w-[520px]">
              <p>Discover how Central Command can simplify the complexity of managing your Qorwyn cybersecurity services.</p>
              <p className='mt-5'>
                Central Command consolidates your cybersecurity program in one location, making it easier for you to manage risks, monitor threats, quickly respond to incidents, and work more efficiently.
              </p>

            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#054479] text-white lg:px-7 px-4 lg:py-[14px] py-3 rounded-xl lg:text-xs text-[10px] font-semibold hover:bg-[#032E52] transition-colors shadow-lg"
            >
              GET THE DETAILS
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative lg:mx-0 mx-[2%]"
          >
            <div className="relative overflow-hidden shadow-2xl">
              <video
                width="1920"
                height="1080"
                preload="metadata"
                controls
                id="video_68429f963ec64"
                className="w-full h-auto object-cover"
              >
                <source src="https://fortifiedhealthsecurity.com/wp-content/uploads/2024/01/Fortified-Central-Command-1080p-subs.mp4#t=0.001" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};