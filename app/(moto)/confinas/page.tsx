"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Solutions from "./_components/Solutions";
import Power from "./_components/Power";
import BatteryFinder from "./_components/BatteryFinder";
import Proven from "./_components/Proven";
import News from "./_components/News";

import Footer from "./_components/Footer";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-urbanist">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Solutions />
        <Power />
        <BatteryFinder />
        <Proven />
        <News />
      </main>

      <Footer />
   
    </div>
  );
}
