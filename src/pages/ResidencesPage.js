// src/pages/ResidencesPage.js
import React from 'react';
import RTop from '../assets/r1.jpg';
import RMain from '../assets/r2.jpg';
import RBed from '../assets/r3.jpg';
import RBath from '../assets/r4.jpg';
import { IoDiamondOutline } from "react-icons/io5";

// If you have a specific brand icon for Spruce, you might use that instead.
// For now, we'll keep the diamond and update its color.
const DiamondIcon = () => (
  <svg
    className="w-8 h-8 text-teal-700" // UPDATED: Color
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M12 1.666L22.334 12 12 22.334 1.666 12 12 1.666z"></path>
  </svg>
);


const ResidencesPage = () => {
  return (
    <div className="bg-white text-gray-700">
      {/* Section 1: Main Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-700"> {/* UPDATED: Color */}
              RESIDENCES
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              Classic Charm, City Views
            </h1>
            <p className="text-lg leading-relaxed text-gray-600">
              Spruce Tower Apartments offers a collection of classic residences within an historic eight-story mid-rise gem in Washington Square West. Discover homes featuring beautiful city views, ample windows that fill each space with natural light, and generous closet space.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Our apartments provide both timeless charm and modern convenience, thoughtfully designed to enhance your urban living experience. Located at 1228 Spruce Street, enjoy an unbeatable Center City Philadelphia location, steps from key landmarks and vibrant neighborhood amenities.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Find your perfect balance of style and comfort at The Spruce.
            </p>
          </div>
          <div>
            <img
              src={RTop}
              alt="Bright Kitchen Interior at Spruce Tower Apartments" // UPDATED: Alt text
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Full-Width Feature Image */}
      <section className="py-8 md:py-12 overflow-visible">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={RMain}
            alt="Spacious Living Area with City Views at The Spruce" // UPDATED: Alt text
            className="w-full h-[45vh] sm:h-[55vh] md:h-[65vh] object-cover rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* Section 3: General Apartment Features List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            Inside Your Spruce Tower Home
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto text-gray-600">
            <ul className="space-y-3 list-disc list-inside">
              <li>Spacious studio, one-, two- and three- bedroom residences*</li> {/* Added asterisk for typical "select units" disclaimer */}
              <li>Oversized windows with rich natural light & city views</li> {/* Emphasized views */}
              <li>Impressive 9-10’ ceilings</li>
              <li>Convenient washer/dryers in every home</li>
            </ul>
            <ul className="space-y-3 list-disc list-inside">
              <li>Recessed LED lighting throughout</li>
              <li>Generous closets with custom built-ins</li> {/* Aligns with pitch */}
              <li>Individually controlled heat & air conditioning</li>
              <li>Pre-wired for high-speed internet/cable services</li>
            </ul>
          </div>
          <p className="text-center text-xs text-gray-500 mt-8">*Floor plan types and specific features may vary. Please inquire for details.</p>
        </div>
      </section>

      {/* Section 4 & 5 MERGED: Bedroom/Kitchen & Bathroom/Bath Features */}
      <section className="py-16 md:py-24 bg-gray-50"> {/* Changed background for visual separation */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Column 1: Bedroom Image + Kitchen Features */}
            <div className="space-y-8">
              <img
                src={RBed}
                alt="Comfortable Bedroom at Spruce Tower Apartments" // UPDATED: Alt text
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
              <div>
                <h3 className="text-2xl font-semibold text-teal-700 mb-5"> {/* UPDATED: Color */}
                  Kitchen Highlights
                </h3>
                <ul className="space-y-3 text-gray-600 list-disc list-inside">
                  <li>Open layouts, many with serving islands</li>
                  <li>Custom kitchen cabinetry</li>
                  <li>Stainless steel appliances</li>
                  <li>Durable Caesarstone countertops</li>
                  <li>Full height tile backsplash</li>
                </ul>
              </div>
            </div>

            {/* Column 2: Bathroom Image + Bath Features */}
            <div className="space-y-8">
              <img
                src={RBath}
                alt="Modern Bathroom at Spruce Tower Apartments" // UPDATED: Alt text
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
              <div>
                <h3 className="text-2xl font-semibold text-teal-700 mb-5"> {/* UPDATED: Color */}
                  Bath Luxuries
                </h3>
                <ul className="space-y-3 text-gray-600 list-disc list-inside">
                  <li>Carrara marble style floors</li>
                  <li>Oversized medicine cabinets</li>
                  <li>Walk-in rain shower (in select units)</li> {/* Added specificity */}
                  <li>Duravit deep soaking tub (in select units)</li> {/* Added specificity */}
                  <li>Frameless glass shower doors</li>
                  <li>Modern chrome hardware & accessories</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Pre-Furnished Units Section */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-lg shadow-xl">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <IoDiamondOutline className="w-12 h-12 text-teal-700" /> {/* UPDATED: Color */}
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-gray-800">
                Pre-Furnished Options Available
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Select residences at Spruce Tower Apartments can be pre-furnished by our dedicated team. Your move-in coordinator can help you choose from available furniture styles (to rent or purchase), ensuring your new apartment is ready from the moment you arrive. Please contact the leasing office for details and pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResidencesPage;