"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import ProductsSlider from "./_components/ProductsSlider";
import Precision from "./_components/Precision";
import EngineComponents from "./_components/EngineComponents";
import OurProductsSlider from "./_components/OurProductsSlider";
import ProductExperience360 from "./_components/ProductExperience360";
import WhyChooseUs from "./_components/WhyChooseUs";
import Events from "./_components/Events";
import Footer from "./_components/Footer";

export default function AutopumpsHome() {
    return (
        <main className="relative min-h-screen overflow-y-hidden overflow-x-hidden bg-white">
            <Header />
            <div className="flex flex-col">
                <Banner />
                <About />
                 <ProductExperience360 />
                <ProductsSlider />
                <Precision />
                <EngineComponents />
                <OurProductsSlider />
               
                <WhyChooseUs />
                <Events />
                <Footer />
            </div>
        </main>
    );
}
