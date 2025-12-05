/* eslint-disable @next/next/no-img-element */
import { overview } from "@/utils/utilsConst";
import Link from "next/link";

export default function Overview() {
  return (
    <section className="bg-[url('/images/overview-bg.webp')] bg-center bg-no-repeat px-3 lg:px-20 py-4 max-width lg:py-15 flex flex-col justify-center items-center max-md:pb-24">
      <div className="flex flex-col justify-center text-center items-center md:mb-6">
        <p className="text-lg md:text-2xl lg:text-[28px] lg:max-w-[65%] text-secondary leading-6 md:leading-8 lg:leading-10 font-[550]">
          In Tanzania, the rhythm of the wild is untouched by time. From the
          roar of lions to the whispers of the savannah winds, the land invites
          you to wander beyond the ordinary and embrace.
        </p>
        <h2 className="font-pacifico text-primary mt-4 text-2xl md:text-3xl lg:text-5xl">
          Flying Safari
        </h2>
      </div>

      <div className="flex justify-center items-center relative w-full max-w-6xl">
        {overview.map((item, index) => (
          <div
            key={index}
            className={`relative max-md:mt-8 ${
              index === 1
                ? "w-[114px] md:w-[200px] lg:w-[360px] h-[148px] md:h-[260px] lg:h-[460px] z-20 lg:-mt-5 max-md:-mt-3"
                : "w-[108px] md:w-[190px] lg:w-[340px] h-[148px] md:h-[260px] lg:h-[460px] lg:mt-24 max-md:mt-14"
            }
            `}
            style={{ transform: item.rotation }}
          >
            <img
              src={item.img}
              alt={`Overview image ${index + 1}`}
              className={`object-cover 
              `}
            />
          </div>
        ))}
      </div>

      <Link
        href="/about"
        className="w-[120px] h-8 lg:h-[42px] bg-primary hover:bg-primary/90 text-white px-6  lg:py-3 py-1.5 rounded transition-colors max-lg:mt-4 md:text-base text-sm cursor-pointer inline-block text-center"
      >
        About us
      </Link>
    </section>
  );
}

//  className="w-[221px] h-8 lg:h-[42px] bg-primary hover:bg-primary/90 text-white px-6 lg:py-3 py-1.5 rounded transition-colors inline-block text-center font-bold tracking-[1.28px]"
