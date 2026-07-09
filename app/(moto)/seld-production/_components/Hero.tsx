
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

      <section className="relative pb-10 pt-[112px] bg-white margin-top-hero">
        <div className="rounded-2xl relative mx-auto min-w-[95%] max-w-[95%] aspect-[4/3] md:aspect-[176/87] min-h-[calc(100vh-112px)] max-h-[calc(100vh-113px)] overflow-hidden bg-black shadow-[0_15px_50px_rgba(0,0,0,0.18)]">
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
          
          <div className="relative container-root z-10 flex h-full min-w-[95%] mx-auto items-end ">
            <div className="w-full px-6 sm:px-8 lg:px-14 pb-8 sm:pb-16 md:pb-20 lg:pb-24">
              <div className="max-w-[720px]">
                {/* HEADING */}
                <div data-aos="fade-up">
                  <h2 className="heading-white font-semibold! text-[39px]! leading-[150%]! tracking-[0px]! text-white mb-8">
                    Premium Engine Oils for Maximum <br/> Performance
                  </h2>
                  <button
                    type="button"
                    aria-label="Search"
                    className="flex heading-white font-medium! rounded-br-[24px] rounded-tl-[24px] text-[20px]! items-center bg-white text-primary! justify-center px-8 py-2 text-white hover:bg-primary hover:text-white! transition-colors"
                  >
                    Discover More
                    <ArrowRight size={24} className="ml-1" />
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
