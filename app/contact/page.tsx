import Banner from "@/components/common/Banner";
import Faq from "@/components/contact/Faq";
import React from "react";

export default function page() {
  return (
    <div>
      <Banner
        image="/images/Banner/Contact-min.webp"
        title={
          <>
            Let’s Plan Your Next Adventure{" "}
            <span className="font-pacifico"> Get in Touch</span> with Flying
            Safari
          </>
        }
      />
      <div className="main-container mt-4">
        <Faq />
      </div>
    </div>
  );
}
