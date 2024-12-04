import React from "react";
import OfferCard from "./OfferCard";
import img1 from '../images/u2.jpeg'
import img2 from '../images/u1.jpeg'
import img3 from '../images/denim4.png'
import Heading from "./Heading";


const OfferSection = () => {
  const offers = [
    {
      imageSrc: img2,
      altText: "Offer 1",
      saleText: "Sale 30%",
      description: "Don't miss this chance",
    },
    {
      imageSrc: img3,
      altText: "Offer 2",
      saleText: "Sale 20%",
      description: "Don't miss this chance",
    },
    {
      imageSrc: img1,
      altText: "Offer 3",
      saleText: "Sale 50%",
      description: "Don't miss this chance",
    },
  ];

  return (
    <section className="p-5" id="sales">
        <div>
          <Heading title="BIG" span="SALES"/>
        </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <OfferCard
              key={index}
              imageSrc={offer.imageSrc}
              altText={offer.altText}
              saleText={offer.saleText}
              description={offer.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
