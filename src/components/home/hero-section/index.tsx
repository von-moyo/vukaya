import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Banner1, Banner2, Banner3 } from '../../../assets';
import { Link } from 'react-router-dom';

interface HeroSlide {
  id: number;
  subheading: string;
  heading: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  gradient: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    subheading: "Whether you're vibing post-sesh, mid-float, or just zoning out — this sound is tuned to enhance your high.",
    heading: "Welcome to sound designed for elevated minds.",
    buttonText: "ORDER NOW",
    buttonLink: "https://vukaya.com/collections/all",
    image: Banner1,
    gradient: "from-red-500/80 to-pink-600/80"
  },
  {
    id: 2,
    subheading: "Soundscapes Tailored to Your Mood, Your Mind, Your Strain.",
    heading: "FEEL THE FREQUENCY OF WELLESS",
    buttonText: "TAKE 5% OFF",
    buttonLink: "https://vukaya.com",
    image: Banner2,
    gradient: "from-blue-500/80 to-purple-600/80"
  },
  {
    id: 3,
    subheading: "Expertly Curated Selection",
    heading: "BUILT FOR THE WELLNESS-MINDED",
    buttonText: "ORDER NOW",
    buttonLink: "https://vukaya.com/collections/all",
    image: Banner3,
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

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 7000);

  //   return () => clearInterval(interval);
  // }, []);

  const currentSlideData = heroSlides[currentSlide];

  return (
    <div className="relative md:h-[51.5vw] h-[100vw] overflow-hidden bg-gray-900">
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

      <div className='xl:flex gap-5 hidden absolute left-[9%] bottom-6 z-[999]'>
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="w-16 h-16 grid place-content-center hover:w-20 hover:h-20 rounded-full border border-[#80808033] transition-all duration-300 cursor-pointer hover:bg-[#c00202] hover:bottom-4 flex-shrink-0"
        >
          <ArrowLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="w-16 h-16 grid place-content-center hover:w-20 hover:h-20 rounded-full border border-[#80808033] transition-all duration-300 cursor-pointer hover:bg-[#c00202] hover:bottom-4 flex-shrink-0"
        >
          <ArrowRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>


      <div className="absolute md:bottom-8 bottom-14 md:left-24 left-[3%] z-[999] xl:hidden flex">
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-2.5 h-2.5 cursor-pointer rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-[#c00202]'
                : 'bg-white/50 hover:bg-white/75'
                }`}
            />
          ))}
        </div>
      </div>

      <div className={`relative z-10 h-full flex md:items-center items-start md:pt-0 pt-10 ${currentSlide === 0 ? 'xl:px-[5%]' : 'xl:px-[9%]'} lg:px-[5%] md:px-[9%] px-[5%]`}>
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
            <div className={`lg:space-y-8 md:space-y-7 space-y-4 md:w-[50%] lg:w-[41.67%] ${currentSlide === 1 && 'ml-auto'} ${currentSlide === 0 && 'lg:w-[60%] md:w-[80%] ml-auto'}`}>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2
                }}
                className="text-white/90 text-sm sm:text-[16px] lg:text-[20px] xl:text-[25px] font-extralight font italic lg:mb-2 md:mb-4 mb-0 lg:w-full md:w-[80%] w-full md:text-left text-center"
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
                className="text-white text-[30px] sm:text-[40px] lg:text-[60px] xl:text-[90px] font-black tracking-tight lg:leading-none leading-[120%] md:text-left text-center uppercase"
              >
                {currentSlideData.heading}
                {/* {currentSlideData.heading.split(' ').map((word, index) => (
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
                  ))} */}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 2.0
                }}
                className='w-fit md:mx-0 mx-auto'
              >
                <Link to={currentSlideData.buttonLink} className="group bg-[#c00202] hover:bg-[#333333] cursor-pointer text-white font-medium text-sm xl:px-12 lg:px-9 md:px-6 px-9 py-3 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0">
                  <span className="w-fit">
                    {currentSlideData.buttonText}
                  </span>
                </Link>
              </motion.div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export { HeroCarousel };