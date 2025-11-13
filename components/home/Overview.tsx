/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Overview() {
  const overview = [
    {
      img: "/images/overview-1.png",
      rotation: "rotate(-12deg)",
    },
    {
      img: "/images/overview-2.png",
      rotation: "rotate(0deg)",
    },
    {
      img: "/images/overview-3.png",
      rotation: "rotate(12deg)",
    },
  ];
  return (
    <div className="bg-[url('/images/overview-bg.webp')] bg-center bg-no-repeat px-3 lg:px-20 py-4 max-width lg:py-15 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center text-center items-center">
        <p className="text-lg md:text-2xl lg:max-w-[55%] text-secondary">
          In Tanzania, the rhythm of the wild is untouched by time. From the
          roar of lions to the whispers of the savannah winds, the land invites
          you to wander beyond the ordinary and embrace.
        </p>
        <h2 className="font-pacifico text-primary mt-4 text-2xl lg:text-5xl">
          Flying Safari
        </h2>
      </div>

      <div className="flex justify-center items-center relative w-full max-w-6xl">
        {overview.map((item, index) => (
          <div
            key={index}
            className={`relative max-md:mt-8 ${
              index === 1
                ? "w-[114px] lg:w-[360px] h-[148px] lg:h-[460px] z-20 lg:-mt-5 max-md:-mt-3"
                : "w-[108px] lg:w-[340px] h-[148px] lg:h-[460px] lg:mt-24 max-md:mt-14"
            }
            `}
            style={{ transform: item.rotation }}
          >
            <img
              src={item.img}
              alt={`Overview image ${index + 1}`}
              className={`object-cover 
              `}
            />
          </div>
        ))}
      </div>

      <div>
        <button className=" w-[140px] bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded transition-colors mt-4 md:text-base text-sm">
          About us
        </button>
      </div>
    </div>
  );
}

// ${index === 0 ? "lg:ml-8" : "ml-0"}
