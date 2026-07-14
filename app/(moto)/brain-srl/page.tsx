"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import Catalyst from "./_components/360deg";
import Products from "./_components/Products";
import Advanced from "./_components/Advanced";
import Sectors from "./_components/Sectors";
import Footer from "./_components/Footer";
import SmoothAOS from "./_components/SmoothAOS";
export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] overflow-x-hidden">
      <SmoothAOS />
      <Header />
      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Catalyst />
        <Products />
        <Advanced />
        <Sectors />
      </main>
      <Footer />
    </div>
  );
}
