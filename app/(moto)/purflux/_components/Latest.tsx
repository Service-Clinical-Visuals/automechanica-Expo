"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Latest = () => {
  const smallFeatures = [
    { icon: "/moto/purflux/small1.png", text: "OE Performance" },
    { icon: "/moto/purflux/samll2.png", text: "Advanced Filtration" },
    { icon: "/moto/purflux/small3.png", text: "Wide Vehicle Coverage" },
    { icon: "/moto/purflux/small4.png", text: "Weekly Updated Catalogue" },
  ];

  const bottomFeatures = [
    {
      icon: "/moto/purflux/s3.png",
      title: "OE Quality Guaranteed",
      desc: "Built to meet equipment standards for trusted performance."
    },
    {
      icon: "/moto/purflux/s2.png",
      title: "Trusted by Professionals",
      desc: "Relied upon by automotive professionals across global markets."
    },
    {
      icon: "/moto/purflux/s1.png",
      title: "Advanced Technology",
      desc: "Innovative filtration for maximum protection."
    },
    {
      icon: "/moto/purflux/s4.png",
      title: "Reliable Performance",
      desc: "Designed to deliver consistent, long-lasting performance every day."
    }
  ];

  return (
    <section className="w-full py-16 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-8 min-[3800px]:gap-24">

        {/* Top Section */}
        <div className="flex flex-col xl:grid xl:grid-cols-12 gap-8 xl:gap-12 items-center">
          {/* Content (Mobile: Order 1, Desktop: Col 1-6) */}
          <div className="flex flex-col gap-8 order-1 xl:order-none xl:col-span-6 w-full" data-aos="fade-right">

            <div className="flex flex-col gap-4">
              <Typography variant="h2" color="dark" className="font-bold leading-tight">
                Latest Product References
              </Typography>
              <Typography variant="p" color="muted" className="leading-relaxed">
                Engineered for Passenger and Commercial Vehicles, our premium filtration solutions deliver OE-quality performance, superior protection, and long-lasting reliability. Designed with advanced filtration technology, they help maximize engine efficiency, improve air quality, and ensure dependable performance on every journey.
              </Typography>
            </div>

            {/* Small Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {smallFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 min-[3800px]:w-12 min-[3800px]:h-12 shrink-0 flex items-center justify-center bg-gray-50 border border-gray-200 rounded p-1">
                    <img src={feat.icon} alt={feat.text} className="w-full h-full object-contain" />
                  </div>
                  <Typography variant="p" color="dark" className="font-medium text-sm min-[3800px]:text-lg">
                    {feat.text}
                  </Typography>
                </div>
              ))}
            </div>

            <div className="w-fit pt-2">
              <Button text="Browse Catalogue" href="#" showIcon={false} />
            </div>
          </div>

          {/* Image (Mobile: Order 2, Desktop: Col 7-12) */}
          <div className="w-full order-2 xl:order-none xl:col-span-6" data-aos="fade-left">
            <div className="w-full relative">
              <img
                src="/moto/purflux/section4.png"
                alt="Latest Products"
                className="w-full h-auto object-contain xl:scale-110 min-[3800px]:scale-125 origin-right"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="200">
          <div className="w-full border border-primary rounded-xl p-6 lg:p-10 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-primary/30">
              {bottomFeatures.map((feat, idx) => (
                <div key={idx} className="flex flex-row items-center xl:items-start text-left gap-4 pt-6 sm:pt-0 sm:px-6 first:pt-0 sm:first:pl-0">
                  <div className="w-[60px] h-[60px] min-[3800px]:w-20 min-[3800px]:h-20 shrink-0 rounded-full border-2 border-primary flex items-center justify-center p-3">
                    <img src={feat.icon} alt={feat.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col gap-1 mt-1">
                    <Typography variant="h4" color="dark" className="font-semibold font-secondary text-lg">
                      {feat.title}
                    </Typography>
                    <Typography variant="p" color="muted" className="text-sm min-[3800px]:text-lg leading-relaxed">
                      {feat.desc}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Latest;
