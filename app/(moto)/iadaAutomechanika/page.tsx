"use client";

import React, { useEffect } from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import AdvancedEngineProtection from "./_components/AdvancedEngineProtection";
import Products from "./_components/Products";
import Quality from "./_components/Quality";
import Solutions from "./_components/Solutions";
import Blog from "./_components/Blog";
import Footer from "./_components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function IadaAutomechanikaHome() {
    useEffect(() => {
        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <main className="relative min-h-screen overflow-y-hidden overflow-x-hidden bg-white">
            <Header />
            <Banner />
            <About />
            <AdvancedEngineProtection />
            <Products />
            <Quality />
            <Solutions />
            <Blog />
            <Footer />
        </main>
    );
}
