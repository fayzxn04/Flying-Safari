/* eslint-disable @next/next/no-img-element */
import React from "react";

const images = [
  { image: "/images/gallery-11.webp" },
  { image: "/images/gallery-22.webp" },
  { image: "/images/gallery-33.webp" },
  { image: "/images/gallery-44.webp" },
  { image: "/images/gallery-55.webp" },
  { image: "/images/gallery-66.webp" },
  { image: "/images/gallery-77.webp" },
  { image: "/images/gallery-88.webp" },
];

export default function GalleryPictures() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-4 lg:px-18 px-4 lg:pt-20 py-6">
      {images.map((item, index) => {
        // Add margin-top to columns 1 and 3 (index 0 and 2) on lg screens
        const isColumn1Or3 = index % 4 === 0 || index % 4 === 2;

        return (
          <div
            key={index}
            className={`relative w-full ${isColumn1Or3 ? "lg:mt-6" : ""}`}
          >
            <img
              src={item.image}
              alt={`Gallery image ${index + 1}`}
              className="object-cover w-full h-[200px] lg:h-[440px]"
            />
          </div>
        );
      })}
    </div>
  );
}
