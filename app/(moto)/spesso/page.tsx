import React from "react";
import "./global.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import EngineeredSealing from "./_components/EngineeredSealing";
import ProductsAndApplications from "./_components/ProductsAndApplications";
import Explore360 from "./_components/Explore360";
import SealingTechnologies from "./_components/SealingTechnologies";
import TrustedSealing from "./_components/TrustedSealing";
import Sustainability from "./_components/Sustainability";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Spesso - Engineering Trusted Gasket Solutions Since 1926",
  description: "Delivering premium flat gaskets and gasket sets for OEM and aftermarket applications.",
};

export default function SpessoHomePage() {
  return (
    <main className="w-full min-h-screen bg-[#ffffff] flex flex-col font-sans overflow-x-hidden">
      <Header />
      <Banner />
      <About />
      <EngineeredSealing />
      <ProductsAndApplications />
      <Explore360 />
      <SealingTechnologies />
      <TrustedSealing />
      <Sustainability />
      <Footer />
    </main>
  );
}
