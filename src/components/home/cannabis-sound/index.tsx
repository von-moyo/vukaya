import React from 'react';
import { Phone } from '../../../assets';

const CannabisSection = () => {
  return (
    <div className="mx-auto xl:max-w-[1140px] lg:max-w-[980px] md:max-w-[720px] md:px-0 px-6 py-6 flex flex-col lg:flex-row sm:gap-[4%] gap-[10px] items-center justify-between">
      {/* Left Column - Headline */}
      <div className="lg:w-1/2 ">
        <img src={Phone} alt={`phone image`} className='w-full h-auto' />
      </div>

      {/* Right Column - Description and Button */}
      <div className="lg:w-1/2 lg:mt-0 mt-16">
      <p className='text-sm'>wellness</p>
      <h5 className='xl:text-[32px] md:text-[28px] mt-1 mb-8 leading-[110%] font-medium'>Welcome to the intersection of <br/> cannabis and music</h5>
        <p className="text-[#999999] text-sm">
          Here, we explore how these two realms intertwine, enhancing and elevating the experience of each other in profound ways. The journey into this intersection is not just about listening to music or understanding cannabis—it's about experiencing sound through a new lens, one that's colored by the depth, mood, and sensations associated with different strains.
        </p>
        <p className='text-[#999999] text-sm mt-[30px]'>
          At the heart of this exploration is the belief that music and cannabis share a symbiotic relationship, each capable of amplifying the qualities of the other. From the euphoric highs to the soothing calms, the pairing of these two elements invites listeners into a world of enhanced perception and heightened sensory experience.
        </p>
        <button className="hover:text-white text-white text-sm cursor-pointer px-9 py-3 hover:bg-[#c00202] bg-[#333333] mt-14 transition duration-300 border border-[#333333] hover:border-none">
          SHOP NOW
        </button>
      </div>
    </div>

  );
};

export { CannabisSection };