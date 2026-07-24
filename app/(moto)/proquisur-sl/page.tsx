"use client";

import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import PrecisionView from "./_components/PrecisionView";
import Products from "./_components/Products";
import EngineProtection from "./_components/EngineProtection";
import Quality from "./_components/Quality";
import OurProduct from "./_components/OurProduct";
import NewsUpdates from "./_components/NewsUpdates";
import Footer from "./_components/Footer";
import SmoothAOS from "./_components/SmoothAOS";

export default function SigamPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white overflow-x-hidden">
      <SmoothAOS />
      <Header />
      <Banner />
      <AboutUs />
      <PrecisionView />
      <Products />
      <EngineProtection />
      <Quality />
      <OurProduct />
      <NewsUpdates />
      <Footer />
    </main>
  );
}
