import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

import crousel1 from '../images/crousel1.png'
import crousel2 from '../images/crousel2.png'

const Page = () => {
  const images = [crousel1, crousel2];

  return (
    <Carousel
      className="relative w-screen"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="flex">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="relative flex  w-full h-auto group"
          >
            <div className="w-full h-auto relative">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={800} 
                height={200} 
                unoptimized
                className="w-full object-cover"
              />

              <CarouselPrevious
                className="absolute left-4  top-1/2 lg:top-[240px] transform -translate-y-1/2 p-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in z-10"
              >
                <span className="text-gray-700 text-xl">&larr;</span>
              </CarouselPrevious>

              <CarouselNext
                className="absolute right-4 lg:top-[240px] top-1/2 transform -translate-y-1/2 p-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in z-10"
              >
                <span className="text-gray-700 text-xl">&rarr;</span>
              </CarouselNext>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Page;
