/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import { blogPosts } from "@/data/blogPosts";

export default function BlogCards() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="lg:px-20 px-4">
      {/* Images */}
      <div className="grid lg:grid-cols-3 gap-5">
        {blogPosts.map((item, index) => (
          <Link key={index} href={`/blogs/${item.slug}`}>
            <div
              className={`relative w-full group cursor-pointer ${
                activeCard === index ? "active" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={`Blog ${index + 1}`}
                  className="w-full lg:h-[460px] h-[300px] object-cover transition-transform duration-200  group-[.active]:scale-105"
                />
                {/* Date */}
                <div className="blog-date bg:#FFF80 text-lg text-white">
                  <p className="font-light uppercase">
                    {new Date(item.date).toLocaleString("en-US", {
                      month: "short",
                    })}
                  </p>
                  <p className="leading-none mt-1">
                    {new Date(item.date).getDate()}
                  </p>
                </div>
                {/* Content */}
                <div className="relative blog-content group-hover:bg-primary group-hover:-mt-40  group-[.active]:bg-primary group-[.active]:lg:-mt-40 group-[.active]:-mt-20 transition-all duration-300">
                  <p className="blog-title group-hover:text-white group-[.active]:text-white transition-colors duration-300">
                    {item.category}
                  </p>
                  <h3 className="blog-desc">{item.title}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
