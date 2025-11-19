import Banner from "@/components/common/Banner";
import BlogCards from "@/components/common/BlogCards";
import React from "react";

export default function page() {
  return (
    <div>
      <Banner
        image="/images/Banner/blogs1-min.png"
        title={
          <>
            Exploring East Africa&nbsp;
            <span className="font-pacifico">Stories That Last</span>
          </>
        }
      />
      <div className="main-container mt-4">
        <BlogCards />
      </div>
    </div>
  );
}
