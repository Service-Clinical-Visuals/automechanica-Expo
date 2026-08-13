"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  const profiles = [
    { img: "/moto/koch/p1.jpg", name: "Herwart-Koch" },
    { img: "/moto/koch/p2.jpg", name: "Harro Herwart Koch" },
    { img: "/moto/koch/p3.jpg", name: "Harro Koch Jr" },
  ];

  return (
    <section id="about" className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container flex flex-col xl:flex-row gap-8 xl:gap-12 min-[2100px]:gap-20 min-[3800px]:gap-15 items-center xl:items-stretch">

        {/* Mobile Header (Hidden on Desktop) */}
        <div className="xl:hidden w-full flex items-center justify-center flex-col gap-4" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            A Legacy of Precision Since 1950
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed">
            For over 70 years, Koch has been a pioneer in wheel alignment technology, providing innovative and reliable solutions for automotive professionals worldwide. Built on German engineering excellence, precision manufacturing, and continuous innovation, our advanced alignment systems deliver accurate measurements and dependable performance for passenger cars, commercial vehicles, and agricultural machinery.
          </Typography>
        </div>

        {/* Left: Main Image (Order 2 on Mobile, Order 1 on Desktop) */}
        <div className="w-full xl:w-[50%] min-[2100px]:w-[50%] min-[3800px]:w-[55%] flex shrink-0 order-2 xl:order-1" data-aos="fade-right">
          <div className="w-full aspect-[820/700] rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <img
              src="/moto/koch/section2.jpg"
              alt="Wheel Alignment System"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Content (Order 3 on Mobile, Order 2 on Desktop) */}
        <div className="w-full xl:w-[50%] min-[2100px]:w-[50%] min-[3800px]:w-[45%] flex flex-col gap-6 min-[2100px]:gap-8 min-[3800px]:gap-12 xl:pt-4 order-3 xl:order-2" data-aos="fade-left">

          {/* Desktop Header (Hidden on Mobile) */}
          <div className="hidden xl:flex flex-col gap-4">
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              A Legacy of Precision Since 1950
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              For over 70 years, Koch has been a pioneer in wheel alignment technology, providing innovative and reliable solutions for automotive professionals worldwide. Built on German engineering excellence, precision manufacturing, and continuous innovation, our advanced alignment systems deliver accurate measurements and dependable performance for passenger cars, commercial vehicles, and agricultural machinery.
            </Typography>
          </div>

          {/* Profiles Grid: Scaled proportionally with aspect-[247/205] */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-2">
            {profiles.map((profile, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3" data-aos="fade-up" data-aos-delay={100 * idx}>

                {/* Seamless Aspect Ratio Scaling */}
                <div className="w-full aspect-[247/205] rounded-xl overflow-hidden bg-gray-100 shadow-sm border border-gray-200">
                  <img src={profile.img} alt={profile.name} className="w-full h-full object-cover object-top" />
                </div>

                <Typography variant="h4" color="dark" className="text-center text-sm sm:text-base min-[2100px]:text-lg min-[3800px]:text-2xl font-bold mt-2">
                  {profile.name}
                </Typography>
              </div>
            ))}
          </div>

          <div className="mt-4 min-[2100px]:mt-6 min-[3800px]:mt-10" data-aos="fade-up" data-aos-delay="400">
            <Button text="Know More" href="#about" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
