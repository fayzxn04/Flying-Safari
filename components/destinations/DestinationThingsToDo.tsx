/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef, useState } from "react";
import Button from "../common/Button";

const thingstodo = [
  {
    image: "/images/Pin-object.png",
    title: "01",
    subtitle: "Witness the Great Migration",
    subheading:
      "Experience one of the world's most spectacular wildlife events as wildebeests and zebras cross the crocodile-filled Mara River.",
  },
  {
    image: "/images/Pin-object.png",
    title: "02",
    subtitle: "Game Drives",
    subheading:
      "Spot the Big Five—lion, leopard, elephant, buffalo, and rhino—alongside cheetahs, giraffes, and countless antelope.",
  },
  {
    image: "/images/Pin-object.png",
    title: "03",
    subtitle: "Hot Air Balloon Safari",
    subheading:
      "Soar over the golden plains at sunrise for a bird's-eye view of the wildlife below.",
  },
  {
    image: "/images/Pin-object.png",
    title: "04",
    subtitle: "Cultural Visits",
    subheading:
      "Engage with the Maasai community, learn about their traditions, dances, and way of life.",
  },
  {
    image: "/images/Pin-object.png",
    title: "05",
    subtitle: "Witness the Great Migration",
    subheading:
      "Experience one of the world's most spectacular wildlife events as wildebeests and zebras cross the crocodile-filled Mara River.",
  },
  {
    image: "/images/Pin-object.png",
    title: "06",
    subtitle: "Game Drives",
    subheading:
      "Spot the Big Five—lion, leopard, elephant, buffalo, and rhino—alongside cheetahs, giraffes, and countless antelope.",
  },
];

export default function DestinationThingsToDo() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  // Calculate card width based on screen size
  const getCardWidth = () => {
    if (typeof window === "undefined") return 358; // Default for SSR
    return window.innerWidth >= 1024 ? 393 : 358; // lg: 368px + 25px gap, mobile: 330px + 28px gap
  };

  // Next
  const next = () => {
    if (index < thingstodo.length - 1) {
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
    <>
      <div className="lg:px-20 px-4 mb-10">
        <div className="flex justify-between items-end lg:mb-10 mb-7">
          <div>
            <p className="small-heading">Things to do</p>
            <h2 className="big-heading  max-md:max-w-[280px] mt-3 text-black ">
              Top Activities You Can&apos;t Miss
            </h2>
          </div>
          <div className="hidden lg:block">
            <Button onPrev={prev} onNext={next} />
          </div>
        </div>
      </div>
      {/* // Cards Grid */}
      <div ref={trackRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-5 lg:pl-20 pb-4 pt-8 md:pl-10 pl-4 max-md:pt-6">
          {thingstodo.map((item, index) => (
            <div
              key={index}
              className={`w-[330px] h-[332px] lg:w-[368px]  bg-white rounded-3xl p-3 shrink-0 ${
                index % 2 === 0 ? "rotate-3" : "-rotate-3"
              }`}
            >
              <div className="flex justify-center mb-1">
                <img
                  src={item.image}
                  alt="Pin icon"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="bg-card-background rounded-2xl px-4 h-[244px] w-[308px] lg:w-[340px]">
                <p className="text-secondary text-[40px] font-light mb-2">
                  {item.title}
                </p>
                <h3 className="text-2xl font-light text-black mb-2">
                  {item.subtitle}
                </h3>
                <p className="text-dark-grey text-sm lg:text-base leading-relaxed">
                  {item.subheading}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden flex justify-center mt-6 mb-10">
        <Button onPrev={prev} onNext={next} />
      </div>
    </>
  );
}
