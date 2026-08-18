import { Check, ArrowRight } from "lucide-react";
import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function VideoFeature() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-[#062AAA] bg-[url('/moto/ftaza/bg.png')] bg-cover bg-center">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left: Video Placeholder */}
          <div className="lg:col-span-9 h-full" data-aos="fade-right">
            <div className="w-full h-full aspect-video relative overflow-hidden flex items-center justify-center rounded-[24px]" style={{
              backgroundColor: "#f5f5f5",
              backgroundImage:
                "linear-gradient(45deg, #e0e0e0 25%, transparent 25%), linear-gradient(-45deg, #e0e0e0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e0e0e0 75%), linear-gradient(-45deg, transparent 75%, #e0e0e0 75%)",
              backgroundSize: "60px 60px",
              backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
            }}>
              <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />

            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col text-white lg:col-span-3" data-aos="fade-left">
            <h2 className="font-oswald text-[32px] sm:text-[38px] font-semibold mb-6 leading-[1.2]">
              Reliable Ignition<br />Performance With FTAZA
            </h2>

            <hr className="border-white/20 mb-4" />

            <p className="font-oswald text-[17px] font-regular text-white/90 mb-6 leading-[1.6]">
              FTAZA Industrial Co., Ltd. manufactures premium ignition coils that deliver reliable performance, consistent spark energy, and efficient combustion for modern passenger and commercial vehicles.
            </p>

            <ul className="space-y-5 mb-6">
              <li className="flex gap-4">
                <div className="bg-white text-[#062AAA] rounded-full p-1 h-fit shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={4} />
                </div>
                <p className="font-oswald font-regular text-[17px] leading-[1.5] text-white">
                  High-Efficiency Spark Output – Delivers consistent ignition performance for smoother engine operation under all driving conditions.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="bg-white text-[#062AAA] rounded-full p-1 h-fit shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={4} />
                </div>
                <p className="font-oswald font-regular text-[17px] leading-[1.5] text-white/90">
                  Precision-Engineered Construction – Manufactured with advanced technology for superior durability, reliability, and long-lasting performance.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="bg-white text-[#062AAA] rounded-full p-1 h-fit shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={4} />
                </div>
                <p className="font-oswald font-regular text-[17px] leading-[1.5] text-white/90">
                  OEM Quality Standards – Designed to meet international automotive specifications for reliable compatibility.
                </p>
              </li>
            </ul>

            <hr className="border-white/20 mb-4" />

            <p className="font-oswald font-regular text-[17px] text-white mb-8 leading-[1.6] max-w-[500px]">
              High-performance ignition coils designed for superior reliability, fuel efficiency, and modern engine protection.
            </p>

            <button className="bg-white text-[#062AAA] hover:bg-gray-100 transition-colors px-6 py-2.5 rounded-sm font-oswald font-medium flex items-center gap-2 w-fit text-[16px]">
              View Specification
              <ArrowRight size={18} />
            </button>

          </div>
        </div>
      </Container>
    </section>
  );
}
