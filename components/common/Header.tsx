/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import useScrollDirection from "@/hooks/useScrollDirection";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPastBanner, setIsPastBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const banner =
        document.querySelector(".banner") || document.querySelector("#banner");

      if (!banner) {
        setIsPastBanner(true);
        return;
      }

      const bannerHeight = banner.getBoundingClientRect().height;
      setIsPastBanner(window.scrollY > bannerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollDirection = useScrollDirection();

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/destination", label: "Destination" },
    { href: "/itineraries", label: "Itineraries" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isPastBanner ? "bg-primary" : "bg-transparent"
        } ${
          scrollDirection === "up" || isMenuOpen
            ? "translate-y-0"
            : "-translate-y-full"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between py-5 px-4">
            <Link href="/" className="relative z-60">
              {/* Desktop Logo */}
              <img
                src="/images/logo.png"
                alt="Logo"
                className="hidden md:block w-50 h-25 object-contain py-1"
              />
              {/* Mobile Logo */}
              <img
                src="/images/mobile-logo.png"
                alt="Logo"
                className="block md:hidden w-24 h-full object-contain py-1"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center px-6 py-4 rounded-lg border border-white/40 bg:#FFF80 backdrop-blur-[10.9px] space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white transition-colors duration-300 text-base  font-bold tracking-[0.08em]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-60 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Separate from header to avoid scroll issues */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-primary transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl font-medium hover:text-secondary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
