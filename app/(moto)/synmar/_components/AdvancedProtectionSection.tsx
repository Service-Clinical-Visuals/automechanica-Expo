import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const features = [
  "Reduces engine wear and corrosion for longer engine life",
  "Keeps engines clean by preventing sludge and deposits.",
  "Improves fuel efficiency through reduced friction.",
  "Resists oxidation and thermal breakdown under heavy loads.",
];

export default function AdvancedProtectionSection() {
  return (
    <section className="bg-[#1a1a1a] py-16 twok">
      <div className="mx-auto max-w-[90%]">

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[35fr_70fr] gap-12 items-center">

          {/* Left: text content */}
          <div className="flex flex-col gap-6">
            <div data-aos="fade-right">
              <h2 className="heading text-[#D4B161]!">
                Advanced Protection For Every Journey
              </h2>
            </div>

            <p data-aos="fade-up" data-aos-delay="100" className="content-white">
              Modern engines operate under extreme temperatures, high pressures, and varying driving conditions. Synmar Engine Oils create a strong protective film that reduces friction between moving parts, minimizes engine wear, and protects against harmful deposits and sludge formation.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-3">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="flex items-center gap-3 bg-white px-4 py-3"
                >
                  <img
                    src="/moto/synmar/check.png"
                    alt="Advanced Protection"
                    className="object-cover"
                  />
                  <span className="content">{feature}</span>
                </div>
              ))}
            </div>

            <p data-aos="fade-up" data-aos-delay="200" className="content-white mt-2">
              Synmar Thor EP2 is a lithium-thickened lubricating grease based on mineral oil and contains antioxidants, corrosion inhibitors and...
            </p>
          </div>

          {/* Right: product image */}
          <div data-aos="fade-left" data-aos-delay="150" className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
            <DynamicVideoPlayer type='short-1'/>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-14 mb-10" />

        {/* CTA Button */}
        <div data-aos="fade-up" className="flex justify-center">
        <div className="flex items-center">
          <button className="relative bg-[#c9a84c] text-white font-black uppercase tracking-widest text-xs px-10 py-3 hover:bg-[#b8973b] transition-colors"
            style={{ clipPath: "polygon(0% 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, 16px 100%, 0% calc(100% - 16px))" }}
          >
            View Product Details
          </button>
        </div>
        </div>

      </div>
    </section>
  );
}
