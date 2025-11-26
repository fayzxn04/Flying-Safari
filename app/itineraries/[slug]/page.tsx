/* eslint-disable @next/next/no-img-element */
// import React from "react";
// import { itinerariesData } from "@/components/itineraries/ItinerariesPicture";

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// export default function Page({ params }: PageProps) {
//   // const { slug } = params;

//   const itinerary = itinerariesData.find(
//     (item) => item.id.toString() === params.slug
//   );

//   if (!itinerary) {
//     return <div className="text-center py-20">Itinerary Not Found</div>;
//   }

import React from "react";
// import { itinerariesData } from "@/components/itineraries/ItinerariesPicture";
import { itinerariesData } from "@/components/itineraries/data";
import Banner from "@/components/common/Banner";
import DaytoDayItinerary from "@/components/itineraries/DaytoDayItinerary";
import PopularItineraries from "@/components/home/PopularItineraries";
import Thingstodo from "@/components/itineraries/Thingstodo";
import ItinerariesOverview from "@/components/itineraries/ItinerariesOverview";

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const getSlugBasedItinerary = (slug: string) => {
    return itinerariesData.find((item) => item.slug === slug);
  };

  const itinerary = getSlugBasedItinerary(slug);

  if (!itinerary) {
    return <div className="text-center py-20">Itinerary Not Found</div>;
  }

  return (
    <div>
      <Banner
        image={itinerary.bannerdetail.bannerimage}
        title={itinerary.bannerdetail.bannertitle}
      />
      <div>
        <ItinerariesOverview />
        <Thingstodo />
        <DaytoDayItinerary />
        <PopularItineraries
          title="Popular Itineraries"
          subtitle="Safari Itineraries Curated just for you"
        />
      </div>
    </div>
  );
}

export default Page;
