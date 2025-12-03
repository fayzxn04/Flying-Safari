/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

interface ItinerariesOverviewProps {
  nights?: number;
  days?: number;
  locations?: string[];
  mainImage?: string;
}

export default function ItinerariesOverview({
  nights = 5,
  days = 6,
  locations = ["Nairobi", "Maasai Mara"],
  mainImage = "/images/itinerary-1.png",
}: ItinerariesOverviewProps) {
  // Gallery images - using the main image repeated for demo
  // You can extend the data structure to have multiple images per itinerary
  const galleryImages = [
    mainImage,
    mainImage,
    mainImage,
    mainImage,
    mainImage,
    mainImage,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };
  return (
    <div className="section-container py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Overview Label */}
        <p className="small-heading text-center mb-3">OVERVIEW</p>

        {/* Main Heading */}
        <h2 className="big-heading text-center mb-6 text-black">
          Trip Highlights & Summary
        </h2>

        {/* Description Paragraphs */}
        <div className="space-y-6 text-center text-dark-grey leading-relaxed text-sm md:text-base">
          <p>
            The Maasai Mara Express Adventure Safari is the perfect way to
            experience the heart of Africa in just six days. Starting in
            Nairobi, you&apos;ll journey through the scenic Great Rift Valley
            before arriving in the world-famous Maasai Mara National Reserve.
            <p>
              Over the next few days, enjoy thrilling game drives across vast
              savannahs, where lions, elephants, cheetahs, giraffes, and more
              roam freely. If traveling during the Great Migration season (July,
              October), you&apos;ll witness one of nature&apos;s greatest
              spectacles — thousands of wildebeest and zebras crossing the Mara
              River.
            </p>
          </p>

          <p>
            Beyond the wildlife, the safari offers a glimpse into Maasai
            culture, giving you the chance to interact with local communities
            and learn about their traditions. For an unforgettable highlight,
            you can add a sunrise hot air balloon safari, floating silently
            above the plains as the wilderness awakens.
          </p>
        </div>

        {/* Trip Details */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-5">
          <div className="bg-primary text-white px-2.5 py-1.5 rounded-md text-sm md:text-lg font-light">
            {days}D/{nights}N
          </div>
          {locations.map((location, index) => (
            <div
              key={index}
              className="text-dark-grey text-sm md:text-base font-light"
            >
              • {location}
            </div>
          ))}
        </div>

        {/* Image Gallery*/}
        <div className="mt-12">
          {/* Main Image */}
          <div className="relative w-full h-[440px] rounded-lg overflow-hidden mb-4 group">
            <img
              src={galleryImages[currentImageIndex]}
              alt="Main safari view"
              className="w-full h-full object-cover"
            />

            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-fit h-fit"
              aria-label="Previous image"
            >
              <img
                src="/images/left-arrow.png"
                alt="Previous"
                className="w-20 h-10 cursor-pointer"
              />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-fit h-fit  "
              aria-label="Next image"
            >
              <img
                src="/images/right-arrow.png"
                alt="Next"
                className="w-20 h-10 cursor-pointer"
              />
            </button>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`aspect-4/3 rounded-lg overflow-hidden cursor-pointer transition-all ${
                  currentImageIndex === index
                    ? "ring-2 ring-primary ring-offset-2"
                    : "hover:opacity-80"
                }`}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
