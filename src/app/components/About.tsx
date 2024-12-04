import React from 'react';

function OurAbout() {
  return (
    <section className="bg-white text-gray-600 body-font">
      <div className="container mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h1>
        <div className="space-y-6">
          <p className="text-lg font-light leading-relaxed">
            At ShopShere, we are committed to redefining online shopping by making it seamless, enjoyable, and convenient. 
            What began as a small venture with a big vision has grown into a trusted e-commerce platform, delivering 
            high-quality products directly to your doorstep. We take pride in offering a vast collection of items to 
            meet every need, from everyday essentials to unique finds.
          </p>
          <p className="text-lg font-light leading-relaxed">
            At the heart of ShopShere is a dedication to trust, transparency, and customer satisfaction. 
            Our mission is to bring you the best products at affordable prices while ensuring an unparalleled 
            shopping experience. With an ever-expanding catalog, we strive to stay ahead of trends and deliver 
            what matters most to you.
          </p>
          <p className="text-lg italic font-light leading-relaxed text-gray-700">
            “Our mission is to empower customers with choice, quality, and the convenience they deserve—because you matter to us.”
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurAbout;
