// src/pages/GalleryPage.js
import React from 'react';

// IMPORTANT: Replace these imports with actual images from Spruce Tower Apartments
import gallery1 from '../assets/g1.png'; // e.g., Spruce Tower Exterior
import gallery2 from '../assets/g2.jpg'; // e.g., Spruce Apartment Living Room
import gallery3 from '../assets/g3.jpg'; // e.g., Spruce Kitchen View
import gallery4 from '../assets/g4.jpg'; // e.g., Spruce Bedroom
import gallery5 from '../assets/g5.jpg'; // e.g., Spruce Bathroom Detail
import gallery6 from '../assets/g6.jpg'; // e.g., View from Spruce Apartment
import gallery7 from '../assets/g7.jpg'; // e.g., Spruce Lobby
import gallery8 from '../assets/g8.jpg'; // e.g., Spruce Amenity Space
import gallery9 from '../assets/g9.jpg'; // e.g., Washington Square West streetscape
import gallery10 from '../assets/g10.jpg';// e.g., Another Spruce Interior Detail
import gallery11 from '../assets/g11.jpg';
import gallery12 from '../assets/g12.jpg';
import gallery13 from '../assets/g13.jpg';
import gallery14 from '../assets/g14.jpg';
import gallery15 from '../assets/g15.jpg';

// This array will start from what was previously gallery2.jpg.
// ALT TEXT WILL NEED TO BE UPDATED BASED ON NEW SPRUCE IMAGES
const galleryGridData = [
  // Row 1 in the grid (was row 2 of images)
  { type: 'double', src1: gallery2, alt1: 'Spruce Apartment Living Space', src2: gallery3, alt2: 'Modern Kitchen at The Spruce' },
  // Row 2 in the grid (was row 3 of images)
  { type: 'single', src: gallery4, alt: 'Bright Bedroom at Spruce Tower Apartments' },
  // Row 3 in the grid
  { type: 'double', src1: gallery5, alt1: 'Elegant Dining Area in Spruce Residence', src2: gallery6, alt2: 'Kitchen Finishes at The Spruce' },
  // Row 4 in the grid
  { type: 'double', src1: gallery7, alt1: 'Contemporary Bathroom Design', src2: gallery8, alt2: 'Spacious Bedroom Interior' },
  // Row 5 in the grid
  { type: 'single', src: gallery9, alt: 'Living Area with City Views from The Spruce' },
  // Row 6 in the grid
  { type: 'double', src1: gallery10, alt1: 'Kitchen Detail at Spruce Tower', src2: gallery11, alt2: 'Open Concept Kitchen and Living Space' },
  // Row 7 in the grid
  { type: 'single', src: gallery12, alt: 'Cozy Bedroom Nook at The Spruce' },
  // Row 8 in the grid
  { type: 'double', src1: gallery13, alt1: 'Window View from a Spruce Apartment', src2: gallery14, alt2: 'Stylish Bathroom Tile Work' },
  // Row 9 in the grid
  { type: 'single', src: gallery15, alt: 'Modern Kitchen Island at The Spruce' },
];

const GalleryPage = () => {
  const sprucePrimaryColor = "text-teal-700"; // Your Spruce brand color class

  return (
    <div className="bg-white">
      {/* Section 1: Text Hero (Left) & First Image (Right) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column (Text Content) */}
          <div className="space-y-4 text-center md:text-left">
            <p className={`text-sm font-semibold uppercase tracking-wider ${sprucePrimaryColor}`}>
              GALLERY
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              The Spruce Lifestyle
            </h1>
            <p className="text-xl text-gray-700">
              Historic Charm / City Views / Prime Location
            </p>
            <p className="text-xl text-gray-700">
              Modern Comforts / Washington Square West / Convenience
            </p>
          </div>
          {/* Right Column (First Image) */}
          <div className="w-full">
            <img
              src={gallery1} // IMPORTANT: Replace with a key Spruce Tower Apartments image
              alt="Exterior or Key Feature of Spruce Tower Apartments" // UPDATE ALT TEXT
              className="w-full h-auto md:h-[350px] lg:h-[450px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4 md:space-y-6"> {/* Vertical gap between rows */}
          {galleryGridData.map((item, index) => (
            <div key={index}>
              {item.type === 'single' && (
                <img
                  src={item.src} // IMPORTANT: Replace with Spruce images
                  alt={item.alt} // UPDATE ALT TEXT
                  className="w-full h-auto md:h-[60vh] object-cover rounded-lg shadow-lg align-bottom"
                />
              )}
              {item.type === 'double' && (
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                  <div className="w-full sm:w-1/2">
                    <img
                      src={item.src1} // IMPORTANT: Replace with Spruce images
                      alt={item.alt1} // UPDATE ALT TEXT
                      className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg align-bottom"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <img
                      src={item.src2} // IMPORTANT: Replace with Spruce images
                      alt={item.alt2} // UPDATE ALT TEXT
                      className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg align-bottom"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;