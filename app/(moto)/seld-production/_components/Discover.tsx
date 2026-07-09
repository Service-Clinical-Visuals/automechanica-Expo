import { Check, ArrowUpRight, ArrowRight } from "lucide-react";
import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const features = [
  "Enhances engine durability and operational efficiency",
  "Suitable for demanding automotive and industrial applications",
  "Maintains engine cleanliness by preventing deposits",
  "Helps reduce oil consumption and maintenance costs",
  "Compatible with modern gasoline and diesel engines",
];

export default function Discover() {
  return (
    <section className="bg-primary py-16">
      <Container>
        {/* Top heading */}
        <div className="flex items-center justify-between gap-6 mb-6" data-aos="fade-up">
          <div>
            <h2 className="heading-white mb-4 text-[30px]! md:text-[34px]!">
              Advanced Engine Oil Solutions
            </h2>
            <p className="content-white max-w-[1300px]">
              Our advanced Engine Oils are developed to meet the evolving demands of modern engines.
              Formulated with premium-quality base oils and innovative additive technology, they provide
              outstanding lubrication, reduce mechanical wear, and maintain engine cleanliness for reliable
              performance in every journey.
            </p>
          </div>
          <a
            href="#"
            aria-label="Explore"
            className="hidden lg:flex shrink-0 w-16 h-16 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors"
          >
            <ArrowUpRight size={36} className="text-primary" />
          </a>
        </div>

        <hr className="border-t border-white/20 mb-10" />

        {/* Two-column content */}
        <div className="flex flex-col xl:flex-row gap-10 items-center">
          {/* Left: image/video */}
          <div className="w-full xl:w-[60%]" data-aos="fade-right">
            <div className="w-full aspect-[4/3] md:aspect-video rounded overflow-hidden relative bg-white/10">
              <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: content */}
          <div className="w-full xl:w-[40%]" data-aos="fade-left" data-aos-delay="150">
            <h3 className="heading-white text-[30px]! mb-4">Why SAS Engine Oils?</h3>
            <p className="content-white mb-6">
              Our advanced Engine Oils are developed to meet the demands of modern engines. Formulated with
              premium-quality base oils and innovative additive technology, they provide outstanding
              lubrication, reduce wear, and maintain engine cleanliness for reliable performance.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-white flex items-center justify-center">
                    <Check size={12} strokeWidth={3} className="text-primary" />
                  </span>
                  <p className="content-white">{text}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              aria-label="Search"
              className="flex heading max-w-[250px] font-medium! rounded-br-[24px] rounded-tl-[24px] text-[20px]! items-center bg-white justify-center px-8 py-2 text-white hover:bg-white/90 transition-colors"
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
