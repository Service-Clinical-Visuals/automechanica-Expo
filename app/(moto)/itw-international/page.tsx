"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutUs from "./_components/AboutUs";
import Explore360 from "./_components/Explore360";
import OurProducts from "./_components/OurProducts";
import PremiumIgnition from "./_components/PremiumIgnition";
import ReliableSolutions from "./_components/ReliableSolutions";
import CompleteIgnition from "./_components/CompleteIgnition";
import Sustainability from "./_components/Sustainability";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Banner from "./_components/Banner";

export default function ItwInternationalPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col w-full bg-white overflow-x-hidden overflow-y-hidden font-oswald">
      <Header />
      <Banner />
      <AboutUs />
      <Explore360 />
      <OurProducts />
      <PremiumIgnition />
      <ReliableSolutions />
      <CompleteIgnition />
      <Sustainability />
      <Footer />
    </main>
  );
}
