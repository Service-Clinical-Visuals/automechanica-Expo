"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import Legacy from "./_components/Legacy";
import Deg360 from "./_components/360deg";
import ExploreProducts from "./_components/ExploreProducts";
import Products from "./_components/Products";
import Emission from "./_components/Emission";
import Quality from "./_components/Quality";
import Footer from "./_components/Footer";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-urbanist">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <Legacy />
        <Deg360 />
        <ExploreProducts />
        <Products />
        <Emission />
        <Quality />
      
      </main>

      <Footer />
   
    </div>
  );
}
