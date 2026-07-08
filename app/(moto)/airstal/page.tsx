"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Automation from "./_components/Automation";
import Compressors from "./_components/Compressors";
import Solutions from "./_components/Solutions";
import Choose from "./_components/Choose";
import Parts from "./_components/Parts";
import Footer from "./_components/Footer";
import SmoothAOS from "./_components/SmoothAOS";
import Innovation from "./_components/Innovation";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden font-urbanist">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <Automation />
        <Compressors />
        <Solutions />
        <Choose />
        <Parts />
        <Innovation />
      </main>

      <Footer />
    </div>
  );
}
