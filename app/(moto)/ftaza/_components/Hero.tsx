import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from '@/app/_components/DynamicVideoPlayer';

export default function Herobanner() {
  return (
    <div>
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative pt-[112px] bg-white margin-top-hero">
        <div className="rounded-none rounded-tl-[64px] rounded-br-[64px] relative mx-auto min-w-[95%] max-w-[95%] aspect-video md:aspect-video min-h-[calc(100vh-112px)] max-h-[calc(100vh-113px)] overflow-hidden">
          {/* ================================================= */}
          {/* VIDEO / IMAGE BACKGROUND */}
          {/* ================================================= */}

          <div className="absolute inset-0 bg-gradient-to-br from-[#4a4a4a] to-[#1a1a1a]">
            {/* FUTURE VIDEO */}
            <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* ================================================= */}
          {/* HERO CONTENT */}
          {/* ================================================= */}

          <div className="relative container-root z-10 flex h-full min-w-[95%] mx-auto items-end ">
            <div className="w-full px-6 sm:px-8 lg:px-14 pb-8 sm:pb-16 md:pb-20 lg:pb-26">
              <div className="max-w-[720px]">
                {/* HEADING */}
                <div data-aos="fade-up">
                  <h2 className="heading-white font-oswald font-semibold! text-[40px]! leading-[120%]! tracking-[0px]! text-white mb-4">
                    Driving Automotive Innovation
                  </h2>
                  <p className="text-white/90 font-oswald text-[17px] mb-8 font-regular">
                    High-quality automotive components engineered for performance, durability, and reliability.
                  </p>
                  <button
                    type="button"
                    aria-label="Explore Products"
                    className="flex font-oswald font-medium text-[17px] items-center bg-[#062AAA] text-white justify-center px-6 py-2.5 hover:bg-blue-800 transition-colors"
                  >
                    Explore Products
                    <ArrowRight size={20} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
