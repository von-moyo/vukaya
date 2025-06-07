import React from "react";
import { motion } from 'framer-motion';

interface SubSectionProps {
  image: string;
  paragraphs: string[];
  paragraphClassName?: string;
  containerClassName?: string;
  subTextContainerClassName?: string;
  textContainerClassName?: string;
}

export default function SubSection({
  image,
  paragraphs,
  paragraphClassName = "text-sm xl:text-base text-[#414141]",
  containerClassName = "relative grid grid-cols-1 lg:grid-cols-[3.1fr_3fr] gap-4 items-center py-16 sm:py-20 px-[35px] lg:px-[84px]",
  textContainerClassName = "space-y-6 text-left text-white font-light",
  subTextContainerClassName = 'space-y-6 my-auto',
}: SubSectionProps) {
  return (
    <motion.section
      className={containerClassName}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      <motion.img
        src={image}
        alt=""
        className="lg:px-7"
        variants={{
          hidden: { opacity: 0, y: 70 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      />
      <motion.div
        className={textContainerClassName}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      >
        <div className={subTextContainerClassName}>
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              className={paragraphClassName}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}