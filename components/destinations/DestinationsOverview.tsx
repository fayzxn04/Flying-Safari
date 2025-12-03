/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "things-to-do", label: "Things to do" },
  { id: "when-to-go", label: "When to go" },
  { id: "interesting-facts", label: "Interesting facts" },
  { id: "itineraries", label: "Itineraries" },
];

export default function DestinationsOverview() {
  const [activeTab, setActiveTab] = useState("overview");

  // Scroll to the section on click
  const goToSection = (id: string) => {
    setActiveTab(id);
    const section = document.getElementById(id);

    if (section) {
      const top = section.offsetTop - 100; // adjust offset if you have a fixed header
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="overview" className="section-container">
      {/* ----------- TABS START ----------- */}
      <div className="flex justify-center pt-16 lg:pb-14 pb-6 ">
        <div className="flex gap-6 overflow-x-scroll md:overflow-visible px-3 rounded-full bg-white">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => goToSection(tab.id)}
              className={`whitespace-nowrap px-10 py-2 text-sm lg:text-lg uppercase rounded-full transition-all
                ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "text-dark-grey hover:text-black"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overview content */}
      <div className="section-container">
        <div className="grid lg:grid-cols-3 gap-4 px-4 lg:px-20 justify-items-start py-4 lg:py-15">
          {/* Left column */}
          <div className="space-y-3">
            <p className="text-secondary uppercase text-sm md:text-lg font-light">
              MAASAI MARA NATIONAL RESERVE
            </p>
            <h2 className="text-[28px] lg:text-5xl font-light">
              Step Into the Wild Heart of Kenya
            </h2>
            <p className="text-dark-grey leading-relaxed text-base">
              The Masai Mara National Reserve, located in southwest Kenya, is a
              breathtaking expanse of gently rolling savannah stretching across
              1,510 square kilometers. Bordering Tanzania&apos;s Serengeti
              National Park to the south, the Mara forms part of one of the
              world&apos;s most celebrated ecosystems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Voted as one of the New Seven Wonders of the World, the Masai Mara
              attracts visitors from across the globe, eager to witness its
              unmatched beauty and the spectacle of the Great Migration.
            </p>
          </div>

          {/* Center image */}
          <div className="mx-auto">
            <img
              src="/images/destination-individual-picture.png"
              alt="Masai Mara elephants"
              className="lg:size-[420px] size-80"
            />
          </div>

          {/* Right column */}
          <div className="space-y-3 lg:items-center flex flex-col lg:justify-center">
            <p className="text-gray-700 leading-relaxed">
              Renowned as Kenya&apos;s premier safari destination, the reserve
              is a sanctuary of incredible wildlife diversity. Here, lions,
              cheetahs, elephants, rhinos, buffalo, wildebeest, giraffes,
              zebras, and countless other species roam freely across the vast
              plains.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The name of the reserve reflects its heritage. &apos;Mara&apos;
              honors the Maasai people, the region&apos;s indigenous
              inhabitants, while &quot;Mara&quot; means &quot;spotted&quot; in
              their language, a tribute to the acacia trees, shrubs, and bushes
              that scatter the sweeping landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
