"use client";

import React from "react";
import Header from "./_components/Header";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Products from "./_components/Products";
import Precision from "./_components/Precision";
import Advanced from "./_components/Advanced";
import Components from "./_components/Components";
import Storied from "./_components/Storied";
import Help from "./_components/Help";
import Footer from "./_components/Footer";
import Banner from "./_components/Banner";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-urbanist">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Deg360 />
        <Products />
        <Precision />
        <Advanced />
        <Components />
        <Storied />
        <Help />
      </main>

      <Footer />

    </div>
  );
}
