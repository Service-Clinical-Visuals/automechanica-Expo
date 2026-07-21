"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import Solutions from "./_components/Solutions";
import Categories from "./_components/Categories";
import Brand from "./_components/Brand";
import Professionals from "./_components/Professionals";
import Footer from "./_components/Footer";


export default function LiquiMolyPage() {
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
      <About />
      <Solutions />
      <Categories />
      <Brand />
      <Professionals />
      <Footer />
    </main>
  );
}
