"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Products from "./_components/Products";
import Performance from "./_components/Performance";
import Building from "./_components/Building";
import Smart from "./_components/Smart";
import SmartSolutions from "./_components/SmartSolutions";
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
        <Performance />
        <Building />
        <Smart />
        <SmartSolutions />
      
      </main>

      <Footer />
   
    </div>
  );
}
