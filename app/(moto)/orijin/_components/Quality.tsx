"use client";

import React from "react";
import Link from "next/link";
import { Eye, Target } from "lucide-react";

export default function Quality() {
  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <h2 className="section-title oswald-font font-semibold text-[#272727] mb-4">
            Vision & Mission
          </h2>
          <p className="text-[#4B5563] rubik-font section-text max-w-3xl mx-auto leading-relaxed">
            Built on strong values and innovation, Orjin Automotive delivers reliable automotive solutions through quality, continuous improvement, and sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-10 items-center">

          {/* Left: Image */}
          <div className="w-full h-full" data-aos="fade-right">
            <img
              src="/moto/orijin/q1.png"
              alt="Orjin Automotive Team"
              className="w-full h-full object-cover rounded-xl shadow-sm"
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 rounded-xl">Team Image</div>' }}
            />
          </div>

          {/* Right: Cards */}
          <div className="flex flex-col gap-10" data-aos="fade-left">

            {/* Vision Card */}
            <div className="flex border border-[#E4E4E4] rounded-[6px] overflow-hidden shadow-sm h-auto">
              <div className="bg-[#F39200] w-24 md:w-32 flex items-center justify-center flex-shrink-0">
                <img src="/moto/orijin/q2.png" alt="Vision" className="w-auto h-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>' }} />
              </div>
              <div className="p-6 md:p-8 bg-white flex flex-col justify-center flex-grow">
                <h3 className="font-semibold text-[#272727] card-title oswald-font mb-2">Our Vision</h3>
                <p className="text-[#4B5563] font-regular card-text rubik-font leading-relaxed">
                  To become a global reference brand in aftermarket automotive parts through engineering reliability and operational excellence.
                </p>
                <div className="mt-auto flex justify-end">
                  <Link href="#" className="text-[#F39200] section-text underline rubik-font font-medium hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="flex border border-[#E4E4E4] rounded-[6px] overflow-hidden shadow-sm h-auto ">
              <div className="bg-[#F39200] w-24 md:w-32 flex items-center justify-center flex-shrink-0">
                <img src="/moto/orijin/q3.png" alt="Mission" className="w-auto h-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-white"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>' }} />
              </div>
              <div className="p-6 md:p-8 bg-white flex flex-col justify-center flex-grow">
                <h3 className="font-semibold text-[#272727] card-title oswald-font mb-2">Our Mission</h3>
                <p className="ext-[#4B5563] font-regular card-text rubik-font leading-relaxed">
                  To provide our customers with reliable, accessible, and sustainable solutions by leveraging our wide product range, accurate data, strong supply chain, and continuous quality control.
                </p>
                <div className="mt-auto flex justify-end">
                  <Link href="#" className="text-[#F39200] section-text rubik-font underline font-medium hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
