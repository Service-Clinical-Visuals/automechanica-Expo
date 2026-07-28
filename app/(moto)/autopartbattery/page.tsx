"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import OurLegacy from "./_components/OurLegacy";
import PowerBuilt from "./_components/PowerBuilt";
import PowerSolutions from "./_components/PowerSolutions";
import DrivenInnovation from "./_components/DrivenInnovation";
import Environmental from "./_components/Environmental";
import PrecisionBuilt from "./_components/PrecisionBuilt";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function AutoPartBatteryPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col w-full bg-white overflow-x-hidden overflow-y-hidden">
      <Header />
      <Banner />
      <OurLegacy />
      <PowerBuilt />
      <PowerSolutions />
      <DrivenInnovation />
      <Environmental />
      <PrecisionBuilt />
      <News />
      <Footer />
    </main>
  );
}
