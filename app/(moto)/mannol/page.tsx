"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import WhoWeAre from "./_components/WhoWeAre";
import ExploreProduct from "./_components/ExploreProduct";
import PopularProducts from "./_components/PopularProducts";
import PerformanceAction from "./_components/PerformanceAction";
import News from "./_components/News";
import Footer from "./_components/Footer";


export default function MannolPage() {
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
      <WhoWeAre />
      <ExploreProduct />
      <PopularProducts />
      <PerformanceAction />
      <News />
      <Footer />
    </main>
  );
}
