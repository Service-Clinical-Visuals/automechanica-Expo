import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Solutions from "./_components/Solutions";
import Products from "./_components/Products";
import Logistics from "./_components/Logistics";
import Efficiency from "./_components/Efficiency";
import News from "./_components/News";
import Footer from "./_components/Footer";


export const metadata = {
  title: "UTB Oils | Premium Quality",
  description: "Dutch Premium Quality Oils",
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <AboutUs />
      <Solutions />
      <Products />
      <Logistics />
      <Efficiency />
      <News />
      <Footer />
    </main>
  );
}
