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
                <div className="absolute top-4 left-3 border border-white/40 bg:#FFF80 backdrop-blur-[10.9px] rounded-lg px-2 py-4 text-center min-w-[50px] transition-colors duration-300 group-hover:bg-primary group-hover:border-primary">
                  <p className="text-xs font-semibold text-white uppercase">
                    AUG
                  </p>
                  <p className="text-lg text-white leading-none mt-1">26</p>
                </div>
                {/* Content */}
                <div className=" relative -mt-16 mx-4 mb-4 bg-card-background shadow-lg p-5 lg:p-6 transition-all duration-300 group-hover:bg-primary group-hover:-mt-40">
                  {/* relative -mt-16 mx-4 bg-card-background rounded-lg shadow-lg p-5 lg:p-6 
                  transition-all duration-300 group-hover:-mt-20 */}
                  <p className="text-sm lg:text-sm font-light text-dark-grey uppercase tracking-wide mb-2 transition-colors duration-300 group-hover:text-white">
                    ANIMALS
                  </p>
                  <h3 className="text-base lg:text-lg font-light text-black leading-snug transition-colors duration-300 group-hover:text-white">
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
