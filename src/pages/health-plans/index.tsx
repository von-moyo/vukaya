import React from 'react';
import Footer from '../../components/footer';
import HomeSection from '../../components/healthcare-organizations/hero-section';
import SubSection from '../../components/healthcare-organizations/sub-section';
import { FortifiedTrust } from '../../components/healthcare-organizations/grid-section';
import { healthPlansCardData } from '../../constants/who-we-serve';

export const HealthPlans: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HomeSection title="Health Plans" />
      <SubSection
        image="https://fortifiedhealthsecurity.com/wp-content/uploads/2024/01/health-plan-payor-.jpeg"
        paragraphs={[
          "Health plans must navigate complex cybersecurity challenges, including safeguarding vast amounts of PHI and financial data, managing vulnerabilities and exposure across a wide provider network, and complying with stringent regulations like HIPAA and ERISA.",
          "Safeguarding your organization and patient information against intensifying cyber threats and regulatory scrutiny requires robust, adaptive cybersecurity measures.",
        ]}
        containerClassName='relative grid grid-cols-1 lg:grid-cols-[3.1fr_3fr] gap-4 items-center py-16 sm:py-20 px-[35px] lg:px-[84px]'
      />
      <FortifiedTrust title='Health Plans Trust Qorwyn' cards={healthPlansCardData} />
      <Footer />
    </div>
  );
};
