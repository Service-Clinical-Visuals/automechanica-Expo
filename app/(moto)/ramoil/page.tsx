import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Premium from "./_components/Premium";    
import About from "./_components/About";
import News from "./_components/News";
import Footer from "./_components/Footer";
import Performance from "./_components/Performance";
import AosInit from "./_components/AosInit";
import Presence from "./_components/Presence";
import Solutions from "./_components/Solutions";
import Souls from "./_components/Souls";

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
      <Presence />
      <Premium />
      <Solutions />
      <Souls />
      <Performance />
      <News />
      <Footer />
    </main>
  );
}
