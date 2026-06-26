"use client";

import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import MotorOils from "./_components/MotorOils";
import Category from "./_components/Category";
import FuelEconomy from "./_components/FuelEconomy";
import Academy from "./_components/Academy";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function ArdecaPage() {
  return (
    <main className="flex min-h-screen overflow-y-hidden overflow-x-hidden flex-col w-full bg-white">
      <Header />
      <Banner />
      <About />
      <MotorOils />
      <Category />
      <FuelEconomy />
      <Academy />
      <News />
      <Footer />
    </main>
  );
}
