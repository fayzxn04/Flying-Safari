import React from "react";
import Banner from "../common/Banner";
import Cards from "./Cards";
import PopularItineraries from "./PopularItineraries";
import Gallery from "./Gallery";
import Blogs from "./Blogs";
import Benefits from "./Benefits";
import Overview from "./Overview";
// import SectionHeading from "@/ui/SectionHeading";

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
        <Overview />
        <PopularItineraries
          title="Popular Itineraries"
          subtitle="Safari Itineraries Curated just for you"
        />
        <Benefits />
        <Gallery />
        <Blogs
          title="BLOGS & JOURNALS"
          subtitle="Safari Stories & Travel Insights"
        />
      </div>
    </div>
  );
}
