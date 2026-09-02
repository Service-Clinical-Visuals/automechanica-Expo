"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Explore from "./_components/Explore";
import Products from "./_components/Products";
import Footer from "./_components/Footer";
import Braking from "./_components/Braking";
import Certificates from "./_components/Certificates";
import Powering from "./_components/Powering";
import News from "./_components/News";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-urbanist">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Explore />
        <Products />
        <Braking />
        <Certificates />
        <Powering />
        <News />
      </main>

      <Footer />

    </div>
  );
}
