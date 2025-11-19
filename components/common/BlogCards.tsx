/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const image = [
  { image: "images/blogs-1.png" },
  { image: "images/blogs-2.png" },
  { image: "images/blogs-3.png" },
  { image: "images/blogs-1.png" },
  { image: "images/blogs-2.png" },
  { image: "images/blogs-3.png" },
  { image: "images/blogs-1.png" },
  { image: "images/blogs-2.png" },
  { image: "images/blogs-3.png" },
];

export default function BlogCards() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="lg:px-20 px-4">
      {/* Images */}
      <div className="grid lg:grid-cols-3 gap-5">
        {image.map((item, index) => (
          <div
            key={index}
            className={`relative w-full group cursor-pointer ${
              activeCard === index ? "active" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={`Blog ${index + 1}`}
                className="w-full lg:h-[460px] h-[300px] object-cover transition-transform duration-300 group-hover:scale-105 group-[.active]:scale-105"
              />
              {/* Date */}
              <div className="blog-date bg:#FFF80 text-lg text-white">
                <p className="font-light uppercase">AUG</p>
                <p className="leading-none mt-1">26</p>
              </div>
              {/* Content */}
              <div className="relative blog-content group-hover:bg-primary group-hover:-mt-40  group-[.active]:bg-primary group-[.active]:lg:-mt-40 group-[.active]:-mt-20 transition-all duration-300">
                <p className="blog-title group-hover:text-white group-[.active]:text-white transition-colors duration-300">
                  ANIMALS
                </p>
                <h3 className="blog-desc">
                  Dung Architects: The Unsung Engineers of the Serengeti (And
                  why they matter to your safari)
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
