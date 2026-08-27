import { ArrowUpRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";

const checklist = [
  {
    title: "Efficient Emission Reduction",
    text: "Significantly reduces harmful exhaust emissions while supporting environmental regulations and cleaner vehicle operation.",
  },
  {
    title: "OEM-Quality Fit",
    text: "Precision-engineered for seamless compatibility, accurate fitment, and quick, hassle-free installation.",
  },
  {
    title: "High-Performance Substrates",
    text: "Optimized catalyst technology ensures superior exhaust flow, efficient conversion, and reliable performance.",
  },
];

export default function Premium() {
  return (
    <section className="bg-[#121212] py-10">
      <Container>
        <div className="bg-[#323232] rounded-[24px] py-6 sm:py-16 px-4 sm:px-8 md:px-14 lg:px-[60px]">

          {/* Top row: heading + circular arrow button */}
          <div className="flex items-start justify-between gap-6 mb-5" data-aos="fade-up">
            <div>
              <h2 className="heading mb-8">360° Catalytic Converter View</h2>
              <p className="content max-w-[1000px]">
                LRT Automotive&apos;s catalytic converters are engineered to deliver reliable emission control, long-lasting durability, and optimal exhaust system performance. Manufactured to meet strict quality standards, they provide an ideal replacement solution for passenger and commercial vehicles.
              </p>
            </div>

            <button className="flex items-center justify-center shrink-0 rounded-full bg-white text-[#00337F] hover:opacity-90 transition-opacity" style={{ width: 56, height: 56 }}>
              <ArrowUpRight size={30} strokeWidth={2} />
            </button>
          </div>

          <hr className="border-t border-white/10 mb-8" />

          {/* Two-column layout */}
          <div className="flex flex-col xl:flex-row gap-10 items-center">

            {/* Left: 360 video */}
            <div className="w-full xl:w-[65%] shrink-0" data-aos="fade-right">
              <div
                className="relative w-full rounded-2xl aspect-video flex items-center justify-center overflow-hidden"
                style={{
                  backgroundImage:
                    "repeating-conic-gradient(#e9e9e9 0% 25%, #f6f6f6 0% 50%)",
                  backgroundSize: "40px 40px",
                }}
              >
                <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
                <span className="relative content text-[#1E1E1E]! text-lg">360 deg Video</span>
              </div>
            </div>

            {/* Right: text + checklist */}
            <div className="w-full xl:w-[35%] space-y-5" data-aos="fade-left" data-aos-delay="150">
              <h3 className="heading2 mb-8 ">Catalytic Converters</h3>

              <p className="content">
                LRT Automotive manufactures high-quality catalytic converters that deliver efficient emission control, reliable performance, and durability. Designed for a precise fit, they provide dependable replacement solutions for passenger and commercial vehicles.
              </p>

              <div className="space-y-4 pt-1 mb-10">
                {checklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <img src="/moto/lrt/checkwhite.png" alt="" className="shrink-0 mt-0.5" style={{ width: 22, height: 22 }} />
                    <p className="content">
                      <span className="text-white font-medium">{item.title}</span> – {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <button className="flex navlink text-[18px]! font-bold! text-black! items-center gap-2 bg-white rounded-full pl-5 pr-1.5 py-1.5 hover:opacity-90 transition-opacity">
                <span>Explore Products</span>
                <img src="/moto/lrt/arrowup.png" alt="" className="h-6.5 w-6.5" />
              </button>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
