"use client";

import Header from "./_components/Header";
import Banner from "./_components/Banner";
import WhyChooseUs from "./_components/WhyChooseUs";
import EngineOil from "./_components/EngineOil";
import ProductCategories from "./_components/ProductCategories";
import EngineCompatibility from "./_components/EngineCompatibility";
import ResearchDevelopment from "./_components/ResearchDevelopment";
import Events from "./_components/Events";
import Footer from "./_components/Footer";

export default function BluechemPage() {
  return (
    <main className="flex min-h-screen overflow-x-hidden overflow-y-hidden flex-col w-full bg-white">
      <Header />
      <Banner />
      <WhyChooseUs />
      <EngineOil />
      <ProductCategories />
      <EngineCompatibility />
      <ResearchDevelopment />
      <Events />
      <Footer />
    </main>
  );
}
