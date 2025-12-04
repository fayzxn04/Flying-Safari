"use client";
import Image from "next/image";
interface BannerData {
  image: string;
  title: React.ReactNode;
}

interface BannerProps {
  data: BannerData;
}

export default function Banner({ data }: BannerProps) {
  return (
    <main className="relative w-full h-[90svh] md:h-screen" id="banner">
      <Image
        src={data.image}
        alt={"Banner image"}
        priority
        fill
        className="object-cover"
      />
      <div className="max-w-[709px] absolute top-[40%] md:top-1/2 -translate-y-1/2 md:left-20 max-md:left-6 max-md:w-[80%]">
        <p className="lg:text-5xl md:text-3xl text-2xl leading-tight text-white font-light max-md:text-center">
          {data.title}
        </p>
      </div>
    </main>
  );
}

// <div className="max-w-[709px] absolute top-[40%] md:top-1/2 -translate-y-1/2 md:left-20 max-md:left-6 max-md:w-[80%]">
//   <div className="flex max-w-[760px] items-start text-white font-light">
//     <p className="max-w-[625px] lg:text-5xl md:text-3xl text-2xl leading-tight max-md:text-center">
//       {data.title}
//     </p>
//   </div>
// </div>
