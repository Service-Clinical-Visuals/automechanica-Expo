import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Premium from "./_components/Premium";    
import About from "./_components/About";
import Footer from "./_components/Footer";
import AosInit from "./_components/AosInit";
import Gallery from "./_components/Gallery";
import Approvals from "./_components/Approvals";
import EngineOil from "./_components/EngineOil";
import News from "./_components/News";

export const metadata = {
  title: "Speedcar",
  description: "Engineering Performance You Can Trust",
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden overflow-y-hidden ">
      <AosInit />
      <Header />
      <Hero />
      <About />
      <Premium />
      <Gallery />
      <Approvals />
      <EngineOil />
      <News />
      <Footer />
    </main>
  );
}
