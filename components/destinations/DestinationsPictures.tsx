"use client";

import { useState } from "react";
import Image from "next/image";
import { destination } from "./destination-data";
import Link from "next/link";

export default function DestinationsPictures() {
  return (
    <div className="px-4 lg:px-20 py-4 lg:py-15">
      <div className="grid grid-cols-1 lg:grid-cols-3 space-y-3 lg:space-y-0 lg:gap-4 rounded-2xl">
        {destination.map((item, index) => (
          <Link href={`/destination/${item.bannerdetail.slug}`} key={index}>
            <DestinationCard
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

function DestinationCard({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="relative w-full h-[360px] lg:h-[450px] overflow-hidden group rounded-2xl cursor-pointer lg:cursor-default"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover lg:group-hover:scale-105 transition-transform duration-300"
      />

      {/* Overlay gradient */}
      {/* <div className="absolute inset-0 from-black/70 via-black/20 to-transparent" /> */}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        {/* Title */}
        <h3
          className={`text-white text-lg lg:text-2xl font-light transition-transform duration-300 lg:group-hover:-translate-y-4 ${
            isExpanded ? "-translate-y-4 lg:translate-y-0" : ""
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-white/90 max-sm:text-sm mt-2 transform transition-all duration-300 lg:translate-y-full lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 ${
            isExpanded
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
