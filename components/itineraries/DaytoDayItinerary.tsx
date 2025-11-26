"use client";
import React, { useState } from "react";
import {
  IconChevronDown,
  IconClipboardList,
  IconMapPin,
} from "@tabler/icons-react";
import Image from "next/image";

const itineraryData = [
  {
    day: 1,
    title: "Arrival in Nairobi",
    destination: "Destination: Nairobi",
    subtitle:
      "Things To do: Airport pickup, safari briefing, evening at leisure",
    description:
      "Begin your journey in Nairobi, Kenya's lively capital city. Spend the day relaxing after your arrival and adjusting to the new atmosphere. A short safari briefing prepares you for the days ahead. Enjoy some leisure time at the hotel, with optional city exploration. Rest overnight before your adventure begins.",
    image: "/images/Faq-image.png",
  },
  {
    day: 2,
    title: "Journey into the Wild – Nairobi to Maasai Mara",
    destination: "Destination: Nairobi",
    subtitle: "Things To do: Scenic flight, wildlife spotting, camp arrival",
    description:
      "Journey into the Wild – Nairobi to Maasai Mara description goes here.",
    image: "/images/Faq-image.png",
  },
  {
    day: 3,
    title: "Into the Heart of the Savannah – Full-Day Game Drive",
    destination: "Destination: Nairobi",
    subtitle: "Things To do: Big Five safari, photography, bush lunch",
    description:
      "Into the Heart of the Savannah – Full-Day Game Drive description goes here.",
    image: "/images/Faq-image.png",
  },
  {
    day: 4,
    title: "Skies & Culture – Hot Air Balloon & Maasai Village",
    destination: "Destination: Nairobi",
    subtitle:
      "Things To do: Dawn balloon ride, champagne breakfast, cultural visit",
    description:
      "Skies & Culture – Hot Air Balloon & Maasai Village description goes here.",
    image: "/images/Faq-image.png",
  },
  {
    day: 5,
    title: "Walks, Wildlife & Sundowners – A Day in the Bush",
    destination: "Destination: Nairobi",
    subtitle: "Things To do: Guided nature walk, game drive, sunset cocktails",
    description:
      "Walks, Wildlife & Sundowners – A Day in the Bush description goes here.",
    image: "/images/Faq-image.png",
  },
  {
    day: 6,
    title: "Departure Day – Return to Nairobi",
    destination: "Destination: Nairobi",
    subtitle:
      "Things To do: Final game drive, return flight, departure arrangements",
    description: "Departure Day – Return to Nairobi description goes here.",
    image: "/images/Faq-image.png",
  },
];

export default function DaytoDayItinerary() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItinerary = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 lg:px-45 py-15 lg:py-10 bg-[url('/images/itinerary-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="text-center">
        <p className="small-heading">Itinerary</p>
        <h2 className="big-heading">Day-to-Day Itinerary</h2>
      </div>
      <div className="mt-10 max-w-5xl mx-auto">
        {itineraryData.map((item, index) => (
          <div
            key={index}
            className="bg-white mb-4 rounded-xl border border-[#ECECEC] overflow-hidden"
          >
            <button
              onClick={() => toggleItinerary(index)}
              className="w-full flex justify-between items-start text-left p-3 cursor-pointer"
            >
              <div className="flex items-start gap-4 ">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-light shrink-0">
                  DAY {item.day}
                </span>
                <span className="text-base lg:text-lg font-light pr-4">
                  {item.title}
                </span>
              </div>
              <IconChevronDown
                className={`shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                size={24}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-3 pb-6">
                {item.subtitle && (
                  <div className="flex flex-col lg:flex-row lg:gap-8 gap-3 mb-3">
                    <p className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="shrink-0">
                        <IconMapPin className="size-5" />
                      </span>
                      <span>{item.destination}</span>
                    </p>
                    <p className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="shrink-0">
                        <IconClipboardList className="size-5" />
                      </span>
                      <span>{item.subtitle}</span>
                    </p>
                  </div>
                )}
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="relative w-full h-[260px]  rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
