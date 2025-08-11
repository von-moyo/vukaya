import React from 'react';
import { HeroCarousel, Footer } from '../../components';


export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroCarousel/>
      {/* <Footer /> */}
    </div>
  );
};
