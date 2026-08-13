import { Check, ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";

const features = [
  {
    title: "Advanced Manufacturing Technology",
    description: "Manufactured under an ISO 9001 certified quality management system",
  },
  {
    title: "High Performance & Safety",
    description: "Maintains excellent viscosity at high and low temperatures",
  },
];

export default function Brake() {
  return (
    <section className="relative py-16 overflow-hidden bg-primary">
      <Container>
        {/* Two-column content */}
        <div className="relative flex flex-col 2xl:flex-row gap-10 items-center mb-12">
          {/* Left: 360 video */}


          {/* Right: text */}
          <div className="w-full 2xl:w-[35%] space-y-6" data-aos="fade-left" data-aos-delay="150">
            <h2 className="heading-white">Keep Your Engine Running at Its Best</h2>

            <p className="content-white">
              Our premium Engine Oils are specially formulated to deliver exceptional lubrication, superior wear protection, and reliable performance for modern gasoline and diesel engines. Engineered with advanced additive technology and high-quality base oils, they help reduce friction, improve fuel efficiency, and extend engine life under all driving conditions.
            </p>
            <p className="content-white">
              Whether for passenger cars, commercial vehicles, heavy-duty equipment, or industrial applications, our Engine Oils provide consistent protection and optimum performance from cold starts to high-temperature operation.
            </p>

            <div className="space-y-5">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 mt-2 rounded-full bg-[#00913F] flex items-center justify-center">
                    <img src="/moto/seld-production/check.png" alt="Check" className="w-5 h-5 lg:w-7 lg:h-7 object-contain" />
                    
                  </span>
                  <div>
                    <p className="content-white">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full 2xl:w-[65%] shrink-0" data-aos="fade-right">
            <div
              className="w-full aspect-[4/3] md:aspect-video rounded-[20px] flex items-center justify-center overflow-hidden relative"
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
        </div>

        <hr className="border-t border-[#FFFFFF52] mb-8" />

        {/* Bottom strip */}
        <div className="px-6 mb-5 flex flex-col lg:flex-row items-center justify-between" data-aos="fade-up">
          <h2 className="heading-white text-center lg:text-left mb-4 text-[30px]! leading-[150%]! max-w-[900px]">Engineered to deliver peak performance, superior protection, and lasting engine efficiency.</h2>
          <div className="flex flex-col items-end gap-4">
            <button
              type="button"
              aria-label="Search"
              className="flex heading max-w-[250px] font-medium! rounded-br-[24px] rounded-tl-[24px] text-[20px]! items-center bg-white justify-center px-8 py-2 text-white hover:bg-white/80 transition-colors"
            >
              Explore Products
              <ArrowRight size={24} className="ml-1" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
