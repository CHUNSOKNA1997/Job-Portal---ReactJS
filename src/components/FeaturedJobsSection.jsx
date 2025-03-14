// components/FeaturedJobsSection.jsx
import React from "react";
import JobCard from "./JobCard";

const FeaturedJobsSection = () => {
  const featuredJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      companyLogo:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      location: "New York, NY (Remote)",
      type: "Full-time",
      posted: "2 days ago",
      salary: "$120k - $150k",
      tags: ["React", "TypeScript", "Tailwind CSS", "GraphQL"],
    },
    {
      id: 2,
      title: "Product Designer",
      company: "DesignHub",
      companyLogo:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "1 week ago",
      salary: "$90k - $120k",
      tags: ["UI/UX", "Figma", "User Research", "Prototyping"],
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "CloudSystems",
      companyLogo:
        "https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      location: "Boston, MA (Hybrid)",
      type: "Contract",
      posted: "3 days ago",
      salary: "$130k - $160k",
      tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      id: 4,
      title: "Marketing Specialist",
      company: "GrowthLabs",
      companyLogo:
        "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      location: "Remote",
      type: "Part-time",
      posted: "5 days ago",
      salary: "$50k - $70k",
      tags: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
    },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Featured Jobs
          </h2>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
          >
            View All Jobs →
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobsSection;
