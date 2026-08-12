"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import News from "./_components/News";
import Footer from "./_components/Footer";
import Precision2 from "./_components/Precision2";
import Precision from "./_components/Precision";
import Discover from "./_components/Discover";
import Quality from "./_components/Quality";
export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-urbanist">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Precision />
        <Discover />
        <Quality />
        <Precision2 />


        <News />

      </main>

      <Footer />

    </div>
  );
}
