"use client";
import React from "react";

export default function AboutUs() {
  return (
    <section className="py-20 md:py-28 bg-white" id="about">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column */}
          <div className="xl:col-span-4 flex flex-col justify-center text-left" data-aos="fade-right">
            <div className="w-[50%] h-[2px] bg-[var(--primary-color)] mx-auto mb-10"></div>
            <h2 className="adlam-font section-title text-black mb-10">About Us</h2>
            <div className="flex flex-col gap-6 inter-font section-text text-[#1e1e1e] leading-relaxed text-left">
              <p>
                Repairify UK is a leading provider of automotive diagnostics, ADAS calibration, and intelligent repair solutions, helping workshops keep pace with the rapidly evolving automotive industry. By combining advanced digital technology, OEM-compatible equipment, and real-time vehicle data, we enable technicians to diagnose, calibrate, and repair vehicles with exceptional accuracy, efficiency, and confidence.
              </p>
              <p>
                Committed to innovation and reliability, we support independent garages, collision repair centres, dealerships, insurers, and workshop networks with solutions that simplify complex repairs and improve vehicle safety. Our expert remote support, continuously updated software, and industry-leading technology ensure every repair meets the highest standards of quality and performance.
              </p>
            </div>
            <div className="w-[50%] h-[2px] bg-[var(--primary-color)] mx-auto mt-10"></div>
          </div>

          {/* Middle Column - Image */}
          <div className="xl:col-span-4" data-aos="fade-up">
            <div className="w-full h-full relative min-h-[400px]">
              <img 
                src="/moto/repairify/abt.png" 
                alt="Repairify Team" 
                className="w-full h-full object-cover shadow-sm"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="xl:col-span-4 flex flex-col justify-center text-left" data-aos="fade-left">
            <div className="w-[50%] h-[2px] bg-[var(--primary-color)] mx-auto mb-10"></div>
            <h2 className="adlam-font section-title text-black mb-6">Built on Innovation & Trust</h2>
            <div className="flex flex-col gap-6 inter-font section-text text-[#1e1e1e] leading-relaxed text-left">
              <p>
                From independent garages to large workshop groups and insurers, Repairify UK provides reliable solutions that streamline workflows, reduce downtime, and enhance workshop efficiency. Backed by remote expert support, continuously updated software, and industry-leading technology, Repairify has earned the trust of automotive professionals worldwide by delivering safe, accurate, and future-ready repair solutions.
              </p>
              <p>
                Repairify UK empowers automotive professionals with innovative diagnostic technologies, digital ADAS calibration systems, and connected repair solutions designed for today's complex vehicles. Focused on precision, efficiency, and reliability, we help workshops deliver faster, safer, and OEM-compliant repairs through intelligent software, advanced equipment, and expert technical support.
              </p>
            </div>
            <div className="w-[50%] h-[2px] bg-[var(--primary-color)] mx-auto mt-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
