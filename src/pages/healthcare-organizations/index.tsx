import React from 'react';
import Footer from '../../components/footer';
import HomeSection from '../../components/healthcare-organizations/hero-section';
import SubSection from '../../components/healthcare-organizations/sub-section';
import { FortifiedTrust } from '../../components/healthcare-organizations/grid-section';
import { healthcareCardData } from '../../constants/who-we-serve';

export const HealthcareOrganization: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HomeSection title="Hospitals and Health Systems" />
      <SubSection
        image="https://fortifiedhealthsecurity.com/wp-content/uploads/2024/02/Hospital-building-2048x1538.jpeg"
        paragraphs={[
          "Hospitals and health systems operate under constant threats to their patients’ data privacy and safety, their networks and systems, and complying with increasingly complex and stringent regulations.",
          "Compounding these challenges are shrinking security budgets, staffing challenges, limited cybersecurity skillsets, and increasing cyber insurance premiums.",
          "To help navigate these complexities, Fortified provides customized cybersecurity solutions that allow hospitals and health systems to concentrate on their essential role: providing quality patient care.",
        ]}
        containerClassName='relative grid grid-cols-1 lg:grid-cols-[3.1fr_3fr] gap-4 items-center py-16 sm:py-20 px-[35px] lg:px-[84px]'
      />
      <FortifiedTrust cards={healthcareCardData} />
      <Footer />
    </div>
  );
};
