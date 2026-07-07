"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Ignition from "./_components/Ignition";
import Products from "./_components/Products";
import Technology from "./_components/Technology";
import News from "./_components/News";
import Footer from "./_components/Footer";
import SmoothAOS from "./_components/SmoothAOS";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-urbanist">
      <SmoothAOS />
      
      <Header />
      
      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Ignition />
        <Products />
        <Technology />
        <News />
      </main>

      <Footer />
    </div>
  );
}
