"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import PowerSection from "./_components/PowerSection";
import Products from "./_components/Products";
import Sustainability from "./_components/Sustainability";
import ReliableBraking from "./_components/ReliableBraking";
import Vision from "./_components/Vision";
import Footer from "./_components/Footer";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] overflow-x-hidden">
      <SmoothAOS />
      <Header />
      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <PowerSection />
        <Products />
        <Sustainability />
        <ReliableBraking />
        <Vision />
        <Footer />
      </main>
    </div>
  );
}
