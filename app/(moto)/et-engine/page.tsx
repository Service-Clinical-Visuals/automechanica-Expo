"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import SmoothAOS from "./_components/SmoothAOS";
import Development from "./_components/Development";
import Precision from "./_components/Precision";
import Solutions from "./_components/Solutions";
import Unique from "./_components/Unique";
import Performance from "./_components/Performance";
import Updates from "./_components/Updates";
import Footer from "./_components/Footer";


export default function ETEnginePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <Development />
        <Precision />
        <Solutions />
        <Unique />
        <Performance />
        <Updates />
        
      </main>

      <Footer />


    </div>
  );
}
