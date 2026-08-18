"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

type Tab = "Manufacturing" | "AfterMarket";

const manufacturingProducts = [
  {
    id: 1,
    title: "Motor supports",
    desc: "Precision HPDC components designed for high-volume automotive production.",
    img: "/moto/amc-amadeo/1.png"
  },
  {
    id: 2,
    title: "Head covers",
    desc: "Gravity Casting and HPDC components for OE production.",
    img: "/moto/amc-amadeo/2.png"
  },
  {
    id: 3,
    title: "Intake manifold",
    desc: "Designed for prototype and mid-volume production.",
    img: "/moto/amc-amadeo/3.png"
  }
];

const aftermarketProducts = [
  {
    id: 4,
    title: "Aluminium diesel cylinder head",
    desc: "OE-quality aluminum cylinder heads for reliable engine performance.",
    img: "/moto/amc-amadeo/4.png"
  },
  {
    id: 5,
    title: "Particle filters",
    desc: "OE-quality, high-efficiency filters with advanced manufacturing.",
    img: "/moto/amc-amadeo/5.png"
  },
  {
    id: 6,
    title: "Camshaft kit",
    desc: "Camshaft kits for reliable diesel and petrol engine performance.",
    img: "/moto/amc-amadeo/6.png"
  }
];

export default function AutomotiveComponents() {
  const [activeTab, setActiveTab] = useState<Tab>("Manufacturing");

  const products = activeTab === "Manufacturing" ? manufacturingProducts : aftermarketProducts;

  return (
    <section className="py-20 md:py-28 bg-white w-full overflow-hidden">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Title & Description */}
          <div className="max-w-2xl" data-aos="fade-right">
            <h2 className="section-title text-[#272727] font-semibold mb-6 oswald leading-tight">
              <span className="relative inline-block pb-2">
                Automotive Components
                <span className="absolute left-0 bottom-0 w-[90%] h-1 bg-primary"></span>
              </span>{" "}
              & Solutions
            </h2>
            <p className="section-text text-primary-3 rubik font-normal leading-relaxed mb-2">
              AMC delivers precision automotive components through advanced engineering, casting, and machining expertise.
            </p>
          </div>

          {/* Tabs & Button */}
          <div className="flex flex-wrap items-center gap-4" data-aos="fade-left">
            <Button
              onClick={() => setActiveTab("Manufacturing")}
              variant={activeTab === "Manufacturing" ? "tab-active" : "tab-inactive"}
            >
              Manufacturing
            </Button>
            <Button
              onClick={() => setActiveTab("AfterMarket")}
              variant={activeTab === "AfterMarket" ? "tab-active" : "tab-inactive"}
            >
              AfterMarket
            </Button>
            <Button href="#" variant="primary" showArrow={true}>
              View More
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`bg-white rounded-xl border border-gray-100 p-6 flex flex-col shadow-md  hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 ${
                index === 2 ? 'md:col-span-2 xl:col-span-1 md:w-[calc(50%-1rem)] md:mx-auto xl:w-full xl:mx-0' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="w-full mb-6 flex items-center justify-center p-1">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="max-w-full max-h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow text-center p-10">
                <h3 className="card-title text-[#272727] font-semibold oswald mb-3">
                  {product.title}
                </h3>
                <p className="card-text text-primary-3 rubik font-normal leading-relaxed mb-6 flex-grow">
                  {product.desc}
                </p>
                <Link 
                  href="#" 
                  className="inline-flex items-center justify-center gap-2 text-primary hover:text-red-700 transition-colors oswald font-semibold section-text mt-auto"
                >
                  View The Product
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
