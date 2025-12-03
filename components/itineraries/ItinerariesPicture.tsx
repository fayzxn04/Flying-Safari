"use client";
/* eslint-disable @next/next/no-img-element */
import { itinerariesData, amenityIcons } from "./data";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ItinerariesPicture() {
  return (
    <div className="lg:px-20 px-4 lg:py-15 py-10">
      {/* Cards Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-y-10 lg:gap-x-5 md:gap-x-3 gap-y-7 max-w-[1440px] mx-auto rounded-lg">
        {itinerariesData.map((itinerary) => (
          <Link href={`/itineraries/${itinerary.slug}`} key={itinerary.id}>
            <div
              key={itinerary.id}
              className="bg-card-background rounded-lg hover:shadow-md transition-shadow duration-300  flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-40 lg:h-60">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet !bg-white/50",
                    bulletActiveClass:
                      "swiper-pagination-bullet-active !bg-white",
                  }}
                  className="w-full h-full"
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                >
                  <SwiperSlide>
                    <img
                      src={itinerary.image}
                      alt={itinerary.title}
                      className="object-cover w-full h-full"
                    />
                  </SwiperSlide>
                  {/* Add more slides here if you have multiple images */}
                  {/* Checking */}
                  <SwiperSlide>
                    <img
                      src={itinerary.image}
                      alt={`${itinerary.title} - 2`}
                      className="object-cover w-full h-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={itinerary.image}
                      alt={`${itinerary.title} - 3`}
                      className="object-cover w-full h-full"
                    />
                  </SwiperSlide>
                </Swiper>
                <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-sm z-10">
                  {itinerary.badge}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 lg:p-6 flex flex-col grow">
                {/* Nights & Locations */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-3">
                  <span>{itinerary.nights} Nights</span>
                  <span className="text-gray-400">•</span>
                  <span>{itinerary.locations} Locations</span>
                </div>

                {/* Title */}
                <h3 className="text-lg lg:text-xl font-normal text-center mb-4 min-h-12 flex items-center justify-center text-gray-900">
                  {itinerary.title}
                </h3>

                {/* Amenities Icons */}
                <div className="flex items-center justify-center gap-4 mb-6 md:text-secondary max-sm:text-primary">
                  {itinerary.amenities.map((amenity, index) => (
                    <span key={index} className="flex items-center">
                      {amenityIcons[amenity]}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="w-full max-w-[200px] mx-auto border border-gray-300 py-2.5 px-6 rounded text-sm font-medium text-gray-700">
                  VIEW ITINERARY
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
