import React from 'react';
import Typography from './Typography';
import Button from './Button';
import DynamicVideoPlayer from '../../../_components/DynamicVideoPlayer';

export default function Converters() {
  const features = [
    "Developed Alike The OEM/\nOES Products",
    "Quantity, Quality And Technology\nIdentical To The Ones Used In The\nOriginal Components",
    "High-Quality Substrate – Premium\nSuppliers",
    "Canning With Traceability Piece To\nPiece"
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="custom-container px-4 md:px-8 max-w-[1920px] mx-auto relative z-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center mb-16">

          {/* Content side */}
          <div className="xl:col-span-4 flex flex-col justify-center">
            <Typography variant="h2" color="secondary" className="mb-6 relative pb-4 inline-block font-bold" data-aos="fade-right" data-aos-duration="800">
              Catalytic Converters
              <span className="absolute bottom-0 left-0 w-[42%] h-[1px] bg-primary rounded-full"></span>
            </Typography>

            <Typography variant="p" color="muted" weight='light' className="mb-6 leading-relaxed" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
              The Catalytic Converter Is An Antipollution Key-Device, Being One Of The Most Important Components In The Exhaust System, Due To Its Influence In The Emission's Reduction And In The Right Operation Of The Other Components.
            </Typography>

            <Typography variant="p" color="muted" weight='light' className="mb-10 leading-relaxed" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
              The Catalytic Converter Contains A Coted Core With Noble Metals, Which Converts The Toxic Gases Coming From The Combustion, Hydrocarbons (HC), Nitrogen Oxides (NOx) And Carbon Monoxide (CO), Transforming Them, Through Chemical Reactions, In Innocuous Substances To The Atmosphere And Human Beings, More Concretely, In Steam (H2O), Carbon Dioxide (CO2) And Azote (N2).
            </Typography>

            <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              <Button text="Explore Product" variant="primary" showIcon={true} />
            </div>
          </div>

          {/* Video side */}
          <div className="xl:col-span-8 w-full aspect-video  relative rounded-lg overflow-hidden bg-gray-100" data-aos="zoom-out-right" data-aos-delay="200" data-aos-duration="1000">
            <DynamicVideoPlayer type="360" />
          </div>

        </div>

        {/* Bottom Features Row */}
        <div className="bg-primary rounded-2xl w-full p-8 md:p-12 relative z-20 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y-2 sm:divide-y-0 lg:divide-x-2 divide-white/60">
            {features.map((text, idx) => (
              <div key={idx} className={`flex flex-col items-center text-center px-4 ${idx !== 0 ? 'pt-8 sm:pt-0' : ''}`} data-aos="flip-up" data-aos-delay={100 + (idx * 150)} data-aos-duration="800">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 bg-white rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src="/moto/veneporte/Vector.png" alt="Icon" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 object-contain" />
                </div>
                <Typography variant="h4" color="white" font='poppins' className="font-medium leading-snug whitespace-pre-line">
                  {text}
                </Typography>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
