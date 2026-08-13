"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import WhoWeAre from "./_components/WhoWeAre";
import ExploreRange from "./_components/ExploreRange";
import ProductCategories from "./_components/ProductCategories";
import ProductionFacilities from "./_components/ProductionFacilities";
import InternationalMarketing from "./_components/InternationalMarketing";
import GlobalTradeShows from "./_components/GlobalTradeShows";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function SariaInternationalPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col w-full bg-[#0A0D18] overflow-x-hidden overflow-y-hidden">
      <Header />
      <Banner />
      <WhoWeAre />
      <ExploreRange />
      <ProductCategories />
      <ProductionFacilities />
      <InternationalMarketing />
      <GlobalTradeShows />
      <News />
      <Footer />
    </main>
  );
}
