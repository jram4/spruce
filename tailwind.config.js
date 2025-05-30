// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ledger-blue': '#414B4B',     // Now using the darker grey (rgb(65,75,75))
        'ledger-gold': '#BCA789',     // Now using the gold brown (rgb(188,167,137))
        'ledger-hero-overlay': 'rgba(65, 75, 75, 0.8)', // Using new dark grey with opacity

        // Footer Specific Colors
        'footer-bg-upper': '#414B4B',  // Using the darker grey
        'footer-text-main': '#D3D4D5', // Using the light gray (rgb(211,212,213))
        'footer-text-heading': '#FFFFFF',
        'footer-link': '#9CB292',      // Using the faded green (rgb(156,178,146))
        'footer-bg-lower': '#2C3333',  // Darker version of the grey
        'footer-text-copyright': '#D3D4D5', // Using the light gray
        'footer-icon': '#FFFFFF',
      },
      fontFamily: {
        // sans: ['YourCustomFont', 'sans-serif'],
      }
    },
  },
  plugins: [],
}