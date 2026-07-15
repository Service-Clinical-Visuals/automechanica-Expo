
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from '@/app/_components/DynamicVideoPlayer';

const navLinks = [
  "Home",
  "About",
  "Sleep",
  "Oxygen",
  "Ventilation",
  "Resources",
];

export default function Herobanner() {
  return (
    <div className="bg-[#121212]">
              {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative pb-10 ptclass">
        <div className="relative rounded-[16px] mx-auto custom-container aspect-[4/3] md:aspect-[176/87] min-h-[calc(100vh-115px)] max-h-[calc(100vh-116px)] overflow-hidden bg-black shadow-[0_15px_50px_rgba(0,0,0,0.18)]">
          {/* ================================================= */}
          {/* VIDEO / IMAGE BACKGROUND */}
          {/* ================================================= */}

          <div className="absolute inset-0">
            {/* FUTURE VIDEO */}

            <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />

          </div>

          {/* ================================================= */ }
          {/* HERO CONTENT */}
          {/* ================================================= */}
          
          <div className="relative eurol-root z-10 flex h-full max-w-[90%] mx-auto items-end cathegenix-root">
            <div className="w-full pb-8 sm:pb-16 md:pb-20 lg:pb-24">
              <div className="max-w-[720px]">
                {/* HEADING */}
                <div data-aos="fade-up" className="flex flex-col gap-3 items-start">
                  <h2 className="heading-white text-[38px]! text-white mb-4">
                    Driving a Greener Future
                  </h2>
                  <p className="content max-w-[660px]">
                    LRT Automotive is dedicated to reducing emissions and improving air quality with our advanced purification technology, paving the way for a cleaner, healthier planet.
                  </p>
                  <div className="flex w-fit mt-4">
                    <button className="flex navlink text-[18px]! font-bold! text-black! items-center gap-2 bg-white rounded-full pl-5 pr-1.5 py-1.5 hover:opacity-90 transition-opacity">
                      <span>Explore Products</span>
                      <img src="/moto/lrt/arrowup.png" alt="" className="h-6.5 w-6.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
