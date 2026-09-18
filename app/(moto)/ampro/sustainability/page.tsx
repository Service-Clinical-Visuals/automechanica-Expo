import React from "react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import SmoothAOS from "../_components/SmoothAOS";
import SustainabilityHero from "./_components/SustainabilityHero";
import NoxSensorTech from "./_components/NoxSensorTech";
import FeaturesAccordion from "./_components/FeaturesAccordion";
import Cleaner from "./_components/Cleaner";
import Paving from "./_components/Paving";
import Consultation from "./_components/Consultation";

export default function SustainabilityPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-white">
      <SmoothAOS />
      <Header />

      <div className="flex-grow">
        <SustainabilityHero />
        <NoxSensorTech />
        <FeaturesAccordion />
        <Cleaner />
        <Paving />
        <Consultation />
      </div>

      <Footer />
    </main>
  );
}
