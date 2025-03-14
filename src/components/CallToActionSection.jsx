// components/CallToActionSection.jsx
import React from "react";
import { Upload as UploadIcon } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gray-100 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-600 rounded-xl p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to Take the Next Step in Your Career?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Join thousands of job seekers who have found their perfect job
            through JobPortal.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#"
              className="w-full sm:w-auto bg-white text-blue-600 font-medium py-3 px-6 rounded-md hover:bg-blue-50 transition-colors text-center"
            >
              Find Jobs
            </a>
            <a
              href="#"
              className="w-full sm:w-auto bg-blue-800 text-white font-medium py-3 px-6 rounded-md hover:bg-blue-900 transition-colors flex items-center justify-center"
            >
              <UploadIcon className="h-5 w-5 mr-2" />
              Upload Your Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
