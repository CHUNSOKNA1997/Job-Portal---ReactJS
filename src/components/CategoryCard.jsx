import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
      <div className="mx-auto h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4">
        {category.icon}
      </div>
      <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1">
        {category.name}
      </h3>
      <p className="text-xs sm:text-sm text-gray-500">
        {category.jobCount} jobs available
      </p>
    </div>
  );
};

export default CategoryCard;
