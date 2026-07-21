import { Check } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";

const FEATURES = [
  {
    title: "Reliable Cold Start Protection",
    description:
      "Ensures rapid oil circulation during startup, reducing engine wear in low-temperature conditions.",
  },
  {
    title: "Superior Oxidation Resistance",
    description:
      "Maintains oil stability under high temperatures, helping extend oil life and engine performance.",
  },
  {
    title: "Consistent Viscosity Stability",
    description:
      "Maintains optimal oil thickness under varying temperatures and operating conditions for dependable lubrication.",
  },
];

export default function About() {
  return (
    <section className="bg-[#f5f5f5] py-16">
      <Container>
        {/* Top heading */}
        <div className="text-center max-w-3xl lg:max-w-[80%] mx-auto mb-10" data-aos="fade-up">
          <h2 className="section-title text-[#333333] font-bold mb-4">
            Engineered For Maximum Performance
          </h2>
          <p className="section-text font-normal text-[#585858]">
            Built on innovation and decades of expertise, North Sea Lubricants engine oils
            provide dependable lubrication for every driving condition. Designed to reduce
            wear, improve efficiency, and protect critical engine components, our formulations
            ensure consistent performance for passenger cars, commercial vehicles, and
            industrial applications.
          </p>
        </div>

        <hr className="border-t border-gray-200 mb-12" />

        {/* Two-column content */}
        <div className="flex flex-col xl:flex-row gap-10 items-center">
          {/* Left: video */}
          <div className="w-full xl:w-[55%] shrink-0" data-aos="fade-right">
            <div className="w-full bg-[#f0f0f0] aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden relative border border-gray-100">
              <DynamicVideoPlayer type="short-1" />
            </div>
          </div>

          {/* Right: key features */}
          <div className="w-full xl:w-[45%] space-y-5" data-aos="fade-left" data-aos-delay="150">
            <h3 className="section-title text-[#333333] font-bold leading-tight">Key Features</h3>

          <p className="section-text font-normal text-[#585858]">
              Engineered with advanced technology, North Sea Lubricants engine oils provide
              reliable protection, consistent performance, and long-lasting durability.
              Designed to perform in every driving condition, they help maximize engine
              efficiency while meeting the highest quality standards.
            </p>

            <div className="space-y-4">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-yellow-400 mt-1">
                    <Check size={12} strokeWidth={3} className="text-white" />
                  </span>
                   <p className="section-text font-normal text-[#585858]">

                    <span className="text-primary! font-semibold">{feature.title}</span> –{" "}
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Button text="Product Details" variant="secondary" showIcon className="rounded-full" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
