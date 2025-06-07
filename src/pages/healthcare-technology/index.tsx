import React from 'react';
import Footer from '../../components/footer';
import HomeSection from '../../components/healthcare-organizations/hero-section';
import SubSection from '../../components/healthcare-organizations/sub-section';
import { FortifiedTrust } from '../../components/healthcare-organizations/grid-section';
import { healthcareTechCardData } from '../../constants/who-we-serve';

export const HealthcareTechnnology: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HomeSection title="Healthcare Technology, Medical Devices & Biotech" />
      <SubSection
        image="https://fortifiedhealthsecurity.com/wp-content/uploads/2024/02/electronicmedicalrecords-2048x1366.jpeg"
        paragraphs={[
          "Between interoperability complexities, managing third-party risks, navigating the labyrinth of regulatory compliance, and ensuring data integrity, healthcare technology organizations face nuanced cybersecurity challenges.",
          "At Fortified, we have the experience working with healthcare technology, medical device, and biotech companies to mature their cybersecurity posture and strengthen their cyber resilience."
        ]}
        containerClassName='relative grid grid-cols-1 lg:grid-cols-[3.1fr_3fr] gap-4 items-center py-16 sm:py-20 px-[35px] lg:px-[84px]'
      />
      <FortifiedTrust title='Healthcare Technology, Medical Device, and Biotech Organizations Trust Fortified' cards={healthcareTechCardData} />
      <Footer />
    </div>
  );
};
