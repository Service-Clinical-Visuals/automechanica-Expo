"use client";

import React from "react";

export default function GlobalReachSection() {
    return (
        <section className="relative w-full py-16 bg-white flex flex-col items-center justify-center">
            <div className="custom-container flex flex-col items-center gap-4">
                {/* Header */}
                <div className="flex justify-center w-full" data-aos="fade-up">
                    <div className="flex flex-col items-start w-auto">
                        <div className="flex items-center gap-4 w-full">
                            <h2 className="text-[#FEC52E] font-medium text-lg rubik-font whitespace-nowrap">Certified By</h2>
                            <div className="w-[100px] md:w-[250px] h-[1px] bg-[#FEC52E]"></div>
                        </div>
                        <h3 className="section-title text-[#202020] nunito-font font-semibold mt-2 text-left">
                            Our Certifications
                        </h3>
                    </div>
                </div>

                {/* Logos */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 w-full" data-aos="fade-up" data-aos-delay="100">
                    <img src="/moto/gema-oils/ct1.png" alt="API" className="h-auto md:h-auto object-contain" />
                    <img src="/moto/gema-oils/ct2.png" alt="ISO" className="h-auto md:h-auto object-contain" />
                    <img src="/moto/gema-oils/ct3.png" alt="TUV CERT" className="h-auto md:h-auto object-contain" />
                    <img src="/moto/gema-oils/ct4.png" alt="ACEA" className="h-auto md:h-auto object-contain" />
                    <img src="/moto/gema-oils/ct5.png" alt="NSF" className="h-auto md:h-auto object-contain" />
                    <img src="/moto/gema-oils/ct6.png" alt="SAE" className="h-auto md:h-auto object-contain" />
                </div>
            </div>
        </section>
    );
}
