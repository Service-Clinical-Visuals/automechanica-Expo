import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Area from "./_components/Area";
import Footer from "./_components/Footer";
import AosInit from "./_components/AosInit";
import About from "./_components/About";
import Premium from "./_components/Premium";
import Advanced from "./_components/Advanced";
import Products from "./_components/Products";
import Corporate from "./_components/Corporate";

export const metadata = {
  title: "Gand Oil",
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
      <Advanced />
      <Area />
      <Corporate />
      <Footer />
    </main>
  );
}
