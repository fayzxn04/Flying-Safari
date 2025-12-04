import Banner from "@/components/common/Banner";
import BlogCards from "@/components/common/BlogCards";
import React from "react";

const data = {
  image: "/images/Banner/blogs1-min.png",
  title: (
    <>
      Exploring East Africa&nbsp;
      <span className="font-pacifico">Stories That Last</span>
    </>
  ),
};

export default function page() {
  return (
    <div>
      <Banner data={data} />
      <div className="main-container mt-4">
        <BlogCards />
      </div>
    </div>
  );
}
