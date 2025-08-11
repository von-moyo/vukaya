import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Banner1, Banner2 } from '../../../assets';

interface HeroSlide {
  id: number;
  subheading: string;
  heading: string;
  buttonText: string;
  image: string;
  gradient: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    subheading: "AI Trained on over 2000 strains",
    heading: "CRAFTED FROM STRAIN EFFECTS",
    buttonText: "ORDER NOW",
    image: Banner1,
    gradient: "from-red-500/80 to-pink-600/80"
  },
  {
    id: 2,
    subheading: "Soundscapes Tailored to Your Mood, Your Mind, Your Strain.",
    heading: "FEEL THE FREQUENCY OF WELLESS",
    buttonText: "TAKE 5% OFF",
    image: Banner2,
    gradient: "from-blue-500/80 to-purple-600/80"
  },
  {
    id: 3,
    subheading: "Expertly Curated Selection",
    heading: "HAND PICKED CANNABIS PRODUCTS",
    buttonText: "EXPLORE",
    image: Banner1,
    gradient: "from-green-500/80 to-teal-600/80"
  }
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  const currentSlideData = heroSlides[currentSlide];

  return (
    <div className="relative h-[51.5vw] overflow-hidden bg-gray-900">
      <motion.div
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${currentSlideData.image})`,
          }}
        />
        <div className={`absolute inset-0 ${currentSlideData.gradient} transition-all duration-1000 ease-in-out`} />
      </motion.div>

      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-6 bottom-6 z-[999] p-3 rounded-full border border-[#80808033] transition-all duration-300 cursor-pointer hover:bg-red-500 hover:p-5 hover:bottom-4"
      >
        <ArrowLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute left-24 bottom-6 z-[999] p-3 rounded-full border border-[#80808033] transition-all duration-300 cursor-pointer hover:bg-red-500 hover:p-5 hover:bottom-4"
      >
        <ArrowRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <div className="relative z-10 h-full flex items-center px-[5%]">
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full cursor-grab active:cursor-grabbing"
              drag="x"
              dragElastic={0.1}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x < -50 || velocity.x < -50) {
                  nextSlide();
                } else if (offset.x > 50 || velocity.x > 50) {
                  prevSlide();
                }
              }}
            >
              <div className={`space-y-8 w-[41.67%] ${currentSlide === 2 && 'ml-auto'}`}>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2
                  }}
                  className="text-white/90 text-lg md:text-2xl font-extralight font italic"
                >
                  {currentSlideData.subheading}
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 1.2
                  }}
                  className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none"
                >
                  {currentSlideData.heading.split(' ').map((word, index) => (
                    <motion.span
                      key={index}
                      className="inline-block mr-4 md:mr-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 1.4 + (index * 0.1),
                        ease: "easeOut"
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 2.0
                  }}
                >
                  <button className="group bg-red-600 hover:bg-[#333333] cursor-pointer text-white font-medium text-sm px-12 py-3 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0">
                    <span className="relative">
                      {currentSlideData.buttonText}
                    </span>
                  </button>
                </motion.div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export { HeroCarousel };