"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Choose from "./_components/Choose";
import Fresh from "./_components/Fresh";
import FeatureCTA from "./_components/FeatureCTA";
import Professional from "./_components/Professional";
import Design from "./_components/Design";
import Discover from "./_components/Discover";
import News from "./_components/News";
import Footer from "./_components/Footer";
import Deg360 from "./_components/360deg";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-urbanist">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Choose />
        <Deg360 />
        <FeatureCTA />
        <Professional />
        <Design />
        <Discover />
        <Fresh />
        <News />
      </main>

      <Footer />

    </div>
  );
}
