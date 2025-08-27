import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Banner1, Banner2, Banner4 } from '../../../assets';
import { MobileSimulator } from '../mobile-simulator';
import { SoundVibeModal } from '../../email-modal';
import { WelcomeModal } from '../..';
import { ThankYouModal } from '../../thank-you-modal';
import { useModal } from '../../../context/modalContext';

interface HeroSlide {
  id: number;
  subheading: string;
  heading: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    subheading: "Whether you're vibing post-sesh, mid-float, or just zoning out — this sound is tuned to enhance your high.",
    heading: "Welcome to sound designed for elevated minds.",
    buttonText: "ORDER NOW",
    buttonLink: "https://vukaya.com/collections/all",
    image: Banner1,
  },
  {
    id: 2,
    subheading: "Soundscapes Tailored to Your Mood, Your Mind, Your Strain.",
    heading: "FEEL THE FREQUENCY OF WELLESS",
    buttonText: "TAKE 5% OFF",
    buttonLink: "https://vukaya.com",
    image: Banner2,
  },
  {
    id: 3,
    subheading: "Expertly Curated Selection",
    heading: "BUILT FOR THE WELLNESS-MINDED",
    buttonText: "ORDER NOW",
    buttonLink: "https://vukaya.com/collections/all",
    image: Banner4,
  }
];

const HeroCarousel: React.FC = () => {
  const currentSlideData = heroSlides[2];
  const [isSoundVibeModalOpen, setIsSoundVibeModalOpen] = useState(false);
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true);
  const { showModal, setShowModal } = useModal();

return (
  <>
    <WelcomeModal
      isOpen={isWelcomeModalOpen}
      onClose={() => {
        setIsWelcomeModalOpen(false);
        setIsSoundVibeModalOpen(true);
      }}
    />
    <SoundVibeModal
      isOpen={isSoundVibeModalOpen}
      onClose={() => setIsSoundVibeModalOpen(false)}
    />

    <ThankYouModal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
    />
    <div className="relative overflow-hidden bg-gray-900">
      <motion.div
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${currentSlideData.image})`,
          }}
        />
      </motion.div>

      <div className="relative z-10 lg:h-full h-fit flex items-center justify-center px-[5%]">
        <MobileSimulator />
      </div>
    </div>
  </>

);
};

export { HeroCarousel };