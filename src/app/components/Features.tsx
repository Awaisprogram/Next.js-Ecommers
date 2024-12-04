import { FaTruck, FaRedoAlt, FaLock } from 'react-icons/fa';
import Heading from './Heading';

const Features = () => {
  return (
    <div className="mx-auto text-center p-5 ">
      <Heading title='Our' span='Features'/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border rounded-lg text-center h-full  hover:bg-gray-100 transition-all ease-in">
          <FaTruck className="text-4xl mb-4 flex w-full justify-center items-cener" />
          <h3 className="text-xl font-medium mt-2">Free Shipping</h3>
          <p className="text-gray-500 mt-2 font-light">
            Enjoy hassle-free delivery on all your orders.
          </p>
        </div>
        <div className="p-6 bg-white border rounded-lg text-center h-full  hover:bg-gray-100 transition-all ease-in">
          <FaRedoAlt className="text-4xl  mb-4 flex w-full justify-center items-cener" />
          <h3 className="text-xl font-medium mt-2">Simple Returns</h3>
          <p className="text-gray-500 mt-2 font-light">
            Return or exchange items with ease .
          </p>
        </div>
        <div className="p-6 bg-white border rounded-lg text-center h-full  hover:bg-gray-100 transition-all ease-in">
          <FaLock className="text-4xl mb-4 flex  w-full justify-center items-cener" />
          <h3 className="text-xl font-medium mt-2">Secure Payments</h3>
          <p className="text-gray-500 mt-2 font-light">
            Knowing your payment details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
