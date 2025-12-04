import Banner from "@/components/common/Banner";
import ContactUs from "@/components/contact/ContactUs";
import Faq from "@/components/contact/Faq";
import React from "react";

const data = {
  image: "/images/Banner/Contact-min.webp",
  title: (
    <>
      Let&apos;s Plan Your Next Adventure{" "}
      <span className="font-pacifico"> Get in Touch</span> with Flying Safari
    </>
  ),
};

export default function page() {
  return (
    <div>
      <Banner data={data} />
      <div className="main-container mt-4">
        <ContactUs />
        <Faq />
      </div>
    </div>
  );
}
