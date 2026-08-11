"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Creating from "./_components/Creating";
import Products from "./_components/Products";
import Technology from "./_components/Technology";
import Built from "./_components/Built";
import PetronasSection from "./_components/petronas";
import Premium from "./_components/Premium";
import Footer from "./_components/Footer";


export default function ETEnginePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Deg360 />
        <Creating />
        <Technology />
        <Premium />

        <Products />

        <Built />
        <PetronasSection />

      </main>

      <Footer />


    </div>
  );
}
