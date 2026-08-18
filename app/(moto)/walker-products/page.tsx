"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Video360 from "./_components/Video360";
import ProductCategories from "./_components/ProductCategories";
import TechnicalSupport from "./_components/TechnicalSupport";
import IgnitionSolutions from "./_components/IgnitionSolutions";
import VisionValues from "./_components/VisionValues";
import IndustrySolutions from "./_components/IndustrySolutions";
import IgnitionCoils from "./_components/IgnitionCoils";
import LatestNews from "./_components/LatestNews";
import Footer from "./_components/Footer";

export default function WalkerProductsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Video360 />
        <ProductCategories />
        <TechnicalSupport />
        <IgnitionSolutions />
        <VisionValues />
        <IndustrySolutions />
        <IgnitionCoils />
        <LatestNews />
      </main>

      <Footer />
    </div>
  );
}

