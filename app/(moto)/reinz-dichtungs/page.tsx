"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import Explore360 from "./_components/Explore360";
import OurProducts from "./_components/OurProducts";
import EngineeringMotion from "./_components/EngineeringMotion";
import OurGoal from "./_components/OurGoal";
import PrecisionEngineering from "./_components/PrecisionEngineering";
import LatestNews from "./_components/LatestNews";
import Footer from "./_components/Footer";

export default function ReinzDichtungsPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col w-full bg-white overflow-x-hidden overflow-y-hidden font-poppins">
      <Header />
      <Banner />
      <AboutUs />
      <Explore360 />
      <OurProducts />
      <EngineeringMotion />
      <OurGoal />
      <PrecisionEngineering />
      <LatestNews />
      <Footer />
    </main>
  );
}
