import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end bg-[#0a1128] ">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 select-none">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover object-fill"
        />
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-20 mb-16 md:mb-24 px-6 lg:px-16">
        <div
          className="max-w-5xl text-left"
          data-aos="fade-up"
          data-aos-delay="200">
          <h1 className="banner-title text-white mb-8 sora font-semibold leading-[1.1] drop-shadow-lg">
            Trusted Braking Performance Backed By Global Compliance
          </h1>

          <Button href="" variant="outline-white">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
