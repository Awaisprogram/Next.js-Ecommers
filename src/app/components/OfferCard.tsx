import React from "react";
import Image, { StaticImageData } from "next/image";
import Button from './Button'
import Link from "next/link";

interface OfferCardProps {
  imageSrc: StaticImageData;
  altText: string;
  saleText: string;
  description: string;
}

const OfferCard = ({ imageSrc, altText, saleText, description }: OfferCardProps) => (
  <div className="mb-6 ">
    <div className="relative text-center group cursor-pointer">
      <div className="relative w-full overflow-hidden h-[450px]">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 z-10 rounded-xl"></div>
        <div className="absolute top-0 left-0 w-full h-full shining-effect z-20"></div>
        
        <Image
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-contain transition-transform duration-500 rounded-xl"
          layout="fill" 
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full rounded flex flex-col justify-center items-center z-30 transition-all duration-250">
        <p className="text-6xl font-bold uppercase text-white">{saleText}</p>
        <p className="text-white text-lg font-light uppercase mb-4">{description}</p>
        <Link href='./shop'>  <Button/></Link>
      
      </div> 
    </div>
  </div>
);

export default OfferCard;
