import React from 'react';
import Image from 'next/image';
import stats from '../images/stats.jpg'

function Team() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-8 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10 text-center lg:text-left">
          <div className="w-full sm:p-4 px-4 mb-6 ">
            <h1 className="title-font font-bold  text-4xl mb-4 text-gray-900">
              Trusted by Thousands of Customers
            </h1>
            <p className="leading-relaxed text-gray-700">
              Our mission is to deliver quality products and exceptional service 
              to customers worldwide. Explore a wide range of products, backed 
              by fast shipping and unbeatable customer support.
            </p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">10K+</h2>
            <p className="leading-relaxed">Orders Delivered</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">500+</h2>
            <p className="leading-relaxed">Products Available</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">15K</h2>
            <p className="leading-relaxed">Happy Customers</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">50</h2>
            <p className="leading-relaxed">Global Stores</p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <Image
            className="object-cover object-center w-full h-full"
            src={stats}
            alt="E-commerce stats"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

export default Team;
