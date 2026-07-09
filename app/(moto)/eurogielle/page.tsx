"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Choose from "./_components/Choose";
import Difference from "./_components/Difference";
import Advance from "./_components/Advance";
import Design from "./_components/design";
import Footer from "./_components/Footer";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-urbanist">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Choose />
        <Difference />
        <Advance />
        <Design />
      </main>

      <Footer />
    </div>
  );
}
