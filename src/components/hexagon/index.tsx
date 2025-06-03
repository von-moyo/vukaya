import React from 'react';

interface HexagonProps {
  text: string;
  href?: string;
  outerBorderColor?: string;
  middleBorderColor?: string;
  innerBorderColor?: string;
  size?: 'small' | 'medium' | 'large' | 'responsive';
  className?: string;
  onClick?: () => void;
}

const sizeClasses = {
  small: { 
    outer: 'w-24 h-[103.2px]', 
    middle: 'w-[86.4px] h-[92.88px]',
    inner: 'w-[19.2px] h-[82.56px]',
    content: 'w-[67.2px] h-[72.24px]',
    text: 'text-[6.4px]',
    outerPadding: 'p-[4px]',
    middlePadding: 'p-[2px]',
    innerPadding: 'p-[4px]'
  },
  medium: { 
    outer: 'w-[144px] h-[154.8px]', 
    middle: 'w-[129.6px] h-[139.32px]',
    inner: 'w-[115.2px] h-[123.84px]',
    content: 'w-[100.8px] h-[108.36px]',
    text: 'text-[9.6px]',
    outerPadding: 'p-[12px]',
    middlePadding: 'p-[6px]',
    innerPadding: 'p-[12px]'
  },
  large: { 
    outer: 'w-[240px] h-[258px]', 
    middle: 'w-[216px] h-[232.2px]',
    inner: 'w-[192px] h-[206.4px]',
    content: 'w-[168px] h-[180.6px]',
    text: 'text-[14.4px]',
    outerPadding: 'p-[20px]',
    middlePadding: 'p-[10px]',
    innerPadding: 'p-[20px]'
  },
  responsive: { 
    outer: 'w-[clamp(120px,10.62vw,204px)] h-[clamp(129.6px,12.192vw,234px)]', 
    middle: 'w-[clamp(108px,9.564vw,183.6px)] h-[clamp(116.4px,10.968vw,211.2px)]',
    inner: 'w-[clamp(96px,8.496vw,163.2px)] h-[clamp(103.2px,9.756vw,187.2px)]',
    content: 'w-[clamp(84px,7.428vw,142.8px)] h-[clamp(91.2px,8.532vw,164.4px)]',
    text: 'text-[clamp(8px,0.664vw,12.8px)]',
    outerPadding: 'p-[clamp(10px,0.88vw,16px)]',
    middlePadding: 'p-[clamp(5px,0.44vw,8px)]',
    innerPadding: 'p-[clamp(10px,0.88vw,16px)]'
  },
};

export const Hexagon: React.FC<HexagonProps> = ({
  text,
  href,
  outerBorderColor = '#D1D5DB', // Light gray
  middleBorderColor = '#9CA3AF', // Medium gray  
  innerBorderColor = '#3B82F6', // Blue
  size = 'responsive',
  className = '',
  onClick,
}) => {
  const sizeConfig = sizeClasses[size];
  
  const hexagonClipPath = 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)';

  const HexagonContent = () => (
    <div 
      className={`
        ${sizeConfig.outer} 
        relative 
        transition-transform 
        duration-300 
        ease-in-out 
        hover:scale-105 
        cursor-pointer
        ${className}
      `}
    >
      {/* Outermost border layer */}
      <div
        className="w-full h-full absolute inset-0"
        style={{
          clipPath: hexagonClipPath,
          backgroundColor: outerBorderColor,
          borderRadius: '12px',
        }}
      />
      
      {/* Middle border layer - only shows as a border ring */}
      <div 
        className={`
          absolute inset-0 
          flex items-center 
          justify-center 
          ${sizeConfig.outerPadding}
        `}
      >
        <div
          className="w-full h-full relative"
          style={{
            clipPath: hexagonClipPath,
            backgroundColor: middleBorderColor,
            borderRadius: '12px',
          }}
        />
      </div>
      
      {/* Inner border layer - positioned independently */}
      <div 
        className={`
          absolute inset-0 
          flex items-center 
          justify-center 
          ${sizeConfig.outerPadding}
        `}
      >
        <div 
          className={`
            w-full h-full
            flex items-center 
            justify-center 
            ${sizeConfig.middlePadding}
          `}
        >
          <div
            className="w-full h-full relative"
            style={{
              clipPath: hexagonClipPath,
              backgroundColor: innerBorderColor,
              borderRadius: '12px',
            }}
          />
        </div>
      </div>
      
      {/* White content hexagon - positioned independently */}
      <div 
        className={`
          absolute inset-0 
          flex items-center 
          justify-center 
          ${sizeConfig.outerPadding}
        `}
      >
        <div 
          className={`
            w-full h-full
            flex items-center 
            justify-center 
            ${sizeConfig.middlePadding}
          `}
        >
          <div 
            className={`
              w-full h-full
              flex items-center 
              justify-center 
              ${sizeConfig.innerPadding}
            `}
          >
            <div
              className="w-full h-full bg-white relative"
              style={{
                clipPath: hexagonClipPath,
                borderRadius: '12px',
              }}
            >
              {/* Text content */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-[15%] z-10">
                <span 
                  className={`
                    font-extrabold 
                    text-gray-700 
                    leading-tight 
                    ${sizeConfig.text}
                  `}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {text}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className="block no-underline transition-all duration-200 ease-in-out"
        onClick={onClick}
      >
        <HexagonContent />
      </a>
    );
  }

  return (
    <div onClick={onClick} className="inline-block">
      <HexagonContent />
    </div>
  );
};