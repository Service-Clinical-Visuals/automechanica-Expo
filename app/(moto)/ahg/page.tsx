import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import PremiumCatalytic from "./_components/PremiumCatalytic";
import ProductRange from "./_components/ProductRange";
import AdvancedCatalytic from "./_components/AdvancedCatalytic";
import WhyChooseUs from "./_components/WhyChooseUs";
import MarketExperience from "./_components/MarketExperience";
import Footer from "./_components/Footer";


export default function AHGHome() {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full bg-white">
        <Banner />
        <AboutUs />
        <PremiumCatalytic />
        <ProductRange />
        <AdvancedCatalytic />
        <WhyChooseUs />
        <MarketExperience />
      </div>
      <Footer />
    </>
  );
}
