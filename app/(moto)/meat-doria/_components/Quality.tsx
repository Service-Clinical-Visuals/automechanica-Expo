import { ArrowRightIcon, User } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";

const checkerboardStyle = {
  backgroundImage:
    "linear-gradient(45deg, #e5e5e5 25%, transparent 25%), linear-gradient(-45deg, #e5e5e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e5e5 75%), linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)",
  backgroundSize: "60px 60px",
  backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
  backgroundColor: "#f9f9f9",
};

export default function Quality() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[60fr_40fr] gap-8 items-center" data-aos="fade-up">
          {/* Left: video */}
          <div className="relative w-full aspect-video order-2 xl:order-1">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: content */}
          <div className="flex flex-col justify-center order-1 xl:order-2">
            <h2 className="heading text-[24px]! mb-6">Engineered for Compressor</h2>
            <p className="content text-[16px]! mb-4">
              Engineered for reliable cooling performance, Meat &amp; Doria automotive A/C compressors are
              designed to restore efficient climate control across a wide range of passenger and
              commercial vehicles. Manufactured to meet high-quality standards, they deliver consistent
              refrigerant circulation, smooth operation, and dependable performance for long-lasting
              driving comfort.
            </p>
            <p className="content text-[16px]! mb-6">
              These compressors are built using durable components and precision engineering to ensure
              excellent reliability, reduced noise, and optimal compatibility with OEM specifications.
              Whether for routine replacement or professional repair, Meat &amp; Doria A/C compressors
              provide an efficient solution that helps maintain peak air conditioning performance in all
              driving conditions.
            </p>
            <button
                className="navlink gap-1 flex max-w-[200px] justify-between text-white! rounded-tr-[16px] rounded-bl-[16px] bg-primary px-4 py-3 transition-colors"
            >
                Explore Products
                <ArrowRightIcon fill="white" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
