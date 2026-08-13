
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from '@/app/_components/DynamicVideoPlayer';
import ParallelogramButton from "./ParallelogramButton";

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

      <section className="relative pb-10 ptclass bg-white">
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
                <div data-aos="fade-up">
                  <h2 className="heading-white text-[42px]! max-w-[400px] text-white mb-4">
                    A market leader in secondary refining for 60 years.
                  </h2>
                  <ParallelogramButton fill="white" textClassName="heading text-[#00437A]! text-[22px]!">
                    Explore Our Product
                  </ParallelogramButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
