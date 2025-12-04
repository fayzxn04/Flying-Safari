/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "../common/Button";
import {
  IconCarSuv,
  IconMountain,
  IconAirBalloon,
  IconTrekking,
  IconGrill,
} from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { itinerariesData } from "@/utils/utilsConst";

interface PopularItinerariesProps {
  title: string;
  subtitle: string;
}

// Amenity icon mapping - maps amenity types to their corresponding icon components
const amenityIcons: Record<string, React.ReactNode> = {
  car: <IconCarSuv size={24} stroke={1.5} />,
  tent: <IconMountain size={24} stroke={1.5} />,
  tree: <IconAirBalloon size={24} stroke={1.5} />,
  hiking: <IconTrekking size={24} stroke={1.5} />,
  bed: <IconGrill size={24} stroke={1.5} />,
};

export default function PopularItineraries({
  title,
  subtitle,
}: PopularItinerariesProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const pathname = usePathname();

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
  const bgClass =
    pathname === "/"
      ? "bg-[url('/images/popular-bg.webp')] bg-cover bg-center bg-no-repeat"
      : "bg-transparent";
  return (
    <>
      <section className={`${bgClass} lg:py-15 py-4 md:py-10`}>
        <div className="lg:px-20 px-4">
          <div className="flex justify-between items-end lg:mb-10 mb-7">
            <div>
              <p className="small-heading ">{title}</p>
              <h2 className="big-heading max-w-[450px] max-md:max-w-[280px] mt-3 text-white opacity-100 font-normal">
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
                      delay: 2000,
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

                <div className="lg:p-5 p-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-dark-grey mb-4 font-normal">
                    <span>{itinerary.nights} Nights</span>
                    <span className="size-1 bg-primary rounded-full">•</span>
                    <span>{itinerary.locations} Locations </span>
                  </div>

                  <h3 className="text-2xl max-md:text-lg font-light text-center mb-6 max-md:mb-4 min-h-14 md:font-normal max-md:font-medium ">
                    {itinerary.title}
                  </h3>

                  <div className="flex items-center justify-center gap-3 mb-10 max-md:mb-4 lg:text-secondary text-primary">
                    {itinerary.amenities.map((a, i) => (
                      <span key={i}>{amenityIcons[a]}</span>
                    ))}
                  </div>

                  <button className="lg:w-48 w-43 border border-gray-300 lg:py-3 px-6 py-2 rounded text-dark-grey mx-auto block lg:text-base text-sm cursor-pointer font-bold tracking-[1.28px]">
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
      </section>
    </>
  );
}
