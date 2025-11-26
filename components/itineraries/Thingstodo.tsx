/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  IconCarSuv,
  IconAirBalloon,
  IconWorld,
  IconSunset2,
  IconCamera,
  IconUsers,
} from "@tabler/icons-react";
import Image from "next/image";

interface Activity {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const activities: Activity[] = [
  {
    icon: <IconCarSuv size={40} stroke={1.2} className="text-secondary" />,
    title: "Game drives",
    description: "Big Five game drives in Maasai Mara",
  },
  {
    icon: <IconWorld size={40} stroke={1.2} className="text-secondary" />,
    title: "Witness Migration",
    description: "Witness the Great Migration (seasonal: July–October)",
  },
  {
    icon: <IconCamera size={40} stroke={1.2} className="text-secondary" />,
    title: "Scenic Photography",
    description: "Scenic photography & bush walks",
  },
  {
    icon: <IconAirBalloon size={40} stroke={1.2} className="text-secondary" />,
    title: "Hot Air Balloon Safari",
    description: "Hot air balloon safari over the savannah",
  },
  {
    icon: <IconSunset2 size={40} stroke={1.2} className="text-secondary" />,
    title: "Sundowners",
    description: "Sundowners in the wild",
  },
  {
    icon: <IconUsers size={40} stroke={1.2} className="text-secondary" />,
    title: "Culture Village",
    description: "Visit a traditional Maasai village",
  },
];

export default function Thingstodo() {
  return (
    <div className="px-4 lg:px-40 py-4 lg:py-10">
      <div className="text-center mb-8 lg:mb-12">
        <p className="small-heading">THINGS TO DO</p>
        <h2 className="big-heading text-black">Your Adventure Guide</h2>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 items-center">
        {/* Left Column - Activities 1-3 */}
        <div className="space-y-5 lg:space-y-10 flex flex-col max-lg:order-2">
          {activities.slice(0, 3).map((activity, index) => (
            <div key={index} className="text-center lg:text-right">
              <div className="flex justify-center mb-3 md:mb-4">
                {activity.icon}
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <h3 className="text-base lg:text-lg font-light mb-1 text-primary">
                  {activity.title}
                </h3>
                <p className="text-dark-grey text-sm lg:text-base">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Column - Image */}
        <div className="relative rounded-xl overflow-hidden flex justify-center max-lg:order-1 ">
          <img
            src="/images/thingstodo-image.webp"
            alt="African savannah landscape"
            className="object-cover w-[330px] lg:w-[428px] h-[330px] lg:h-[407px]"
          />
        </div>

        {/* Right Column - Activities 4-6 */}
        <div className="space-y-5 lg:space-y-10 max-lg:order-3">
          {activities.slice(3, 6).map((activity, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="flex justify-center mb-3 md:mb-4">
                {activity.icon}
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <h3 className="text-base lg:text-lg font-light mb-1 text-primary">
                  {activity.title}
                </h3>
                <p className="text-dark-grey text-sm lg:text-base">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
