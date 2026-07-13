import React from 'react';
import Typography from './Typography';

export default function Solutions() {
  const logos = [
    "/moto/veneporte/logo1.png",
    "/moto/veneporte/logo2.png",
    "/moto/veneporte/logo3.png"
  ];

  return (
    <section className="py-16 md:py-25  relative overflow-hidden bg-white">
      <div className="custom-container px-4 md:px-8 max-w-[1920px] mx-auto relative z-10 text-center">

        <Typography variant="h2" color="secondary" className="mb-12 relative pb-4 inline-block font-bold" data-aos="fade-down" data-aos-duration="800">
          Clean Environment Solutions
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary rounded-full"></span>
        </Typography>

        <div className="flex flex-wrap justify-between items-center gap-6 mt-8 w-full">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center flex-1 " data-aos="flip-up" data-aos-delay={100 + (idx * 200)} data-aos-duration="800">
              <img src={logo} alt={`Solution Partner ${idx + 1}`} className="w-full h-16 sm:h-20 md:h-24 xl:h-28 2xl:h-32 object-contain" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
