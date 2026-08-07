"use client";

import React from "react";
import Header from "./_components/Header";
import HeroBanner from "./_components/HeroBanner";
import AboutUs from "./_components/AboutUs";
import CylinderHeadGasket from "./_components/CylinderHeadGasket";
import NewProducts from "./_components/NewProducts";
import ValveCoverGasket from "./_components/ValveCoverGasket";
import ProductRange from "./_components/ProductRange";
import AdvancedGasketSolutions from "./_components/AdvancedGasketSolutions";
import NewsEvents from "./_components/NewsEvents";
import Footer from "./_components/Footer";
import SmoothAOS from "./_components/SmoothAOS";
import BreakPads from "./_components/BreakPads";
import ProductFinder from "./_components/ProductFinder";

export default function CTRPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      {/* Header */}
      <Header />

      <main className="relative flex flex-col">
        {/* Full screen video Hero */}
        <HeroBanner />

        {/* About CTR Section */}
        <AboutUs />

        {/* Brake Pads Section (360 Video) */}
        <BreakPads />

        {/* Comprehensive Range of Automotive Components Section */}
        <ProductRange />

        {/* Drive with Confidence - Steering & Suspension (Video 01) Section */}
        <CylinderHeadGasket />

        {/* Search by Product or Vehicle Form Section */}
        <ProductFinder />

        {/* Product Lineup (Video 02) Section */}
        <ValveCoverGasket />

        {/* News & Updates Section */}
        <NewsEvents />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
