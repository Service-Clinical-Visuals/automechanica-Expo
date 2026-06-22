"use client";

import { useState } from "react";
import Image from "next/image";

const segments = [
  { label: "Automotive",  car: "/moto/synmar/car1.png", oil: "/moto/synmar/oil1.png" },
  { label: "Heavy Duty",  car: "/moto/synmar/car2.png", oil: "/moto/synmar/oil2.png" },
  { label: "Agriculture", car: "/moto/synmar/car3.png", oil: "/moto/synmar/oil3.png" },
  { label: "Motorcycle",  car: "/moto/synmar/car4.png", oil: "/moto/synmar/oil4.png" },
  { label: "Industry",    car: "/moto/synmar/car5.png", oil: "/moto/synmar/oil5.png" },
  { label: "Navy",        car: "/moto/synmar/car6.png", oil: "/moto/synmar/oil6.png" },
];

const items = ["Motor oil", "Transmission oil", "Coolant"];
const PER_PAGE = 3;

export default function YourSolutionSection() {
  const [page, setPage] = useState(0);
  const visible = segments.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="bg-[#6b6b6b] py-16 twok">
      <div className="mx-auto max-w-[90%]">

        {/* Header */}
        <div className="text-center mb-12">
          <div data-aos="fade-up">
            <h2 className="heading text-[#D4B161]! mb-2">
              Your Solution
            </h2>
          </div>
          <p data-aos="fade-up" data-aos-delay="150" className="content-white max-w-[1000px] mx-auto">
            From cars and trucks to agricultural machinery and vessels – Synmar supplies high-quality lubricants (such as oil), coolants, and technical fluids for every type of vehicle and machine. For which sectors are our lubricants suitable? Our products are perfectly tailored to the needs within the{" "}
            {["Automotive", "Heavy Duty", "Agriculture", "Industry", "Motorcycle"].map((seg) => (
              <span key={seg}>
                <span className="text-[#c9a84c]">{seg}</span>
                {" , "}
              </span>
            ))}
            and{" "}
            <span className="text-[#c9a84c]">Marine</span> segments .
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10">
          {visible.map((seg, index) => (
            <div key={seg.label} data-aos="fade-up" data-aos-delay={index * 120} className="bg-white min-h-[358px] overflow-hidden relative flex flex-col min-h-70">
              {/* Gold chevron background */}
              <div
                className="absolute right-0 top-0 h-full w-[55%] bg-[#D4B161]"
                style={{ clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)" }}
              />

              {/* Oil bottle */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-[38%] h-[80%] max-h-[228px]">
                <Image src={seg.oil} alt={seg.label} fill className="object-contain" />
              </div>

              {/* Left content */}
              <div className="relative z-10 flex flex-col gap-6 p-6 w-[55%]">
                <div className="relative max-w-[60px]  h-[75px]">
                  <Image src={seg.car} alt={seg.label} fill className="object-contain" />
                </div>
                <h3 className="subheading">
                  {seg.label}
                </h3>
                <ul className="flex flex-col gap-4">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 content">
                      <Image src="/moto/synmar/check.png" alt="check" width={30} height={30} className="shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Page indicator pills */}
        <div className="flex items-center justify-center gap-2">
          {[0, 1].map((i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all ${
                i === page ? "w-8 bg-[#b5451b]" : "w-8 bg-gray-400 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
