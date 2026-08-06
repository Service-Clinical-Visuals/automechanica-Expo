"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import ClassicContemporary from "./_components/ClassicContemporary";
import Comprehensive from "./_components/Comprehensive";
import Footer from "./_components/Footer";
import Reliable from "./_components/reliable";
import Discover from "./_components/Discover";
import Explore from "./_components/Explore";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-urbanist">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <ClassicContemporary />
        <Comprehensive />
        <Discover />
        <Reliable />
        <Explore />
      </main>

      <Footer />

    </div>
  );
}
