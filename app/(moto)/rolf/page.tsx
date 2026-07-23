"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Company from "./_components/Company";
import SmoothAOS from "./_components/SmoothAOS";
import Deg360 from "./_components/360deg";
import Solutions from "./_components/Solutions";
import Performance from "./_components/Performance";
import Innovation from "./_components/Innovation";
import Trusted from "./_components/Trusted";
import Journey from "./_components/Journey";
import News from "./_components/News";
import Footer from "./_components/Footer";


export default function ETEnginePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <Company />
        <Deg360 />
        <Solutions />
        <Performance />
        <Innovation />
        <Trusted />
        <Journey />
        <News />
        
      </main>

      <Footer />


    </div>
  );
}
