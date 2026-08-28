"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

const features = [
  "Experienced engineering team delivering innovative, production-ready steering and suspension solutions.",
  "Advanced design and testing using CAD tools, prototype facilities, and comprehensive validation processes.",
  "Strict quality standards ensuring every product meets demanding OEM performance requirements.",
  "Continuous innovation focused on enhancing durability, safety, and long-term reliability.",
];

export default function Explore() {
  return (
    <section className="w-full bg-[#F3F5F7] py-16 md:py-20 xl:py-[100px]">
      <div className="custom-container">
        <div className="mb-12 flex flex-col items-center gap-10 xl:flex-row xl:gap-[45px]">
          {/* Left Content */}
          <div
            className="w-full flex-shrink-0 xl:w-[677px] xl:max-w-[70%]"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-once="true"
          >
            <h2 className="section-title mb-6 text-[#272727]">
              Driving Innovation Through Research &amp; Development
            </h2>

            <p
              className="body-text mb-8 text-[#4B5563]"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="150"
              data-aos-once="true"
            >
              Innovation drives DİTAŞ&rsquo;s growth and success. Backed by
              decades of engineering expertise, DİTAŞ develops advanced
              steering and suspension solutions for the automotive, railway,
              agricultural, and defense sectors. Its dedicated R&amp;D Center
              designs, tests, and validates high-quality products that enhance
              vehicle performance, safety, durability, and reliability.
            </p>

            <div className="flex flex-col gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay={250 + index * 100}
                  data-aos-once="true"
                >
                  <img
                    src="/moto/ditas/tick.png"
                    alt="Tick"
                    className="h-[26px] w-[26px] flex-shrink-0"
                  />

                  <p className="body-text text-[#4B5563]">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Video */}
          <div
            className="relative aspect-video min-w-0 w-full overflow-hidden rounded-2xl xl:flex-1"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="150"
            data-aos-once="true"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <hr
          className="mb-10 border-t border-[#272727]"
          data-aos="fade-in"
          data-aos-duration="700"
          data-aos-once="true"
        />

        {/* Bottom Content */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p
            className="body-text max-w-[962px] xl:max-w-[70%] text-[#4B5563]"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
          >
            Through continuous investment in technology, university
            collaborations, and advanced engineering practices, DİTAŞ
            strengthens its innovation capabilities and supports the
            development of next-generation mobility solutions. This commitment
            to research, sustainability, and continuous improvement enables the
            company to deliver reliable, precision-engineered products trusted
            by customers worldwide.
          </p>

          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <Button
              href="#"
              bgColor="#ED1C24"
              textColor="#FFFFFF"
              className="flex-shrink-0"
            >
              Explore
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}