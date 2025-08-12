import React from 'react';

const WellnessCannabisSection = () => {
  return (
    <div className='border-t border-[#80808033]'>
      <div className="mx-auto xl:max-w-[1140px] lg:max-w-[980px] md:max-w-[720px] md:px-0 px-6 sm:py-21 py-16 flex flex-col sm:flex-row sm:gap-[4%] gap-[10px] items-start justify-between">
        {/* Left Column - Headline */}
        <div className="sm:w-1/2 sm:mb-8 md:mb-0">
          <h2 className="text-[#ff0030] text-sm md:text-[15.35px] font-semibold uppercase tracking-wide mb-4">
            The sound of wellness, the sound of cannabis
          </h2>
          <h1 className="text-[20px] md:text-[30px] xl:text-[40px] font-bold text-gray-900 leading-tight md:pr-0 sm:pr-[15%]">
            WHAT IS THE UNIQUE FEATURE OF A WELLNESS/CANNABIS-INFUSED HEADPHONES?
          </h1>
        </div>

        {/* Right Column - Description and Button */}
        <div className="sm:w-1/2">
          <p className="text-[#808080] text-base xl:text-lg p-2 xl:leading-[40px] leading-[30px] font-light xl:mb-6 mb-4">
            Our headphones are specially tuned to complement the after effects of different wellness practices and cannabis strains, providing an immersive and tailored audio experience. Additionally, we offer a mobile app that allows you to select strains and customize your experience.
          </p>
          <button className="hover:text-white text-[#c00202] text-sm cursor-pointer px-9 py-3 hover:bg-red-700 transition duration-300 border border-[#efefef]">
            FAQS
          </button>
        </div>
      </div>
    </div>

  );
};

export { WellnessCannabisSection };