import React from 'react';
import { HeroSection } from '../../components';
import Footer from '../../components/footer';
import HorizonReportSection from '../../components/home/horizon-report';
import Testimoninals from '../../components/home/testimonials';
import AdvisoryServices from '../../components/home/services';
import QorwynStats from '../../components/home/impact-section';
import AwardsCarousel from '../../components/home/awards';
import MembershipsCarousel from '../../components/home/membership';
import CaseStudySlider from '../../components/home/case-study';


export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AwardsCarousel />
      <AdvisoryServices />
      <CaseStudySlider />
      <QorwynStats />
      <HorizonReportSection />
      <MembershipsCarousel />
      <Testimoninals />
      <Footer />
    </div>
  );
};
