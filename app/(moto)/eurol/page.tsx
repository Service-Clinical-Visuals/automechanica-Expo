import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import LubricantSection from "./_components/LubricantSection";
import AboutEurol from "./_components/AboutEurol";
import PremiumEngine from "./_components/PremiumEngine";
import ProductCategories from "./_components/ProductCategories";
import LubricationSolutions from "./_components/LubricationSolutions";
import InnovationSection from "./_components/InnovationSection";
import KnowledgeCenter from "./_components/KnowledgeCenter";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Eurol | Powering Performance",
  description: "Lubricants engineered for efficiency and extreme conditions.",
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <LubricantSection />
      <AboutEurol />
      <PremiumEngine />
      <ProductCategories />
      <LubricationSolutions />
      <InnovationSection />
      <KnowledgeCenter />
      <Footer />
    </main>
  );
}
