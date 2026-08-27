"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import Explore360 from "./_components/Explore360";
import OurSolutions from "./_components/OurSolutions";
import InnovationAction from "./_components/InnovationAction";
import NextGenMobility from "./_components/NextGenMobility";
import StayConnected from "./_components/StayConnected";
import LatestNews from "./_components/LatestNews";
import Footer from "./_components/Footer";


export default function LaunchEuropePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col w-full bg-[#111111] overflow-x-hidden overflow-y-hidden">
      <Header />
      <Banner />
      <AboutUs />
      <Explore360 />
      <OurSolutions />
      <InnovationAction />
      <NextGenMobility />
      <StayConnected />
      <LatestNews />
      <Footer />
    </main>
  );
}
