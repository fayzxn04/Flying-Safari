import Link from "next/link";
import { destinationsData } from "../../utils/utilsConst";
import Image from "next/image";

export default function Cards() {
  return (
    <section className="section-container lg:py-16 py-4">
      <div className="grid lg:grid-cols-[2fr_1fr] gap-5 md:gap-6 lg:gap-18 items-start">
        {/* Left side */}
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 lg:order-1 order-2 max-md:px-2 py-5 max-md:pb-10">
          {destinationsData.map((destination) => (
            <div
              key={destination.id}
              className="relative h-[180px] max-md:h-[140px] rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />

              {/* Featured Badge */}
              {destination.featured && (
                <div className="absolute top-0 left-0 bg-primary px-3 py-1 text-white text-sm font-normal rounded-br-2xl">
                  Featured
                </div>
              )}

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <h3 className="text-white text-start font-light text-sm md:text-2xl leading-tight">
                  {destination.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-10 lg:space-y-20 h-full lg:order-2 order-1 max-md:px-2">
          <div className="space-y-3">
            <p className="small-heading font-[550] tracking-[0.36px]">
              POPULAR DESTINATION
            </p>
            <h2 className="big-heading font-normal">
              East Africa Iconic Safari Destinations
            </h2>
          </div>

          <Link
            href="/destination"
            className="w-[221px] h-8 lg:h-[42px] bg-primary hover:bg-primary/90 text-white px-6 lg:py-3 py-1.5 rounded transition-colors inline-block text-center font-bold tracking-[1.28px]"
          >
            Explore Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
