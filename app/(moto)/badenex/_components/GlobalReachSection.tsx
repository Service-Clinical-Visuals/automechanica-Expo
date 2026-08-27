"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function GlobalReachSection() {
    return (
        <section className="relative w-full py-20 xl:py-20 bg-white">
            <div className="custom-container flex flex-col gap-10">

                {/* Header & Button */}
                <div className="flex flex-col md:flex-row justify-between items-start w-full" data-aos="fade-up">
                    <div className="flex flex-col items-start max-w-6xl min-[2560px]:max-w-[80%] min-[3800px]:max-w-[90%] gap-2">
                        <h2 className="section-title title-bordered text-[#111111] oswald-font font-semibold">
                            Latest News & Updates
                        </h2>
                        <p className="text-[#4D5563] lato-font section-text">
                            Stay updated with Explorlube's latest innovations, product developments, and advancements in lubricant technology. Explore new solutions, company updates, and industry insights that highlight our commitment to delivering high-performance engine oils and advanced additives for modern vehicles.
                        </p>
                    </div>

                    <Button href="#" variant="primary" className="text-white flex items-center gap-2 flex-shrink-0">
                        View all updates <ArrowUpRight className="w-5 h-5" />
                    </Button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full" data-aos="fade-up" data-aos-delay="100">

                    {/* Card 1 */}
                    <div className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden group shadow-lg">
                        <img
                            src="/moto/badenex/new1.png"
                            alt="Passenger cars"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Gradient Overlay for bottom text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                        {/* Content at Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                            <h3 className="text-white oswald-font font-semibold card-title tracking-wide">Passenger cars</h3>
                            <Link href="#" className="bg-[#D71A21] hover:bg-[#B3151B] transition-colors text-white px-5 py-2 rounded flex items-center gap-2 font-semibold text-sm">
                                Read more <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden group shadow-lg">
                        <img
                            src="/moto/badenex/new2.png"
                            alt="Research & Development"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Gradient Overlay for bottom text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                        {/* Content at Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                            <h3 className="text-white oswald-font font-semibold card-title tracking-wide">Passenger cars</h3>
                            <Link href="#" className="bg-[#D71A21] hover:bg-[#B3151B] transition-colors text-white px-5 py-2 rounded flex items-center gap-2 font-semibold text-sm">
                                Read more <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
