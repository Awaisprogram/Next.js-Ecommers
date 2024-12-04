import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoDeviantart } from "react-icons/io5";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900">
        <div className="container px-8 py-16 mx-auto">
          <div className="md:flex md:-mx-3 md:items-center md:justify-between">
            <h1 className="font-semibold tracking-tight text-gray-100 md:mx-3 text-4xl">
              Subscribe to our newsletter to get updates.
            </h1>
            <div className="mt-8 md:mx-3 shrink-0 md:mt-0 md:w-auto">
              <Link
                href="#"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-lg text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                <span>Sign Up Now</span>
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <hr className="my-8 border-gray-200 md:my-12 dark:border-gray-700" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-gray-100 text-2xl">Quick Link</p>
              <div className="flex flex-col items-start mt-5 space-y-3">
                <Link
                  href="#"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:text-color"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:text-color"
                >
                  Who We Are
                </Link>
                <Link
                  href="#"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:text-color"
                >
                  Our Philosophy
                </Link>
              </div>
            </div>
            <div>
              <p className="font-semibold text-2xl text-gray-100">Industries</p>
              <div className="flex flex-col items-start mt-5 space-y-3">
                <Link
                  href="#"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:text-color"
                >
                  Retail &amp; E-Commerce
                </Link>
                <Link
                  href="#"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:text-color"
                >
                  Information Technology
                </Link>
                <Link
                  href="#"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:text-color"
                >
                  Finance &amp; Insurance
                </Link>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-100 text-2xl">Services</p>
              <div className="flex flex-col items-start mt-5 space-y-3">
                <Link
                  href="#"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:text-color"
                >
                  Translation
                </Link>
                <Link
                  href="#"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:text-color"
                >
                  Proofreading &amp; Editing
                </Link>
                <Link
                  href="#"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:text-color"
                >
                  Content Creation
                </Link>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-100 text-2xl">Contact Us</p>
              <div className="flex flex-col items-start mt-5 space-y-3">
                <Link
                  href="#"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:text-color"
                >
                  +92 318 3153371
                </Link>
                <Link
                  href="#"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:text-color"
                >
                  info@ShopShere.com
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-8 border-gray-200 md:my-12 dark:border-gray-700" />
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <Link href="#">
              <h1 className="text-4xl text-color font-bold flex items-center gap-1"> <IoLogoDeviantart/>ShopShere</h1>
            </Link>
            <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
              © Copyright 2024 Awais Mehmood. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
