// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import footerIcons from '../assets/footeri.png'; // Import your combined icons image

const Footer = () => {
  return (
    <footer>
      {/* Upper Footer Section */}
      <div className="bg-footer-bg-upper text-footer-text-main">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
            <div>
              <h3 className="text-lg font-semibold text-footer-text-heading mb-4">
                Spruce Tower Apartments
              </h3>
              <p className="text-sm leading-relaxed">
                1228 Spruce Street
                <br />
                Philadelphia, PA 19107
              </p>
              <a
                href="https://www.google.com/maps/place/1228+Spruce+St,+Philadelphia,+PA+19107"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-footer-link hover:text-sky-300 underline transition-colors duration-150"
              >
                MAP
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-footer-text-heading mb-4">
                Contact us to schedule a tour
              </h3>
              <p className="text-sm font-semibold text-footer-link hover:text-sky-300 underline transition-colors duration-150">
                <a href="tel:+1-833-533-4371">(833) 533-4371</a> {/* Assuming phone number remains or will be updated separately */}
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                Or{' '}
                <Link
                  to="/contact-us"
                  className="text-footer-link hover:text-sky-300 underline transition-colors duration-150"
                >
                  drop us a line!
                </Link>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-footer-text-heading mb-4">
                Leasing now!
              </h3>
              <Link
                to="/availability"
                className="text-sm text-footer-link hover:text-sky-300 underline transition-colors duration-150"
              >
                Apply today
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer Section - UPDATED for centering and icon size */}
      <div className="bg-black text-footer-text-copyright">
        <div className="container mx-auto px-6 py-8">
          {/* UPDATED: Centering content */}
          <div className="flex flex-col items-center text-center space-y-3"> {/* Use flex-col, items-center, text-center, and space-y */}
            <p className="text-xs">
              © {new Date().getFullYear()} Spruce Tower Apartments. All Rights Reserved.
            </p>
            <div>
              <img
                src={footerIcons}
                alt="Equal Housing Opportunity and Accessibility Icons"
                className="h-6 w-auto" // Increased height from h-5 to h-6 (or h-7 if needed)
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;