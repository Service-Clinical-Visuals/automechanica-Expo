import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Premium from "./_components/Premium";    
import About from "./_components/About";
import Footer from "./_components/Footer";
import Performance from "./_components/Performance";
import Reliable from "./_components/Reliable";
import Replacement from "./_components/Replacement";
import Welcome from "./_components/Welcome";
import AosInit from "./_components/AosInit";

export const metadata = {
  title: "Ramoil",
  description: "Engineering Performance You Can Trust",
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#121212]! overflow-x-hidden">
      <AosInit />
      <Header />
      <Hero />
      <About />
      <Premium />
      <Replacement />
      <Welcome />
      <Performance />
      <Reliable />
      <Footer />
    </main>
  );
}
