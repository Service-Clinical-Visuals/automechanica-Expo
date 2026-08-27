import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Premium from "./_components/Premium";
import About from "./_components/About";
import Quality from "./_components/Quality";
import Footer from "./_components/Footer";
import AosInit from "./_components/AosInit";
import Partner from "./_components/Partner";
import Performance from "./_components/Performance";
import Advanced from "./_components/Advanced";
import Services from "./_components/Services";

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
      <Partner />
      <Quality />
      <Performance />
      <Advanced />
      <Services />
      <Footer />
    </main>
  );
}
