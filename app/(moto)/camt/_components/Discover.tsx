"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

type Tab = "sensors" | "thermal";

const products: Record<Tab, { image: string; title: string; description: string }[]> = {
  sensors: [
    {
      image: "/moto/camt/discover/sensors/1.png",
      title: "Nox Sensor",
      description: "High-performance sensors for accurate emission monitoring and improved vehicle efficiency.",
    },
    {
      image: "/moto/camt/discover/sensors/2.png",
      title: "Pressure Sensor",
      description: "Accurate pressure monitoring solutions designed for reliable vehicle performance and efficiency.",
    },
    {
      image: "/moto/camt/discover/sensors/3.png",
      title: "Temperature Sensors",
      description: "Temperature Sensors monitor temperature with precision and reliability.",
    },
  ],
  thermal: [
    {
      image: "/moto/camt/discover/thermal/1.png",
      title: "Electric Coolant Pump",
      description: "Circulates coolant for efficient thermal management.",
    },
    {
      image: "/moto/camt/discover/thermal/2.png",
      title: "Electric Coolant Valve",
      description: "Controls coolant flow for precise temperature regulation.",
    },
  ],
};

const tabs: { key: Tab; label: string }[] = [
  { key: "sensors", label: "Sensors" },
  { key: "thermal", label: "Thermal Solutions" },
];

export default function Discover() {
  const [activeTab, setActiveTab] = useState<Tab>("sensors");

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="discover">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div data-aos="fade-up">
            <h2 className="heading mb-4">Discover Our Automotive Solutions</h2>
            <p className="content max-w-2xl">
              CAMT provides advanced automotive sensors and thermal management solutions that
              enhance vehicle performance, efficiency, and cleaner mobility worldwide.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0" data-aos="fade-up">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`navlink font-normal! px-5 py-2.5 rounded-md transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? "bg-primary text-white!"
                    : "bg-[#ED1E2233] text-black!"
                }`}
              >
                {tab.label}
              </button>
            ))}

            <Link
              href="#"
              className="navlink inline-flex items-center gap-2 text-white! font-normal! bg-primary hover:bg-primary-hover px-6 py-2.5 rounded-md transition-colors whitespace-nowrap"
            >
              View More
              <ArrowRight size={18} strokeWidth={2} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
          {products[activeTab].map((product) => (
            <div
              key={product.title}
              className="bg-white border border-[#EAEAEA] shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-xl p-4 text-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover rounded-lg mb-5"
              />

              <h3 className="subheading mb-2">{product.title}</h3>
              <p className="content mb-4">{product.description}</p>

              <Link
                href="#"
                className="navlink inline-flex items-center gap-2 text-primary! font-bold! whitespace-nowrap"
              >
                View The Product
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
