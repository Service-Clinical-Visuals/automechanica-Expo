import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Premium from "./_components/Premium";
import About from "./_components/About";
import Services from "./_components/Services";
import Quality from "./_components/Quality";
import Products from "./_components/Products";
import GetinTouch from "./_components/GetinTouch";
import Footer from "./_components/Footer";
import AosInit from "./_components/AosInit";

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
      <Services />
      <Products />
      <Quality />
      <GetinTouch />
      <Footer />
    </main>
  );
}
