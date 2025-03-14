// components/JobCategoriesSection.jsx
import React from "react";
import CategoryCard from "./CategoryCard";
import {
  Code as CodeIcon,
  PenTool as PenToolIcon,
  LineChart as LineChartIcon,
  ShoppingBag as ShoppingBagIcon,
  Users as UsersIcon,
  Award as AwardIcon,
  Building as BuildingIcon,
  Server as ServerIcon,
} from "lucide-react";

const JobCategoriesSection = () => {
  const jobCategories = [
    {
      id: 1,
      name: "Software Development",
      jobCount: 1204,
      icon: <CodeIcon className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 2,
      name: "Design",
      jobCount: 742,
      icon: <PenToolIcon className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 3,
      name: "Marketing",
      jobCount: 513,
      icon: <LineChartIcon className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 4,
      name: "Sales",
      jobCount: 326,
      icon: <ShoppingBagIcon className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 5,
      name: "Customer Service",
      jobCount: 689,
      icon: <UsersIcon className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 6,
      name: "HR & Recruiting",
      jobCount: 245,
      icon: <AwardIcon className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 7,
      name: "Management",
      jobCount: 318,
      icon: <BuildingIcon className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 8,
      name: "IT & Networking",
      jobCount: 437,
      icon: <ServerIcon className="h-6 w-6 text-blue-600" />,
    },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gray-100 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Popular Job Categories
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Explore jobs by category and find the perfect role for your skills
            and experience
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {jobCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategoriesSection;
