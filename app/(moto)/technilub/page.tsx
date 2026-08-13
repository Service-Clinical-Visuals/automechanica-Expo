import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Premium from "./_components/Premium";    
import Products from "./_components/Products";
import Choose from "./_components/Choose";
import ProductsBar from "./_components/ProductsBar";
import Area2 from "./_components/Area2";
import Area from "./_components/Area";
import About from "./_components/About";
import News from "./_components/News";
import Footer from "./_components/Footer";
import AosInit from "./_components/AosInit";

export const metadata = {
  title: "Technilub",
  description: "Engineering Performance You Can Trust",
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <AosInit />
      <Header />
      <Hero />
      <About />
      <Area />
      <Area2 />
      <Premium />
      <Products />
      <Choose />
      <ProductsBar />
      <News />
      <Footer />
    </main>
  );
}
