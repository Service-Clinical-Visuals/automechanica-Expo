import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Discover from "./_components/Discover";
import Products from "./_components/Products";
import About from "./_components/About";
import Footer from "./_components/Footer";
import Brake from "./_components/Brake";
import Service from "./_components/Service";

export const metadata = {
  title: "Intercar",
  description: "The Company was born at the end of the 60s, when the founder VITTORIO PALAZZANI bought the first warehouse for the storage of mechanical spare parts in Palazzolo Milanese. In 1971 the warehouse has been moved in Cazzago San Martino, near Brescia city centre, becoming the new factory of CAR S.p.A. The Company improved its production from 200.000 to 5.000.000 of car brake discs.",
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Brake />
      <Products />
      <Discover />
      <Service />
      <Footer />
    </main>
  );
}
