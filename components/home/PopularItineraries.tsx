/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef, useState } from "react";
import Button from "../common/Button";
import {
  IconCarSuv,
  IconMountain,
  IconAirBalloon,
  IconTrekking,
  IconGrill,
} from "@tabler/icons-react";

interface PopularItinerariesProps {
  title: string;
  subtitle: string;
}

interface Itinerary {
  id: number;
  image: string;
  badge: string;
  nights: number;
  locations: number;
  title: string;
  amenities: string[];
}

// ✅ Amenity → Icon Mapping
const amenityIcons: Record<string, React.ReactNode> = {
  car: <IconCarSuv size={24} stroke={1.5} />,
  tent: <IconMountain size={24} stroke={1.5} />,
  tree: <IconAirBalloon size={24} stroke={1.5} />,
  hiking: <IconTrekking size={24} stroke={1.5} />,
  bed: <IconGrill size={24} stroke={1.5} />,
};

const itinerariesData: Itinerary[] = [
  {
    id: 1,
    image: "/images/itinerary-1.png",
    badge: "Arusha National Park",
    nights: 3,
    locations: 4,
    title: "Arusha, Ngorongoro Crater & Serengeti: Migration Safari",
    amenities: ["car", "tent", "tree", "hiking", "bed"],
  },
  {
    id: 2,
    image: "/images/itinerary-2.png",
    badge: "Arusha National Park",
    nights: 8,
    locations: 4,
    title: "Arusha, Tarangire, Ngorongoro & Serengeti: SkySafari",
    amenities: ["car", "tent", "tree", "hiking", "bed"],
  },
  {
    id: 3,
    image: "/images/itinerary-3.png",
    badge: "Arusha National Park",
    nights: 7,
    locations: 4,
    title: "Arusha, Ngorongoro, Serengeti & Zanzibar: Bush to Beach Safari",
    amenities: ["car", "tent", "tree", "hiking", "bed"],
  },
  {
    id: 4,
    image: "/images/itinerary-1.png",
    badge: "Arusha National Park",
    nights: 3,
    locations: 4,
    title: "Arusha, Ngorongoro Crater & Serengeti: Migration Safari",
    amenities: ["car", "tent", "tree", "hiking", "bed"],
  },
  {
    id: 5,
    image: "/images/itinerary-2.png",
    badge: "Arusha National Park",
    nights: 8,
    locations: 4,
    title: "Arusha, Tarangire, Ngorongoro & Serengeti: SkySafari",
    amenities: ["car", "tent", "tree", "hiking", "bed"],
  },
  {
    id: 6,
    image: "/images/itinerary-3.png",
    badge: "Arusha National Park",
    nights: 7,
    locations: 4,
    title: "Arusha, Ngorongoro, Serengeti & Zanzibar: Bush to Beach Safari",
    amenities: ["car", "tent", "tree", "hiking", "bed"],
  },
];

export default function PopularItineraries({
  title,
  subtitle,
}: PopularItinerariesProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  // Calculate card width based on screen size
  const getCardWidth = () => {
    if (typeof window === "undefined") return 358; // Default for SSR
    return window.innerWidth >= 1024 ? 482 : 358; // lg: 454px + 28px gap, mobile: 330px + 28px gap
  };

  // Next
  const next = () => {
    if (index < itinerariesData.length - 1) {
      setIndex(index + 1);
      trackRef.current!.scrollTo({
        left: (index + 1) * getCardWidth(),
        behavior: "smooth",
      });
    }
  };

  // Prev
  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
      trackRef.current!.scrollTo({
        left: (index - 1) * getCardWidth(),
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="bg-[url('/images/popular-bg.webp')] bg-cover bg-center bg-no-repeat py-15">
      <div className="lg:px-20 px-4">
        <div className="flex justify-between items-end lg:mb-10 mb-7">
          <div>
            <p className="small-heading">{title}</p>
            <h2 className="big-heading max-w-[420px] max-md:max-w-[280px] mt-3 text-white opacity-100">
              {subtitle}
            </h2>
          </div>
          <div className="hidden lg:block">
            <Button onPrev={prev} onNext={next} />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div ref={trackRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-7 lg:pl-20 pb-4 max-md:pl-4">
          {itinerariesData.map((itinerary) => (
            <div
              key={itinerary.id}
              className="bg-card-background rounded-lg overflow-hidden shadow-lg w-[330px] h-96 lg:w-[454px] lg:h-[520px] shrink-0 flex flex-col"
            >
              <div className="relative h-40 lg:h-60">
                <img
                  src={itinerary.image}
                  alt={itinerary.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-sm">
                  {itinerary.badge}
                </div>
              </div>

              <div className="lg:p-5 p-6">
                <div className="flex items-center justify-center gap-2 text-sm text-dark-grey mb-4">
                  <span>{itinerary.nights} Nights</span>
                  <span>•</span>
                  <span>{itinerary.locations} Locations</span>
                </div>

                <h3 className="text-2xl max-md:text-lg font-light text-center mb-6 max-md:mb-4 min-h-14">
                  {itinerary.title}
                </h3>

                <div className="flex items-center justify-center gap-3 mb-10 max-md:mb-4 text-secondary">
                  {itinerary.amenities.map((a, i) => (
                    <span key={i}>{amenityIcons[a]}</span>
                  ))}
                </div>

                <button className="lg:w-48 w-43 border border-gray-300 lg:py-3 px-6 py-2 rounded text-dark-grey mx-auto block lg:text-base text-sm cursor-pointer">
                  VIEW ITINERARY
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-container flex justify-center mt-8 lg:hidden">
        <Button onPrev={prev} onNext={next} />
      </div>
    </div>
  );
}
