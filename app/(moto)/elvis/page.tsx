"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Solutions from "./_components/Solutions";
import Unique from "./_components/Unique";
import KeyFeatures from "./_components/KeyFeatures";
import Product360 from "./_components/Product360";
import DrivingSolutions from "./_components/DrivingSolutions";
import Quality from "./_components/Quality";
import Development from "./_components/Development";
import Choose from "./_components/Choose";
import Footer from "./_components/Footer";


export default function ETEnginePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        {/* <Development /> */}
        <AboutUs />
 <KeyFeatures />
        <Solutions />
        <Product360 />
        <DrivingSolutions />
        <Quality />
        <Development />
        <Choose />
      </main>

      <Footer />


    </div>
  );
}
