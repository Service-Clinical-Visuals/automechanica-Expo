import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import Products from "./_components/Products";
import ProductCategories from "./_components/ProductCategories";
import WhyChoose from "./_components/WhyChoose";
import Standards from "./_components/Standards";
import Footer from "./_components/Footer";

export default function MelleSpPage() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Scroll-activated header */}
      <Header />

      {/* Full-screen video banner section */}
      <Banner />

      {/* Section 01: About Us */}
      <About />

      {/* Section 02: Motor Oils */}
      <Products />

      {/* Section 03: Products categories */}
      <ProductCategories />

      {/* Section 04: Why Choose K2 */}
      <WhyChoose />

      {/* Section 05: Standards & Distribution */}
      <Standards />

      {/* Newsletter banner & brand footer */}
      <Footer />
    </main>
  );
}
