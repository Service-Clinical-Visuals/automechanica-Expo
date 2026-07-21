import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowUpRight, Check } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

const FEATURES = [
  {
    title: "Advanced Wear Protection",
    description: "Minimizes friction and engine wear.",
  },
  {
    title: "Outstanding Engine Cleanliness",
    description: "Prevents sludge and deposits.",
  },
  {
    title: "OEM-Compliant Formulations",
    description: "Meets leading manufacturer specifications.",
  },
  {
    title: "Long-Lasting Engine Protection",
    description: "Supports extended service life.",
  },
];

export default function Premium() {
  return (
    <section className="relative py-16 overflow-hidden bg-white">
      <Container>
        <div className="relative bg-primary rounded-3xl px-6 md:px-10 py-10 md:py-12">
          {/* Top row: heading + CTA */}
          <div className="relative flex flex-col xl:flex-row xl:items-start justify-between gap-6 mb-8" data-aos="fade-up">
            <div className="max-w-full xl:max-w-[60%]">
              <h2 className="section-title text-[#ffffff] font-bold  mb-3">Premium Engine Oil Solutions</h2>
              <p className="section-text font-normal text-[#ffffff] leading-relaxed">
                North Sea Lubricants develops premium engine oils that deliver outstanding protection,
                enhanced performance, and long-lasting reliability for modern gasoline and diesel engines.
                Manufactured in the Netherlands using advanced lubricant technology, our products help
                maximize engine life while meeting the latest OEM and international standards.
              </p>
            </div>
           
              <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
                <Button text="Explore Products" showIcon className="rounded-full bg-white text-primary!" />
            </div>
          </div>

          <hr className="border-t border-white/20 mb-10" />

          {/* Two-column content */}
          <div className="relative flex flex-col xl:flex-row gap-10 items-center">
            {/* Left: image */}
            <div className="w-full xl:w-[72%] shrink-0" data-aos="fade-right">
              <div className="w-full  aspect-[4/3] md:aspect-video  flex items-center justify-center border border-gray-100 overflow-hidden relative">
                <DynamicVideoPlayer type="360" />
              </div>
            </div>

            {/* Right: key features */}
            <div className="w-full xl:w-[28%] space-y-4" data-aos="fade-left" data-aos-delay="150">
              <h3 className="section-title text-[#ffffff] font-bold mb-6">Key Features</h3>

              <div className="space-y-6 mt-10">
                {FEATURES.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-5 border border-white/70 rounded-xl px-4 py-5"
                  >
                    <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-yellow-400 mt-0.5">
                      <Check size={13} strokeWidth={3} className="text-white" />
                    </span>
                    <p className="section-text font-normal text-[#ffffff] leading-[150%]!">
                      <span>{feature.title}</span> – {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
