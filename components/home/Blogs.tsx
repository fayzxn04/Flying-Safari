/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef, useState } from "react";
import Button from "../common/Button";
interface BlogProps {
  title: string;
  subtitle: string;
}

const image = [
  { image: "images/blogs-1.png" },
  { image: "images/blogs-2.png" },
  { image: "images/blogs-3.png" },
  { image: "images/blogs-1.png" },
  { image: "images/blogs-2.png" },
  { image: "images/blogs-3.png" },
];

export default function Blogs({ title, subtitle }: BlogProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  // Calculate card width
  const getCardWidth = () => {
    if (typeof window === "undefined") return 350;
    return window.innerWidth >= 1024 ? 432 : 350;
  };

  // Next
  const next = () => {
    if (index < image.length - 1) {
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
    <div className="lg:px-20 px-4 ">
      <div className="flex justify-between items-end lg:mb-10 mb-7">
        <div>
          <p className="small-heading">{title}</p>
          <h2 className="big-heading max-w-[420px] max-md:max-w-[280px] mt-3 text-black opacity-100">
            {subtitle}
          </h2>
        </div>
        <div className="hidden lg:block">
          <Button onPrev={prev} onNext={next} />
        </div>
      </div>
      {/* Images */}
      <div ref={trackRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-5">
          {image.map((item, index) => (
            <div
              key={index}
              className="relative shrink-0 w-[330px] lg:w-[412px] group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={`Blog ${index + 1}`}
                  className="w-full lg:h-[460px] h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Date */}
                <div className="blog-date bg:#FFF80 text-lg text-white">
                  <p className="font-light uppercase">AUG</p>
                  <p className="leading-none mt-1">26</p>
                </div>
                {/* Content */}
                <div className=" relative blog-content group-hover:bg-primary group-hover:-mt-40">
                  <p className="blog-title group-hover:text-white">ANIMALS</p>
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
      <div className="lg:hidden flex justify-center mt-7">
        <Button onPrev={prev} onNext={next} />
      </div>
    </div>
  );
}
