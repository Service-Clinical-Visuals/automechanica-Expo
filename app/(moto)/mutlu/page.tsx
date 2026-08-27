"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import SmoothAOS from "./_components/SmoothAOS";
import About from "./_components/About";
import Explore360 from "./_components/Explore360";
import Journey from "./_components/Journey";
import Footer from "./_components/Footer";
import Choice from "./_components/Choice";
import Advanced from "./_components/Advanced";
import Performance from "./_components/Performance";
import Happy from "./_components/Happy";
import News from "./_components/News";

export default function ETEnginePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <About />
        <Explore360 />
        <Journey />
        <Advanced />
        <Happy />
        <Performance />
        <Choice />
        <News />
      </main>

      <Footer />


    </div>
  );
}
