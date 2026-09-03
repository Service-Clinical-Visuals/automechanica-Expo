import { Wrench, User, ArrowRightIcon } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";

const features = [
  {
    title: "OEM-Quality Performance",
    description:
      "Engineered for reliable cooling efficiency and long service life.",
  },
  // {
  //   title: "Precision Manufacturing",
  //   description: "Designed for accurate fitment and hassle-free installation.",
  // },
];

export default function Premium() {
  return (
    <section className="bg-[#F5F5F5] py-16 md:pt-24">
      <Container>
        {/* Top heading */}
        <div
          className="flex items-center justify-between gap-6 pb-6 mb-10 border-b border-[#00000020]"
          data-aos="fade-up">
          <h2 className="heading text-[28px]! font-medium!">
            Reliable Air Conditioning Performance for Every Journey
          </h2>
          <button className="navlink gap-1 font-normal! flex max-w-[200px] justify-between text-white! rounded-tr-[16px] rounded-bl-[16px] bg-primary px-4 py-3 transition-colors">
            Explore Products
            <ArrowRightIcon fill="white" />
          </button>
        </div>

        {/* Two-column content */}
        <div className="grid grid-cols-1 xl:grid-cols-[65fr_35fr] gap-8 xl:gap-12 items-center">
          {/* Left: 360 video */}
          <div className="relative w-full aspect-[64/21]" data-aos="fade-right">
            <DynamicVideoPlayer type="360" className=" inset-0 w-full " />
          </div>

          {/* Right: content */}
          <div
            className="flex flex-col gap-6"
            data-aos="fade-up"
            data-aos-delay="150">
            <p className="content  text-justify">
              The Meat &amp; Doria Compressor is engineered to deliver efficient
              and dependable air conditioning performance across a wide range of
              passenger and commercial vehicles. Manufactured to meet
              OEM-quality standards, it ensures optimal refrigerant compression,
              consistent cooling, and long-lasting durability. Designed for a
              precise fit and seamless installation.
            </p>

            <div className="flex flex-col gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex bg-white items-start gap-4 border border-primary rounded-lg p-4 py-6">
                  <span className="shrink-0 w-13 h-13 rounded-full bg-primary flex items-center justify-center">
                    <Wrench size={22} className="text-white" />
                  </span>
                  <div>
                    <p className="heading text-[24px]! font-medium! mb-2">
                      {feature.title}
                    </p>
                    <p className="content">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
