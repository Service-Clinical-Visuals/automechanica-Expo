import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import EngineOil from "./_components/EngineOil";
import Products from "./_components/Products";
import Expertise from "./_components/Expertise";
import Quality from "./_components/Quality";
import News from "./_components/News";
import Footer from "./_components/Footer";
// import Logistics from "./_components/Logistics";
// import Efficiency from "./_components/Efficiency";

export const metadata = {
  title: "Slider Lubricants | Premium Quality",
  description: "Premium Quality Oils",
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <AboutUs />
      <EngineOil />
      <Products />
      <Expertise />
      <Quality />
      <News />
      <Footer />
    </main>
  );
}
