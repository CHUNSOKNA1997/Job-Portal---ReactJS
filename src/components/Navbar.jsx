import React, { useState } from "react";
import {
  Search as SearchIcon,
  Briefcase as BriefcaseIcon,
  Building2 as BuildingIcon,
  UserPlus as UserPlusIcon,
  LogIn as LogInIcon,
  Menu as MenuIcon,
  X as XIcon,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <BriefcaseIcon className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              JobPortal
            </span>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600"
            >
              <BriefcaseIcon className="h-4 w-4 mr-1" />
              Find Jobs
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600"
            >
              <BuildingIcon className="h-4 w-4 mr-1" />
              Companies
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600"
            >
              <SearchIcon className="h-4 w-4 mr-1" />
              Browse Categories
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Post a Job
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600"
            >
              <LogInIcon className="h-4 w-4 mr-1" />
              Login
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <UserPlusIcon className="h-4 w-4 mr-1" />
              Register
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <XIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="flex items-center px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
            >
              <BriefcaseIcon className="h-5 w-5 mr-2" />
              Find Jobs
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
            >
              <BuildingIcon className="h-5 w-5 mr-2" />
              Companies
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
            >
              <SearchIcon className="h-5 w-5 mr-2" />
              Browse Categories
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-base font-medium text-blue-600 hover:text-blue-800"
            >
              Post a Job
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
            >
              <LogInIcon className="h-5 w-5 mr-2" />
              Login
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <UserPlusIcon className="h-5 w-5 mr-2" />
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
