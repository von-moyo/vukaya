import React from 'react';
import Footer from '../../components/footer';
import HomeSection from '../../components/healthcare-organizations/hero-section';
import SubSection from '../../components/healthcare-organizations/sub-section';
import { FortifiedTrust } from '../../components/healthcare-organizations/grid-section';
import { providerGroupsCardData } from '../../constants/who-we-serve';
import ProviderList from '../../components/healthcare-organizations/providers-list';

export const ProviderGroups: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HomeSection title="Provider Groups" />
      <SubSection
        image="https://fortifiedhealthsecurity.com/wp-content/uploads/2024/02/Medical-staff-meeting-2-1-2048x1094.jpeg"
        paragraphs={[
          "Providers servicing patients outside of a hospital face distinct cybersecurity challenges compared to acute care environments. With services provided across a diverse range of settings, supported by multiple third parties, provider groups must develop a cybersecurity program that balances system accessibility and security.",
        ]}
        containerClassName='relative grid grid-cols-1 lg:grid-cols-[3.1fr_3fr] gap-4 items-center py-16 sm:py-20 px-[35px] lg:px-[84px]'
      />
      <ProviderList/>
      <FortifiedTrust title='Provider Groups Trust Qorwyn' cards={providerGroupsCardData} />
      <Footer />
    </div>
  );
};
