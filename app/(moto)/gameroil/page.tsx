"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Products from "./_components/Products";
import Engineered from "./_components/Engineered";
import Commitment from "./_components/Commitment";
import Advanced from "./_components/Advanced";
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
        <Products />
        <Engineered />
        <Commitment />
        <Advanced />
        <News />

      </main>

      <Footer />

    </div>
  );
}
