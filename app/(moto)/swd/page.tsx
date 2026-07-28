"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import Explore360 from "./_components/Explore360";
import Products from "./_components/Products";
import SmoothAOS from "./_components/SmoothAOS";
import Footer from "./_components/Footer";
import Performance from "./_components/Performance";
import Manufacture from "./_components/Manufacture";
import Quality from "./_components/Quality";
import News from "./_components/News";


export default function ETEnginePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Explore360 />
        <Products />
        <Performance />
        <Manufacture />
        <Quality />
        <News />
      </main>

      <Footer />


    </div>
  );
}
