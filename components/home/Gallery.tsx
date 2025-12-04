/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef, useCallback } from "react";
import Button from "@/components/common/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, EffectCoverflow, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { IMAGES } from "@/utils/utilsConst";

export default function Gallery() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  return (
    <>
      {/* Heading */}
      <section className="flex flex-col justify-center items-center text-center mb-10">
        <p className="small-heading">Gallery</p>
        <h2 className="big-heading text-black lg:max-w-[55%] max-w-[80%] mt-3">
          A selection of Images of Our Beautiful Safari Experiences
        </h2>
      </section>

      {/* Swiper */}
      <div className="w-full flex justify-center mb-12">
        <Swiper
          modules={[Autoplay, Keyboard, EffectCoverflow]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: -40,
            depth: 120,
            modifier: 1.3,
            slideShadows: false,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 5,
              spaceBetween: -80,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: -60,
            },
            0: {
              slidesPerView: 3,
              spaceBetween: -35,
            },
          }}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          className="w-full px-4"
        >
          {IMAGES.map((src, index) => (
            <SwiperSlide key={index} className="w-full">
              <div className="relative h-60 w-full overflow-hidden  md:h-[380px] lg:h-[420px]">
                <img
                  src={src}
                  alt={`Gallery ${index}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-center">
        <Button onPrev={handlePrev} onNext={handleNext} />
      </div>
    </>
  );
}
