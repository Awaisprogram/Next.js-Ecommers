import React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  span?: string;
}

const Heading = ({
  title,
  subtitle,
  span
}:HeadingProps) => {
  

  return (
    <div className={`text-center my-8 `}>
    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 relative">
      {title} <span className="text-color">{span}</span>
    </h2>
    {subtitle && (
      <p className="text-gray-600 mt-2 text-sm md:text-base">{subtitle}</p>
    )}
  </div>
  );
};

export default Heading;
