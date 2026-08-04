"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Experience from "./_components/Experience";
import Explore from "./_components/Explore";
import Products from "./_components/Products";
import Advanced from "./_components/Advanced";
import Latest from "./_components/Latest";
import Precision from "./_components/Precision";
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
        <Experience />
        <Explore />
        <Products />
        <Advanced />
        <Latest />
        <Precision />
        <News />
      </main>

      <Footer />

    </div>
  );
}
