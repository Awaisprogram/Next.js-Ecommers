
import React from 'react';
import Image from 'next/image';
import about from '../images/shop2_about_us_banner.jpg'
import Button from './Button2';

function AboutHeader() {
  return (
    <> 
    <header className="relative h-[300px] w-full">
      <Image
        src={about}
        alt="Header Background"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-start justify-center px-4 md:px-16 leading-tight z-10">
        <h1 className="text-xl font-bold">ABOUT US</h1>
        <h2 className="text-5xl font-black mb-4">OUR COMPANY</h2>
        <Button text='Contact Us'/>
      </div>
    </header>
    </>
  );
}

export default AboutHeader;

