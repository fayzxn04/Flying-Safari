// "use client";
// import SectionHeading from "@/ui/SectionHeading";
// import React, { useCallback, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import type { Swiper as SwiperInstance } from "swiper";
// import {
//   Autoplay,
//   Navigation,
//   Keyboard,
//   EffectCoverflow,
// } from "swiper/modules";
// import { dataGallery } from "@/utils/utilsConst";
// import { usePathname } from "next/navigation";

// const GallerySection = () => {
//   const swiperRef = useRef<SwiperInstance | null>(null);

//   const pathName = usePathname();

//   const handlePrevSlide = useCallback(() => {
//     swiperRef.current?.slidePrev();
//   }, []);

//   const handleNextSlide = useCallback(() => {
//     swiperRef.current?.slideNext();
//   }, []);

//   const isPrivateEventsPage = pathName === "/private-events";

//   return (
//     <section className="h-full w-full overflow-hidden px-4 pt-4 md:h-[850px]">
//       <div className="relative h-full w-full">
//         {!isPrivateEventsPage && (
//           <img
//             src="/images/home/galleryBanner.webp"
//             alt="Gallery Banner"
//             className="absolute top-0 left-0 h-full w-full rounded-[20px] object-cover"
//           />
//         )}
//         <div className="relative z-10 flex h-full w-full flex-col items-center max-md:gap-7 md:gap-10">
//           {/* Heading Section */}
//           <div className="mt-5 w-full text-center max-sm:px-2 md:mt-12.5 md:w-1/2 2xl:w-[40%]">
//             <SectionHeading
//               headingText="Experience the Glimpse of Pickle Zone in Action"
//               darkMode={isPrivateEventsPage ? false : true}
//               buttonText="OUR GALLERY"
//               centered={true}
//             />
//           </div>

//           {/* Swiper Gallery */}
//           <div className="mx-auto mb-10 w-full px-4 md:mb-20">
//             <Swiper
//               modules={[Autoplay, Navigation, Keyboard, EffectCoverflow]}
//               onSwiper={(swiper) => {
//                 swiperRef.current = swiper;
//               }}
//               effect="coverflow"
//               grabCursor={true}
//               centeredSlides={true}
//               loop={true}
//               slidesPerView="auto"
//               coverflowEffect={{
//                 rotate: 0,
//                 stretch: -40,
//                 depth: 150,
//                 modifier: 1.5,
//                 slideShadows: false,
//               }}
//               breakpoints={{
//                 1024: {
//                   slidesPerView: 5,
//                   spaceBetween: -80,
//                 },
//                 768: {
//                   slidesPerView: 2,
//                   spaceBetween: -60,
//                 },
//                 0: {
//                   slidesPerView: 1,
//                   spaceBetween: 20,
//                 },
//               }}
//               speed={500}
//               autoplay={{
//                 delay: 5000,
//                 disableOnInteraction: false,
//               }}
//               keyboard={{
//                 enabled: true,
//               }}
//             >
//               {dataGallery.map((item, index) => (
//                 <SwiperSlide key={index} className="max-w-full">
//                   <div className="relative h-[264px] w-full overflow-hidden rounded-lg md:h-[400px] lg:h-[420px]">
//                     <img
//                       src={item.imageUrl}
//                       alt={`Gallery image ${index + 1}`}
//                       className="h-full w-full object-cover"
//                     />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* Navigation Buttons */}
//             <div className="mt-6 flex justify-center gap-x-4">
//               <button
//                 onClick={handlePrevSlide}
//                 className={`flex cursor-pointer items-center justify-center rounded-full border-2 ${
//                   isPrivateEventsPage ? "border-secondary" : "border-white"
//                 } px-8 py-3 transition-all hover:bg-white/10 active:bg-white/20`}
//                 aria-label="Previous slide"
//               >
//                 <img
//                   src="/icons/common/rightArrowB.svg"
//                   alt="arrow"
//                   className={`${
//                     !isPrivateEventsPage && "brightness-0 invert"
//                   } rotate-180`}
//                 />
//               </button>
//               <button
//                 onClick={handleNextSlide}
//                 className={`flex w-auto cursor-pointer items-center justify-center rounded-full border-2 px-8 py-3 transition-all hover:bg-white/10 active:bg-white/20 ${
//                   isPrivateEventsPage ? "border-secondary" : "border-white"
//                 }`}
//                 aria-label="Next slide"
//               >
//                 <img
//                   src="/icons/common/rightArrowB.svg"
//                   alt="arrow"
//                   className={`${!isPrivateEventsPage && "brightness-0 invert"}`}
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GallerySection;
