import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import ProductView from "./_components/ProductView";
import ProductPortfolio from "./_components/ProductPortfolio";
import PrecisionCalibration from "./_components/PrecisionCalibration";
import Leadership from "./_components/Leadership";
import SmarterDiagnostics from "./_components/SmarterDiagnostics";
import Blogs from "./_components/Blogs";
import Footer from "./_components/Footer";

export default function RepairifyPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] flex flex-col overflow-x-hidden overflow-y-hidden">
      <Header />
      <Banner />
      <AboutUs />
      <ProductView />
      <ProductPortfolio />
      <PrecisionCalibration />
      <Leadership />
      <SmarterDiagnostics />
      <Blogs />
      <Footer />
    </main>
  );
}
