// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Gets the current URL path

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional: Use "auto" to skip smooth scrolling, "smooth" for smooth scrolling
    });
  }, [pathname]); // Effect runs when the pathname changes

  return null; // This component does not render anything itself
};

export default ScrollToTop;