// src/pages/AvailabilityPage.js
import React from 'react';

const AvailabilityPage = () => {
  const iframeSrc = "https://onefiftyphilly.appfolio.com/listings?1654531231956&theme_color=%23676767&filters%5Border_by%5D=date_posted";

  return (
    <div className="bg-white text-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Section 1: Page Title */}
        <section className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold uppercase tracking-wider text-ledger-gold">
            Select Availabilities
          </h1>
        </section>

        {/* Section 2: Embedded Listings (iframe) */}
        <section>
          <div className="w-full">
            <iframe
              src={iframeSrc}
              title="Current Availabilities - The Ledger Residences"
              style={{
                width: '100%',
                height: '1200px', // Adjust height as needed for good visibility
                border: '1px solid #e2e8f0', // Light gray border, similar to Tailwind's gray-300
                borderRadius: '0.5rem', // Tailwind's rounded-lg
              }}
              allowFullScreen
              // sandbox="allow-scripts allow-same-origin allow-popups allow-forms" // Optional: for added security, but might break some iframe functionality
            >
              Loading availabilities...
            </iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AvailabilityPage;