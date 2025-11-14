"use client";

import React from "react";
import CountUp from "react-countup";

export default function Values() {
  const values = [
    {
      end: 50,
      suffix: "+",
      description: "Inspiring safari Itineraries Curated by Flying Safari",
    },
    {
      end: 10,
      suffix: "k+",
      description: "Travelers connected to East African adventures",
    },
    {
      title: "24/7",
      description: "Seamless digital support for travel planning",
    },
  ];
  return (
    <div className="section-container main-container">
      <div className="grid grid-cols-3 gap-4 md:gap-16">
        {values.map((value, index) => (
          <div key={index} className="text-center">
            <h3 className="text-4xl md:text-8xl font-semibold  mb-2 md:mb-4">
              {value.end !== undefined ? (
                <CountUp end={value.end} suffix={value.suffix} duration={4} />
              ) : (
                value.title
              )}
            </h3>
            <p className="text-xs md:text-base text-gray-600">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
