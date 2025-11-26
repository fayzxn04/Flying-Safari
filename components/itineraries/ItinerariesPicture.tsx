/* eslint-disable @next/next/no-img-element */
import { itinerariesData, amenityIcons } from "./data";
// ("use client");
// import {
//   IconCarSuv,
//   IconMountain,
//   IconAirBalloon,
//   IconTrekking,
//   IconGrill,
// } from "@tabler/icons-react";
import Link from "next/link";

// interface Itinerary {
//   id: number;
//   image: string;
//   badge: string;
//   nights: number;
//   locations: number;
//   title: string;
//   amenities: string[];
// }

// ✅ Amenity → Icon Mapping
// const amenityIcons: Record<string, React.ReactNode> = {
//   car: <IconCarSuv size={24} stroke={1.5} />,
//   tent: <IconMountain size={24} stroke={1.5} />,
//   campfire: <IconAirBalloon size={24} stroke={1.5} />,
//   hiking: <IconTrekking size={24} stroke={1.5} />,
//   bed: <IconGrill size={24} stroke={1.5} />,
// };

// Hellooooooooooooo!!!
// export const itinerariesData = [
//   {
//     id: 1,
//     image: "/images/itinerary-1.png",
//     badge: "Maasai Mara National Reserve",
//     nights: 6,
//     locations: 4,
//     title: "6 Day Maasai Mara Express Adventure Safari",
//     amenities: ["car", "tent", "campfire", "hiking", "bed"],

//     bannerdetail: {
//       bannerimage: "/images/itinerary-1.png",
//       bannertitle: "6 Day Maasai Mara Express Adventure Safari",
//     },
//     slug: "6-day-maasai-mara-express-adventure-safari",
//   },
//   {
//     id: 2,
//     image: "/images/itinerary-2.png",
//     badge: "Maasai Mara National Reserve",
//     nights: 5,
//     locations: 4,
//     title: "5 Day Maasai Mara & Lake Naivasha Adventure",
//     amenities: ["car", "tent", "campfire", "hiking", "bed"],

//     bannerdetail: {
//       bannerimage: "/images/itinerary-2.png",
//       bannertitle: "5 Day Maasai Mara & Lake Naivasha Adventure",
//     },
//     slug: "5-day-maasai-mara-lake-naivasha-adventure",
//   },
//   {
//     id: 3,
//     image: "/images/itinerary-3.png",
//     badge: "Maasai Mara National Reserve",
//     nights: 7,
//     locations: 4,
//     title: "7 Day Ultimate Maasai Mara Safari Experience",
//     amenities: ["car", "tent", "campfire", "hiking", "bed"],

//     bannerdetail: {
//       bannerimage: "/images/itinerary-3.png",
//       bannertitle: "7 Day Ultimate Maasai Mara Safari Experience",
//     },
//     slug: "7-day-ultimate-maasai-mara-safari-experience",
//   },
//   {
//     id: 4,
//     image: "/images/itinerary-1.png",
//     badge: "Maasai Mara National Reserve",
//     nights: 6,
//     locations: 4,
//     title: "6 Day Maasai Mara Express Adventure Safari",
//     amenities: ["car", "tent", "campfire", "hiking", "bed"],

//     bannerdetail: {
//       bannerimage: "/images/itinerary-1.png",
//       bannertitle: "6 Day Maasai Mara Express Adventure Safari",
//     },
//     slug: "6-day-maasai-mara-express-adventure-safari-2",
//   },
//   {
//     id: 5,
//     image: "/images/itinerary-2.png",
//     badge: "Maasai Mara National Reserve",
//     nights: 5,
//     locations: 4,
//     title: "5 Day Maasai Mara & Lake Naivasha Adventure",
//     amenities: ["car", "tent", "campfire", "hiking", "bed"],

//     bannerdetail: {
//       bannerimage: "/images/itinerary-2.png",
//       bannertitle: "5 Day Maasai Mara & Lake Naivasha Adventure",
//     },
//     slug: "5-day-maasai-mara-lake-naivasha-adventure-2",
//   },
//   {
//     id: 6,
//     image: "/images/itinerary-3.png",
//     badge: "Maasai Mara National Reserve",
//     nights: 7,
//     locations: 4,
//     title: "7 Day Ultimate Maasai Mara Safari Experience",
//     amenities: ["car", "tent", "campfire", "hiking", "bed"],

//     bannerdetail: {
//       bannerimage: "/images/itinerary-3.png",
//       bannertitle: "7 Day Ultimate Maasai Mara Safari Experience",
//     },
//     slug: "7-day-ultimate-maasai-mara-safari-experience-2",
//   },
// ];

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
                <img
                  src={itinerary.image}
                  alt={itinerary.title}
                  className="object-cover w-full h-full rounded-t-lg "
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-xs">
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
