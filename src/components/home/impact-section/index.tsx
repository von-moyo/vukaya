import React, { useState, useEffect, useRef } from 'react';
import { formatWordsToLines } from '../../hexagon';
import { useMobile } from '../../../hooks/useMobile';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

interface HexagonProps {
  bgColor: string;
  textColor?: string;
  mainText?: string | number;
  subText?: string;
  size?: 'small' | 'medium' | 'large' | 'extralarge';
  hasCounter?: boolean;
  counterValue?: number;
}

const HexagonSVG: React.FC<{ bgColor: string }> = ({ bgColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 318.225 278.051"
    className="absolute inset-0"
  >
    <path
      fill={bgColor}
      d="M234.077-.002H84.147a9.183 9.183 0 0 0-7.953 4.591L1.23 134.434a9.183 9.183 0 0 0 0 9.183L76.195 273.46a9.183 9.183 0 0 0 7.953 4.591h149.929a9.183 9.183 0 0 0 7.953-4.591l74.965-129.843a9.183 9.183 0 0 0 0-9.183L242.03 4.591a9.183 9.183 0 0 0-7.953-4.593"
      className="drop-shadow-sm"
    />
  </svg>
);

const Counter: React.FC<{
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  isVisible: boolean;
}> = ({ value, duration = 2000, prefix = "", suffix = "", isVisible }) => {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isVisible || hasStarted.current) return;

    hasStarted.current = true;
    const increment = value / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration, isVisible]);

  return (
    <span>
      {formatWordsToLines(prefix)}{count}{suffix}
    </span>
  );
};

const Hexagon: React.FC<HexagonProps> = ({
  bgColor,
  textColor,
  mainText,
  subText,
  size = 'small',
  hasCounter,
  counterValue
}) => {
  const sizeClasses = {
    small: 'w-24 h-24 md:w-32 md:h-32',
    medium: 'w-32 h  md:w-48 md:h-48',
    large: 'w-60 h-60',
    extralarge: 'w-90 h-90'
  };

  const textSizeClasses = {
    small: 'text-xs md:text-sm',
    medium: 'text-sm md:text-base',
    large: 'text-base lg:text-lg xl:text-xl',
    extralarge: 'text-base lg:text-lg xl:text-xl',
  };

  const mainTextSizeClasses = {
    small: 'text-lg md:text-xl',
    medium: 'text-xl md:text-2xl',
    large: 'text-2xl lg:text-3xl xl:text-4xl',
    extralarge: 'text-2xl lg:text-3xl xl:text-4xl'
  };

  const renderValue = () => {
    if (hasCounter && typeof counterValue === 'number') {
      if (mainText === '98%' || mainText === '98') {
        return <Counter value={counterValue} isVisible={true} suffix="%" />;
      } else if (mainText === '12k') {
        return <Counter value={counterValue} isVisible={true} suffix="k" />;
      } else if (mainText === '>8.5 mil') {
        return (
          <>
            &gt;<Counter value={counterValue} isVisible={true} suffix=" mil" />
          </>
        );
      }
    }
    return typeof mainText === "string" ? formatWordsToLines(mainText) : mainText;

  };

  return (
    <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
      <HexagonSVG bgColor={bgColor} />
      <div className={`relative z-10 text-center px-2 ${textColor}`}>
        <div className={`font-[900] ${mainTextSizeClasses[size]} whitespace-pre-wrap leading-[1]`}>
          {renderValue()}
        </div>
        <div className={`${textSizeClasses[size]} mt-1 whitespace-pre-wrap leading-[1.2] font-bold`}>
          {subText}
        </div>
      </div>
    </div>
  );
};

const QorwynStats: React.FC = () => {
  const { isMobile } = useMobile({ size: 1024 });
  const { isMobile: isMobileLarge } = useMobile({ size: 1200 });
  const hexagonData = [
    {
      bgColor: '#054479',
      textColor: 'text-white',
      mainText: '12k',
      subText: 'client hrs\n saved/mo', size: 'large' as const, hasCounter: true, counterValue: 12, position: { left: '0%', top: '48%' }
    },
    {
      bgColor: '#054479',
      textColor: 'text-white',
      mainText: '98%',
      subText: 'Threat Defense\n client retention', size: 'large' as const, hasCounter: true, counterValue: 98, position: { left: '23%', top: '0%' }
    },
    {
      bgColor: '#36A89E',
      textColor: 'text-white',
      mainText: '3x',
      subText: 'KLAS award\n winner', size: 'large' as const, position: { left: '23%', top: '32%' }
    },
    {
      bgColor: '#e5e7eb',
      textColor: 'text-[#414141]',
      mainText: '3Min',
      subText: 'Mean time to acknowledge', size: 'large' as const, position: { left: '23%', top: '64%' }
    },
    {
      bgColor: '#054479',
      textColor: 'text-white',
      mainText: '>8.5mil',
      subText: 'Mean time to acknowledge', size: 'large' as const, position: { left: '46%', top: '48%' }
    },
    {
      bgColor: '#e5e7eb',
      textColor: 'text-[#414141]',
      mainText: 'Trusted for15',
      subText: 'years', size: 'large' as const, position: { left: '69%', top: '32%' }
    },
    {
      bgColor: '#36A89E',
      textColor: 'text-white',
      mainText: '98%',
      subText: 'client satisfaction w/SOC\n escalations', size: 'large' as const, hasCounter: true, counterValue: 98, position: { left: '69%', top: '64%' }
    },

    { bgColor: '#66C6B9', size: 'small' as const, position: { left: '0%', top: isMobileLarge ? '88%' : '84%' } },
    { bgColor: '#A3D5F7', size: 'small' as const, position: { left: '40%', top: '100%' } },
    { bgColor: '#A3D5F7', size: 'small' as const, position: { left: isMobileLarge ? '95%' : '87%', top: '85%' } },
    { bgColor: '#A3D5F7', size: 'medium' as const, position: { left: '46%', top: '20%' } },
    { bgColor: '#36A89E', size: 'small' as const, position: { left: isMobileLarge ? '65%' : '62%', top: '10%' } },
    { bgColor: '#e5e7eb', size: 'small' as const, position: { left: '92%', top: '-5%' } },
    { bgColor: '#e5e7eb', size: 'small' as const, position: { left: '85%', top: '20%' } },
  ];

  return (
    <div className="relative bg-white md:p-12 lg:p-16 overflow-hidden"
      style={{
        backgroundImage: `url('https://fortifiedhealthsecurity.com/wp-content/themes/fortifiedhealthsecurity/assets/images/pattern-hd.png')`,
        backgroundPosition: isMobile ? 'left 100% bottom -0px' : 'left 150% bottom -240px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        boxShadow: 'inset 0 40px 30px -30px rgba(0, 0, 0, 0.3)',
      }}
    >

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        <div className="mb-8 md:mb-0 md:w-1/3 z-10  md:p-0 p-8">
          <h3 className="text-[#2ea38f] font-[900] tracking-wider uppercase mb-4">
            FORTIFIED BY THE NUMBERS
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-[900] text-[#414141] mb-6">
            Our Impact
          </h1>
          <p className="text-[#414141] text-base mb-8 max-w-[70%]">
            When healthcare organizations choose Fortified Health Security, they see results.
          </p>
          <button className="bg-[#054479] hover:bg-blue-900 text-white px-4 py-3 rounded-lg text-xs font-semibold transition-colors">
            TALK TO AN EXPERT
          </button>
        </div>
        <div className="lg:ml-0 ml-auto lg:w-2/3 w-full relative h-[75vw] lg:h-[51vw] md:block hidden">
          {hexagonData.map((hex, index) => (
            <div
              key={index}
              className="absolute w-[27.5%] flex justify-center"
              style={{
                left: hex.position.left,
                top: hex.position.top,
              }}
            >
              <Hexagon
                bgColor={hex.bgColor}
                textColor={hex.textColor}
                mainText={hex.mainText}
                subText={hex.subText}
                size={hex.size}
                hasCounter={hex.hasCounter}
                counterValue={hex.counterValue}
              />
            </div>
          ))}
        </div>

        <HexagonSwiper />
      </div>
    </div>
  );
};

export default QorwynStats;

const HexagonSwiper = () => {
  const { isMobile } = useMobile({ size: 768 }); // md breakpoint at 768px

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
      suffix: ' mil'
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

  if (!isMobile) return null;

  return (
    <div className="d-md-none">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides={true}
        grabCursor={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        className="stats-blocks swiper-coverflow swiper-3d"
        style={{ height: '450px' }}
      >
        {swiperData.map((data, index) => (
          <SwiperSlide key={index} className="relative flex items-center justify-center">
            {({ isActive }) => (
              <div className={` ${!isActive && 'mt-[58px]'}`}>
                <Hexagon
                  bgColor={data.bgColor}
                  textColor={data.textColor}
                  mainText={data.mainText}
                  subText={data.subText}
                  size={isActive ? 'extralarge' : 'large'}
                  hasCounter={data.hasCounter}
                  counterValue={data.counterValue}
                />
              </div>

            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-buttons flex justify-center gap-8 mt-5 absolute translate-x-1/2 left-[50%] bottom-15 z-50">
        <div className="swiper-button-prev bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full !w-16 !h-16 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
        </div>
        <div className="swiper-button-next bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full !w-16 !h-16 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
        </div>
      </div>
    </div>
  );
};