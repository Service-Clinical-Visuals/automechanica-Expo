"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Excellence from "./_components/Excellence";
import Innovation from "./_components/Innovation";
import Products from "./_components/Products";
import News from "./_components/News";
import Footer from "./_components/Footer";
import Sustainability from "./_components/Sustainability";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-urbanist">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Products />
        <Excellence />
        <Sustainability />
        <Innovation />
        <News />
      </main>

      <Footer />

    </div>
  );
}
