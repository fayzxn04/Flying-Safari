import Experience from "@/components/about/Experience";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import Banner from "@/components/common/Banner";
import React from "react";

const data = {
  image: "/images/Banner/About-min.webp",
  title: (
    <>
      <span className="font-pacifico">Book your seat </span> discover the safari
      <span className="font-pacifico">beyond the runway</span>
    </>
  ),
};

export default function page() {
  return (
    <div>
      <Banner data={data} />
      <div className="main-container mt-4">
        <Story />
        <Values />
        <Experience />
      </div>
    </div>
  );
}
