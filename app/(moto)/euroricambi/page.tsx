import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Premium from "./_components/Premium";
import About from "./_components/About";
import Products from "./_components/Products";
import FullRange from "./_components/FullRange";
import Powering from "./_components/Powering";
import News from "./_components/News";
import Footer from "./_components/Footer";
import AosInit from "./_components/AosInit";

export const metadata = {
  title: "Ramoil",
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
      <Products />
      <Powering />
      <News />
      <FullRange />
      <Footer />
    </main>
  );
}
