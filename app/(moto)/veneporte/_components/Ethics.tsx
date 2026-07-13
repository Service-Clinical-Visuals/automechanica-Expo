import React from 'react';
import Typography from './Typography';

export default function Ethics() {
  return (
    <section className="py-16  relative overflow-hidden bg-[#F8F9FA] bg-[url('/moto/veneporte/bg1.jpg')] bg-cover bg-center">
      <div className="custom-container px-4 md:px-8 max-w-[1920px] mx-auto relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 md:gap-16 items-start">

          {/* Main Image */}
          <div className="xl:col-span-6 w-full relative">
            <div className="w-full  rounded-xl overflow-hidden">
              <img
                src="/moto/veneporte/ethics1.png"
                alt="Ethics and Transparency"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                data-aos="zoom-in-right" data-aos-duration="1000"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="xl:col-span-6 flex flex-col justify-center h-full">
            <Typography variant="h2" color="secondary" className="mb-6 relative pb-4 inline-block font-bold" data-aos="fade-left" data-aos-duration="800">
              Ethics And Transparency
              <span className="absolute bottom-0 left-0 w-[42%] h-[1px] bg-primary rounded-full"></span>
            </Typography>

            <Typography variant="p" color="muted" className="mb-12 leading-relaxed" data-aos="fade-left" data-aos-delay="100" data-aos-duration="800">
              Veneporte's Actions Are Guided By High Standards Of Ethics And Integrity. In This Space We Provide Our Anti-Corruption Code Of Conduct And The Plan For The Prevention Of Risks Of Corruption And Related Infractions, Reflecting Our Commitment To Transparency And Responsibility.
            </Typography>

            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">

              <div className="relative rounded-xl overflow-hidden  aspect-[4/3] border-[3px] border-primary group group" data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="800">
                <img
                  src="/moto/veneporte/ethics2.png"
                  alt="Factory interior"
                  className="w-full h-full scale-101  object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-5">
                  <Typography variant="p" color="white" weight='medium' className="leading-snug drop-shadow-md">
                    The constant innovation, the used technology, and the incorporated materials are the ensure of a high-quality product, very similar to the original.
                  </Typography>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border-[3px] border-primary group" data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="800">
                <img
                  src="/moto/veneporte/ethics3.png"
                  alt="Factory work"
                  className="w-full h-full object-cover scale-101 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-5">
                  <Typography variant="p" color="white" weight='medium' className="font-medium leading-snug drop-shadow-md">
                    A strong presence and increasingly global. A path of partnership, sharing, and strong dedication to clients.
                  </Typography>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
