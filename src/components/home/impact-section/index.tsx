import React from 'react';

interface HexagonProps {
  bgColor: string;
  textColor: string;
  mainText: string;
  subText: string;
  size?: 'small' | 'medium' | 'large';
}

const Hexagon: React.FC<HexagonProps> = ({ 
  bgColor, 
  textColor, 
  mainText, 
  subText, 
  size = 'small' 
}) => {
  const sizeClasses = {
    small: 'w-24 h-24 md:w-28 md:h-28',
    medium: 'w-32 h-32 md:w-40 md:h-40',
    large: 'w-36 h-36 md:w-44 md:h-44'
  };

  const textSizeClasses = {
    small: 'text-xs',
    medium: 'text-sm md:text-base',
    large: 'text-base md:text-lg'
  };

  const mainTextSizeClasses = {
    small: 'text-lg',
    medium: 'text-xl md:text-2xl',
    large: 'text-2xl md:text-3xl'
  };

  return (
    <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100" 
        className="absolute inset-0"
      >
        <polygon
          points="50,5 85,25 85,75 50,95 15,75 15,25"
          fill={bgColor}
          className="drop-shadow-sm"
        />
      </svg>
      <div className={`relative z-10 text-center px-2 ${textColor}`}>
        <div className={`font-semibold text-lg`}>
          {mainText}
        </div>
        <div className={`text-xs mt-1`}>
          {subText}
        </div>
      </div>
    </div>
  );
};

const FortifiedStats: React.FC = () => {
  const hexagonData = [
    // Top row
    { bgColor: '#1e3a8a', textColor: 'text-white', mainText: '98%', subText: 'Threat Defense Client retention', size: 'large' as const },
    
    // Second row
    { bgColor: '#059669', textColor: 'text-white', mainText: '3x', subText: 'KLAS award winner', size: 'medium' as const },
    { bgColor: '#e5e7eb', textColor: 'text-gray-800', mainText: 'Trusted for 15', subText: 'years', size: 'medium' as const },
    
    // Third row (center)
    { bgColor: '#1e3a8a', textColor: 'text-white', mainText: '12k', subText: 'client hrs saved/mo', size: 'large' as const },
    { bgColor: '#e5e7eb', textColor: 'text-gray-800', mainText: '3 Min', subText: 'Mean time to acknowledge', size: 'medium' as const },
    { bgColor: '#1e3a8a', textColor: 'text-white', mainText: '>8.5 mil', subText: 'IPs scanned/mo', size: 'large' as const },
    
    // Fourth row
    { bgColor: '#059669', textColor: 'text-white', mainText: '98%', subText: 'client satisfaction w/SOC escalations', size: 'medium' as const },
  ];

  return (
    <div className="bg-white p-8 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto flex">
        <div className="mb-12">
          <h3 className="text-teal-500 text-sm font-semibold tracking-wider uppercase mb-4">
            FORTIFIED BY THE NUMBERS
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Impact
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            When healthcare organizations choose Fortified Health Security, they see results.
          </p>
          <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-full font-semibold transition-colors">
            TALK TO AN EXPERT
          </button>
        </div>

        {/* Hexagon Grid */}
        <div className="relative flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 items-center">
            
            {/* Row 1 - Single hexagon centered */}
            <div className="col-span-full flex justify-center mb-4">
              <Hexagon {...hexagonData[0]} />
            </div>
            
            {/* Row 2 - Two hexagons */}
            <div className="col-span-full flex justify-center gap-8 md:gap-12 mb-4">
              <Hexagon {...hexagonData[1]} />
              <Hexagon {...hexagonData[2]} />
            </div>
            
            {/* Row 3 - Three hexagons */}
            <div className="col-span-full flex justify-center gap-4 md:gap-8 mb-4">
              <Hexagon {...hexagonData[3]} />
              <Hexagon {...hexagonData[4]} />
              <Hexagon {...hexagonData[5]} />
            </div>
            
            {/* Row 4 - Single hexagon centered */}
            <div className="col-span-full flex justify-center">
              <Hexagon {...hexagonData[6]} />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 opacity-30">
            <div className="w-16 h-16 bg-teal-200 transform rotate-45 rounded-lg"></div>
          </div>
          <div className="absolute bottom-0 left-0 opacity-30">
            <div className="w-12 h-12 bg-blue-200 transform rotate-45 rounded-lg"></div>
          </div>
          <div className="absolute top-1/2 right-4 opacity-30">
            <div className="w-8 h-8 bg-orange-200 transform rotate-45 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FortifiedStats;