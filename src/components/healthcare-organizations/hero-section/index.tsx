import React from "react";

interface HomeSectionProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

const HomeSection: React.FC<HomeSectionProps> = ({ title, className = "" }) => {
  return (
    <section className={`relative text-white min-h-[250px] py-[clamp(15px,1.5625vw,30px)]  grid place-content-center ${className}`}>
      <div className="absolute inset-0 z-0 opacity-70 bg-gradient-to-b from-[#2da38f] to-[#054479]" />
      <div className="relative z-10 container mx-auto">
        <h1 className="text-[37px] md:text-[56px] font-medium text-center leading-">{title}</h1>
      </div>
    </section>
  );
};

export default HomeSection;
