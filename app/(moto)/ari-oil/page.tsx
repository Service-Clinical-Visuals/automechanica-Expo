"use client";

import { useEffect } from "react";
import { AOSInit } from "./components/AOSInit";
import Lenis from "lenis";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Protection from "./components/Protection";
import Gallery from "./components/Gallery";
import EngineOils from "./components/EngineOils";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

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
      <Gallery />
      <EngineOils />
      <Categories />
      <Footer />
    </main>
  );
}
