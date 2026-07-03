"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Specialist from "./_components/Specialist";
import Performance from "./_components/Performance";
import Services from "./_components/Services";
import Products from "./_components/Products";
import Solutions from "./_components/Solutions";
import Passion from "./_components/Passion";
import Footer from "./_components/Footer";
import SmoothAOS from "./_components/SmoothAOS";

export default function AbsAllBrakesPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111] overflow-x-hidden font-lato">
      <SmoothAOS />
      
      {/* 
        Header is inside the custom-container logic, floating at the top 
        or sticking full-width to the ceiling.
      */}
      <Header />
      
      <main className="relative flex flex-col">
        <Banner />
        <Specialist />
        <Performance />
        <Services />
        <Products />
        <Solutions />
        <Passion />
      </main>

      <Footer />
    </div>
  );
}
