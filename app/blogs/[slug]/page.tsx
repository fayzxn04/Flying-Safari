// import { Metadata } from "next";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";
import Blogs from "@/components/home/Blogs";
import { blogData } from "@/utils/utilsConst";

// Blog post data

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
      <div className="main-container md:pt-40 pt-24 lg:px-16 px-4">
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
              <h2 className="text-lg md:text-2xl lg:text-[28px] font-normal text-primary lg:mb-6 mb-4">
                {section.heading}
              </h2>
              <div className="lg:mb-6 mb-3">
                {section.content.split("\n\n").map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="leading-relaxed mb-4 max-sm:text-sm text-dark-grey font-normal"
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
        title="BLOGS & JOURNALS"
        subtitle="Recent Safari Stories & Travel Insights"
      />
    </>
  );
}
