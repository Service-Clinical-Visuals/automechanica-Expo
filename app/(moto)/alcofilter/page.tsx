"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutCompany from "./_components/AboutCompany";
import AboutProduct from "./_components/AboutProduct";
import SearchSection from "./_components/SearchSection";
import FiltersSection from "./_components/FiltersSection";
import NewsUpdates from "./_components/NewsUpdates";
import Footer from "./_components/Footer";

export default function AlcoFilterPage() {
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
      <AboutProduct />
      <SearchSection />
      <FiltersSection />
      <NewsUpdates />
      <Footer />
    </main>
  );
}
