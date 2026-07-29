import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Premium from "./_components/Premium";
import About from "./_components/About";
import Discover from "./_components/Discover";
import Quality from "./_components/Quality";
import Choose from "./_components/Choose";
import Footer from "./_components/Footer";
import AosInit from "./_components/AosInit";
import Advanced from "./_components/Advanced";
import Mission from "./_components/Mission";

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
      <Choose />
      <Advanced />
      <Mission />
      <Footer />
    </main>
  );
}
