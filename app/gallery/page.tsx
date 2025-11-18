import Banner from "@/components/common/Banner";
import GalleryPictures from "@/components/gallery/GalleryPictures";
import React from "react";

export default function page() {
  return (
    <div>
      <Banner
        image="/images/Banner/Gallery1-min.png"
        title={
          <>
            From Skies to Savannah, Discover Safari{" "}
            <span className="font-pacifico"> Moments in a Visual Journey </span>
          </>
        }
      />
      <div className="main-container">
        <GalleryPictures />
      </div>
    </div>
  );
}
