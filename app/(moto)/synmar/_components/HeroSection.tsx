
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

      <section className="relative pb-10 pt-[96px] bg-white twok">
        <div className="relative mx-auto max-w-[90%] aspect-[4/3] md:aspect-[176/87] max-h-[calc(100vh-136px)] overflow-hidden rounded-b-[50px]! bg-black shadow-[0_15px_50px_rgba(0,0,0,0.18)]">
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

          <div className="relative z-10 flex h-full max-w-[1600px] mx-auto items-end cathegenix-root">
            <div className="w-full px-6 sm:px-8 lg:px-14 pb-8 sm:pb-16 md:pb-20 lg:pb-24">
              <div className="max-w-[620px]">
                {/* HEADING */}
                <div data-aos="fade-up">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-[-1.5px] sm:tracking-[-2px] md:tracking-[-3px] text-white">
                    KEEPS YOU MOVING
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
