import React from "react";
import { Briefcase as BriefcaseIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <BriefcaseIcon className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">JobPortal</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting talent with opportunity and helping people build better
              careers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook h-6 w-6"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter h-6 w-6"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram h-6 w-6"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Help Center
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
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l-md bg-gray-800 text-white focus:outline-none"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
