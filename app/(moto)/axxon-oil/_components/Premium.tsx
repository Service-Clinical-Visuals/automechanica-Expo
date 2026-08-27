"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Link from "next/link";

const checkerboardStyle = {
  backgroundImage:
    "linear-gradient(45deg, #e5e5e5 25%, transparent 25%), linear-gradient(-45deg, #e5e5e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e5e5 75%), linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)",
  backgroundSize: "60px 60px",
  backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
  backgroundColor: "#f9f9f9",
};

const features = [
  "Premium Base Oil Technology – Formulated with high-quality base oils for superior lubrication and long-lasting performance.",
  "Broad Vehicle Compatibility – Suitable for passenger cars, commercial vehicles, heavy-duty trucks, and industrial engines.",
];

export default function Premium() {
  return (
    <section className="relative w-full bg-primary overflow-hidden py-12 md:py-20">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[68fr_32fr] gap-8 4 items-center">
          {/* Left Side: Video */}
          <div
            className="order-2 xl:order-1 w-full aspect-video"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
          </div>

          {/* Right Side: Content */}
          <div className="order-1 xl:order-2 flex flex-col gap-5" data-aos="fade-up">
            <h2 className="heading-white ">
              Engineered for Every Engine
            </h2>

            <p className="content-white">
              Engine performance begins with the right lubrication. AxxonOil Engine Oils are
              engineered to deliver superior protection, exceptional efficiency, and long-lasting
              reliability for modern gasoline and diesel engines. Manufactured using
              premium-quality base oils and advanced additive technology, our formulations provide
              outstanding lubrication that minimizes friction, reduces wear, and protects critical
              engine components in every driving environment.
            </p>

            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <img src="/moto/axon-oil/check2.png" alt="" className="w-5 h-5 mt-1 shrink-0" />
                  <span className="content-white">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-[#FFFFFF54] my-10 md:my-14" />

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6" data-aos="fade-up">
          <div>
            <h2 className="heading-white mb-6">
              Why Choose AxxonOil Engine Oils?
            </h2>
            <p className="content-white max-w-[1200px] font-medium!">
              AxxonOil Engine Oils combine premium base oils with advanced additives to deliver
              reliable protection, improved performance, and longer engine life for modern
              gasoline and diesel engines.
            </p>
          </div>

          <Link
            href="#"
            className="flex max-w-[180px] items-center relative shrink-0 group bg-white text-white pl-6 pr-16 py-1.5"
          >
            <span className="navlink text-primary! whitespace-nowrap">Explore Products</span>
            <span className="absolute right-[-25px] top-1/2 -translate-y-1/2 w-11 h-12 shrink-0">
              <span className="absolute inset-[2px] bg-primary [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
              <span className="absolute inset-[4.5px] bg-white [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] flex items-center justify-center">
                <ArrowRight size={34} className="text-primary transition-transform group-hover:translate-x-0.5" />
              </span>
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
