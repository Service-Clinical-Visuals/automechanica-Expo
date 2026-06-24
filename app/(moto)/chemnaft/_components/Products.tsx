"use client";

import { useState } from "react";
import Container from "./Container";

const categories = [
  {
    id: "passenger",
    label: "Passenger Vehicles",
    products: [
      { img: "/moto/chemnaft/passenger/passenger1.png", name: "QUALITIUM POWER H 0W/16" },
      { img: "/moto/chemnaft/passenger/passenger2.png", name: "QUALITIUM POWER H 0W/20" },
      { img: "/moto/chemnaft/passenger/passenger3.png", name: "QUALITIUM POWER LV 0W/20" },
      { img: "/moto/chemnaft/passenger/passenger4.png", name: "QUALITIUM POWER V 0W/30" },
      { img: "/moto/chemnaft/passenger/passenger5.png", name: "QUALITIUM POWER FE 0W/30" },
      { img: "/moto/chemnaft/passenger/passenger6.png", name: "QUALITIUM POWER 0W/20" },
    ],
  },
  {
    id: "trucks",
    label: "Trucks",
    products: [
      { img: "/moto/chemnaft/truck/truck1.png", name: "QUALITIUM TRUCK EVO 5W/30 (LOW SAPS)" },
      { img: "/moto/chemnaft/truck/truck2.png", name: "QUALITIUM TRUCK ECO 10W/30 (LOW SAPS)" },
      { img: "/moto/chemnaft/truck/truck3.png", name: "QUALITIUM TRUCK EXTRA 5W/40" },
      { img: "/moto/chemnaft/truck/truck4.png", name: "QUALITIUM TRUCK ULTRA 10W/40 (LOW SAPS)" },
      { img: "/moto/chemnaft/truck/truck5.png", name: "QUALITIUM TRUCK SUPER 10W/40 (UHPD)" },
      { img: "/moto/chemnaft/truck/truck6.png", name: "QUALITIUM TRUCK PLUS 15W/40 (SHPD)" },
    ],
  },
  {
    id: "agriculture",
    label: "Agriculture & Construction",
    products: [
      { img: "/moto/chemnaft/agriculture/agri1.png", name: "QUALITIUM AGRI UTTO 10W/30" },
      { img: "/moto/chemnaft/agriculture/agri2.png", name: "QUALITIUM AGRI UTTO PLUS 10W/30" },
      { img: "/moto/chemnaft/agriculture/agri3.png", name: "QUALITIUM AGRI UTTO 10W/40" },
      { img: "/moto/chemnaft/agriculture/agri4.png", name: "QUALITIUM AGRI UTTO PLUS 10W/40" },
      { img: "/moto/chemnaft/agriculture/agri5.png", name: "QUALITIUM AGRI UTTO 20W/30" },
      { img: "/moto/chemnaft/agriculture/agri6.png", name: "QUALITIUM AGRI STOU 10W/30" },
    ],
  },
  {
    id: "transmission",
    label: "Transmission Systems",
    products: [
      { img: "/moto/chemnaft/transmission/transmission1.png", name: "QUALITIUM GEAR ATF VI" },
      { img: "/moto/chemnaft/transmission/transmission2.png", name: "QUALITIUM GEAR ATF III" },
      { img: "/moto/chemnaft/transmission/transmission3.png", name: "QUALITIUM GEAR ATF IID" },
      { img: "/moto/chemnaft/transmission/transmission4.png", name: "QUALITIUM GEAR CVT" },
      { img: "/moto/chemnaft/transmission/transmission5.png", name: "QUALITIUM GEAR DCT/DSG" },
      { img: "/moto/chemnaft/transmission/transmission6.png", name: "QUALITIUM GEAR GL-5 75W/80" },
    ],
  },
  {
    id: "industry",
    label: "Industry",
    products: [
      { img: "/moto/chemnaft/industry/industry1.png", name: "QUALITIUM HLP" },
      { img: "/moto/chemnaft/industry/industry2.png", name: "QUALITIUM HM" },
      { img: "/moto/chemnaft/industry/industry3.png", name: "CHEMNAFT HL" },
      { img: "/moto/chemnaft/industry/industry4.png", name: "OLEJ MASZYNOWY L-AN" },
      { img: "/moto/chemnaft/industry/industry5.png", name: "CHEMNAFT TRANS CLP" },
      { img: "/moto/chemnaft/industry/industry6.png", name: "CHEMNAFT TRANS" },
    ],
  },
];

const VISIBLE = 4;
const TOTAL_DOTS = 3; // 6 items, slide 1 at a time → positions 0,1,2

function ArrowIcon() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#CF3232] ml-1.5 shrink-0">
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Products() {
  const [activeTab, setActiveTab] = useState("passenger");
  const [page, setPage] = useState(0);

  const current = categories.find((c) => c.id === activeTab)!;
  const visible = current.products.slice(page, page + VISIBLE);

  function handleTab(id: string) {
    setActiveTab(id);
    setPage(0);
  }

  return (
    <section className="bg-white py-16">
      <Container>
        {/* Heading */}
        <div className="max-w-[1200px] mx-auto text-center px-6 mb-10" data-aos="fade-up">
            <h2 className="heading mb-4">Premium Lubricants For Every Application</h2>
            <p className="content">
            Qualitium offers a comprehensive range of high-performance lubricants designed to meet the
            demands of modern vehicles, machinery, and industrial equipment. Developed with advanced
            additive technology and premium base oils, our products deliver reliable protection,
            efficiency, and long service life.
            </p>
        </div>

        <hr className="border-t border-gray-200 mb-10" />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 px-6" data-aos="fade-up" data-aos-delay="100">
            {categories.map((cat) => (
            <button
                key={cat.id}
                onClick={() => handleTab(cat.id)}
                className={`px-5 py-2 transition-colors ${
                activeTab === cat.id
                    ? "bg-[#1a2e5a] font-bold  content-white border-[#1a2e5a]"
                    : "bg-white text-[#10355F]! content border border-[#CF3232] hover:bg-gray-50"
                }`}
            >
                {cat.label}
            </button>
            ))}
        </div>

        {/* Cards */}
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
            {visible.map((product, i) => (
            <div
                key={page + i}
                className="relative border border-gray-200 bg-white shadow-sm flex flex-col items-center pt-6 pb-5 px-4 w-full max-w-[400px] h-[465px]"
                data-aos="fade-up"
                data-aos-delay={i * 100}
            >
                <div className="w-full flex items-center justify-center flex-1 mb-4">
                <img
                    src={product.img}
                    alt={product.name}
                    className="max-h-full w-auto object-contain"
                />
                </div>
                <p className="heading2 text-[22px]! font-bold text-center mb-2">
                {product.name}
                </p>
                <a
                href="#"
                className="flex heading2 items-center text-[#10355F]! text-[22px]! font-bold underline underline-offset-2"
                >
                View More <ArrowIcon />
                </a>
            </div>
            ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
            <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-2.5 rounded-full transition-all ${
                page === i ? "w-8 bg-[#1a2e5a]" : "w-8 bg-gray-300"
                }`}
                aria-label={`Page ${i + 1}`}
            />
            ))}
        </div>
      </Container>
    </section>
  );
}
