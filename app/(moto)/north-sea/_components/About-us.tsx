import { Check } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

const features = [
  {
    title: "OEM-Approved Quality",
    description: "Meets leading manufacturer standards.",
  },
  {
    title: "Premium Performance",
    description: "Delivers outstanding quality and reliability.",
  },
  {
    title: "Extensive Distribution Network",
    description: "Supported by established global partners.",
  },
  {
    title: "Trusted by Professionals",
    description: "Preferred for diverse automotive applications.",
  },
];

export default function Discover() {
  return (
    <section className="bg-white py-16">
      <Container>
        {/* Top heading */}
        <div className="text-center px-6 mb-10 flex flex-col items-center" data-aos="fade-up">
            <h2 className="heading mb-4">About North Sea Lubricants</h2>
            <p className="content max-w-[1100px]">
            North Sea Lubricants is an independent lubricating oil brand based in the Netherlands. From our plant in the Port of Rotterdam, we offer a wide selection of the highest quality European manufactured lubricants. All of our products are ‘MADE IN HOLLAND’ and delivered to more than 65 countries worldwide. In today’s developing market, we give you the power!
            </p>
        </div>

        <hr className="border-t border-gray-200 mb-12" />

        {/* Two-column content */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left: image */}
            <div className="w-full lg:w-1/2 shrink-0" data-aos="fade-right">
            <img
                src="/moto/north-sea/about.jpg"
                alt="North Sea Lubricants warehouse"
                className="w-full h-auto object-cover rounded-xl"
            />
            </div>

            {/* Right: text */}
            <div className="w-full lg:w-1/`2" data-aos="fade-left" data-aos-delay="150">
            <p className="content text-[18px] leading-relaxed text-[#222]">
                North Sea Lubricants operates from a cutting-edge ISO 9001:2015 certified lubrication plant in
                the Port of Rotterdam. From this premium location, we acquire high quality base oils and
                additives under the best possible conditions. We even have our own jetty that allows sea vessels
                up to 7500 metric tons to berth and supply us with virgin base oils of the finest quality. Our
                blending plant includes: manufacturing facilities, blending tanks, warehouses, offices, a
                quality control lab and a technical R&D department.
            </p>

            {/* Feature checklist grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {features.map((feature) => (
                <div
                    key={feature.title}
                    className="flex items-start gap-3 border border-gray-200 rounded-lg p-4"
                >
                    <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-yellow-400 mt-0.5">
                    <Check size={13} strokeWidth={3} className="text-white" />
                    </span>
                    <p className="text-[18px] leading-snug text-[#222]">
                    <span className="font-semibold">{feature.title}</span> {feature.description}
                    </p>
                </div>
                ))}
            </div>

            {/* CTA button */}
            <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
                <Button text="Discover More" variant="secondary" showIcon className="rounded-full" />
            </div>
            </div>
        </div>
      </Container>
    </section>
  );
}
