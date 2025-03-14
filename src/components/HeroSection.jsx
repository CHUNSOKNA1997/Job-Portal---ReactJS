// components/HeroSection.jsx
import React from "react";
import { Search as SearchIcon, MapPin as MapPinIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-blue-700 text-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Find Your Dream Job Today
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto text-blue-100 px-4">
            Discover thousands of job opportunities with all the information you
            need.
          </p>
          <div className="bg-white rounded-lg p-3 sm:p-4 max-w-4xl mx-auto shadow-lg">
            <form className="flex flex-col space-y-3 md:space-y-0 md:grid md:grid-cols-3 md:gap-4">
              <div className="flex items-center bg-gray-50 rounded-md px-3 py-2.5">
                <SearchIcon className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="bg-transparent w-full focus:outline-none text-gray-800 text-sm sm:text-base"
                />
              </div>
              <div className="flex items-center bg-gray-50 rounded-md px-3 py-2.5">
                <MapPinIcon className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Location"
                  className="bg-transparent w-full focus:outline-none text-gray-800 text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2.5 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <SearchIcon className="h-5 w-5 mr-2" />
                <span>Search Jobs</span>
              </button>
            </form>
          </div>
          <div className="mt-6 text-blue-100 text-sm sm:text-base px-4">
            <p className="line-clamp-2">
              Popular: Software Engineer, Product Manager, Data Analyst,
              Marketing Specialist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
