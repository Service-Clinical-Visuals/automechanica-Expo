"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import World from "./_components/World";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Reliable2 from "./_components/Reliable2";
import Reliable from "./_components/Reliable";
import Products from "./_components/Products";
import Updates from "./_components/Updates";
import Footer from "./_components/Footer";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-urbanist">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <World />
        <Deg360 />
        <Reliable2 />
        <Products />
        <Reliable />


        <Updates />
      </main>

      <Footer />
    </div>
  );
}
