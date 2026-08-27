"use client";
import React from "react";
import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="w-full relative flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
    
        <img src="/moto/denckermann/staybg.png" alt="Newsletter Background" className="object-cover w-full h-full " />
     
      </div>

      <div className="custom-container relative z-10 flex flex-col items-center text-center px-4 py-16">
        <h2 
          className="stayup-title text-white font-medium oswald mb-8  leading-tight"
          data-aos="fade-up"
        >
          Stay Up To Date With News And Tips – Sign Up For The Newsletter!
        </h2>
        
        <form 
          className="w-full max-w-xl lg:max-w-2xl flex flex-col sm:flex-row justify-center items-stretch overflow-hidden gap-4 sm:gap-2"
          data-aos="fade-up"
          data-aos-delay="100"
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="email" 
            placeholder="Enter Your Email"
            required
            className="flex-grow bg-white/45 text-white placeholder:text-white/80 px-6 py-4 sm:py-5  transition-colors sora section-text"
          />
          <button 
            type="submit"
            className="bg-[var(--color-secondary)] hover:bg-[#e59e15] text-white font-semibold px-8 py-4 sm:py-0 transition-colors whitespace-nowrap header-link"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
