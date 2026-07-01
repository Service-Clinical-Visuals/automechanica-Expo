"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import FightFire from "./_components/FightFire";
import BrakePads from "./_components/BrakePads";
import WhyMagma from "./_components/WhyMagma";
import Journey from "./_components/Journey";
import Products from "./_components/Products";
import BrakingSystem from "./_components/BrakingSystem";
import Footer from "./_components/Footer";


export default function PetrovollHome() {
  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-hidden bg-white">
      <Header />
      <Banner />
      <FightFire />
      <BrakePads />
      <WhyMagma />
      <Journey />
      <Products />
      <BrakingSystem />
      <Footer />
    </main>
  );
}
