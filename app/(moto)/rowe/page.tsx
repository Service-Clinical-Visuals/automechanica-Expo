"use client";

import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import OilFinder from "./_components/OilFinder";
import EngineeredLubrication from "./_components/EngineeredLubrication";
import HightecProducts from "./_components/HightecProducts";
import Liqwotec from "./_components/Liqwotec";
import Products from "./_components/Products";
import Partners from "./_components/Partners";
import StillLooking from "./_components/StillLooking";
import Footer from "./_components/Footer";

export default function RowePage() {
  return (
    <main className="flex min-h-screen overflow-y-hidden overflow-x-hidden flex-col w-full">
      <Header />
      <Banner />
      <About />
      <OilFinder />
      <EngineeredLubrication />
      <Products />
      <StillLooking />
      <HightecProducts />
      <Liqwotec />     
      <Partners />      
      <Footer />
    </main>
  );
}
