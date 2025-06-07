import React from 'react';
import Footer from '../../components/footer';
import HeroSection from '../../components/who-we-serve/section';


export const WhoWeServe: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        backgroundImage="https://fortifiedhealthsecurity.com/wp-content/uploads/2024/01/Hyperdetailed-abstract-wallpaper-octane-1536x861.jpeg"
        title="Who We Serve"
        paragraphs={[
          "Whether you’re overseeing cybersecurity for hospitals, managing health plans, providing care in a practice, or breaking new ground in healthcare tech, we’ve got your back.",
          "Our team is passionate about helping the healthcare ecosystem safeguard patient information and ensure compliance. This is why our clients see us as their healthcare cybersecurity partner.",
        ]}
        containerClassName='relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2.2fr_3fr] gap-10 items-center py-30 sm:py-30'
      />
      <HeroSection
        backgroundImage="https://fortifiedhealthsecurity.com/wp-content/themes/fortifiedhealthsecurity/assets/images/pattern-hd.png"
        title="Hospitals and Health Systems"
        paragraphs={[
          "With their broad attack surface, numerous network entry points, and high stakes for patient safety, the cybersecurity complexities that healthcare organizations face set them apart from other industries.",
          "Fortified helps lighten the load of safeguarding patients by assisting with risk identification and strategic planning, bolstering threat management and defense resources, and cultivating resiliency.",
        ]}
        backgroundPosition='right 50vw bottom -240px'
        textContainerClassName='grid lg:grid-cols-[2.9fr_3fr] gap-[5%]'
        containerClassName='relative z-10 max-w-[100%] ml-auto grid grid-cols-1 gap-10 items-center py-24 xl:pl-[4%]'
        gradientOverlay=''
        titleClassName='text-5xl xl:text-[56px] text-[#414141] my-auto'
        paragraphClassName='text-[#414141]'
        cta
        ctaClassName='w-fit button mt-4 inline-block bg-[#054479] text-white px-10 py-3 rounded-md sm:rounded-xl uppercase text-sm font-semibold'
      />
      <HeroSection
        backgroundImage="https://fortifiedhealthsecurity.com/wp-content/uploads/2024/01/Doctor-women-with-AI-artificial-intelligence-2048x1148.jpeg"
        title="Healthcare Technology, Medical Devices, & Biotech"
        paragraphs={[
          "Healthcare technology companies face the daunting task of protecting sensitive data and systems while simultaneously providing multiple use cases and flexible configurations to support different client needs. And if recent broad-scale attacks are any indication, addressing vulnerabilities and maintaining vigilant update and patching cadences will continue to be a primary challenge.",
          "At Qorwyn, we offer comprehensive healthcare cybersecurity services tailored to the unique challenges and risk profiles of healthcare technology, medical device, and biotech companies. Our approach helps clients balance rapid innovation and ease of integration with robust cybersecurity measures to reduce risk."
        ]}
        containerClassName='relative z-10 lg:max-w-[50%] max-w-full ml-auto grid grid-cols-1 gap-10 items-center py-26 sm:py-30'
        gradientOverlay='linear-gradient(90deg, transparent 0%, #2DA38F 62%, #011D19 100%)'
        titleClassName='text-5xl xl:text-[56px] font-[900]'
        cta
        ctaClassName='w-fit button mt-4 inline-block bg-[#BE4623] text-white px-10 py-3 rounded-md sm:rounded-xl uppercase text-sm font-semibold'
      />
      <HeroSection
        backgroundImage="https://fortifiedhealthsecurity.com/wp-content/themes/fortifiedhealthsecurity/assets/images/pattern-hd.png"
        title="Provider Groups"
        paragraphs={[
          "Providers offering healthcare services outside of a hospital often deal with transitioning patients, requiring frequent exchange of sensitive data with other healthcare providers, making them particularly vulnerable to cybersecurity breaches.",
          "Fortified helps address these risks by bolstering data transfer security, ensuring regulatory compliance, and providing robust defense mechanisms against cyber threats in these critical care settings.",
        ]}
        backgroundPosition='right 50vw bottom -240px'
        textContainerClassName='grid lg:grid-cols-[2fr_3fr] gap-[10%]'
        containerClassName='relative z-10 max-w-[100%] ml-auto grid grid-cols-1 gap-10 items-center py-24'
        gradientOverlay=''
        titleClassName='text-5xl xl:text-[56px] text-[#414141] my-auto'
        paragraphClassName='text-[#414141]'
        cta
        ctaClassName='w-fit button mt-4 inline-block bg-[#054479] text-white px-10 py-3 rounded-md sm:rounded-xl uppercase text-sm font-semibold'
      />
      <HeroSection
        backgroundImage="https://fortifiedhealthsecurity.com/wp-content/uploads/2024/01/health-plan-2048x1536.jpeg"
        title="Health Plans"
        paragraphs={[
          "Health plans grapple with the dual demands of managing extensive patient data sets and adapting to ever-evolving financial, legal, and healthcare regulatory requirements.",
          "Qorwyn responds to these specific challenges with targeted cybersecurity solutions that help safeguard patient information, streamline your operational flow, and keep transactions with members, providers and other healthcare organizations secure.",
        ]}
        containerClassName='relative z-10 lg:max-w-[55%] max-w-full ml-auto grid grid-cols-1 gap-10 items-center py-20 sm:py-30'
        gradientOverlay='linear-gradient(90deg, transparent 0%, #2DA38F 62%, #011D19 100%)'
        titleClassName='text-5xl xl:text-[56px] font-[900]'
        cta
        ctaClassName='w-fit button mt-4 inline-block bg-[#BE4623] text-white px-10 py-3 rounded-md sm:rounded-xl uppercase text-sm font-semibold'
      />
      <Footer />
    </div>
  );
};
