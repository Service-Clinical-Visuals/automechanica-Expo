"use client";

import Button from "./Button";

const values = [
  {
    icon: "/moto/ditas/v1.png",
    description:
      "We encourage creativity, curiosity, and continuous learning to develop new ideas and solutions. Our innovative mindset helps us adapt to change and deliver advanced solutions across every project we undertake.",
  },
  {
    icon: "/moto/ditas/v2.png",
    description:
      "We believe success is built through collaboration, trust, and shared knowledge. By working as one team, we create lasting value and achieve our common goals together.",
  },
];

export default function Values() {
  return (
    <section className="w-full py-16 md:py-20 xl:py-[100px]">
      <div className="custom-container">
        {/* Mobile / Tablet Layout */}
        <div className="flex flex-col xl:hidden">
          {/* Heading */}
          <h2
            className="section-title text-[#272727] mb-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            Our Values
          </h2>

          {/* Description */}
          <p
            className="body-text text-[#4B5563] mb-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
          >
            Our values define who we are and shape the way we operate every
            day. We honor our heritage, embrace innovation, and take
            responsibility in every decision we make. By building strong
            relationships with our customers, partners, employees, and
            communities, we create a foundation of trust and excellence.
            Through passion, collaboration, continuous improvement, and a
            commitment to quality, we strive to deliver sustainable value and
            achieve long-term success in everything we do.
          </p>

          {/* Image */}
          <div
            className="relative w-full h-[400px] md:h-[550px] rounded-2xl overflow-hidden mb-10"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="150"
            data-aos-once="true"
          >
            <img
              src="/moto/ditas/values.png"
              alt="DİTAŞ partnership and collaboration"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Value Cards */}
          <div className="flex flex-col gap-4 mb-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="border border-[#E4E4E4] rounded-[6px] p-5 flex flex-col min-[630px]:flex-row items-center min-[630px]:items-start gap-5 min-[630px]:gap-6"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={250 + index * 150}
                data-aos-once="true"
              >
                <span className="flex h-[86px] w-[86px] flex-shrink-0 items-center justify-center rounded-full bg-[#005BAB]">
                  <img
                    src={value.icon}
                    alt=""
                    className="h-10 w-10 object-contain"
                  />
                </span>

                <p className="body-text text-[#4B5563] text-center min-[630px]:text-left">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div
            className="inline-flex"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="550"
            data-aos-once="true"
          >
            <Button href="#" bgColor="#ED1C24" textColor="#FFFFFF">
              Know More
            </Button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden xl:flex flex-row gap-10 xl:gap-[45px] items-stretch">
          {/* Left Image */}
          <div
            className="relative w-[44%] h-auto min-h-[650px] rounded-2xl overflow-hidden flex-shrink-0"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img
              src="/moto/ditas/values.png"
              alt="DİTAŞ partnership and collaboration"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div
            className="w-[56%] min-w-0 flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <h2 className="section-title text-[#272727] mb-6">
              Our Values
            </h2>

            <p className="body-text text-[#4B5563] mb-8">
              Our values define who we are and shape the way we operate every
              day. We honor our heritage, embrace innovation, and take
              responsibility in every decision we make. By building strong
              relationships with our customers, partners, employees, and
              communities, we create a foundation of trust and excellence.
              Through passion, collaboration, continuous improvement, and a
              commitment to quality, we strive to deliver sustainable value and
              achieve long-term success in everything we do.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="border border-[#E4E4E4] rounded-[6px] p-5 flex items-center gap-6"
                >
                  <span className="flex h-[86px] w-[86px] flex-shrink-0 items-center justify-center rounded-full bg-[#005BAB]">
                    <img
                      src={value.icon}
                      alt=""
                      className="h-10 w-10 object-contain"
                    />
                  </span>

                  <p className="body-text text-[#4B5563]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="inline-flex">
              <Button href="#" bgColor="#ED1C24" textColor="#FFFFFF">
                Know More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}