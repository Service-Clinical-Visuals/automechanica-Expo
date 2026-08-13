
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from '@/app/_components/DynamicVideoPlayer';
import Image from "next/image";

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
    <div>
              {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative pt-[116px] bg-white twok">
        <div className="relative w-full aspect-[4/3] md:aspect-[1920/1000] min-h-[calc(100vh-116px)] max-h-[calc(100vh-116px)] overflow-hidden bg-black shadow-[0_15px_50px_rgba(0,0,0,0.18)]">
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
            <div className="w-full px-6 sm:px-8 lg:px-14 pb-8 sm:pb-16 md:pb-20 lg:pb-24">
              <div className="max-w-[720px]">
                {/* HEADING */}
                <div data-aos="fade-up">
                  <h2 className="heading mb-6">
                    Certified Quality. Maximum Protection.
                  </h2>
                  <p className="content mb-8">
                    Premium lubricants engineered for superior engine protection, reliable performance, and long-lasting efficiency across every journey and application.                  
                  </p>
                  <div className="flex items-center gap-0 flex-shrink-0">
                    <div className="flex items-center">
                      <button className="bg-[#535c5c] content font-semibold px-6 py-3 rounded-full hover:bg-[#222] transition-colors whitespace-nowrap">
                        Browse All Products
                      </button>
                      <Image src="/moto/gand-oil/arrow_green.png" alt="Explore" width={32} height={32} className="w-11 h-11 object-contain flex-shrink-0" />
                      
                    </div>
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
