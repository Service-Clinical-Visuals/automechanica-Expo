"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Mission from "./_components/Mission";
import Products from "./_components/Products";
import ProductRange from "./_components/ProductRange";
import Offerings from "./_components/Offerings";
import Certificates from "./_components/Certificates";
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
        <Mission />
        <ProductRange />
        <Products />
        <Offerings />
        <Certificates />
      </main>

      <Footer />
    </div>
  );
}
