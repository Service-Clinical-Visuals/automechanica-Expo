"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Partner from "./_components/Partner";
import Superior from "./_components/Superior";
import Products from "./_components/Products";
import Solutions from "./_components/Solutions";
import Future from "./_components/Future";
import Footer from "./_components/Footer";
import SmoothAOS from "./_components/SmoothAOS";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-lato">
      <SmoothAOS />
      
      <Header />
      
      <main className="relative flex flex-col">
        <Hero />
        <Partner />
        <Superior />
        <Products />
        <Solutions />
        <Future />
      </main>

      <Footer />
    </div>
  );
}
