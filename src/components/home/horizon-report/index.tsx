import React from "react";

export default function HorizonReportSection() {
  return (
    <section className="relative bg-gradient-to-r from-cyan-950 to-sky-900 py-12 px-4 md:px-12 lg:px-24 text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://fortifiedhealthsecurity.com/wp-content/uploads/2023/10/AdobeStock_474955445.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src="https://fortifiedhealthsecurity.com/wp-content/uploads/2025/01/2025_HorizonReport_cover-791x1024.jpg"
            alt="2025 Horizon Report Cover"
            className="w-3/4 md:w-2/3 lg:w-full max-w-sm shadow-xl rounded-xl"
          />
        </div>

        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Fortified Horizon Reports
          </h2>
          <p className="text-lg md:text-xl text-gray-200">
            Our industry-leading bi-annual publication on healthcare cybersecurity news, trends, and guidance.
          </p>
          <a
            href="https://fortifiedhealthsecurity.com/horizon-reports/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Download the Latest Report
          </a>
        </div>
      </div>
    </section>
  );
}
