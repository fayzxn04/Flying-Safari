/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

import Link from "next/link";

const socialLinks = [
  { name: "Instagram", icon: "/images/insta.png", url: "#" },
  { name: "Facebook", icon: "/images/facebook.png", url: "#" },
  { name: "LinkedIn", icon: "/images/linkedin.png", url: "#" },
  { name: "Twitter", icon: "/images/x.png", url: "#" },
];

const destinations = [
  "Arusha",
  "Serengeti",
  "Kilimanjaro",
  "Ngorongoro Crater",
  "Lake Manyara",
  "Tarangire",
  "Mabele Mountains",
];

const resources = [
  { name: "About Us", href: "/about" },
  { name: "Itineraries", href: "/itineraries" },
  { name: "Destination", href: "/destination" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
];

const contactInfo = [
  { type: "tel", value: "+255 76894 8945", href: "tel:+255768948945" },
  {
    type: "email",
    value: "info@flyingsafari.ae",
    href: "mailto:info@flyingsafari.ae",
  },
  {
    type: "email",
    value: "contact@flyingsafari.ae",
    href: "mailto:contact@flyingsafari.ae",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribe email:", email);
  };
  return (
    <>
      <div className="max-width">
        <div className="bg-[url('/images/footer-logo.webp')] bg-cover bg-center bg-no-repeat h-[550px] mt-25 relative">
          <h2 className="lg:text-[188px] text-5xl uppercase text-white lg:tracking-[7.5px] tracking-wide lg:px-6 text-center absolute lg:-top-10 lg:right-14 -top-2 px-5">
            Flying Safari
          </h2>

          {/* Subscribe Section */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <p className="text-white text-lg md:text-xl mb-2">
                Subscribe for latest update & offers
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex sm:flex-row items-center justify-center gap-4 border  border-white/40  bg:#FFF80 backdrop-blur-[10.9px] rounded-full"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  required
                  className="px-6 py-2 rounded-full w-full sm:w-80 text-white focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="md:px-8 md:py-3 px-4 py-2 bg-primary text-white rounded-full hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[url('/images/footer-blogo.webp')] bg-cover bg-center bg-no-repeat py-8 px-6 lg:px-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-16">
            {/* Logo */}
            <div className="flex flex-col space-y-6">
              <img
                src="/images/logo.png"
                alt="Flying Safari Logo"
                className="md:w-56 w-34 h-auto cursor-pointer"
              />
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      width={24}
                      height={24}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Destination Section */}
            <div className="tracking-wider">
              <h3 className="text-secondary text-lg font-semibold mb-4">
                Destination
              </h3>
              <ul className="space-y-3">
                {destinations.map((destination) => (
                  <li key={destination}>
                    <Link
                      href="#"
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {destination}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Section */}
            <div className="tracking-wider">
              <h3 className="text-secondary text-lg font-semibold mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <Link
                      href={resource.href}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="tracking-wider">
              <h3 className="text-secondary text-lg font-semibold mb-4">
                Contact us
              </h3>
              <ul className="space-y-3">
                {contactInfo.map((contact) => (
                  <li key={contact.value}>
                    <a
                      href={contact.href}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {contact.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end py-4 gap-3 md:pb-7 md:mt-10 tracking-wider max-md:mt-7">
            <div className="order-1 md:order-3">
              <p className="text-sm md:text-base font-light text-white text-center md:text-left">
                Privacy Policy | Terms & conditions
              </p>
            </div>

            <div className="order-2 md:order-1">
              <p className="text-sm md:text-base font-light text-white text-center md:text-left">
                @ {new Date().getFullYear()} Flying Safari Limited. All rights
                reserved.
              </p>
            </div>

            <p className="order-3 md:order-2 text-sm md:text-base font-light text-white text-center md:text-left">
              Designed & Developed by{" "}
              <span className="font-regular">
                <a
                  href="https://dotsyndicate.com/"
                  target="_blank"
                  className="font-medium text-secondary max-md:text-primary"
                >
                  DotSyndicate
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
