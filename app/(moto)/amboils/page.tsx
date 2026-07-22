"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Quality from "./_components/Quality";
import PremiumEngine from "./_components/PremiumEngine";
import WhyChoose from "./_components/WhyChoose";
import MaximumPerformance from "./_components/MaximumPerformance";
import PeakPerformance from "./_components/PeakPerformance";
import ReadyToPower from "./_components/ReadyToPower";
import Footer from "./_components/Footer";


export default function AmboilsPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col w-full bg-white overflow-x-hidden">
      <Header />
      <Banner />
      <Quality />
      <PremiumEngine />
      <WhyChoose />
      <MaximumPerformance />
      <PeakPerformance />
      <ReadyToPower />
      <Footer />
    </main>
  );
}
