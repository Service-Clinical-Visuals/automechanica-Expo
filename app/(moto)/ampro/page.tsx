"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Products from "./_components/Products";
import Emission from "./_components/Emission";
import News from "./_components/News";
import Quality from "./_components/Quality";
import SustainabilityTech from "./_components/SustainabilityTech";
import Footer from "./_components/Footer";

export default function Ampro() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-urbanist">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Products />
        <Emission />
        <Quality />
        <SustainabilityTech />
        <News />

      </main>

      <Footer />

    </div>
  );
}
