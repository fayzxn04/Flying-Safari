/* eslint-disable @next/next/no-img-element */
import React from "react";
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
  "About Us",
  "Itineraries",
  "Destination",
  "Gallery",
  "Blogs",
  "Contact Us",
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
  return (
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
                <li key={resource}>
                  <Link
                    href="#"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {resource}
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
  );
}
