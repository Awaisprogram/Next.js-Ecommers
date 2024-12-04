"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Heading from "./Heading";
import a1 from "../images/m1.jpg";
import a2 from "../images/m2.jpg";
import a3 from "../images/m3.jpg";
import a4 from "../images/m4.jpg";
import a5 from "../images/m5.jpg";
import a6 from "../images/m6.jpg";
import a7 from "../images/m7.jpg";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Beach Force Sunglass",
    price: "$80.00",
    imgFirst: a7,
  },
  {
    id: 2,
    name: "Beach Force Sunglass",
    price: "$80.00",
    imgFirst: a2,
  },
  {
    id: 3,
    name: "Beach Force Sunglass",
    price: "$80.00",
    imgFirst: a3,
  },
  {
    id: 4,
    name: "Beach Force Sunglass",
    price: "$80.00",
    imgFirst: a4,
  },
  {
    id: 5,
    name: "Beach Force Sunglass",
    price: "$80.00",
    imgFirst: a5,
  },
  {
    id: 6,
    name: "Beach Force Sunglass",
    price: "$80.00",
    imgFirst: a6,
  },
  {
    id: 7,
    name: "Beach Force Sunglass",
    price: "$80.00",
    imgFirst: a1,
  },
];

const Arrival = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      
      <div className="relative p-10">
      <div>
        <Heading title="Latest " span="Product" />
      </div>
        <ArrowLeft
          className="absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer bg-black opacity-50 text-white rounded-full font-bold shadow-lg hover:opacity-100  duration-300 transition-all ease-in"
          onClick={() => swiperRef.current?.slidePrev()}
          size={28}
        />
        <ArrowRight
          className="absolute top-1/2  -translate-y-1/2 right-0 z-10 cursor-pointer bg-black opacity-50 font-bold text-white rounded-full shadow-lg hover:opacity-100 transition ease-in"
          onClick={() => swiperRef.current?.slideNext()}
          size={28}
        />

        <Swiper
          className="w-full"
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            740: { slidesPerView: 3, spaceBetween: 30 },
            1300: { slidesPerView: 5, spaceBetween: 40 },
          }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, A11y]}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="flex justify-center">
                <div className="relative w-80 h-96 group">
                  <Image
                    src={product.imgFirst}
                    alt={product.name}
                    className="w-full h-full rounded-xl object-fit transition-transform scale-95 group-hover:scale-100 duration-300 transition-all ease-in"
                    width={400}
                    height={400}
                    unoptimized
                  />

                  <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white">
                      <FaHeart size={18} />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow hover:bg-color hover:text-white">
                      <FaShoppingCart size={18} />
                    </button>
                  </div>

                  <button className="absolute bottom-0 left-1/2 w-full transform -translate-x-1/2 bg-color text-white py-4 px-6 rounded-b-xl  opacity-0 group-hover:opacity-100  transition-all ease-in">
                   Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Arrival;
