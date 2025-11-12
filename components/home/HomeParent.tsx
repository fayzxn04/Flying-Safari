import React from "react";
import Banner from "../common/Banner";
import Cards from "./Cards";

export default function HomeParent() {
  return (
    <div>
      <Banner
        image="/images/Banner/Home.webp"
        title={
          <>
            Embark on <span className="font-pacifico">experiences</span> not
            just destinations with&nbsp;
            <span className="font-pacifico">our trips</span>
          </>
        }
      />
      <div className="main-container mt-4">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
