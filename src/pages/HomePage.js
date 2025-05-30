// src/pages/HomePage.js
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

// 1. Import your images
import slide1Image from '../assets/slide1.jpg';
import slide2Image from '../assets/slide2.jpg';
import slide3Image from '../assets/slide3.jpg';

// 2. Create a map from filenames to imported image sources
const imageSources = {
  'slide1.jpg': slide1Image,
  'slide2.jpg': slide2Image,
  'slide3.jpg': slide3Image,
};

// 3. Update slidesData to use simple filenames for imageUrl
const slidesData = [
  {
    id: 1,
    imageUrl: 'slide1.jpg', // Now this is the filename
    title: 'Welcome to Spruce Tower Apartments',
    subtitle: 'Historic charm meets modern living in Center City',
  },
  {
    id: 2,
    imageUrl: 'slide2.jpg', // Now this is the filename
    title: 'Call to schedule a tour',
    subtitle: 'Discover your new home at 1228 Spruce Street',
  },
  {
    id: 3,
    imageUrl: 'slide3.jpg', // Now this is the filename
    title: 'Eight-story mid-rise gem',
    subtitle: 'in Washington Square West',
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 7000);
    return () => clearTimeout(timer);
  }, [currentIndex, nextSlide]);

  // Animation variants for the highlight overlay
  const overlayVariants = {
    hidden: { opacity: 0, y: -50, scaleX: 0.7, scaleY: 0.6 },
    visible: {
      opacity: 1,
      y: 0,
      scaleX: 1,
      scaleY: 1,
      transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
    },
  };

  // Animation variants for the text block
  const textVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.35 },
    },
  };

  return (
    <main>
      <section className="relative h-[calc(90vh-5rem)] w-full group">
        <div
          className="w-full h-full flex transition-transform ease-in-out duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slidesData.map((slide, slideIndex) => (
            <div
              key={slide.id}
              className="w-full h-full flex-shrink-0 relative overflow-hidden"
            >
              {/* Image Container for Ken Burns */}
              <div
                className={`w-full h-full bg-cover bg-center 
                           ${slideIndex === currentIndex ? 'kenburns-active-image' : ''}`}
                // 4. Use the imageSources map to get the correct image path
                style={{ backgroundImage: `url(${imageSources[slide.imageUrl]})` }}
              />

              {/* NEW: Light dark overlay for text visibility */}
              <div className="absolute inset-0 bg-black opacity-40"></div>

              {/* Absolute container to center the animated content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                {slideIndex === currentIndex && (
                  <motion.div
                    key={currentIndex + "-overlay"}
                    className="bg-spruce-hero-overlay p-6 sm:p-8 md:p-10 rounded-lg inline-block max-w-3xl"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div
                      key={currentIndex + "-text"}
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 leading-tight text-shadow-md text-white drop-shadow-md">
                        {slide.title}
                      </h1>
                      <p className="text-xl sm:text-2xl md:text-3xl font-light text-white text-shadow-md drop-shadow-sm">
                        {slide.subtitle}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows and Dots */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-5 sm:left-10 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10 ring-1 ring-white/0 group-hover:ring-white/50 hover:ring-white/75 focus:ring-white/75"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-5 sm:right-10 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10 ring-1 ring-white/0 group-hover:ring-white/50 hover:ring-white/75 focus:ring-white/75"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
        <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {slidesData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 outline-none ${currentIndex === idx ? 'bg-white scale-110' : 'bg-white bg-opacity-40 hover:bg-opacity-60'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Additional Marketing Section */}
     
    </main>
  );
};

export default HomePage;