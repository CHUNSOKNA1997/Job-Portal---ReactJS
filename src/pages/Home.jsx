// Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedJobsSection from "../components/FeaturedJobsSection";
import JobCategoriesSection from "../components/JobCategoriesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <FeaturedJobsSection />
      <JobCategoriesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Home;
