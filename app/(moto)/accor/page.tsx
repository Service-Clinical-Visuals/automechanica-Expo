"use client";

import Banner from "./_components/Banner";
import Header from "./_components/Header";
import About from "./_components/About";
import Explore360 from "./_components/Explore360";
import Factory from "./_components/Factory";
import ProductPerformance from "./_components/ProductPerformance";
import WhyChoose from "./_components/WhyChoose";
import StatsBanner from "./_components/StatsBanner";
import TrustedBrands from "./_components/TrustedBrands";
import Footer from "./_components/Footer";

export default function AccorLubricantsPage() {
  return (
    <main className="flex min-h-screen overflow-y-hidden overflow-x-hidden flex-col w-full ">
      <Header />
      <Banner />
      <About />
      <Explore360 />
      <Factory />
      <TrustedBrands />
      <ProductPerformance />
      <WhyChoose />
      <StatsBanner />      
      <Footer />
    </main>
  );
}
