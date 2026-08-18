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

export default function TemelPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      {/* Header appears on scroll after full screen video */}
      <Header />

      <main className="relative flex flex-col">
        {/* Full screen video Hero */}
        <HeroBanner />

        {/* About Temel Conta Section */}
        <AboutUs />

        {/* 360 Video & Cylinder Head Gasket Section */}
        <CylinderHeadGasket />

        {/* New Products Carousel Section */}
        <NewProducts />

        {/* Valve Cover Gaskets (Video 01) Section */}
        <ValveCoverGasket />

        {/* Comprehensive Range of Automotive Components Section */}
        <ProductRange />

        {/* Advanced Cylinder Head Gaskets (Video 02) Section */}
        <AdvancedGasketSolutions />

        {/* News & Events Section */}
        <NewsEvents />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
