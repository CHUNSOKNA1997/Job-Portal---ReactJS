import React from "react";
import {
  MapPin as MapPinIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
} from "lucide-react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
          {job.companyLogo ? (
            <img
              src={job.companyLogo}
              alt={`${job.company} logo`}
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
            />
          ) : (
            <div className="text-gray-400 font-bold text-lg">
              {job.company.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
            <h3 className="text-base sm:text-lg font-medium text-gray-900 truncate">
              {job.title}
            </h3>
            <span
              className={`mt-1 sm:mt-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                job.type === "Full-time"
                  ? "bg-green-100 text-green-800"
                  : job.type === "Part-time"
                  ? "bg-blue-100 text-blue-800"
                  : job.type === "Contract"
                  ? "bg-purple-100 text-purple-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {job.type}
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-600">{job.company}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center">
              <MapPinIcon className="h-4 w-4 text-gray-400 mr-1" />
              <span>{job.location}</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center">
              <ClockIcon className="h-4 w-4 text-gray-400 mr-1" />
              <span>{job.posted}</span>
            </div>
            {job.salary && (
              <>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center">
                  <DollarSignIcon className="h-4 w-4 text-gray-400 mr-1" />
                  <span>{job.salary}</span>
                </div>
              </>
            )}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
            {job.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
