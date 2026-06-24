
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
    <div>
              {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative pb-10 pt-[70px] bg-white twok">
        <div className="relative mx-auto max-w-[90%] aspect-[4/3] md:aspect-[176/87] min-h-[calc(100vh-70px)] max-h-[calc(100vh-71px)] overflow-hidden bg-black shadow-[0_15px_50px_rgba(0,0,0,0.18)]">
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
                  <h2 className="heading-white text-[42px]! text-white mb-4">
                    Excellence in Lubrication Technology
                  </h2>
                  <p className="content-white text-[20px]!">
                    Engineered for performance, protection, and reliability. Chemnaft delivers high-quality lubrication solutions trusted across automotive, agricultural, and industrial applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
