"use client";

import React from "react";
import { Wrench } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Journey = () => {
    return (
        <section
            className="relative w-full py-16 md:py-20 lg:py-24 bg-[#050515] overflow-hidden"
            data-aos="fade"
        >
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat mix-blend-screen"
                style={{ backgroundImage: "url('/moto/hannfilter/j-bg.png')" }}
            ></div>
            {/* Dark gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050515]/90 z-0"></div>

            <div className="custom-container relative z-10 flex flex-col gap-16 md:gap-20">

                {/* Top Grid: Left Content, Right Video */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left Column (Span 6) */}
                    <div className="lg:col-span-6 flex flex-col gap-5 w-full" data-aos="fade-right">
                        <h2 className="section-title font-primary font-medium text-white leading-tight">
                            Cleaner Air, Healthier Journeys
                        </h2>

                        <p className="section-text font-secondary font-normal text-white/80 leading-relaxed mb-2">
                            A High-Quality Cabin Air Filter Protects You And Your Passengers By Trapping Dust, Pollen, Smoke, And Harmful Airborne Particles Before They Enter The Vehicle's Interior. Designed For Superior Filtration And Optimal Airflow, It Ensures A Cleaner, Fresher, And More Comfortable Driving Experience While Supporting The Efficient Performance Of Your Vehicle's HVAC System.
                        </p>

                        {/* Bullet Points with Wrench Icon in Navy Circle */}
                        <div className="flex flex-col gap-5">
                            <div className="flex items-start gap-4">
                                <div className="w-9 h-9 rounded-full bg-[#0000AE] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                    <Wrench className="w-4 h-4 text-white" strokeWidth={2} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="section-text font-secondary text-white/90 leading-relaxed">
                                        <span className="font-bold text-white">Superior Filtration -</span> Effectively Traps Dust, Pollen, Soot, And Various Airborne Pollutants, Ensuring That You Breathe Cleaner Air Inside Your Vehicle.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-9 h-9 rounded-full bg-[#0000AE] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                    <Wrench className="w-4 h-4 text-white" strokeWidth={2} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="section-text font-secondary text-white/90 leading-relaxed">
                                        <span className="font-bold text-white">Healthier Comfort -</span> Significantly Minimizes Allergens, Unpleasant Smells, And Harmful Pollutants, Creating A More Refreshing And Enjoyable Driving Experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Video Clip 01 (Span 6) */}
                    <div className="lg:col-span-6 w-full flex justify-center" data-aos="fade-left" data-aos-delay="100">
                        <div className="w-full aspect-video max-h-[420px] md:max-h-[480px] lg:max-h-[520px] rounded-xl overflow-hidden bg-white/10 relative shadow-2xl border border-white/10 flex items-center justify-center">
                            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                    </div>

                </div>

                {/* Bottom Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full" data-aos="fade-up">

                    {/* Card 1 */}
                    <div className="bg-[#0000AE]/50 rounded-[20px] p-8 border border-white/10 flex flex-col items-center text-center gap-4 shadow-[0_8px_32px_rgba(0,0,200,0.2)] transition-transform hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                            <span className="font-primary text-[#0000AE] text-2xl font-bold">01</span>
                        </div>
                        <h3 className="card-title font-primary font-medium text-white leading-tight">
                            Enhanced Cabin Comfort
                        </h3>
                        <p className="card-text font-secondary text-white/70 leading-relaxed">
                            Optimizes HVAC Airflow For Faster Cooling And Heating While Reducing Unpleasant Odors, Creating A More Comfortable Driving Experience.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#0000AE]/50 rounded-[20px] p-8 border border-white/10 flex flex-col items-center text-center gap-4 shadow-[0_8px_32px_rgba(0,0,200,0.2)] transition-transform hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                            <span className="font-primary text-[#0000AE] text-2xl font-bold">02</span>
                        </div>
                        <h3 className="card-title font-primary font-medium text-white leading-tight">
                            OEM Quality & Durability
                        </h3>
                        <p className="card-text font-secondary text-white/70 leading-relaxed">
                            Manufactured With Premium Filtration Media And Built To OEM Standards, Ensuring A Precise Fit, Long-Lasting Performance, And Reliable Protection.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0000AE]/50 rounded-[20px] p-8 border border-white/10 flex flex-col items-center text-center gap-4 shadow-[0_8px_32px_rgba(0,0,200,0.2)] transition-transform hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                            <span className="font-primary text-[#0000AE] text-2xl font-bold">03</span>
                        </div>
                        <h3 className="card-title font-primary font-medium text-white leading-tight">
                            Long-Lasting Protection
                        </h3>
                        <p className="card-text font-secondary text-white/70 leading-relaxed">
                            Provides Reliable Filtration Performance And Durable Protection To Help Maintain Cleaner Cabin Air Throughout Every Journey.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Journey;
