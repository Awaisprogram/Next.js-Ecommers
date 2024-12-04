import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { IoMdHeart } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa';
import Link from 'next/link';
import b1 from '../images/b1.jpg'
import b2 from '../images/b2.jpg'
import b3 from '../images/b3.jpg'
import Heading from './Heading';

function News() {
  return (
    <div>
    
      <section id='news' className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
        <div >
        <Heading title='Current ' span='Updates'/>
      </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 h-72 w-full object-cover object-center"
                  src={b1}
                  alt="blog"
                  unoptimized
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                    microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="/learn-more" className="text-color inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <FaArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <FaRegUser className="w-4 h-4 mr-1" />
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <IoMdHeart className="w-4 h-4 mr-1" />
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 h-72  w-full object-cover object-center"
                  src={b2}
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The 400 Blows
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                    microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link href="/learn-more" className="text-color inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <FaArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <FaRegUser className="w-4 h-4 mr-1" />
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <IoMdHeart className="w-4 h-4 mr-1" />
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 h-72 w-full object-cover object-center"
                  src={b3}
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                    microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="/learn-more" className="text-color inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <FaArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <FaRegUser className="w-4 h-4 mr-1" />
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <IoMdHeart className="w-4 h-4 mr-1" />
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default News;
