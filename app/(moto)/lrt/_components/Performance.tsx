import { ArrowUpRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";

export default function Performance() {
  return (
    <section className="bg-[#121212] py-10">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[60px] flex flex-col items-center">

          {/* Heading */}
          <div className="text-center max-w-[1180px] mx-auto mb-8" data-aos="fade-up">
            <h2 className="heading mb-8">Advanced Catalytic Converter Solutions</h2>
            <p className="content mb-2">
              LRT Automotive develops high-performance catalytic converters designed to restore exhaust system efficiency, reduce emissions, and deliver dependable performance. Manufactured with precision and premium materials, our solutions offer reliable quality for passenger and commercial vehicles across a wide range of applications.
            </p>
          </div>

          {/* Video clip */}
          <div
            className="relative w-full max-w-[1300px] rounded-2xl aspect-video flex items-center justify-center overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
            <span className="relative content text-[#1E1E1E]! text-lg">Video Clip 01</span>

            <button className="absolute bottom-4 right-4 flex items-center justify-center rounded-full bg-[#00437A] text-white hover:opacity-90 transition-opacity" style={{ width: 44, height: 44 }}>
              <ArrowUpRight size={20} strokeWidth={2} />
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
}
