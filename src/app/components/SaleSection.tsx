import Image from "next/image";
import Link from "next/link";
import sale from "../images/sale.png";
import Button from "./Button2";

const SaleSection = () => {
  return (
    <section className="sale bg-gray-100 mt-10 py-8">
      <div className="px-4 flex flex-col lg:flex-row justify-center gap-8 items-center">
        <div className="sale__image">
          <Image
            src={sale}
            alt="sale"
            width={500}
            height={500}
            className="mx-auto drop-shadow-xl"
          />
        </div>

        <div className="text-center lg:text-left flex flex-col items-center lg:items-start pb-16">
          <h2 className="text-5xl lg:text-7xl font-extrabold leading-tight text-black mb-4">
            <span className="relative inline-block before:absolute before:content-[''] before:top-0 before:left-[-0.25rem] before:h-full before:w-full before:bg-color text-white before:-rotate-2 before:-z-10 isolate ">
              PAYDAY
            </span>
            <br />
            SALE NOW
          </h2>
          <p className="text-lg font-light text-black mb-6 max-w-md ">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <h4 className="text-3xl font-semibold text-black mb-2 ">1 Dec - 14 Dec 2024</h4>
          <p className="text-black text-lg font-light mb-6">*Terms and conditions apply</p>
          <div className="sale__btn">
            <Link href="/products">
              <Button text="Explore Now" /> <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleSection;
