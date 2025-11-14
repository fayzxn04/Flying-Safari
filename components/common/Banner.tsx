"use client";
import Image from "next/image";
import React from "react";

interface BannerProps {
  image: string;
  title: React.ReactNode;
}

export default function Banner({ image, title }: BannerProps) {
  return (
    <main className="relative w-full h-[90svh] md:h-screen" id="banner">
      <Image
        src={image}
        alt={"Banner image"}
        fill
        priority
        className="object-cover"
      />
      <div className="max-w-[709px] absolute top-[40%] md:top-1/2 -translate-y-1/2 md:left-20 max-md:left-6 max-md:w-[80%]">
        <div className="flex max-w-[760px] items-start text-white font-light">
          <p className="max-w-[625px] lg:text-5xl md:text-3xl text-2xl leading-tight max-md:text-center">
            {title}
          </p>
        </div>
      </div>
    </main>
  );
}
