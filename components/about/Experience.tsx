import React from "react";
import Image from "next/image";

const experienceData = [
  {
    image: "/images/experience-1.png",
    title: "Seamless Travel",
    subtitle: "Book your flight and explore safari ideas in one place.",
  },
  {
    image: "/images/experience-2.png",
    title: "Curated Itineraries",
    subtitle: "Expertly designed journeys to spark your imagination.",
  },
  {
    image: "/images/experience-3.png",
    title: "Trusted Partner",
    subtitle: "A Dubai-based company with a strong focus on East Africa Safari",
  },
  {
    image: "/images/experience-4.png",
    title: "Safari at Heart",
    subtitle:
      "Our focus is not just on flying, but on the adventure that begins after you land.",
  },
];

export default function Experience() {
  return (
    <div className="max-width">
      <div className="flex flex-col justify-center items-center text-center ">
        <p className="small-heading">why choose flying safari</p>
        <h2 className="big-heading text-black lg:max-w-[55%] max-w-[80%] mt-3">
          Experience the Flying Safari Difference
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:space-x-4 lg:px-19 max-sm:px-4">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "lg:mt-10" : "lg:mt-0"
            } flex justify-center lg:justify-start`}
          >
            <ExperienceCard
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative w-[330px] h-[440px] lg:w-[310px] overflow-hidden group max-sm:px-4">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300 "
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {/* Title */}
        <h3 className="text-white text-lg lg:text-2xl font-light text-center transition-transform duration-300 group-hover:-translate-y-4">
          {title}
        </h3>

        <p className="text-white/90 text-sm text-center mt-2 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
