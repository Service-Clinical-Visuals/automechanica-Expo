"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import ProductExperience360 from "./_components/ProductExperience360";
import References from "./_components/References";
import Distributors from "./_components/Distributors";
import IgnitionCoils from "./_components/IgnitionCoils";
import Features from "./_components/Features";
import Footer from "./_components/Footer";

export default function AmadiniHome() {
    return (
        <main className="relative min-h-screen overflow-y-hidden overflow-x-hidden bg-white">
            <Header />
            <div className="flex flex-col">
                <Banner />
                <About />
                <ProductExperience360 />
                <References />
                <Distributors />
                <IgnitionCoils />
                <Features />
                <Footer />
            </div>
        </main>
    );
}
