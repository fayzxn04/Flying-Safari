/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

interface Fact {
  number: string;
  description: string;
  position: "left" | "right";
}

const facts: Fact[] = [
  {
    number: "01",
    description:
      "The Mara is home to one of the highest concentrations of big cats in the world.",
    position: "right",
  },
  {
    number: "02",
    description:
      "It's named after the Maasai people and the word Mara, meaning 'spotted,' describing the landscape dotted with trees and bushes.",
    position: "right",
  },
  {
    number: "03",
    description:
      "The Great Migration, one of the 'Seven New Wonders of the World,' brings over 1.5 million wildebeest, zebras, and gazelles into the reserve.",
    position: "left",
  },
  {
    number: "04",
    description:
      "Masai Mara has one of the highest concentrations of big cats in the world, especially lions and cheetahs.",
    position: "left",
  },
  {
    number: "05",
    description:
      "The reserve, together with the Serengeti, supports the largest overland migration of animals on Earth.",
    position: "right",
  },
  {
    number: "06",
    description:
      "The Mara River is famous for its dramatic crossings during the Great Migration, where wildebeest and zebras face predators and crocodiles.",
    position: "left",
  },
  {
    number: "07",
    description:
      "More than 450 species of birds have been recorded here, making it a leading birdwatching destination.",
    position: "left",
  },
  {
    number: "08",
    description:
      "The Maasai people, who live around the reserve, continue to practice their traditional way of life, adding a rich cultural dimension to a visit.",
    position: "right",
  },
];

export default function IntrestingFacts() {
  const leftFacts = facts.filter((fact) => fact.position === "left");
  const rightFacts = facts.filter((fact) => fact.position === "right");

  return (
    <section className="section-container">
      {/* Header */}
      <div className="mb-8">
        <p className="small-heading">INTERESTING FACTS</p>
        <h2 className="big-heading text-black lg:max-w-[50%]">
          Uncover the Untold Stories of the Wild
        </h2>
      </div>

      {/* Mobile/Tablet: Start */}
      <div className="lg:hidden flex justify-center">
        <img
          src="/images/facts-image.png"
          alt="Africa map with wildlife"
          className="object-contain size-100 md:size-120 justify-center"
        />
      </div>
      <div className="flex flex-col gap-4 lg:hidden px-2">
        {facts.map((fact) => (
          <div key={fact.number} className="flex flex-col">
            <span className="text-[28px] font-bold text-primary opacity-[0.18]">
              {fact.number}
            </span>
            <p className="text-dark-grey text-sm">{fact.description}</p>
          </div>
        ))}
      </div>
      {/* Mobile/Tablet: End */}

      {/* Desktop: 3-column grid layout */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1.5fr_1fr] lg:items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          {leftFacts.map((fact, index) => (
            <div
              key={fact.number}
              className={`flex flex-col gap-4 ml-14 ${
                index === 3 ? "pl-28" : "ml-0"
              } `}
            >
              <span className="text-5xl font-bold text-gray-300">
                {fact.number}
              </span>
              <p className="flex-1 text-gray-700">{fact.description}</p>
            </div>
          ))}
        </div>

        {/* Center - Image */}
        <div className="relative aspect-square">
          <Image
            src="/images/facts-image.png"
            alt="Africa map with wildlife migration"
            fill
            className="object-contain"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col">
          {rightFacts.map((fact) => (
            <div key={fact.number} className="flex flex-col">
              <span className="text-5xl font-bold text-primary opacity-[0.18]">
                {fact.number}
              </span>
              <p className="text-dark-grey text-base">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
