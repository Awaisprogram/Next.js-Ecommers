import React from "react";
import Navigation from "../components/Naviagation";
import AboutHeader from'../components/AboutHeader'
import OurAbout from "../components/About";
import Team from "../components/Stats";
import Tesnomails from "../components/TestnomialData";

function About() {
  return (
    <>
    <AboutHeader/>
      <div className="px-8 py-5">
        <Navigation
          Current="About Us"
        />
      </div> 
      <OurAbout/>
      <Tesnomails/>
      <Team/>

     
      
    </>
  );
}

export default About;
