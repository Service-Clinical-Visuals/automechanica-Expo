"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Gallery from "./_components/Gallery";
import Gallery2 from "./_components/Gallery2";
import Piston from "./_components/Piston";
import Choose from "./_components/choose";
import Footer from "./_components/Footer";
import Updates from "./_components/Updates";

export default function ETEnginePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Deg360 />
        <Gallery />
        <Piston />
        <Gallery2 />
        <Choose />
        <Updates />

      </main>

      <Footer />


    </div>
  );
}
