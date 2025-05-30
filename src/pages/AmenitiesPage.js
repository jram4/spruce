// src/pages/AmenitiesPage.js
import React from 'react';
import MainBuildingImage from '../assets/a2.jpg'; // Renamed for clarity, assuming it's a key building/interior shot
import BuildingDuskImage from '../assets/atop.png'; // Renamed for clarity
import LifestyleImage1 from '../assets/adobestock1.jpg'; // Generic names are fine for these
import LifestyleImage2 from '../assets/adobestock2.jpg';
import LifestyleImage3 from '../assets/adobestock3.jpg';
import LifestyleImage4 from '../assets/adobestock4.jpg';

const AmenitiesPage = () => {
  return (
    <div className="bg-white text-gray-700">
      {/* Section 1: Main Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-700"> {/* UPDATED: Color */}
              AMENITIES
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              Historic Charm, Modern Comforts
            </h1>
            <p className="text-lg leading-relaxed text-gray-600">
              Welcome to Spruce Tower Apartments, where the timeless appeal of a historic Washington Square West gem meets the conveniences of modern city living. Our thoughtfully curated amenities are designed to enhance your lifestyle, offering both elegance and practicality.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              At The Spruce, we provide a seamless blend of personal sanctuary and community engagement. From essential services that simplify your day to inviting spaces for work, relaxation, and socializing, discover how our amenities cater to every facet of your life, including thoughtful touches for your pets.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Experience the perfect balance of classic apartment features like beautiful city views and generous layouts, complemented by building amenities that make 1228 Spruce Street an exceptional place to call home.
            </p>
          </div>
          <div className="md:col-span-2">
            <img
              src={BuildingDuskImage}
              alt="Spruce Tower Apartments Exterior at Dusk" // UPDATED: Alt text
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Prominent Wide/Tall-ish Image */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={MainBuildingImage}
            alt="Elegant Interior Space at Spruce Tower Apartments" // UPDATED: Alt text
            className="rounded-lg shadow-xl w-full h-[40vh] sm:h-[50vh] md:h-[60vh] object-cover"
          />
        </div>
      </section>

      {/* Section 3: Featured Amenities List */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-teal-700 mb-12"> {/* UPDATED: Color */}
            Featured Amenities <span className="text-gray-400 text-lg align-super">*</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto text-gray-600">
            <ul className="space-y-3 list-disc list-inside">
              <li>Full-time attended lobby & concierge</li>
              <li>Adjacent parking garage access</li> {/* Slightly rephrased */}
              <li>Secure package acceptance</li> {/* Slightly rephrased */}
              <li>Wi-Fi in common areas</li> {/* Slightly rephrased */}
            </ul>
            <ul className="space-y-3 list-disc list-inside">
              <li>Comfortable resident lounge</li>
              <li>Private conference rooms for work or study</li>
              <li>Engaging children's activity room</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Lifestyle Image Row with Text Overlay */}
      <section className="relative py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-10 text-center px-4">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-teal-700 bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-md shadow-lg inline-block"> {/* UPDATED: Color */}
              Spaces for well-being, convenience, and four-legged friends.
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 relative z-0">
            <img
              src={LifestyleImage3}
              alt="Resident enjoying fitness amenities" // UPDATED: Alt text
              className="rounded-md shadow-md w-full h-52 sm:h-64 object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src={LifestyleImage1}
              alt="Pet-friendly living at The Spruce" // UPDATED: Alt text
              className="rounded-md shadow-md w-full h-52 sm:h-64 object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src={LifestyleImage2}
              alt="Modern fitness equipment" // UPDATED: Alt text
              className="rounded-md shadow-md w-full h-52 sm:h-64 object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src={LifestyleImage4}
              alt="Relaxing space for residents and pets" // UPDATED: Alt text
              className="rounded-md shadow-md w-full h-52 sm:h-64 object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default AmenitiesPage;