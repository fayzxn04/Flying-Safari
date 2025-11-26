import Banner from "@/components/common/Banner";
import ItinerariesPicture from "@/components/itineraries/ItinerariesPicture";
import React from "react";

export default function page() {
  return (
    <div>
      <Banner
        image="/images/Banner/itineraries-min.webp"
        title={
          <>
            <span className="font-pacifico">Itineraries Crafted&nbsp;</span>
            With Care just for you
          </>
        }
      />
      <div className="main-container">
        <ItinerariesPicture />
      </div>
    </div>
  );
}
