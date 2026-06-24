"use client";

import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import EngineOils from "./_components/EngineOils";
import Products from "./_components/Products";
import AdvancedProtection from "./_components/AdvancedProtection";
import OurBrands from "./_components/OurBrands";
import LatestNews from "./_components/LatestNews";
import Footer from "./_components/Footer";

export default function DurandProductionPage() {
  return (
    <main className="flex min-h-screen overflow-y-hidden overflow-x-hidden flex-col w-full ">
      <Header />
      <Banner />
      <About />
      <EngineOils />
      <Products />
      <AdvancedProtection />
      <OurBrands />
      <LatestNews />
      <Footer />
    </main>
  );
}
