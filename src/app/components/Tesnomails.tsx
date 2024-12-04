import React from "react";
import Image, { StaticImageData } from "next/image";


interface Testimonial {
  feedback: string;
  image: string|StaticImageData;
  name: string;
  role: string;
}

interface TesnomailsProps {
  testimonials?: Testimonial[];
}

const Tesnomails: React.FC<TesnomailsProps> = ({ testimonials = [] }) => {
  return (
    <section className="bg-gray-100 my-10">
      <div className="container p-6 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-4xl font-bold">What Our Customers Say</h2>
            <p className="dark:text-gray-600">
              Hear from our happy customers who love shopping with us. We are
              committed to providing the best service and products.
            </p>
          </div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              {testimonials.length > 0 ? (
                testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="p-6 rounded shadow-md bg-white"
                  >
                    <p>{testimonial.feedback}</p>
                    <div className="flex items-center mt-4 space-x-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 bg-center object-cover bg-cover rounded-full"
                        width={200}
                        height={200}
                      />
                      <div>
                        <p className="text-lg font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600">
                  No testimonials available at the moment.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tesnomails;
