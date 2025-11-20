import Banner from "@/components/common/Banner";
import DestinationsPictures from "@/components/destinations/DestinationsPictures";
import React from "react";

export default function page() {
  return (
    <div>
      <Banner
        image="/images/Banner/destinations-min.png"
        title={
          <>
            Across East Africa&apos;s Untamed Horizons,{" "}
            <span className="font-pacifico"> Every Destination Awaits </span>
          </>
        }
      />
      <div className="main-container">
        <DestinationsPictures />
      </div>
    </div>
  );
}
