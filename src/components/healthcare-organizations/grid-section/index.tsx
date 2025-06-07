import React from 'react';
import { motion } from 'framer-motion';
import type { CardData } from '../../../constants/who-we-serve';

interface FortifiedTrustProps {
  title?: string;
  cards: CardData[];
}

export const FortifiedTrust: React.FC<FortifiedTrustProps> = ({
  title = "Hospitals and Health Systems Trust Fortified",
  cards
}) => {
  return (
    <motion.div
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:pb-12 pb-0 sm:py-12 lg:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15
          }
        }
      }}
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[55px] text-center mb-8 sm:mb-12 lg:mb-16 text-[#2ea38f]">
        {title}
      </h1>
      <div className="lg:mx-[6%] mx-[1.5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-11 lg:gap-14">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative h-full min-h-[250px] md:min-h-[350px] lg:min-h-[400px]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
            }}
            style={{
              background: 'linear-gradient(to bottom, #054479, #03223d)',
              borderRadius: 'clamp(10px, 1.0416666667vw, 20px)',
              padding: 'clamp(50px, 5.2083333333vw, 100px) clamp(35px, 3.6458333333vw, 70px)',
            }}
          >
            <div className="text-white h-full flex flex-col">
              <h2 className="text-3xl md:text-2xl lg:text-[27px] xl:text-3xl font-[900] mb-4 sm:mb-6 leading-[1]">
                {card.title}
              </h2>
              <div className="text-sm sm:text-[15px] leading-relaxed flex-grow">
                <p dangerouslySetInnerHTML={{ __html: card.content }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};