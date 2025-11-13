import React from "react";
import Image from "next/image";

export default function Benefits() {
  const benefits = [
    {
      img: "/images/icon-plane.png",
      title: "Seamless Journeys",
      description:
        "Effortlessly combine flight bookings with inspiring safari itineraries.",
    },
    {
      img: "/images/icon-user.png",
      title: "Travel Experts",
      description:
        "Rely on local knowledge and partners for safe, memorable safaris.",
    },
    {
      img: "/images/icon-badge.png",
      title: "Smart Fares",
      description:
        "Enjoy exclusive savings and special offers on Tanzania flight bookings.",
    },
    {
      img: "/images/icon-map.png",
      title: "Curated Itineraries",
      description:
        "Hand-picked safari routes showcasing Tanzania's most iconic destinations.",
    },
  ];

  return (
    <div className="bg-[url('/images/benefits-bg.png')] bg-cover bg-center bg-no-repeat py-16 md:py-15 md:px-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:space-x-14 justify-items-center md:justify-items-start">
          {benefits.map((benefit, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center max-w-xs md:max-w-none"
              >
                <Image
                  src={benefit.img}
                  alt={benefit.title}
                  width={100}
                  height={100}
                  className="text-secondary"
                />
                <h3 className="text-lg md:text-2xl font-light text-black lg:mt-4 mt-2">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-primary leading-relaxed lg:mt-3 mt-1">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
