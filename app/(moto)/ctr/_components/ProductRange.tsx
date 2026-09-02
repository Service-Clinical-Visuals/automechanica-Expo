"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Button from "./Button";
import {
  ShieldCheck,
  VolumeX,
  Thermometer,
  Award,
  Activity,
  Sliders,
  Maximize2,
  LayoutGrid,
  Disc,
  Compass,
  Zap,
} from "lucide-react";

interface ProductFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ProductItem {
  id: string;
  category: string;
  categoryTitle?: string;
  name: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  img: string;
  features: ProductFeature[];
}

export default function ProductRange() {
  const [activeCategory, setActiveCategory] = useState<string>("brakes");

  const categories = [
    { id: "brakes", label: "Brakes", icon: Disc },
    { id: "suspension", label: "Suspension", icon: Activity },
    { id: "steering", label: "Steering", icon: Compass },
    { id: "all", label: "All", icon: LayoutGrid },
  ];

  const products: ProductItem[] = [
    {
      id: "brakes",
      category: "Brakes",
      name: "Brake Pads",
      description:
        "Brake pads are key vehicle components that slow a car by creating friction against the brake disc, converting kinetic energy into heat for safe deceleration. Their performance depends on material composition, which influences braking efficiency, heat resistance, dust, noise, durability, and overall driving comfort.",
      buttonText: "View Brake Pads",
      buttonHref: "#brake-pads",
      img: "/moto/ctr/break-pad.png",
      features: [
        {
          icon: ShieldCheck,
          title: "Reliable Braking",
          description: "Engineered to deliver consistent stopping power and enhanced safety.",
        },
        {
          icon: VolumeX,
          title: "Low Noise & Dust",
          description: "Advanced formulations help reduce noise & minimize brake.",
        },
        {
          icon: Thermometer,
          title: "Excellent Durability",
          description: "High-quality materials ensure long-lasting performance and resistance.",
        },
        {
          icon: Award,
          title: "OE Quality",
          description: "Manufactured to meet strict quality standards for dependable performance.",
        },
      ],
    },
    {
      id: "suspension",
      category: "Suspension",
      categoryTitle: "SUSPENSION",
      name: "Shock Absorber & Strut",
      description:
        "Shock absorbers control and stabilize spring movement by absorbing driving impacts and limiting the continuous compression and expansion of springs under force, thereby improving ride comfort and vehicle stability. They achieve this by regulating spring motion through resistance created as hydraulic fluid passes through precision valves.",
      buttonText: "View Shock Absorber & Strut",
      buttonHref: "#suspension",
      img: "/moto/ctr/suspension.png",
      features: [
        {
          icon: ShieldCheck,
          title: "Enhanced Ride Comfort",
          description: "Engineered to absorb road impacts",
        },
        {
          icon: Sliders,
          title: "Superior Stability Control",
          description: "control spring movement for a smooth and stable driving experience.",
        },
        {
          icon: Thermometer,
          title: "High Durability",
          description: "Built with high-quality materials to withstand demanding conditions",
        },
        {
          icon: Award,
          title: "OE Quality",
          description: "Manufactured to meet strict quality standards for reliable operation.",
        },
      ],
    },
    {
      id: "steering",
      category: "Steering",
      categoryTitle: "STEERING",
      name: "Tie Rod End",
      description:
        "The tie rod assembly connects the steering knuckle to the rack end, transmitting steering input from the rack to the wheels for precise vehicle control, and is designed with ball joints on both ends to ensure flexible movement and smooth power transmission even when the vehicle body is inclined, delivering reliable steering performance.",
      buttonText: "View Tie Rod End",
      buttonHref: "#steering",
      img: "/moto/ctr/strrring.png",
      features: [
        {
          icon: ShieldCheck,
          title: "Precise Steering Control",
          description: "Engineered to deliver accurate steering response & improved vehicle handling.",
        },
        {
          icon: Zap,
          title: "Smooth Joint Movement",
          description: "Ball joint design ensures flexible and smooth articulation.",
        },
        {
          icon: Thermometer,
          title: "High Durability",
          description: "Manufactured with high-strength materials for long-lasting performance.",
        },
        {
          icon: Award,
          title: "OE Quality Standards",
          description: "Designed to meet strict OE specification for reliable and consistent operation.",
        },
      ],
    },
  ];

  const displayedProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.id === activeCategory);

  return (
    <section className="w-full py-16 lg:py-24 bg-white overflow-hidden" id="products">
      <div className="custom-container flex flex-col gap-12 lg:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mx-auto gap-3.5 w-full" data-aos="fade-up">
          <div className="flex flex-col items-center">
            <span className="sub-heading">
              Our Product Range
            </span>
            <div className="w-12 h-[2px] bg-[var(--color-primary)] mt-1.5" />
          </div>

          <Typography variant="h2" className="font-bold leading-tight mt-1 mx-auto text-center">
            Our Comprehensive Product Solutions
          </Typography>

          <Typography variant="p" className="text-center max-w-[80%] mx-auto text-gray-600 leading-relaxed text-sm md:text-base">
            Our product range covers a comprehensive selection of high-quality automotive components designed to meet the diverse needs of modern vehicles. From precision-engineered parts to advanced solutions, each product is developed to ensure optimal performance, durability, &amp; reliability across various applications. With a strong focus on quality and innovation, we deliver solutions that support efficiency, safety, &amp; long-term value.
          </Typography>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg text-sm sm:text-base font-primary font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[var(--color-primary)] text-white shadow-md shadow-red-500/20 scale-105"
                      : "bg-white text-gray-700 border border-gray-200/90 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-600"}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Sections List */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {displayedProducts.map((product, idx) => (
            <div
              key={product.id}
              className="flex flex-col gap-6"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Category Watermark Title (if applicable / in All view) */}
              {product.categoryTitle && (
                <div className="pt-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider text-gray-800 uppercase font-primary">
                    {product.categoryTitle}
                  </h2>
                </div>
              )}

              {/* Product Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
                
                {/* Left Column: Details & 2x2 Feature Cards */}
                <div className="lg:col-span-6 flex flex-col gap-5 lg:gap-6">
                  
                  {/* Product Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-heading)] font-primary">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-secondary text-sm md:text-base leading-relaxed">
                    {product.description}
                  </p>

                  {/* 2x2 Feature Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
                    {product.features.map((feat, fIdx) => {
                      const FeatIcon = feat.icon;
                      return (
                        <div
                          key={fIdx}
                          className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 flex flex-col gap-1.5 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300"
                        >
                          <div className="flex items-center gap-2">
                            <FeatIcon className="w-5 h-5 text-[var(--color-primary)] shrink-0" strokeWidth={2} />
                            <h4 className="font-bold text-sm sm:text-base text-gray-900 font-primary leading-snug">
                              {feat.title}
                            </h4>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 font-secondary leading-relaxed">
                            {feat.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <Button
                      text={product.buttonText}
                      href={product.buttonHref}
                      variant="outline"
                      showIcon={true}
                      className="px-6 py-2.5"
                    />
                  </div>

                </div>

                {/* Right Column: Product Image Box */}
                <div className="lg:col-span-6 w-full">
                  <div className="relative w-full aspect-[4/3] lg:h-[460px] xl:h-[500px] rounded-2xl bg-[#F7F8FA] border border-gray-200/70 flex items-center justify-center p-8 overflow-hidden group shadow-sm">
                    
                    {/* Expand icon in top-left */}
                    <div className="absolute top-4 left-4 p-2 text-gray-400 group-hover:text-gray-700 bg-white/90 backdrop-blur-sm rounded-lg transition-colors shadow-sm">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    {/* Product Image */}
                    <img
                      src={product.img}
                      alt={product.name}
                      className="max-h-[95%] object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105 select-none"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
