import React from 'react';
import Typography from './Typography';
import Button from './Button';
import DynamicVideoPlayer from '../../../_components/DynamicVideoPlayer';

export default function Advanced() {
  return (
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="custom-container px-4 md:px-8 max-w-[1920px] mx-auto relative z-10">

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">

          {/* Video side */}
          <div className="xl:col-span-8 order-2 xl:order-1 w-full aspect-video relative rounded-lg overflow-hidden bg-gray-100" data-aos="zoom-out-right" data-aos-duration="1000">
            <DynamicVideoPlayer type="short-1" />
          </div>

          {/* Content side */}
          <div className="xl:col-span-4 order-1 xl:order-2 flex flex-col justify-center">
            <Typography variant="h2" color="secondary" className="mb-6 relative pb-4 inline-block font-bold" data-aos="fade-left" data-aos-duration="800">
              Advanced Catalytic Converter Technology
              <span className="absolute bottom-0 left-0 w-[85%] h-[1px] bg-primary rounded-full"></span>
            </Typography>

            <Typography variant="p" color="muted" className="mb-8 leading-relaxed text-sm" data-aos="fade-left" data-aos-delay="100" data-aos-duration="800">
              Catalytic Converters Play A Critical Role In Reducing Harmful Exhaust Emissions By Converting Toxic Gases Into Safer Compounds Before They Are Released Into The Atmosphere. Designed To Meet Stringent Emission Standards, They Help Improve Air Quality While Maintaining Optimal Engine Performance.
            </Typography>

            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                <div className="mt-1 flex-shrink-0">
                  <img src="/moto/veneporte/Vector.png" alt="Check" className="w-6 h-6 object-contain" />
                </div>
                <Typography variant="p" color="muted" font='poppins' className="leading-relaxed">
                  Converts Harmful Gases Such As Carbon Monoxide, Hydrocarbons, And Nitrogen Oxides Into Less Harmful Emissions For Cleaner Operation.
                </Typography>
              </div>

              <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                <div className="mt-1 flex-shrink-0">
                  <img src="/moto/veneporte/Vector.png" alt="Check" className="w-6 h-6 object-contain" />
                </div>
                <Typography variant="p" color="muted" font='poppins' className=" leading-relaxed">
                  Engineered To Maintain Smooth Exhaust Flow, Helping Improve Engine Efficiency While Complying With Environmental Regulations.
                </Typography>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
              <Button text="Explore Product" variant="primary" showIcon={true} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
