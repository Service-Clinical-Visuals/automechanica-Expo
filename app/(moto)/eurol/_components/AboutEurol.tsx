"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button";

const AboutEurol = () => {
  return (
    <section className="py-12  md:py-20 bg-[#F1F1F1]" id="about">
      <Container>
        {/* Top Content Row */}
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 mb-5 md:mb-15 items-center">
          <div className="w-full xl:w-1/2 order-1 xl:order-1">
            <Typography variant="h2" className="font-goldman text-black mb-6 text-3xl md:text-4xl">
              About Our Company
            </Typography>
            <div className="font-albert text-gray-600 space-y-4 mb-3 leading-relaxed">
              <Typography variant="body" className="block">
                Pioneering entrepreneurship and a sense of quality were the driving forces behind Johan Pfeiffer when he founded the company and brand 'Eurol' in Nijverdal in 1977. The Eurol product range at that time only included lubricants for motorcycles. Through various successes in motorsports, the Eurol brand quickly gained recognition in the Netherlands.
              </Typography>
              <Typography variant="body" className="block">
                As an independent producer of lubricants, the product range expanded in the 1980s to include other segments such as automotive, two-wheelers, industry, trucks, and agriculture. In the 1990s, Eurol built a new factory for blending and filling. With production in-house and R&D facilities on-site, Eurol was able to develop faster and ensure even more consistent quality. From that moment on, Eurol became the only Dutch independent producer of lubricants.
              </Typography>
            </div>
            <Button text="Learn More" className="font-goldman" />
          </div>

          <div className="w-full xl:w-1/2 order-1 xl:order-2 flex justify-center">
            <img
              src="/moto/eurol/section3.png"
              alt="Eurol Products Collection"
              className="max-w-full h-auto rounded shadow-sm"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </div>
        <div className="w-full h-px bg-black/30 mt-10 mb-10 " />

        {/* Bottom Highlights Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 xl:mt-15 gap-8">
          <div className="flex flex-col group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4 h-48 md:h-56 bg-gray-200">
              <img
                src="/moto/eurol/section31.png"
                alt="Eurol Truck"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <Typography variant="h5" className="font-goldman text-primary text-center text-lg md:text-xl">
              Independent Lubricant Producer
            </Typography>
          </div>

          <div className="flex flex-col group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4 h-48 md:h-56 bg-gray-200">
              <img
                src="/moto/eurol/section32.png"
                alt="Eurol Racing Event"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <Typography variant="h5" className="font-goldman text-primary text-center text-lg md:text-xl">
              Extensive R&D
            </Typography>
          </div>

          <div className="flex flex-col group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4 h-48 md:h-56 bg-gray-200">
              <img
                src="/moto/eurol/section34.png"
                alt="Eurol Racing Team"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <Typography variant="h5" className="font-goldman text-primary text-center text-lg md:text-xl">
              International success
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutEurol;
