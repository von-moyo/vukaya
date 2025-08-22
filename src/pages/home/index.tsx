import React from 'react';
import { HeroCarousel, Footer, SpectrumVariations, WellnessCannabisSection, CannabisSection } from '../../components';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroCarousel/>
      {/* <MobileSimulator/> */}
      <SpectrumVariations/>
      <WellnessCannabisSection/>
      <CannabisSection/>
      <Footer />
    </div>
  );
};
