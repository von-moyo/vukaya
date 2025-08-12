import React from 'react';
import { HeroCarousel, Footer, SpectrumVariations, WellnessCannabisSection, CannabisSection } from '../../components';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroCarousel/>
      <SpectrumVariations/>
      <WellnessCannabisSection/>
      <CannabisSection/>
      <Footer />
    </div>
  );
};
