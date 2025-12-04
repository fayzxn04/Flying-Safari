/* eslint-disable @next/next/no-img-element */
import { benefits } from "@/utils/utilsConst";

export default function Benefits() {
  return (
    <section className="bg-[url('/images/benefits-bg.png')] bg-cover bg-center bg-no-repeat py-5 md:py-15 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center md:justify-items-start">
        {benefits.map((benefit, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-xs md:max-w-none"
            >
              <img
                src={benefit.img}
                alt={benefit.title}
                className="text-secondary size-15 md:size-20 lg:size-25"
              />
              <h3 className="text-lg md:text-[20px] lg:text-2xl font-normal text-primary lg:mt-4 mt-2 leading-8">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base font-normal text-primary lg:mt-3 mt-1 leading-6">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
