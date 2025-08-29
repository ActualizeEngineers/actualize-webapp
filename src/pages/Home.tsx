import React, { useState, useEffect } from "react";

import "../styles/Pages/home/custom.css";

import oneBgVideo from "../assets/banners/one.mp4";
import twoBgVideo from "../assets/banners/two.mp4";

import Navbar from "../layouts/Navbar";
import WhyChoose from "../components/shared/WhyChoose";
import CoreHighlights from "../components/shared/CoreHighlights";
import PlatformInnovationPage from "../components/shared/PlatformInnovationPage";
import MegaTrends from "../components/shared/MegaTrends";
import CustomerCarousel from "../components/shared/CustomerCarousel";

const videos = [oneBgVideo, twoBgVideo];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="video-banner">
        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className={`carousel-video ${
              index === currentIndex ? "active" : ""
            }`}
          />
        ))}
        <Navbar />
      </div>

      <div className="home-content">
        {/* Core Highlights Section */}
        <CoreHighlights />

        {/* Platform-Based Innovation Section */}
        <PlatformInnovationPage />

        {/* Why Choose Us Section */}
        <WhyChoose />

        {/* Mega Trends Section */}
        <MegaTrends />

        {/* Our Customers */}
        <CustomerCarousel />
      </div>
    </>
  );
};

export default Home;
