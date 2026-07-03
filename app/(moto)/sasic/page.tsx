import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Premium from "./_components/Premium";    
import About from "./_components/About";
import Social from "./_components/Social";
import Confidence from "./_components/Confidence";
import Footer from "./_components/Footer";
import AosInit from "./_components/AosInit";
import Solutions from "./_components/Solutions";
import Partners from "./_components/Partners";

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
      <Social />
      <Confidence />
      <Solutions />
      <Partners />
      <Footer />
    </main>
  );
}
