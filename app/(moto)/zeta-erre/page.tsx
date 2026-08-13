import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Premium from "./_components/Premium";
import About from "./_components/About";
import Discover from "./_components/Discover";
import Quality from "./_components/Quality";
import Footer from "./_components/Footer";
import AosInit from "./_components/AosInit";
import Disctributor from "./_components/Disctributor";
import Precision from "./_components/Precision";
import News from "./_components/News";

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
      <Discover />
      <Quality />
      <Disctributor />
      <Precision />
      <News />

      <Footer />
    </main>
  );
}
