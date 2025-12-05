/* eslint-disable @next/next/no-img-element */
import { images } from "@/utils/utilsConst";

export default function GalleryPictures() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-4 lg:px-18 px-4 lg:pt-20 py-6">
      {images.map((item, index) => {
        // Add margin-top to columns 1 and 3 (index 0 and 2) in each row
        const isColumn1Or3 = index % 4 === 0 || index % 4 === 2;

        return (
          <img
            key={index}
            src={item.image}
            alt={`Gallery image ${index + 1}`}
            className={`object-cover w-full h-[200px] lg:h-[440px] ${
              isColumn1Or3 ? "lg:mt-6" : ""
            }`}
          />
        );
      })}
    </div>
  );
}
