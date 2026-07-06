import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Premium from "./_components/Premium";    
import About from "./_components/About";
import Advanced from "./_components/Advanced";
import News from "./_components/News";
import Purify from "./_components/Purify";
import Footer from "./_components/Footer";
import AosInit from "./_components/AosInit";
import Product from "./_components/Product";

export const metadata = {
  title: "Speedcar",
  description: "Engineering Performance You Can Trust",
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <AosInit />
      <Header />
      <Hero />
      <About />
      <Premium />
      <Product />
      <Advanced />
      <Purify />
      <News />
      <Footer />
    </main>
  );
}
