"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutCompany from "./_components/AboutCompany";
import PrecisionSealing from "./_components/PrecisionSealing";
import FeaturedProducts from "./_components/FeaturedProducts";
import ReliableSolutions from "./_components/ReliableSolutions";
import ProductCategories from "./_components/ProductCategories";
import TopBrands from "./_components/TopBrands";
import Footer from "./_components/Footer";

export default function BirlikPage() {
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
      <AboutCompany />
      <PrecisionSealing />
      <FeaturedProducts />
      <ReliableSolutions />
      <ProductCategories />
      <TopBrands />
      <Footer />
    </main>
  );
}
