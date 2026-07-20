"use client";

import Link from "next/link";

export default function GlobalReachSection() {
    return (
        <section className="relative w-full py-16 lg:py-20 h-[75vh] bg-[#ECEEED] overflow-hidden">
            <div className="absolute inset-0  opacity-90">
                <div className="absolute inset-0 bg-[#ECEEED]" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none" data-aos="zoom-in" data-aos-duration="1500">
                    <img
                        src="/moto/soylu/world.png"
                        alt="World map background"
                        className="max-w-[1400px] w-full h-auto object-contain"
                    />
                </div>
            </div>

            <div className="relative custom-container mt-[5%] z-10 flex flex-col items-center text-center gap-6 px-4" data-aos="fade-up" data-aos-delay="200">
                <Typography variant="h5" color="primary" className="leading-tight font-bold tracking-[0.06em] max-w-[80%]">
                    WE ARE ALL AROUND THE
                    <span className="block">WORLD!</span>
                </h2>
                <p className="max-w-3xl text-xs sm:text-sm text-[#4C5D4F] leading-7 tracking-[0.01em]">
                    Our products maintain their innovation in the toughest conditions around the world with expert engineering, unique craftsmanship quality, and the best selected material durability.
                </p>
                <Link
                    href="#"
                    className="inline-flex items-center rounded-none rounded-tr-[20px] bg-[#0F3D26] px-4 py-2 text-sm font-Oswald text-xs text-white shadow-lg transition hover:bg-[#092116]"
                >
                    Overview of Soylu
                    <span className="ml-2 inline-flex h-2 w-2 items-center justify-center ">
                        <img
                            src="/moto/soylu/Arrow 4.png"
                            alt="Arrow"
                            className="h-3 w-3 object-contain"
                        />
                    </span>
                </Link>
            </div>
        </section>
    );
}
