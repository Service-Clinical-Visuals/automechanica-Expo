"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import Deg360 from "./_components/360deg";
import Footer from "./_components/Footer";
import AboutUs from "./_components/AboutUs";
import Solutions from "./_components/Solutions";
import Action from "./_components/Action";
import Performance from "./_components/Performance";
import Precision from "./_components/Precision";
import Updates from "./_components/Updates";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-urbanist">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Solutions />
        <Action />
        <Performance />
        <Precision />
        <Updates />
      </main>

      <Footer />
   
    </div>
  );
}
