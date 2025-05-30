// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for client-side routing
import logo from '../assets/logo.png';

// Reusable NavLink for desktop items without dropdowns
const NavLink = ({ title, to }) => (
  <Link
    to={to}
    // MODIFIED: Text color for dark navbar background
    className="group text-gray-100 hover:text-ledger-gold px-4 flex items-center h-full text-sm font-medium relative"
  >
    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-[2px] bg-ledger-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
    {title}
  </Link>
);

// Reusable DropdownLink for desktop items with dropdowns
const DesktopDropdownLink = ({ title, items = [], isExternalLink = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        // MODIFIED: Text color for dark navbar background
        className="group text-gray-100 hover:text-ledger-gold px-4 flex items-center h-full text-sm font-medium relative focus:outline-none"
      >
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-[2px] bg-ledger-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
        {title}
        {items.length > 0 && (
          <svg
            // MODIFIED: SVG icon color for dark navbar background
            className={`ml-1.5 h-4 w-4 text-gray-300 group-hover:text-ledger-gold transform transition-transform duration-150 ${
              isOpen ? 'rotate-180' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      {/* Dropdown content remains bg-white, text inside is fine */}
      {isOpen && items.length > 0 && (
        <div className="absolute left-0 top-full mt-0 w-64 bg-white rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
          {items.map((item) => (
            isExternalLink || item.isExternal ? (
              <a
                key={item.name}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-ledger-gold"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.to}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-ledger-gold"
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  );
};

// Component for links in the mobile menu (content is within a bg-white panel, so text colors are fine)
const MobileNavLink = ({ to, children, onClick, isExternal = false }) => (
  isExternal ? (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-ledger-gold hover:bg-gray-50 rounded-md"
    >
      {children}
    </a>
  ) : (
    <Link
      to={to}
      onClick={onClick}
      className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-ledger-gold hover:bg-gray-50 rounded-md"
    >
      {children}
    </Link>
  )
);

// Component for dropdowns in the mobile menu (content is within a bg-white panel, so text colors are fine)
const MobileDropdownLink = ({ title, items = [], closeMobileMenu, isExternalLink = false }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
        className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-700 hover:text-ledger-gold hover:bg-gray-50 rounded-md"
      >
        <span>{title}</span>
        <svg
          className={`ml-1.5 h-5 w-5 transform transition-transform duration-150 ${isSubMenuOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
        </svg>
      </button>
      {isSubMenuOpen && (
        <div className="pl-4 mt-1 space-y-1">
          {items.map((item) => (
            <MobileNavLink key={item.name} to={item.to} onClick={closeMobileMenu} isExternal={isExternalLink || item.isExternal}>
              {item.name}
            </MobileNavLink>
          ))}
        </div>
      )}
    </div>
  );
};


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const buildingItems = [
    { name: 'Amenities', to: '/amenities' },
    { name: 'Residences', to: '/residences' },
    { name: 'Neighborhood', to: '/neighborhood' },
  ];

  const virtualToursItems = [
    { name: 'Studio', to: 'https://my.matterport.com/show/?model=3MzMDwGxXde', isExternal: true },
    { name: '1-Bedroom w/ Home Office', to: 'https://my.matterport.com/show/?model=MsEtJtiNcMw&', isExternal: true },
    { name: '2-Bedroom City View', to: 'https://my.matterport.com/show/?model=3aDC7kGE27i', isExternal: true },
    { name: '2-Bedroom Park View', to: 'https://my.matterport.com/show/?m=Jy4vPRC8itS&mls=1', isExternal: true },
    { name: '3-Bedroom', to: 'https://my.matterport.com/show/?model=GEsyDEFoNKj', isExternal: true },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    // MODIFIED: Navbar background color
    <nav className="bg-[rgb(63,64,71)] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex items-center justify-between h-full">
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMobileMenu}>
              <img className="h-12 w-auto" src={logo} alt="The Ledger" />
            </Link>
          </div>

          {/* Desktop Links use updated NavLink and DesktopDropdownLink with lighter text */}
          <div className="hidden lg:flex items-center h-full space-x-5">
            <DesktopDropdownLink title="Tower" items={buildingItems} />
            <NavLink title="Availability" to="/availability" />
            <NavLink title="Gallery" to="/gallery" />
            <NavLink title="Contact Us" to="/contact-us" />
          </div>

          {/* Desktop Buttons: These have their own backgrounds, so text colors are fine */}
          <div className="hidden lg:flex items-center space-x-2">
            <a
              href="http://spruce.youcanbook.me"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-sm font-medium text-white bg-ledger-blue hover:bg-ledger-gold rounded-md shadow-sm transition-colors duration-150"
            >
              Schedule Tour
            </a>
            <a
              href="/availability/"
              className="px-4 py-2.5 text-sm font-medium text-ledger-blue bg-white hover:bg-ledger-gold hover:text-white border border-ledger-blue hover:border-ledger-gold rounded-md shadow-sm transition-colors duration-150"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              // MODIFIED: Icon color and hover states for dark navbar
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ledger-blue"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel remains bg-white, text inside is fine */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 inset-x-0 z-40 transform origin-top shadow-lg" id="mobile-menu">
          <div className="bg-white pt-2 pb-3 space-y-1 sm:px-3 px-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <MobileDropdownLink title="Building" items={buildingItems} closeMobileMenu={closeMobileMenu} />
            <MobileNavLink to="/availability" onClick={closeMobileMenu}>Availability</MobileNavLink>
            <MobileNavLink to="/gallery" onClick={closeMobileMenu}>Gallery</MobileNavLink>
            <MobileNavLink to="/contact-us" onClick={closeMobileMenu}>Contact Us</MobileNavLink>
            <MobileDropdownLink title="Virtual Tours" items={virtualToursItems} closeMobileMenu={closeMobileMenu} isExternalLink={true} />

            <div className="pt-4 pb-2 border-t border-gray-200 space-y-2">
              <MobileNavLink to="http://spruce.youcanbook.me" onClick={closeMobileMenu} isExternal={true}>
                <span className="block w-full text-center px-4 py-2 text-white bg-ledger-blue hover:bg-ledger-gold rounded-md shadow-sm">Schedule Tour</span>
              </MobileNavLink>
              <MobileNavLink to="https://www.ledgerphilly.com/availability/" onClick={closeMobileMenu} isExternal={true}>
                 <span className="block w-full text-center px-4 py-2 text-ledger-blue bg-white hover:bg-ledger-gold hover:text-white border border-ledger-blue hover:border-ledger-gold rounded-md shadow-sm">Apply Now</span>
              </MobileNavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;