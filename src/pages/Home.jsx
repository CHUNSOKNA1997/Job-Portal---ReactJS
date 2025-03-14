import React from "react";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import CategoryCard from "../components/CategoryCard";
import {
  Search as SearchIcon,
  MapPin as MapPinIcon,
  Code as CodeIcon,
  Briefcase as BriefcaseIcon,
  PenTool as PenToolIcon,
  LineChart as LineChartIcon,
  ShoppingBag as ShoppingBagIcon,
  Award as AwardIcon,
  Building as BuildingIcon,
  Server as ServerIcon,
  Upload as UploadIcon,
  Search as MagnifyingGlassIcon,
  CheckCircle as CheckCircleIcon,
  Users as UsersIcon,
} from "lucide-react";

const Home = () => {
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="bg-blue-700 text-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto py-12 md:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Find Your Dream Job Today
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto text-blue-100 px-4">
              Discover thousands of job opportunities with all the information
              you need.
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
                Create your profile once and apply to jobs with just a few
                clicks.
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
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Sarah J."
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Sarah J.</h4>
                  <p className="text-gray-600 text-sm">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I found my dream job within just 2 weeks of signing up. The
                platform is so intuitive and the job recommendations were spot
                on!"
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Michael T."
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Michael T.</h4>
                  <p className="text-gray-600 text-sm">Product Manager</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As someone hiring for my team, JobPortal made it incredibly
                easy to find qualified candidates. We filled our position in
                record time!"
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Jessica L."
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Jessica L.</h4>
                  <p className="text-gray-600 text-sm">Marketing Director</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The career resources and salary insights helped me negotiate a
                much better offer. I'm so glad I used JobPortal for my job
                search!"
              </p>
            </div>
          </div>
        </div>
      </section>
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
      <footer className="bg-gray-900 text-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto py-10 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BriefcaseIcon className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">JobPortal</span>
              </div>
              <p className="text-gray-400 mb-4">
                Connecting talent with opportunity and helping people build
                better careers.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 01-1.768-1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.504 2.504 0 01-1.768 1.768c-1.538.013-2.784.06-3.808.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Job Seekers</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Browse Companies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Salary Calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Career Advice
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Resume Builder
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Employers</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Browse Candidates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Recruitment Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Advertise with Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
