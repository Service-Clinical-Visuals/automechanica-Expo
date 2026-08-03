"use client";

import React, { useState, useRef } from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {
  Car,
  Truck,
  Bus,
  HardHat,
  Tractor,
  LayoutGrid,
  ChevronRight,
} from "lucide-react";

export default function ProductRange() {
  const [activeCategory, setActiveCategory] = useState("Heavy Duty Commercial Vehicle");
  const swiperRef = useRef<SwiperType | null>(null);

  const categories = [
    { name: "Heavy Duty Commercial Vehicle", icon: Truck },
    { name: "Light Commercial Vehicle", icon: Bus },
    { name: "Construction Machinery Gaskets", icon: HardHat },
    { name: "Agricultural Machinery Gasket", icon: Tractor },
    { name: "Passenger Vehicle Gaskets", icon: Car },
    { name: "Others", icon: LayoutGrid },
  ];

  const productsByCategory: Record<
    string,
    Array<{ title: string; oeNumber: string; img: string }>
  > = {
    "Heavy Duty Commercial Vehicle": [
      {
        title: "CYLINDER HEAD GASKET – TEMEL NR. 12-121501-10",
        oeNumber: "OE NR. 1458 518_1 405 608",
        img: "/moto/temel/heavy-duty-1.png",
      },
      {
        title: "THERMOSTAT HOUSING COVER GASKET – TEMEL NR. 09-350207-3",
        oeNumber: "OE NR. 7882923",
        img: "/moto/temel/heavy-duty-2.png",
      },
      {
        title: "HEAD SET GASKET (1 CYL) – TEMEL NR. 30-131200-00",
        oeNumber: "OE NR. 1765 924",
        img: "/moto/temel/heavy-duty-3.png",
      },
      {
        title: "EXHAUST MANIFOLD GASKET – TEMEL NR. 01-160004-06",
        oeNumber: "OE NR. 21902969",
        img: "/moto/temel/heavy-duty-4.png",
      },
      {
        title: "OIL FILTER HOUSING GASKET – TEMEL NR. 09-290006-20",
        oeNumber: "OE NR. 20482218",
        img: "/moto/temel/heavy-duty-5.png",
      },
      {
        title: "VALVE STEM SEAL – TEMEL NR. 08-090222-00",
        oeNumber: "OE NR. 1622442_3191787",
        img: "/moto/temel/heavy-duty-6.png",
      },
      {
        title: "OIL FILTER HOUSING GASKET – TEMEL NR. 09-250002-AC",
        oeNumber: "OE NR. 20839812_20447780",
        img: "/moto/temel/heavy-duty-7.png",
      },
    ],
    "Light Commercial Vehicle": [
      {
        title: "CYLINDER HEAD GASKET – TEMEL NR. 14-063601-32",
        oeNumber: "OE NR. 1549 6051- KB_131 837",
        img: "/moto/temel/light-1.png",
      },
      {
        title: "EXHAUST PIPE GASKET – TEMEL NR. 01-087703-05",
        oeNumber: "OE NR. 173033_0954736730",
        img: "/moto/temel/light-2.png",
      },
      {
        title: "OIL PUMP COVER GASKET – TEMEL NR 01-063617-04",
        oeNumber: "OE NR. XS4Q-6A636-AE",
        img: "/moto/temel/light-3.png",
      },
      {
        title: "EXHAUST MANIFOLD GASKET – TEMEL NR. 01-087600-03",
        oeNumber: "OE NR. 0348 S4_9562853580",
        img: "/moto/temel/light-4.png",
      },
      {
        title: "CYLINDER HEAD GASKET – TEMEL NR. 10-144001-17",
        oeNumber: "OE NR. 681018 33 20_961 316 3120",
        img: "/moto/temel/light-5.png",
      },
      {
        title: "EXHAUST MANIFOLD GASKET – TEMEL NR. 01-062600-04",
        oeNumber: "OE NR. 2C1Q-9448-AA_1137 860",
        img: "/moto/temel/light-6.png",
      },
      {
        title: "VALVE COVER GASKET – TEMEL NR. 05-212200-NT",
        oeNumber: "OE NR. MD147118-235",
        img: "/moto/temel/light-7.png",
      },
    ],
    "Construction Machinery Gaskets": [
      {
        title: "CYLINDER HEAD GASKET – TEMEL NR. 17-189301-17",
        oeNumber: "OE NR. 21082404",
        img: "/moto/temel/construction-1.png",
      },
      {
        title: "FULL SET GASKET – TEMEL NR. 20-213600-12",
        oeNumber: "OE NR. 01274542_02910737",
        img: "/moto/temel/construction-2.png",
      },
      {
        title: "FULL SET GASKET – TEMEL NR. 20-028100-10-GG",
        oeNumber: "OE NR. 03049260",
        img: "/moto/temel/construction-3.png",
      },
      {
        title: "CYLINDER HEAD GASKET – TEMEL NR. 11-028101-16",
        oeNumber: "OE NR. 04179383_04178382",
        img: "/moto/temel/construction-4.png",
      },
      {
        title: "CYLINDER HEAD GASKET – TEMEL NR. 12-213101-12",
        oeNumber: "OE NR. 02172842",
        img: "/moto/temel/construction-5.png",
      },
      {
        title: "PLEVT GASKET – TEMEL NR. 01-028103-02",
        oeNumber: "OE NR. 22311354",
        img: "/moto/temel/construction-6.png",
      },
      {
        title: "PLEVT GASKET – TEMEL NR. 01-028103-02",
        oeNumber: "OE NR. 7W-7546_7N-7999",
        img: "/moto/temel/construction-7.png",
      },
    ],
    "Agricultural Machinery Gasket": [
      {
        title: "CYLINDER HEAD GASKET – TEMEL NR. 10-064501-14",
        oeNumber: "OE NR. COMM0074_004NKK0018A",
        img: "/moto/temel/agricultural-1.png",
      },
      {
        title: "EXHAUST MANIFOLD GASKET – TEMEL NR. 01-322208-04",
        oeNumber: "OE NR. 33611412_4224099M1",
        img: "/moto/temel/agricultural-2.png",
      },
      {
        title: "MANIFOLD GASKET – TEMEL NR. 01-331809-03",
        oeNumber: "OE NR. 3688C013-18225494",
        img: "/moto/temel/agricultural-3.png",
      },
      {
        title: "HEAD SET GASKET – TEMEL NR. 20-331800-02",
        oeNumber: "OE NR. U5LT1006_02/201817MP",
        img: "/moto/temel/agricultural-4.png",
      },
      {
        title: "VALVE COVER GASKET – TEMEL NR. 09-322202-AC",
        oeNumber: "OE NR. 3681A052_4224101M1",
        img: "/moto/temel/agricultural-5.png",
      },
      {
        title: "FULL SET GASKET – TEMEL NR. 20-028500-10",
        oeNumber: "OE NR. 05522849",
        img: "/moto/temel/agricultural-6.png",
      },
      {
        title: "FULL SET GASKET – TEMEL NR. 20-064500-02",
        oeNumber: "OE NR. 3927042_3945797",
        img: "/moto/temel/agricultural-7.png",
      },
    ],
    "Passenger Vehicle Gaskets": [
      {
        title: "CRANKSHAFT FRONT SEAL – TEMEL NR. 09-087417-VT / OE NR.",
        oeNumber: "OE NR. 21531890",
        img: "/moto/temel/gasket-1.png",
      },
      {
        title: "CYLINDER HEAD GASKET – TEMEL NR. 10-087501-15/ OE NR. 0209.1.3",
        oeNumber: "OE NR. 20725316_0428-4008",
        img: "/moto/temel/gasket-2.png",
      },
      {
        title: "CYLINDER HEAD GASKET – TEMEL NR 14-002301-07 / OE NR 82 00",
        oeNumber: "OE NR. 23538406_23532298",
        img: "/moto/temel/gasket-3.png",
      },
      {
        title: "CYLINDER HEAD GASKET – TEMEL NR. 14-101601-09 /",
        oeNumber: "OE NR. 55221094_55208989",
        img: "/moto/temel/gasket-4.png",
      },
      {
        title: "EXHAUST MANIFOLD CASKET – TEMEL NR. 01-062608-04 /",
        oeNumber: "OE NR. 2CIQ-9448-AA_1137 860",
        img: "/moto/temel/gasket-5.png",
      },
      {
        title: "CYLINDER HEAD GASKET – TEMEC NR. 14-062601-11 /",
        oeNumber: "OE NR. SCIO-6051- BA-1349 875",
        img: "/moto/temel/gasket-6.png",
      },
    ],
    "Others": [
      {
        title: "CRANKSHAFT FRONT SEAL – TEMEL NR. 09-087417-VT / OE NR.",
        oeNumber: "OE NR. 21531890",
        img: "/moto/temel/gasket-1.png",
      },
      {
        title: "CYLINDER HEAD GASKET – TEMEL NR. 10-087501-15/ OE NR. 0209.1.3",
        oeNumber: "OE NR. 20725316_0428-4008",
        img: "/moto/temel/gasket-2.png",
      },
      {
        title: "CYLINDER HEAD GASKET – TEMEL NR 14-002301-07 / OE NR 82 00",
        oeNumber: "OE NR. 23538406_23532298",
        img: "/moto/temel/gasket-3.png",
      },
      {
        title: "CYLINDER HEAD GASKET – TEMEL NR. 14-101601-09 /",
        oeNumber: "OE NR. 55221094_55208989",
        img: "/moto/temel/gasket-4.png",
      },
    ],
  };

  const currentProducts =
    productsByCategory[activeCategory] || productsByCategory["Heavy Duty Commercial Vehicle"];

  return (
    <section className="w-full py-16 lg:py-20 bg-white overflow-hidden" id="product-range">
      <div className="custom-container flex flex-col gap-10 lg:gap-14">
        
        {/* Centered Header Block */}
        <div className="flex flex-col items-center text-center mx-auto gap-3.5 w-full max-w-5xl" data-aos="fade-up">
          <div className="flex flex-col items-center">
            <span className="sub-heading">
              Our Product Range
            </span>
            <div className="w-10 h-[2px] bg-[var(--color-primary)] mt-1.5" />
          </div>

          <Typography variant="h1" className="font-bold leading-tight mt-1 mx-auto">
            Comprehensive Range of Automotive Components
          </Typography>

          <Typography variant="p" className="text-center max-w-3xl lg:max-w-7xl mx-auto">
            Our product range includes a wide selection of high-performance gaskets and engine components, designed to meet the demands of modern vehicles. Each product is engineered with precision and built using quality materials to ensure durability, reliability, and optimal performance in every application.
          </Typography>
        </div>

        {/* Main Grid: Left Category Sidebar + Right Product Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-start">
          
          {/* Left Column: Category Navigation Buttons */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-3" data-aos="fade-right">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;

              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-sm transition-all duration-300 font-primary text-sm font-medium cursor-pointer ${
                    isActive
                      ? "bg-[var(--color-primary)] text-white shadow-md border border-[var(--color-primary)]"
                      : "bg-white text-[var(--color-primary)] border border-[var(--color-primary)]/70 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-white" : "text-[var(--color-primary)]"}`} />
                    <span className="text-left leading-snug">{cat.name}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? "text-white translate-x-0.5" : "text-[var(--color-primary)]"}`} />
                </button>
              );
            })}

            {/* View All Product CTA */}
            <div className="pt-3 flex justify-center lg:justify-start">
              <Button
                text="View All Product"
                href="#products"
                variant="outline"
                showIcon={false}
                className="w-full py-2.5 text-center justify-center"
              />
            </div>
          </div>

          {/* Right Column: Product Swiper Cards */}
          <div className="lg:col-span-8 xl:col-span-9 w-full flex flex-col gap-6" data-aos="fade-left">
            <Swiper
              key={activeCategory}
              modules={[Autoplay, Pagination]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={20}
              slidesPerView={1}
              loop={currentProducts.length > 3}
              autoplay={{ delay: 5500, disableOnInteraction: false }}
              pagination={{
                clickable: true,
                el: ".product-range-pagination",
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 18 },
                1024: { slidesPerView: 2, spaceBetween: 20 },
                1280: { slidesPerView: 3, spaceBetween: 22 },
              }}
              className="w-full"
            >
              {currentProducts.map((product, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="group relative w-full h-full border border-gray-200 bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-gray-300">
                    
                    {/* Product Image Area */}
                    <div className="relative w-full aspect-[4/3] bg-[#F7F7F8] p-6 flex items-center justify-center overflow-hidden">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content & Action Area */}
                    <div className="p-5 flex flex-col justify-between flex-grow items-center text-center gap-4">
                      <div className="flex flex-col items-center">
                        <h3 className="font-bold text-[#202020] font-primary line-clamp-2 leading-snug text-center text-sm md:text-base">
                          {product.title}
                        </h3>

                        <p className="text-gray-500 text-xs sm:text-sm mt-2 font-secondary font-medium text-center">
                          {product.oeNumber}
                        </p>
                      </div>

                      {/* View Product Button */}
                      <div className="w-full pt-1">
                        <Button
                          text="View Product"
                          href="#product-details"
                          variant="outline"
                          showIcon={false}
                          className="w-full py-2 justify-center text-xs sm:text-sm"
                        />
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination Bullets */}
            <div className="product-range-pagination custom-swiper-pagination flex justify-center items-center" />
          </div>

        </div>

      </div>
    </section>
  );
}
