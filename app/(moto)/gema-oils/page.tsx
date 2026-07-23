"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Partners from "./_components/Partners";
import PrecisionView from "./_components/PrecisionView";
import Products from "./_components/Products";
import GlobalReachSection from "./_components/GlobalReachSection";
import Footer from "./_components/Footer";

export default function SigamPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white overflow-x-hidden overflow-y-hidden">
      <SmoothAOS />
      <Header />
      <Banner />
      <AboutUs />
      <Partners />
      <PrecisionView />
      <Products />
      <GlobalReachSection />
      <Footer />
    </main>
  );
}
