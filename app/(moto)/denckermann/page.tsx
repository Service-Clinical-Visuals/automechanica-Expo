"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import WhyChooseUs from "./_components/WhyChooseUs";
import Benefits from "./_components/Benefits";
import BrakePads from "./_components/BrakePads";
import Products from "./_components/Products";
import Efficiency from "./_components/Efficiency";
import AboutUs from "./_components/AboutUs";
import Blog from "./_components/Blog";
import Newsletter from "./_components/Newsletter";
import Footer from "./_components/Footer";

export default function DenckermannPage() {
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
      <WhyChooseUs />
      <Benefits />
      <BrakePads />
      <Products />
      <AboutUs />
      <Efficiency />      
      <Blog />
      <Newsletter />
      <Footer />
    </main>
  );
}
