/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  IconEye,
  IconTargetArrow,
  // IconHeartHandshake,
} from "@tabler/icons-react";

const storyItems = [
  {
    id: 1,
    icon: IconEye,
    title: "OUR VISION",
    description:
      "To be the leading bridge between global travelers and East Africa breathtaking safaris, making every journey more meaningful.",
  },
  {
    id: 2,
    icon: IconTargetArrow,
    title: "OUR MISSION",
    description:
      "To simplify safari discovery by seamlessly integrating mapping itineraries into the flight booking experience, sparking curiosity and wanderlust with every ticket.",
  },
  // {
  //   id: 3,
  //   icon: IconHeartHandshake,
  //   title: "OUR VALUES",
  //   description:
  //     "We value innovation, authenticity, sustainability & excellence ensuring every journey is seamless, responsible, & unforgettable.",
  // },
];

export default function Story() {
  return (
    <div className="bg-[url('/images/story-bg-min.webp')] bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-24">
      <div className="section-container ">
        <div className="flex flex-col justify-center items-center text-center mb-12">
          <p className="small-heading">our story</p>
          <h2 className="big-heading text-black max-w-[75%] mt-3">
            Where Flights Meet Safari Adventures
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:flex  items-start">
          {/* First Column */}
          <div className="flex flex-col md:gap-10 gap-5 max-sm:order-3 lg:w-[400px] lg:shrink-0 max-md:mt-7">
            {storyItems.map((item, index) => {
              const Icon = item.icon;
              const leftMarginClass =
                index === 1
                  ? "lg:ml-[80px]"
                  : index === 2
                  ? "lg:ml-[300px]"
                  : "";

              return (
                <div
                  key={item.id}
                  className={`text-center lg:max-w-[80%] ${leftMarginClass}`}
                >
                  <div className="inline-flex items-center justify-center mb-5">
                    <Icon
                      stroke={1}
                      className="text-primary md:size-12 size-6"
                    />
                  </div>
                  <h3 className="text-lg md:text-2xl text-primary mb-3 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-primary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Second Column*/}
          <div className="relative lg:flex-1 max-sm:order-2 max-w-[450px]">
            <img
              src="/images/story-image1.png"
              alt="story image"
              className="h-[277px] lg:h-[460px] lg:w-[360px] object-contain"
            />
            <img
              src="/images/strory-image2.png"
              alt="story image"
              className="h-[166px] lg:h-[275px] lg:w-[238px] object-contain absolute lg:-bottom-40 lg:left-58 -bottom-16 left-40"
            />
          </div>

          {/* Third Column - Welcome text and quote */}
          <div className="flex flex-col gap-5 md:gap-10 max-sm:px-4 max-sm:order-1 lg:w-[470px] lg:shrink-0 lg:pl-12">
            <div>
              <p className="text-lg lg:text-2xl text-primary leading-relaxed mb-6 lg:max-w-[90%]">
                Welcome to Flying Safari, where we curate life-changing journeys
                through East Africa&apos;s hidden wildlife reserves.
              </p>
              <p className="text-sm lg:text-base text-dark-grey leading-relaxed">
                Flying Safari is a UAE-based travel company redefining how
                travelers experience East Africa. While booking your flights,
                you can now unlock unforgettable safari adventures in Tanzania
                through our smart integration and inspiring itineraries, we
                bring the magic of wildlife directly to your booking journey
                making it effortless to plan not just your flight, but also your
                once-in-a-lifetime adventure. Our mission is simple; every
                ticket should be more than a trip it should be the start of an
                adventure.
              </p>
            </div>

            <p className="text-lg md:text-2xl italic font-pacifico text-secondary max-md:mb-7">
              &quot;Every flight is a journey, but in Africa, it becomes an
              adventure.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
