import React from "react";

interface ItinerariesOverviewProps {
  nights?: number;
  days?: number;
  locations?: string[];
}

export default function ItinerariesOverview({
  nights = 5,
  days = 6,
  locations = ["Nairobi", "Maasai Mara"],
}: ItinerariesOverviewProps) {
  return (
    <div className="section-container py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Overview Label */}
        <p className="small-heading text-center mb-3">OVERVIEW</p>

        {/* Main Heading */}
        <h2 className="big-heading text-center mb-6 text-black">
          Trip Highlights & Summary
        </h2>

        {/* Description Paragraphs */}
        <div className="space-y-6 text-center text-dark-grey leading-relaxed text-sm md:text-base">
          <p>
            The Maasai Mara Express Adventure Safari is the perfect way to
            experience the heart of Africa in just six days. Starting in
            Nairobi, you&apos;ll journey through the scenic Great Rift Valley
            before arriving in the world-famous Maasai Mara National Reserve.
            <p>
              Over the next few days, enjoy thrilling game drives across vast
              savannahs, where lions, elephants, cheetahs, giraffes, and more
              roam freely. If traveling during the Great Migration season
              (July–October), you&apos;ll witness one of nature&apos;s greatest
              spectacles — thousands of wildebeest and zebras crossing the Mara
              River.
            </p>
          </p>

          <p>
            Beyond the wildlife, the safari offers a glimpse into Maasai
            culture, giving you the chance to interact with local communities
            and learn about their traditions. For an unforgettable highlight,
            you can add a sunrise hot air balloon safari, floating silently
            above the plains as the wilderness awakens.
          </p>
        </div>

        {/* Trip Details */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-5">
          <div className="bg-primary text-white px-2.5 py-1.5 rounded-md text-sm md:text-lg font-light">
            {days}D/{nights}N
          </div>
          {locations.map((location, index) => (
            <div
              key={index}
              className="text-dark-grey text-sm md:text-base font-light"
            >
              • {location}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
