"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Precision from "./_components/Precision";
import Solutions from "./_components/Solutions";
import Experience360 from "./_components/Experience360";
import CustomisedSolutions from "./_components/CustomisedSolutions";
import ChooseAutocom from "./_components/ChooseAutocom";
import RepairServices from "./_components/RepairServices";
import StayUpdated from "./_components/StayUpdated";
import Footer from "./_components/Footer";


export default function ETEnginePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Precision />
        <Solutions />
        <Experience360 />
        <CustomisedSolutions />
        <ChooseAutocom />
        <RepairServices />
        <StayUpdated />
        
      </main>

      <Footer />


    </div>
  );
}
