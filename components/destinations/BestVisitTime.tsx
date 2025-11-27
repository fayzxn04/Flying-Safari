"use client";
import React from "react";
import Image from "next/image";

const highlights = [
  {
    icon: "/images/lion-prey.png",
    text: "July to October: Peak season during the Great Migration—ideal for witnessing river crossings and predator action.",
  },
  {
    icon: "/images/lion-prey.png",
    text: "December to February: Excellent for predator sightings, especially big cats.",
  },
  {
    icon: "/images/lion-prey.png",
    text: "March to June: Lush green season with fewer tourists and beautiful landscapes, though rains may limit some activities.",
  },
];

export default function BestVisitTime() {
  return (
    <div className="lg:px-15 px-4 overflow-x-auto py-4">
      <div className="rounded-[20px] lg:p-10 p-4 bg-primary">
        <div className="mb-7 lg:mb-15">
          <p className="text-white text-sm lg:text-lg uppercase tracking-wider mb-3">
            BEST TIME TO VISIT
          </p>
          <h2 className="text-white text-2xl lg:text-5xl font-light">
            Seasonal Highlights to Guide Your Trip
          </h2>
        </div>

        {/* Highlights */}
        <div className="space-y-3">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="shrink-0 size-5 sm:size-6 lg:size-7 relative mt-0.5">
                <Image
                  src={highlight.icon}
                  alt="Paw"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-white text-sm lg:text-base leading-relaxed">
                {highlight.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
