import { Check, ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";

const features = [
  {
    title: "Advanced Manufacturing Technology",
    description: "Produced using modern machinery and high-precision engineering processes.",
  },
  {
    title: "High Performance & Safety",
    description: "Ensures stable braking, reduced vibration, and improved driving safety.",
  },
];

export default function Brake() {
  return (
    <section className="relative py-16 overflow-hidden bg-[#1E1E1E]">
      <Container>
        {/* Two-column content */}
        <div className="relative flex flex-col 2xl:flex-row gap-10 items-center mb-12">
          {/* Left: 360 video */}
          <div className="w-full 2xl:w-[70%] shrink-0" data-aos="fade-right">
            <div
              className="w-full aspect-[4/3] md:aspect-video rounded flex items-center justify-center overflow-hidden relative"
              style={{
                backgroundColor: "#ffffff",
                backgroundImage:
                  "linear-gradient(45deg, #e9e9e9 25%, tr ansparent 25%), linear-gradient(-45deg, #e9e9e9 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e9e9e9 75%), linear-gradient(-45deg, transparent 75%, #e9e9e9 75%)",
                backgroundSize: "60px 60px",
                backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
              }}
            >
              <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: text */}
          <div className="w-full 2xl:w-[30%] space-y-6" data-aos="fade-left" data-aos-delay="150">
            <h2 className="heading-white">Intercar S.P.A. – Brake Disc Excellence</h2>

            <p className="content-white">
              Intercar S.p.A. is a trusted name in the automotive braking industry, specializing in the
              design and manufacturing of high-performance brake discs. With decades of engineering
              expertise and continuous innovation, the company delivers reliable braking solutions that
              meet global quality standards for both OEM and aftermarket applications.
            </p>

            <div className="space-y-5">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 mt-2 rounded-full bg-[#00913F] flex items-center justify-center">
                    <Check size={13} strokeWidth={3} className="text-white" />
                  </span>
                  <div>
                    <p className="content-white font-bold">{feature.title}</p>
                    <p className="content-white">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button className="bg-primary navlink text-white! text-[16px]! font-medium rounded-md px-6 py-2.5 flex items-center gap-2 hover:bg-secondary-hover transition-colors">
                <span>View Products</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <hr className="border-t border-white/20 mb-8" />

        {/* Bottom strip */}
        <div className="relative flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
          <p className="content-white max-w-[920px]">
            Driven by a commitment to safety, durability, and performance, Intercar combines advanced
            production technology with strict quality control systems to ensure consistent product
            excellence.
          </p>
          <button className="bg-primary navlink text-white! text-[16px]! font-medium rounded-md px-6 py-2.5 flex items-center gap-2 hover:bg-secondary-hover transition-colors">
            <span>Learn More</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </Container>
    </section>
  );
}
