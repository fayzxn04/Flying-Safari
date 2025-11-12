"use client";
import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    // When the component loads, we remember the user’s starting scroll position (how far they’ve scrolled).
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    // Every time the user scrolls the page, run this function called updateScrollDirection.”
    window.addEventListener("scroll", updateScrollDirection);
    // just clean-up code to prevent from bugs.
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);
  return scrollDirection;
};

export default useScrollDirection;
