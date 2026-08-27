"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Performance from "./_components/Performance";
import Products from "./_components/Products";
import Precision from "./_components/Precision";
import News from "./_components/News";
import Footer from "./_components/Footer";
import SmoothAOS from "./_components/SmoothAOS";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-poppins">
      <SmoothAOS />
      
      <Header />
      
      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Performance />
        <Products />
        <Precision />
        <News />
      </main>

      <Footer />
    </div>
  );
}
