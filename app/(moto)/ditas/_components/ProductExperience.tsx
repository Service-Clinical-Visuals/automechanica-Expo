"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function ProductExperience() {
  return (
    <section className="relative w-full h-auto md:h-auto xl:h-[1000px] pt-24 pb-16 md:pt-28 md:pb-20 xl:pt-32 xl:pb-24 overflow-hidden flex items-center">
      <img
        src="/moto/ditas/bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      <div className="custom-container relative z-10 flex flex-col items-center text-center mx-auto">
        <h2
          className="section-title text-white mb-6 xl:mb-5 whitespace-nowrap"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-once="true"
        >
          360° Product Experience
        </h2>

        <p
          className="body-text text-white max-w-[1106px] mb-10 xl:mb-[30px]"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="150"
          data-aos-once="true"
        >
          Explore DİTAŞ&rsquo;s steering and suspension components in 360°,
          engineered for precision, durability, and reliable OEM-quality
          performance. Discover every detail of our expertly crafted
          products, designed to deliver exceptional safety, strength, and
          long-lasting performance across a wide range of vehicle
          applications.
        </p>

        <div
          className="relative w-full max-w-[1200px] h-[400px] md:h-[500px] xl:h-[675px] rounded-[42px] overflow-hidden bg-white mb-12 md:mb-16 xl:mb-20"
          data-aos="zoom-in"
          data-aos-duration="1100"
          data-aos-delay="300"
          data-aos-once="true"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}