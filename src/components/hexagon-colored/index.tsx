import React, { useState, useEffect, useRef } from 'react';
import { formatWordsToLines } from '../hexagon';
import { useBreakpointSizes } from '../../hooks/useBreakpointSizes';

interface HexagonProps {
  bgColor: string;
  textColor?: string;
  mainText?: string | number;
  subText?: string;
  size?: 'small' | 'medium' | 'large' | 'extralarge';
  hasCounter?: boolean;
  counterValue?: number;
  swipe?: boolean;
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
  counterValue,
  swipe
}) => {
  const { getSizeClass, getTextSizeClass, getMainTextSizeClass } = useBreakpointSizes();

  const sizeClass = getSizeClass(size);
  const textSizeClass = getTextSizeClass(size);
  const mainTextSizeClass = getMainTextSizeClass(size);

  const renderValue = () => {
    if (hasCounter && typeof counterValue === 'number') {
      if (mainText === '98%' || mainText === '98') {
        return <Counter value={counterValue} isVisible={true} suffix="%" />;
      } else if (mainText === '12k') {
        return <Counter value={counterValue} isVisible={true} suffix="k" />;
      } else if (mainText === '>8.5 mil') {
        return (
          <>
            <Counter value={counterValue} isVisible={true} suffix=" mil" />
          </>
        );
      }
    }
    return typeof mainText === "string" && !swipe ? formatWordsToLines(mainText) : mainText;
  };

  return (
    <div className={`relative ${sizeClass} flex items-center justify-center`}>
      <HexagonSVG bgColor={bgColor} />
      <div className={`relative z-10 text-center px-2 ${textColor}`}>
        <div className={`font-[900] ${mainTextSizeClass} whitespace-pre-wrap leading-[1]`}>
          {renderValue()}
        </div>
        <div className={`${textSizeClass} mt-1 whitespace-pre-wrap leading-[1.2] font-bold`}>
          {subText}
        </div>
      </div>
    </div>
  );
};

export default Hexagon;