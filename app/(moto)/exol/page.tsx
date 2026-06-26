"use client";

import { useEffect } from "react";
import { AOSInit } from "./_components/AOSInit";
import Lenis from "lenis";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Protection from "./_components/Protection";
import Products from "./_components/Products";
import PremiumEngine from "./_components/PremiumEngine";
import Brands from "./_components/Brands";
import Footer from "./_components/Footer";

export default function Home() {
  AOSInit();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,   // scroll speed
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // easing curve
      smoothWheel: true,
      syncTouch: true,
      gestureOrientation: 'vertical',
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <main>
      <Header />
      <Hero />
      <AboutUs />
      <Protection />
      <Products />
      <PremiumEngine />
      <Brands />
      <Footer />
    </main>
  );
}
