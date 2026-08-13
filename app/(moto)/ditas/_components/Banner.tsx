"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden flex flex-col justify-end">
      <DynamicVideoPlayer
        type="banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="custom-container relative z-10 pb-16 md:pb-20 xl:pb-16">
        <h1
          className="hero-title text-white max-w-[489px] mb-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          Engineering the Future of Mobility
        </h1>

        <p
          className="body-text text-white max-w-[665px]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-once="true"
        >
          Advanced engineering delivers reliable steering and suspension
          solutions for modern vehicles.
        </p>
      </div>
    </section>
  );
}