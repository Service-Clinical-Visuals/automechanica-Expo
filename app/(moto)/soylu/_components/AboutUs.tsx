"use client";

import React from "react";

export default function AboutUs() {
  return (
    <section className="w-full  bg-white relative mb-16">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          <div className="lg:col-span-7" data-aos="fade-right">
            <div className="relative w-full min-h-[420px] overflow-hidden ">
              <img
                src="/moto/soylu/abt.png"
                alt="Soylu About"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5" data-aos="fade-left" data-aos-delay="100">
            <div className="max-w-2l">
              <h2 className="section-title text-[#0F3D26] font-bold mb-6">About Niyazi Soylu</h2>
              <div className="space-y-5 text-[#585858]">
                <p className="section-text leading-[1.5]">
                  Founded in 2001 by Niyazi Soylu, we have become one of the reliable solution partners in the heavy commercial vehicle aftermarket sector with the products we have developed, our engineering capabilities, and our production power.
                </p>
                <p className="section-text leading-[1.5]">
                  Today, we continue our operations with our modern production facility covering 9,000 m² of indoor space in Gümüşova, Düzce, and our logistics, sales, service, and support center covering 1,500 m² of indoor space in İkitelli, Istanbul; offering our customers fast, sustainable, and high value-added solutions.
                </p>
                <p className="section-text leading-[1.5]">
                  With over 20,000 different product types, including exhaust and emission systems, air tanks, fuel and oil tanks, NOx sensors, and temperature sensors, we specialize in critical product groups needed by the heavy commercial vehicle industry.
                </p>
              </div>

              <div className="mt-6">
                <div className="h-0 w-[820px] max-w-full border-t border-[#00000042]" />
              </div>

              <div className="grid gap-4 mt-8">
                <div>
                  <div className="flex items-start gap-3 mb-1">
                    <img src="/moto/soylu/Subtract.png" alt="Icon" className="h-5 w-5 mt-1 object-contain" />
                    <div className="flex-1">
                      <Typography variant="p" color="primary" className="font-semibold">Integrated Engineering Excellence -</Typography>
                      <Typography variant="p" color="muted" className="ml-2 leading-[1.7]">
                        From product design and tooling development to final production, every stage is managed in-house to ensure precision, efficiency, and consistent quality.
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <img src="/moto/soylu/Subtract.png" alt="Icon" className="h-5 w-5 mt-1 object-contain" />
                    <div className="flex-1">
                      <Typography variant="p" color="primary" className="font-semibold">Advanced In-House Manufacturing -</Typography>
                      <Typography variant="p" color="muted" className="ml-2 leading-[1.7]">
                        Our modern production facilities design and manufacture molds, jigs, and specialized equipment using cutting-edge technologies for superior accuracy and reliability.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="mt-8 inline-flex items-center rounded-none rounded-tr-[24px] bg-[#0F3D26] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d3520]">
                Discover More
                <img src="/moto/soylu/Arrow (1).png" alt="Arrow" className="ml-2 h-3 w-auto" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="h-0 w-[1680px] max-w-full border-t border-[#00000042]" />
        </div>

        <div className="mt-8 xl:mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
          <div className="rounded-[2px] bg-white p-4 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.12)] " data-aos="fade-up">
            <div className="flex items-start gap-3">
              <img src="/moto/soylu/Subtract.png" alt="Icon" className="h-5 w-5 mt-1" />
              <div className="flex-1">
                <Typography variant="p" color="primary" className="font-semibold">Established in 2001 -</Typography>
                <Typography variant="p" color="muted" className="ml-2 leading-[1.7]">
                  Over two decades of manufacturing excellence.
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[2px] bg-white p-4 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.12)]" data-aos="fade-up" data-aos-delay="80">
            <div className="flex items-start gap-3 ">
              <img src="/moto/soylu/Subtract.png" alt="Icon" className="h-5 w-5 mt-1" />

              <div className="flex-1">
                <Typography variant="p" color="primary" className="font-semibold">Manufacturing Facility -</Typography>
                <Typography variant="p" color="muted" className="ml-2 leading-[1.7]">
                  9,000 m² modern production plant with advanced technologies.
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[2px] bg-white p-4 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.12)]" data-aos="fade-up" data-aos-delay="160">
            <div className="flex items-start gap-3">
              <img src="/moto/soylu/Subtract.png" alt="Icon" className="h-5 w-5 mt-1" />

              <div className="flex-1">
                <Typography variant="p" color="primary" className="font-semibold">Digital Product Traceability -</Typography>
                <Typography variant="p" color="muted" className="ml-2 leading-[1.7]">
                  QR code system providing transparency, quality, and reliability.
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[2px] bg-white p-4 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.12)] " data-aos="fade-up" data-aos-delay="240">
            <div className="flex items-start gap-3">
              <img src="/moto/soylu/Subtract.png" alt="Icon" className="h-5 w-5 mt-1" />

              <div className="flex-1">
                <Typography variant="p" color="primary" className="font-semibold">Logistics & Service Center -</Typography>
                <Typography variant="p" color="muted" className="ml-2 leading-[1.7]">
                  1,500 m² facility providing efficient distribution and support.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
