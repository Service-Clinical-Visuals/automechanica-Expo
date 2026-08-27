"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Quality() {
  return (
    <section className="w-full bg-[#F3F5F7] py-16 md:py-20 xl:py-[100px]">
      <div className="custom-container flex flex-col xl:flex-row gap-10 xl:gap-[45px] items-center">
        <div
          className="w-full xl:w-[820px] flex-shrink-0"
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <h2 className="section-title text-[#272727] mb-6">
            Engineering Excellence, Driven by Quality
          </h2>

          <p
            className="body-text text-[#4B5563] mb-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="150"
            data-aos-once="true"
          >
            Discover DİTAŞ&rsquo;s journey of innovation, advanced
            manufacturing capabilities, and commitment to excellence. With
            decades of experience in the automotive industry, we combine
            engineering expertise, modern technologies, and skilled teams to
            develop reliable steering and suspension solutions that meet the
            highest global standards.
          </p>

          <p
            className="body-text text-[#4B5563] mb-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="250"
            data-aos-once="true"
          >
            Driven by continuous improvement and quality-focused processes,
            DİTAŞ ensures superior performance through advanced testing,
            research, and internationally recognized certifications. Our
            dedication to innovation, sustainability, and customer
            satisfaction enables us to build strong partnerships and deliver
            trusted automotive solutions worldwide.
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="350"
            data-aos-once="true"
          >
            <Button href="#" bgColor="#ED1C24" textColor="#FFFFFF">
              Explore
            </Button>
          </div>
        </div>

        <div
          className="relative w-full xl:flex-1 min-w-0 h-[350px] md:h-[450px] xl:h-[458px] rounded-2xl overflow-hidden"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="150"
          data-aos-once="true"
        >
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}