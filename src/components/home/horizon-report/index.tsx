import React from "react";

export default function HorizonReportSection() {
  return (
<section className="relative flex items-center bg-gradient-to-r lg:from-cyan-950 py-14 sm:py-24 px-7 md:px-12 lg:px-24 text-white">
  <div className="absolute inset-0 z-0">
    <div 
      className="w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: "url('https://fortifiedhealthsecurity.com/wp-content/uploads/2023/10/AdobeStock_474955445.jpg')",
        opacity: 0.2
      }}
    ></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    <div className="flex justify-center">
      <img
        src="https://fortifiedhealthsecurity.com/wp-content/uploads/2025/01/2025_HorizonReport_cover-791x1024.jpg"
        alt="2025 Horizon Report Cover"
        className="sm:w-2/3 w-full lg:w-full h-full shadow-xl lg:mr-0 sm:mr-auto lg:ml-0 sm:ml-[3%]"
      />
    </div>

    <div className="space-y-6 text-left text-white font-light lg:pl-0 pl-[3%]">
      <h2 className="text-5xl xl:text-6xl text-[#414141]">
        Qorwyn Horizon <br className="lg:block hidden"/> Reports
      </h2>
      <p className="text-2xl md:text-[32px] sm:w-[90%] text-[#414141]">
        Our industry-leading bi-annual publication on healthcare cybersecurity news, trends, and guidance.
      </p>
      <a
        href="https://fortifiedhealthsecurity.com/horizon-reports/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#BE4623] hover:bg-orange-700 text-white px-4 lg:py-4 py-3 rounded-[5px] sm:rounded-lg text-[10px] sm:text-xs cursor-pointer font-bold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl shadow-[15px_15px_30px_rgba(0, 0, 0, 0.16)]"
      >
        Download the Latest Report
      </a>
    </div>
  </div>
</section>
  );
}
