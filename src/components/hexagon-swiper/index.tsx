import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useBreakpointSizes, useMobile } from '../../hooks';
import Hexagon from '../hexagon-colored';

const HexagonSwiper = () => {
  const { isMobile: isMobile768 } = useMobile({ size: 768 });
  const isMobile600 = useMobile({ size: 600 });
  const isMobile500 = useMobile({ size: 500 });
  const isMobile400 = useMobile({ size: 400 });
  const isMobile300 = useMobile({ size: 300 });
  const { getSizeClass, getTextSizeClass, getMainTextSizeClass } = useBreakpointSizes();

  const swiperData = [
    {
      bgColor: '#054479',
      textColor: 'text-white',
      mainText: '98',
      subText: 'Threat Defense client retention',
      hasCounter: true,
      counterValue: 98,
      suffix: '%'
    },
    {
      bgColor: '#36A89E',
      textColor: 'text-white',
      mainText: '3x',
      subText: 'KLAS award winner'
    },
    {
      bgColor: '#054479',
      textColor: 'text-white',
      mainText: '12',
      subText: 'client hrs saved/mo',
      hasCounter: true,
      counterValue: 12,
      suffix: 'k'
    },
    {
      bgColor: '#e5e7eb',
      textColor: 'text-[#414141]',
      mainText: '3 Min',
      subText: 'Mean time to acknowledge'
    },
    {
      bgColor: '#054479',
      textColor: 'text-white',
      mainText: '>8.5',
      subText: 'IPs scanned/mo',
      hasCounter: true,
      counterValue: 8.5,
      suffix: 'mil'
    },
    {
      bgColor: '#e5e7eb',
      textColor: 'text-[#414141]',
      mainText: 'Trusted for 15',
      subText: 'years'
    },
    {
      bgColor: '#36A89E',
      textColor: 'text-white',
      mainText: '98',
      subText: 'client satisfaction w/SOC\n escalations',
      hasCounter: true,
      counterValue: 98,
      suffix: '%'
    }
  ];

  if (!isMobile768) return null;

  return (
    <div className="d-md-none relative -ml-[12vw] pb-[80px]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={isMobile300 ? -5 : isMobile400 ? -8 : isMobile500 ? -10 : isMobile600 ? -15 : -20}
        slidesPerView={isMobile300 ? 1 : isMobile400 ? 1.5 : isMobile500 ? 2 : 3}
        initialSlide={1}
        centeredSlides={true}
        grabCursor={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          disabledClass: 'swiper-button-disabled'
        }}
        className="stats-blocks"
        style={{ height: isMobile300 ? '250px' : isMobile400 ? '300px' : isMobile500 ? '350px' : isMobile600 ? '370px' : '400px' }}
      >
        {swiperData.map((data, index) => (
          <SwiperSlide key={index} className="relative flex items-center justify-center">
            {({ isActive }) => (
              <div
                className={`transition-all duration-300 ease-in-out ${isActive ? 'mt-0 scale-100 z-[999999999]' : 'mt-12 scale-75'}`}
              >
                <Hexagon
                  bgColor={data.bgColor}
                  textColor={data.textColor}
                  mainText={data.mainText}
                  subText={data.subText}
                  size={isActive ? 'extralarge' : 'large'}
                  hasCounter={data.hasCounter}
                  counterValue={data.counterValue}
                  swipe={true}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-buttons flex justify-between w-[80%] mx-auto mt-5 absolute left-1/2 transform -translate-x-1/2 bottom-5 z-50">
        <div
          className="swiper-button-prev bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
          style={{ transform: 'rotate(180deg)' }}
        ></div>
        <div
          className="swiper-button-next bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
          style={{ transform: 'rotate(0deg)' }}
        ></div>
      </div>
    </div>
  );
};

export default HexagonSwiper;