"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { CheckCircle2 } from "lucide-react";

export default function Built() {
  const features = [
    {
      text: "Comprehensive Product Range – Available in fully synthetic, semi-synthetic, and mineral formulations to meet diverse vehicle and equipment requirements."
    },
    {
      text: "OEM-Approved Performance – Engineered to satisfy leading international manufacturer specifications, ensuring compatibility with the latest engine technologies."
    },
    {
      text: "Outstanding Deposit Control – Keeps pistons, turbochargers, and engine parts cleaner for improved efficiency."
    }
  ];

  return (
    <section className="w-full py-16 bg-transparent overflow-hidden">
      <div className="custom-container">

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 min-[3800px]:gap-14">

          {/* Left: Video */}
          <div className="xl:col-span-9 order-2 xl:order-1 aspect-video relative overflow-hidden flex items-center justify-center rounded-3xl" data-aos="fade-right">
            <DynamicVideoPlayer type="short-2" className="absolute top-0 left-0 w-full h-full object-cover" />
          </div>

          {/* Right: Key Features */}
          <div className="xl:col-span-3 order-3 xl:order-2 flex flex-col justify-center" data-aos="fade-left">
            <div className="border-b border-white/40 pb-4 mb-6">
              <Typography variant="h2" color="white" className="font-semibold mb-4">
                Built For Modern Engines Across Every Industry
              </Typography>
              <Typography variant="p" color="white" className="leading-relaxed ">
                Our engine oils deliver superior protection, reliable performance, and extended service life for every drive. Built to international quality standards for demanding operating conditions worldwide.
              </Typography>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5 fill-primary text-secondary" strokeWidth={1.5} />
                  <Typography variant="p" color="white" className="leading-relaxed">
                    {feature.text}
                  </Typography>
                </div>
              ))}
            </div>

            <Typography variant="p" color="white" className="pt-4 border-t border-white/40 leading-relaxed mb-6 block text-sm">
              Explore our OEM-quality Gaskets & Oil Seals in an interactive 360° view, highlighting precision and performance.
            </Typography>

            <div>
              <Button text="Explore Applications" href="#" showIcon={true} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
