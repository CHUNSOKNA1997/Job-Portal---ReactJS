// components/HowItWorksSection.jsx
import React from "react";
import {
  Search as MagnifyingGlassIcon,
  CheckCircle as CheckCircleIcon,
  Briefcase as BriefcaseIcon,
} from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Follow these simple steps to find your next career opportunity
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <MagnifyingGlassIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Search Jobs</h3>
            <p className="text-gray-600">
              Browse thousands of jobs using filters like location, salary
              range, and job type.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <CheckCircleIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Apply with Ease</h3>
            <p className="text-gray-600">
              Create your profile once and apply to jobs with just a few clicks.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <BriefcaseIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Get Hired</h3>
            <p className="text-gray-600">
              Interview with employers and land your dream job in no time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
