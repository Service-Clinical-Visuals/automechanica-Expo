"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Solutions from "./_components/Solutions";
import Engineered from "./_components/Engineered";
import Legacy from "./_components/Legacy";
import Explore from "./_components/Explore";
import Premium from "./_components/Premium";
import Reliable from "./_components/Reliable";
import Ready from "./_components/Ready";
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
        <Engineered />
        <Legacy />
        <Explore />
        <Reliable />
        <Premium />

        <Ready />
      </main>

      <Footer />
    </div>
  );
}
