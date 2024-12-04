'use client';
import { useState } from "react";
import Link from "next/link";

const TopBar = () => {
  const [visible, setVisible] = useState(true)
  
  return (
    visible &&(
      <div className="bg-gray-900 text-gray-100 lg:text-sm text-[12px] py-4 text-center relative">
        Get Up to 40% OFF New-Season Styles {" "}
        <Link href="/" className="transition ease-in hover:text-color">
          Learn More!
        </Link>
        <button
          onClick={()=> setVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2  text-gray-100 transition ease-in hover:text-color"
        >
          ✕
        </button>
      </div>
    )
  );
};

export default TopBar;