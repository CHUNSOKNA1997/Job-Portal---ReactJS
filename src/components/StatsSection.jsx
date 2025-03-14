// components/StatsSection.jsx
import React from "react";

const StatsSection = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-blue-700 text-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">10k+</div>
            <p className="text-xl text-blue-100">Active Jobs</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">2.5M+</div>
            <p className="text-xl text-blue-100">Job Seekers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">5k+</div>
            <p className="text-xl text-blue-100">Companies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
