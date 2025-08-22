import { MobileApp } from "../../mobile-app";

const MobileSimulator = () => {
  return (
    <div className="mx-auto xl:max-w-[1140px] lg:max-w-[980px] md:max-w-[720px] md:px-0 px-6 pb-6 pt-20 flex flex-col-reverse lg:flex-row sm:gap-[4%] gap-[60px] items-center justify-between">
      <div className="lg:w-1/2 lg:mt-0 mt-16 lg:mb-0 mb-20">
        <p className='text-base uppercase font-extrabold text-gray-300'>wellness & sound</p>
        <h5 className='xl:text-[40px] md:text-[35px] mt-1 mb-8 leading-[110%] font-medium text-gray-300'>
          Tune your music to your state of mind
        </h5>
        <p className="text-[#ffffff] sm:text-xl text-base">
          Step into a world where music adapts to you. Our headphones sync with the mobile app to shift each track in real-time, inspired by the subtle nuances of your mood. Choose your vibe—Indica, Sativa, Hybrid, or Og Kush—and watch the sound transform before your ears.
        </p>
        <p className='text-[#ffffff] sm:text-xl text-base mt-[30px]'>
          Feel deeper bass, brighter highs, or warm undertones exactly when you want them. Every note, every beat, tuned to match your senses. Sign up with your email to unlock exclusive drops and step fully into the experience—where music meets the high.
        </p>
      </div>

      <div className="lg:w-1/2 grid place-content-center">
        {/* <h4 className="text-center font-semibold mb-4 lg:hidden">Try out our mobile app now!</h4> */}
        <div className="relative inline-block">
          <img
            src="/Mockup.svg"
            alt="phone image"
            className="w-auto h-[600px] cursor-pointer"
          />
          <div className="absolute top-[1.5%] h-[97%] left-[4.2%] w-[91.5%] overflow-y-auto scrollbar-none bg-[#181A20] rounded-[40px] cursor-pointer text-xs text-white">
            <MobileApp />
          </div>
        </div>
      </div>
    </div>
  );
};

export { MobileSimulator };