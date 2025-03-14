// components/TestimonialsSection.jsx
import React from "react";

const TestimonialsSection = () => {
  return (
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
              "As someone hiring for my team, JobPortal made it incredibly easy
              to find qualified candidates. We filled our position in record
              time!"
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
  );
};

export default TestimonialsSection;
