import { Check, ArrowRight } from "lucide-react";
import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const highlights = [
  {
    title: "Superior Heat Resistance",
    description: "Engineered to withstand extreme braking temperatures, reducing the risk of warping and wear.",
  },
  {
    title: "Enhanced Safety Performance",
    description: "Delivers strong and stable braking power for improved vehicle control and driver safety.",
  },
  {
    title: "Durable & Long-Lasting",
    description: "Manufactured using premium-grade materials for extended service life and reduced maintenance.",
  },
];

const guarantees = [
  "Precision-engineered brake discs designed for stable, consistent braking performance across all driving conditions",
  "Strict multi-stage quality control process including dimensional inspection, surface checks, and performance validation",
  "Optimized thermal design ensures heat dissipation, maintain stable braking performance resistance to brake fade under heavy load and extreme driving conditions.",
  "Trusted global manufacturer recognized for precision engineering, consistent performance, and long-term reliability in advanced braking solutions.",
];

export default function Discover() {
  return (
    <section className="bg-[#f8f9fa] py-16">
      <Container>
        {/* Two-column content */}
        <div className="flex flex-col xl:flex-row gap-10 items-center mb-10">
          {/* Left: text */}
          <div className="w-full xl:w-[45%]" data-aos="fade-right">
            <h2 className="heading mb-4">Car Parts Specialist</h2>

            <p className="content mb-8">
              Intercar S.p.A. is not just a brake disc manufacturer — it is a story of transformation,
              precision, and relentless engineering evolution. Starting from a modest industrial setup in
              the late 1960s, the company has grown into a globally recognized name in braking technology,
              trusted across OEM and aftermarket sectors. Today, Intercar stands as a symbol of Italian
              engineering strength, delivering brake discs that combine safety, durability, and performance
              for modern vehicles worldwide.
            </p>

            <div className="space-y-5 mb-8">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-secondary flex items-center justify-center">
                    <Check size={13} strokeWidth={3} className="text-white" />
                  </span>
                  <div>
                    <p className="content font-bold text-[#1A1A1A]!">{item.title}</p>
                    <p className="content">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-secondary content-white text-[16px]! font-semibold rounded-md px-6 py-2.5 flex items-center gap-2 hover:bg-secondary-hover transition-colors">
              <span>View Products</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right: placeholder image */}
          <div className="w-full xl:w-[55%]" data-aos="fade-left" data-aos-delay="150">
            <div
              className="w-full aspect-[4/3] md:aspect-video rounded flex items-center justify-center overflow-hidden relative"
              style={{
                backgroundColor: "#ffffff",
                backgroundSize: "60px 60px",
              }}
            >
              <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <hr className="border-t border-[#00000040] mb-10" />

        {/* Guarantees card */}
        <div
          className="bg-white border shadow-lg border-gray-100 rounded-[50px] p-12 md:p-10"
          data-aos="fade-up"
        >
          <div className="grid xl:grid-cols-2 md:divide-x md:divide-[#00000040] gap-y-6">
            {[guarantees.slice(0, 2), guarantees.slice(2, 4)].map((col, colIdx) => (
              <div key={colIdx} className={`space-y-6 xl:px-10`}>
                {col.map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-[#00913F] flex items-center justify-center">
                      <Check size={13} strokeWidth={3} className="text-white" />
                    </span>
                    <p className="content">{text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
