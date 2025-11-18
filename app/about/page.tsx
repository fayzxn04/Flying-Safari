import Experience from "@/components/about/Experience";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import Banner from "@/components/common/Banner";
import React from "react";

export default function page() {
  return (
    <div>
      <Banner
        image="/images/Banner/About-min.webp"
        title={
          <>
            <span className="font-pacifico">Book your seat,&nbsp;</span>
            discover the safari that awaits &nbsp;
            <span className="font-pacifico">beyond the runway</span>
          </>
        }
      />
      <div className="main-container mt-4">
        <Story />
        <Values />
        <Experience />
      </div>
    </div>
  );
}
