import Image from "next/image";
import Link from "next/link";

interface Destination {
  id: number;
  name: string;
  image: string;
  featured?: boolean;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "SERENGETI NATIONAL PARK",
    image: "/images/destinations/serengeti.png",
    featured: true,
  },
  {
    id: 2,
    name: "MAASAI MARA NATIONAL RESERVE",
    image: "/images/destinations/masai-mara.png",
    featured: true,
  },
  {
    id: 3,
    name: "NGORONGORO CRATER",
    image: "/images/destinations/ngorongoro.png",
  },
  {
    id: 4,
    name: "LAKE MANYARA NATIONAL PARK",
    image: "/images/destinations/lake-manyara.png",
  },
  {
    id: 5,
    name: "TARANGIRE NATIONAL PARK",
    image: "/images/destinations/tarangire.png",
  },
  {
    id: 6,
    name: "KILIMANAJARO NATIONAL PARK",
    image: "/images/destinations/kilimanajaro.png",
  },
  {
    id: 7,
    name: "SERENGETI NATIONAL PARK",
    image: "/images/destinations/serengeti.png",
  },
  {
    id: 8,
    name: "MAASAI MARA NATIONAL RESERVE",
    image: "/images/destinations/masai-mara.png",
  },
  {
    id: 9,
    name: "NGORONGORO CRATER",
    image: "/images/destinations/ngorongoro.png",
  },
];

export default function Cards() {
  return (
    <section className="section-container py-16">
      <div className="grid lg:grid-cols-[2fr_1fr] gap-8 items-start">
        {/* Left side */}
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 lg:order-1 order-2 max-md:px-2">
          {destinations.map((destination) => (
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
                <div className="absolute top-0 left-0">
                  <div className="relative bg-primary px-3 py-1 text-white text-sm font-light rounded-br-2xl">
                    Featured
                  </div>
                </div>
              )}

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <h3 className="text-white text-center font-light text-sm md:text-2xl leading-tight">
                  {destination.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-10 h-full lg:order-2 order-1 max-md:px-2">
          <div className="space-y-3">
            <p className="small-heading">POPULAR DESTINATION</p>
            <h2 className="big-heading">
              East Africa Iconic Safari Destinations
            </h2>
          </div>

          <Link href="/destination">
            <button className=" w-[220px] bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded transition-colors">
              Explore Destinations
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
