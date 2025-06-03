import React from "react";

export default function HorizonReportSection() {
  return (
<section className="relative flex items-center bg-gradient-to-r from-cyan-950 py-24 px-4 md:px-12 lg:px-24 text-white">
  <div className="absolute inset-0 z-0">
    <div 
      className="w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: "url('https://fortifiedhealthsecurity.com/wp-content/uploads/2023/10/AdobeStock_474955445.jpg')",
        opacity: 0.2
      }}
    ></div>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    <div className="flex justify-center">
      <img
        src="https://fortifiedhealthsecurity.com/wp-content/uploads/2025/01/2025_HorizonReport_cover-791x1024.jpg"
        alt="2025 Horizon Report Cover"
        className="w-3/4 md:w-2/3 lg:w-full h-full shadow-xl"
      />
    </div>

    <div className="space-y-6 text-center lg:text-left text-white font-light">
      <h2 className="text-3xl md:text-6xl">
        Fortified Horizon <br /> Reports
      </h2>
      <p className="text-lg md:text-[32px] w-[90%]">
        Our industry-leading bi-annual publication on healthcare cybersecurity news, trends, and guidance.
      </p>
      <a
        href="https://fortifiedhealthsecurity.com/horizon-reports/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#BE4623] hover:bg-orange-700 text-white px-4 py-4 rounded-lg text-xs cursor-pointer font-bold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Download the Latest Report
      </a>
    </div>
  </div>
</section>
  );
}
