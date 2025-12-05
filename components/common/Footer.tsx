/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

import Link from "next/link";
import {
  contactInfo,
  destinations,
  resources,
  socialLinks,
} from "@/utils/utilsConst";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribe email:", email);
  };
  return (
    <>
      <div className="bg-[url('/images/footer-logo.webp')] bg-cover bg-center bg-no-repeat h-[550px] mt-10 lg:mt-20 relative">
        {/* White gradient overlay for text fade effect */}
        <div className="absolute top-0 left-0 w-full h-60 bg-linear-to-b from-white to-transparent z-10 pointer-events-none"></div>

        <h2 className="lg:text-[188px] text-5xl md:text-8xl uppercase text-white lg:tracking-[7.5px] tracking-wide absolute lg:-top-6 -top-6 max-md:mt-10 md:left-1/2 md:-translate-x-1/2 max-md:px-auto text-center w-full">
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
              className="flex sm:flex-row items-center justify-center gap-4 border border-white backdrop-blur-[10.9px] rounded-full"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                required
                className="px-6 py-2 rounded-full w-full sm:w-80 text-white focus:outline-none font-bold placeholder:text-white tracking-[0.28px] md:tracking-[1.28px]"
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

      <footer className="bg-[url('/images/footer-blogo.webp')] bg-cover bg-center bg-no-repeat py-8 px-6 lg:px-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-16">
            {/* Logo */}
            <div className="flex flex-col space-y-6">
              <img
                src="/images/logo.png"
                alt="Flying Safari Logo"
                className="md:w-56 w-32 h-auto cursor-pointer"
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
            <p className="order-1 md:order-3 text-sm md:text-base font-light text-white text-center md:text-left">
              Privacy Policy | Terms & conditions
            </p>

            <p className="order-2 md:order-1 text-sm md:text-base font-light text-white text-center md:text-left">
              @ {new Date().getFullYear()} Flying Safari Limited. All rights
              reserved.
            </p>

            <p className="order-3 md:order-2 text-sm md:text-base font-light text-white text-center md:text-left">
              Designed & Developed by{" "}
              <span className="font-regular">
                <a
                  href="https://dotsyndicate.com/"
                  target="_blank"
                  className="font-medium text-secondary max-md:text-secondary"
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
