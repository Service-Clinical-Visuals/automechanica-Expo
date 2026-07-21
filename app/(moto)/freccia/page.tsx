import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Components from "./_components/Components";
import Services from "./_components/Services";
import Advanced from "./_components/Advanced";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function FrecciaPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Components />
        <Services />
        <Advanced />
        <News />
      </main>

      <Footer />
    </div>
  );
}
