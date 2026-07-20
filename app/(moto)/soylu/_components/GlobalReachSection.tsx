"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function GlobalReachSection() {
    return (
        <section className="relative w-full py-16 lg:py-20 bg-[#ECEEED] overflow-hidden">
            <div className="absolute inset-0  opacity-30">
                <div className="absolute inset-0 bg-[#ECEEED]" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img
                        src="/moto/soylu/centerbg.png"
                        alt="World map background"
                        className="max-w-[1362px] w-full h-auto object-contain"
                    />
                </div>
            </div>

            <div className="relative custom-container z-10 flex flex-col items-center text-center gap-6 px-4">
                <Typography variant="h1" color="primary" className="leading-tight tracking-[0.06em] max-w-4xl">
                    WE ARE ALL AROUND THE
                    <span className="block">WORLD!</span>
                </Typography>
                <Typography variant="p" color="muted" className="max-w-3xl">
                    Our products maintain their innovation in the toughest conditions around the world with expert engineering, unique craftsmanship quality, and the best selected material durability.
                </Typography>
                <Button text="Overview of Soylu" variant="primary" />
            </div>
        </section>
    );
}
