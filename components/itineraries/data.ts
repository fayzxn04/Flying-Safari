import React from "react";
import {
  IconCarSuv,
  IconMountain,
  IconAirBalloon,
  IconTrekking,
  IconGrill,
} from "@tabler/icons-react";
// Amenity → Icon Mapping
export const amenityIcons: Record<string, React.ReactNode> = {
  car: React.createElement(IconCarSuv, { size: 24, stroke: 1.5 }),
  tent: React.createElement(IconMountain, { size: 24, stroke: 1.5 }),
  campfire: React.createElement(IconAirBalloon, { size: 24, stroke: 1.5 }),
  hiking: React.createElement(IconTrekking, { size: 24, stroke: 1.5 }),
  bed: React.createElement(IconGrill, { size: 24, stroke: 1.5 }),
};

// Main Itineraries Data
export const itinerariesData = [
  {
    id: 1,
    image: "/images/itinerary-1.png",
    badge: "Maasai Mara National Reserve",
    nights: 6,
    locations: 4,
    title: "6 Day Maasai Mara Express Adventure Safari",
    amenities: ["car", "tent", "campfire", "hiking", "bed"],

    bannerdetail: {
      bannerimage: "/images/itinerary-1.png",
      bannertitle: "6 Day Maasai Mara Express Adventure Safari",
    },

    slug: "6-day-maasai-mara-express-adventure-safari",
  },

  {
    id: 2,
    image: "/images/itinerary-2.png",
    badge: "Maasai Mara National Reserve",
    nights: 5,
    locations: 4,
    title: "5 Day Maasai Mara & Lake Naivasha Adventure",
    amenities: ["car", "tent", "campfire", "hiking", "bed"],

    bannerdetail: {
      bannerimage: "/images/itinerary-2.png",
      bannertitle: "5 Day Maasai Mara & Lake Naivasha Adventure",
    },

    slug: "5-day-maasai-mara-lake-naivasha-adventure",
  },

  {
    id: 3,
    image: "/images/itinerary-3.png",
    badge: "Maasai Mara National Reserve",
    nights: 7,
    locations: 4,
    title: "7 Day Ultimate Maasai Mara Safari Experience",
    amenities: ["car", "tent", "campfire", "hiking", "bed"],

    bannerdetail: {
      bannerimage: "/images/itinerary-3.png",
      bannertitle: "7 Day Ultimate Maasai Mara Safari Experience",
    },

    slug: "7-day-ultimate-maasai-mara-safari-experience",
  },

  {
    id: 4,
    image: "/images/itinerary-1.png",
    badge: "Maasai Mara National Reserve",
    nights: 6,
    locations: 4,
    title: "6 Day Maasai Mara Express Adventure Safari",
    amenities: ["car", "tent", "campfire", "hiking", "bed"],

    bannerdetail: {
      bannerimage: "/images/itinerary-1.png",
      bannertitle: "6 Day Maasai Mara Express Adventure Safari",
    },

    slug: "6-day-maasai-mara-express-adventure-safari-2",
  },

  {
    id: 5,
    image: "/images/itinerary-2.png",
    badge: "Maasai Mara National Reserve",
    nights: 5,
    locations: 4,
    title: "5 Day Maasai Mara & Lake Naivasha Adventure",
    amenities: ["car", "tent", "campfire", "hiking", "bed"],

    bannerdetail: {
      bannerimage: "/images/itinerary-2.png",
      bannertitle: "5 Day Maasai Mara & Lake Naivasha Adventure",
    },

    slug: "5-day-maasai-mara-lake-naivasha-adventure-2",
  },

  {
    id: 6,
    image: "/images/itinerary-3.png",
    badge: "Maasai Mara National Reserve",
    nights: 7,
    locations: 4,
    title: "7 Day Ultimate Maasai Mara Safari Experience",
    amenities: ["car", "tent", "campfire", "hiking", "bed"],

    bannerdetail: {
      bannerimage: "/images/itinerary-3.png",
      bannertitle: "7 Day Ultimate Maasai Mara Safari Experience",
    },

    slug: "7-day-ultimate-maasai-mara-safari-experience-2",
  },
];
