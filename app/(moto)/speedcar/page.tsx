import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import LubricationSolutions from "./_components/LubricationSolutions";
import ReliableExcellence from "./_components/ReliableExcellence";
import QualityProducts from "./_components/QualityProducts";
import KnowledgeCenter from "./_components/KnowledgeCenter";
import Footer from "./_components/Footer";
import About from "./_components/About";
import FeaturedProducts from "./_components/FeaturedProducts";

export const metadata = {
  title: "Speedcar",
  description: "Engineering Performance You Can Trust",
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      {/* <LubricantSection /> */}
      <About />
      <FeaturedProducts />
      <LubricationSolutions />
      <ReliableExcellence />
      <QualityProducts />
      <KnowledgeCenter />
      <Footer />
    </main>
  );
}
