"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Settings, Cog } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineeredSection() {
  return (
    <section className="py-16 xl:py-20 relative bg-[#111827] text-white">
      <div className="custom-container relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <h2 className="section-title oswald-font font-semibold text-white mb-4">
            Innovation Through Advanced Engineering
          </h2>
          <p className="section-text rubik-font text-white font-regular max-w-5xl mx-auto leading-relaxed">
            Orjin Automotive strengthens its position in the automotive industry through advanced technology, continuous development, and customer-focused solutions. The company manufactures high-quality steering and suspension components while adapting to global automotive trends and industry needs.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white mb-12"></div>

        {/* Content & Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left: Content */}
          <div className="flex flex-col gap-10 lg:col-span-5" data-aos="fade-right">
            <p className="section-text rubik-font text-white font-regular leading-relaxed">
              With a strong focus on research and development, Orjin invests in innovative technologies, Industry 4.0 solutions, and advanced engineering processes. Through its dedicated R&D activities, skilled engineering team, and modern testing capabilities, the company develops reliable, high-performance products that contribute to the future of automotive mobility.
            </p>

            <div className="flex flex-col gap-4">
              {/* Card 1 */}
              <div className="bg-white rounded-[5px] p-5 flex items-center gap-4 shadow-sm">
                <div className="w-15 h-15 bg-[#F39200] rounded-full flex items-center justify-center flex-shrink-0 text-white">
                  <img src="/moto/orijin/e1.png" alt="Engineering" className="w-auto h-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>' }} />
                </div>
                <p className="card-text rubik-font text-[#4B5563] font-regular leading-snug">
                  Restored to original specifications for reliable performance, precise fit, and long-lasting durability.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-[5px] p-5 flex items-center gap-4 shadow-sm">
                <div className="w-15 h-15 bg-[#F39200] rounded-full flex items-center justify-center flex-shrink-0 text-white">
                  <img src="/moto/orijin/e2.png" alt="Smart Manufacturing" className="w-auto h-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>' }} />
                </div>
                <p className="card-text rubik-font text-[#4B5563] font-regular leading-snug">
                  Building the future with smart manufacturing and Industry 4.0 technologies for high-quality, precision-engineered components.
                </p>
              </div>
            </div>

            <div className="mt-2">
              <Link href="#" className="inline-flex oswald-font font-medium items-center gap-2 px-6 py-3 border-[2px] border-[#F39200] text-black font-semibold btn-text rounded-[5px] hover:bg-[#F39200] transition-colors bg-white hover:text-white">
                Explore
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right: Video Container */}
          <div className="w-full aspect-video relative bg-[#F5F5F5] rounded-xl overflow-hidden flex items-center justify-center lg:col-span-7" data-aos="fade-left">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

