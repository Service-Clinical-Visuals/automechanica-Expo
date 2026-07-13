"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import Products from "./_components/Products";
import Converters from "./_components/Converters";
import Ethics from "./_components/Ethics";
import Advanced from "./_components/Advanced";
import News from "./_components/News";
import Solutions from "./_components/Solutions";
import SmoothAOS from "./_components/SmoothAOS";
import Footer from "./_components/Footer";
export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] overflow-x-hidden">
      <SmoothAOS />
      <Header />
      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Products />
        <Converters />
        <Ethics />
        <Advanced />
        <News />
        <Solutions />
        <Footer />
      </main>
    </div>
  );
}
