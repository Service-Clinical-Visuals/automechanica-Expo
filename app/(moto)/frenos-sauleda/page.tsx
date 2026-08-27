import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import BrakePads from "./_components/BrakePads";
import RnD from "./_components/RnD";
import ProductPortfolio from "./_components/ProductPortfolio";
import ProductRange from "./_components/ProductRange";
import EngineeredProducts from "./_components/EngineeredProducts";
import Expertise from "./_components/Expertise";
import Footer from "./_components/Footer";

export default function FrenosSauledaHome() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <Header />
      <Banner />
      <About />
      <BrakePads />
      <RnD />
      <ProductPortfolio />
      <ProductRange />
      <EngineeredProducts />
      <Expertise />
      <Footer />
    </main>
  );
}
