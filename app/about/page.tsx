import Experience from "@/components/about/Experience";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import Banner from "@/components/common/Banner";
import React from "react";

const data = {
  image: "/images/Banner/About.webp",
  title: (
    <>
      Embark on <span className="font-pacifico">experiences</span> not just
      destinations with&nbsp;
      <span className="font-pacifico">our trips</span>
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
