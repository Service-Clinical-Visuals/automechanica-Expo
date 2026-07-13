import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import AdvancedProtection from "./_components/AdvancedProtection";
import Approvals from "./_components/Approvals";
import ProductSolutions from "./_components/ProductSolutions";
import AdvancedTechnology from "./_components/AdvancedTechnology";
import Blogs from "./_components/Blogs";
import WeCare from "./_components/WeCare";
import Footer from "./_components/Footer";

export default function KroonOilHome() {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full bg-[#000000]">
        <Banner />
        <AboutUs />
        <AdvancedProtection />
        <Approvals />
        <ProductSolutions />
        <AdvancedTechnology />
        <Blogs />
        <WeCare />
      </div>
      <Footer />
    </>
  );
}
