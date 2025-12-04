import Banner from "@/components/common/Banner";
import ItinerariesPicture from "@/components/itineraries/ItinerariesPicture";
import React from "react";

const data = {
  image: "/images/Banner/itineraries-min.webp",
  title: (
    <>
      <span className="font-pacifico">Itineraries Crafted&nbsp;</span>
      With Care just for you
    </>
  ),
};

export default function page() {
  return (
    <div>
      <Banner data={data} />
      <div className="main-container">
        <ItinerariesPicture />
      </div>
    </div>
  );
}
