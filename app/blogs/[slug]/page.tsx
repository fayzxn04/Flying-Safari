// import { Metadata } from "next";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";
import Blogs from "@/components/home/Blogs";

// Blog post data
const blogData = [
  {
    heading: "Addressing Challenges and Unlocking Potential",
    content: `Africa, a continent of breathtaking landscapes, diverse cultures, and rich history, has long been a dream destination for travelers worldwide. However, despite its allure, the cost of travel within Africa has remained a significant obstacle for both international tourists and local residents. From soaring flight prices to limited transportation options and expensive visa regulations, exploring the vast and mesmerizing continent comes with its challenges. This article delves into the complexities of expensive travel within Africa, highlights contributing factors, and discusses potential solutions for fostering accessible and sustainable tourism.

      One of the most prominent factors contributing to the high cost of travel within Africa is the exorbitant airfare. The continent’s vast distances, coupled with limited direct flights between certain destinations, lead to increased prices. Moreover, a lack of competition among airlines in some regions further exacerbates the problem. This results in higher ticket costs and makes it difficult for budget-conscious travelers to explore multiple African countries during a single trip.`,
  },
  {
    heading: "Addressing the Changes",
    content: `African governments should prioritize cooperation to develop a more integrated transportation system. This includes investing in better road and rail networks, which would not only reduce travel costs but also enhance connectivity between regions. Encouraging open skies policies among African countries can lead to increased competition among airlines, resulting in reduced airfare. This approach has the potential to make travel within Africa more affordable and attractive.
          
     Harmonizing visa regulations and reducing fees could significantly boost intracontinental tourism. Simplified visa procedures and more accessible e-visa options would encourage travelers to explore multiple destinations within Africa. Governments and tourism boards should actively promote local tourism by investing in infrastructure, supporting small and medium-sized enterprises, and fostering sustainable eco-tourism initiatives. This approach can create employment opportunities and contribute to the economic growth of host communities.`,
  },
  {
    heading: "Conculsion",
    content: `African governments should prioritize cooperation to develop a more integrated transportation system. 
This includes investing in better road and rail networks, which would not only reduce travel costs but also enhance connectivity between regions. 
Encouraging open skies policies among African countries can lead to increased competition among airlines, resulting in reduced airfare. 
This approach has the potential to make travel within Africa more affordable and attractive.

Harmonizing visa regulations and reducing fees could significantly boost intracontinental tourism. Simplified visa procedures and more accessible e-visa options would encourage travelers to explore multiple destinations within Africa. Governments and tourism boards should actively promote local tourism by investing in infrastructure, supporting small and medium-sized enterprises, and fostering sustainable eco-tourism initiatives. This approach can create employment opportunities and contribute to the economic growth of host communities.`,
  },
];

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const item = blogPosts.find((b) => b.slug === resolvedParams.slug);

  if (!item) {
    return (
      <div className="main-container pt-30 lg:px-15 px-4">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-20 py-8">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Blog post not found
          </h1>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="main-container md:pt-36 pt-24 lg:px-16 px-4">
        {/* Hero Section */}
        <div className="mx-auto mb-13">
          <h1 className="text-3xl lg:text-[40px] font-light mb-6 max-sm:mb-3">
            {item.title}
          </h1>

          <div className="text-sm text-gray-600 mb-8">
            <span>By {item.author}</span>
            <h3 className="mt-1 md:mt-2">{item.date}</h3>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[360px] lg:h-[450px]">
            <Image
              src={item.heroImage}
              alt={item.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        {/* Blog Content */}
        <div>
          {blogData.map((section, index) => (
            <div key={index} className="lg:mb-13 mb-7">
              <h2 className="text-lg lg:text-2xl font-light lg:mb-6 mb-4">
                {section.heading}
              </h2>
              <div className="lg:mb-6 mb-3">
                {section.content.split("\n\n").map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="leading-relaxed mb-4 max-sm:text-sm"
                  >
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Blogs
        title="RECENT BLOGS & JOURNALS"
        subtitle="Recent Safari Stories & Travel Insights"
      />
    </>
  );
}
