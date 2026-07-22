"use client";

import React from "react";
import Link from "next/link";

export default function GlobalReachSection() {
    return (
        <section className="relative w-full py-20 lg:py-20 bg-[#fcfcfc] overflow-hidden flex items-center justify-center">
            {/* Background Map Image */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center" data-aos="zoom-in" data-aos-duration="1500">
                <img
                    src="/moto/alkim-petrokimya/centerbg.png"
                    alt="World map background"
                    className=" w-full h-auto object-contain"
                />
            </div>

            <div className="relative custom-container z-10 flex pt-5 pb-5 flex-col items-center text-center gap-4 px-4" data-aos="fade-up" data-aos-delay="200">

                {/* Title */}
                <h3 className="text-[#EA203B] orbitron font-semibold section-title uppercase tracking-wide">
                    We Are All Around The World
                </h3>

                {/* Paragraph */}
                <p className="text-[#212121] dmsans section-text max-w-5xl mx-auto leading-relaxed">
                    Serving industries worldwide with high-performance lubricants engineered to deliver exceptional reliability, efficiency, and long-lasting protection. Our solutions are designed to meet the demanding needs of diverse applications across global markets, helping businesses improve performance, reduce wear, and maintain consistent operational excellence.
                </p>

                {/* Button */}
                <div className="">
                    <Link
                        href="#"
                        className="inline-block bg-[#EA203B] mt-2 hover:bg-red-700 text-white px-4 py-2 orbitron font-semibold btn-text transition-colors"
                    >
                        Know our Global Expertise
                    </Link>
                </div>

            </div>
        </section>
    );
}
