"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import SmoothAOS from "./_components/SmoothAOS";
import Development from "./_components/Development";
import Performance from "./_components/Performance";
import CoreValues from "./_components/CoreValues";
import Protection from "./_components/Protection";
import News from "./_components/News";
import Footer from "./_components/Footer";
import Deg360 from "./_components/360deg";
import Products from "./_components/Products";


export default function ETEnginePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <Development />
        <Deg360 />
        <Products />
        <Performance />
        <CoreValues />
        <Protection />
        <News />    
      </main>

      <Footer />


    </div>
  );
}
