"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Process from "./_components/Process";
import Deg360 from "./_components/360deg";
import Automotive from "./_components/Automotive";
import Quality from "./_components/Quality";
import News from "./_components/News";
import Footer from "./_components/Footer";
import Comprehensive from "./_components/comprehensive";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-urbanist">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Process />
        <Automotive />
        <Quality />
        <Comprehensive />
        <News />
      </main>

      <Footer />

    </div>
  );
}
