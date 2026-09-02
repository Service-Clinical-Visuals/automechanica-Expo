"use client";

import React from "react";
import Header from "./_components/Header";
import HeroBanner from "./_components/HeroBanner";
import AboutUs from "./_components/AboutUs";
import BrakePads from "./_components/BrakePads";
import ProductRange from "./_components/ProductRange";
import SteeringSuspension from "./_components/SteeringSuspension";
import ProductFinder from "./_components/ProductFinder";
import ProductLineup from "./_components/ProductLineup";
import NewsEvents from "./_components/NewsEvents";
import Footer from "./_components/Footer";
import SmoothAOS from "./_components/SmoothAOS";

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
        <BrakePads />

        {/* Comprehensive Range of Automotive Components Section */}
        <ProductRange />

        {/* Drive with Confidence - Steering & Suspension (Video 01) Section */}
        <SteeringSuspension />

        {/* Search by Product or Vehicle Form Section */}
        <ProductFinder />

        {/* Product Lineup (Video 02) Section */}
        <ProductLineup />

        {/* News & Updates Section */}
        <NewsEvents />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
