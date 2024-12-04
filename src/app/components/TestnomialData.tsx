import React from "react";
import Tesnomails from "./Tesnomails";
import p1 from '../images/p1.jpeg'
import p2 from '../images/p2.jpeg'
import p3 from '../images/p3.jpeg'
import p4 from '../images/p4.jpeg'

const testimonialsData = [
  {
    feedback:
      "Amazing experience! The quality of the products is unmatched, and the delivery was super quick.",
    image: p1,
    name: "Smith Doe",
    role: "Verified Buyer",
  },
  {
    feedback:
      "This is my go-to store for all my needs. Customer service is excellent and very responsive.",
    image: p4,
    name: "Green Lane",
    role: "Frequent Shopper",
  },
  {
    feedback:
      "I love the variety of options available. The prices are reasonable, and the quality is top-notch.",
    image: p3,
    name: "Emily Johnson",
    role: "Loyal Customer",
  },
  {
    feedback:
      "Great shopping experience. The website is easy to use, and the checkout process was seamless.",
    image: p2,
    name: "Michael Brown",
    role: "Happy Customer",
  },
];

function App() {
  return (
    <div>
      <Tesnomails testimonials={testimonialsData} />
    </div>
  );
}

export default App;
