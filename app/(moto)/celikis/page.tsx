"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import Excellence from "./_components/Excellence";
import Quote from "./_components/Quote";
import ProductRange from "./_components/ProductRange";
import ManufacturingProcess from "./_components/ManufacturingProcess";
import ExhibitionCalendar from "./_components/ExhibitionCalendar";
import Footer from "./_components/Footer";

export default function CelikisPage() {
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
      <AboutUs />
      <Excellence />
      <Quote />
      <ProductRange />
      <ManufacturingProcess />
      <ExhibitionCalendar />
      <Footer />
    </main>
  );
}
