import React from "react";

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 md:gap-12">
        
        {/* Top part */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center" data-aos="fade-up">
          {/* Image */}
          <div className="order-2 xl:order-1 xl:col-span-7 w-full h-full relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] xl:min-h-[550px] rounded-3xl overflow-hidden shadow-sm">
            <img 
              src="/moto/baroxoil/abt.png" 
              alt="About Barox" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 xl:order-2 xl:col-span-5 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <div>
              <span className="odibee-sans-font text-[#EB2226] section-subtitle font-normal flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] section-subtitle bg-[#EB2226]"></span> About Barox
              </span>
              <h2 className="odibee-sans-font section-title text-[#212121] font-normal mt-2 leading-tight">
                Delivering High-Quality Automotive Solutions with Decades of Engineering Excellence
              </h2>
            </div>
            
            <div className="flex flex-col gap-4 text-[#333333] instrument-sans-font section-text font-normal leading-relaxed">
              <p>
                BAROX, a German brand with almost three decades developing and optimising lubricants, we have put all this experience in delivering high quality formulations in our brand.
              </p>
              <p>
                With nearly three decades of German engineering expertise, BAROX GmbH has established a strong reputation for developing premium lubricants that deliver outstanding performance and reliability. By combining extensive industry knowledge with advanced technology, BAROX produces high-quality formulations designed to meet the demanding requirements of modern automotive and industrial applications.
              </p>
              <p>
                BAROX offers a comprehensive range of engine oils, gear oils, coolants, brake fluids, and industrial lubricants, all manufactured using carefully selected raw materials and innovative additive technologies. Every product is engineered to provide exceptional wear protection, long-lasting lubrication, thermal stability, and reliable performance, helping extend equipment life and maximize efficiency in every application.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom part */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center" data-aos="fade-up">
          <div className="xl:col-span-7 flex flex-col gap-3 pr-0 xl:pr-10">
            <h2 className="odibee-sans-font section-title text-[#212121] font-normal mt-2 leading-tight">
              As a German brand, our foundation is built on three core pillars.
            </h2>
            <p className="instrument-sans-font text-[#333333] section-text font-normal leading-relaxed">
              Giving you premium oils with optimal performance because the health of your engines and machines matters to us
            </p>
          </div>

          <div className="xl:col-span-5 bg-[#0F2469] rounded-3xl px-8 py-6 xl:p-6 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/70 shadow-lg">
            {/* Pillar 1 */}
            <div className="flex flex-col items-center gap-3 w-full sm:w-1/3 px-3 py-4 sm:py-0">
              <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-md">
                <span className="odibee-sans-font text-[#F79320] section-subtitle font-normal mt-1">01</span>
              </div>
              <span className="odibee-sans-font text-white section-subtitle text-center tracking-wide">German Quality</span>
            </div>
            
            {/* Pillar 2 */}
            <div className="flex flex-col items-center gap-3 w-full sm:w-1/3 px-3 py-4 sm:py-0">
              <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-md">
                <span className="odibee-sans-font text-[#F79320] section-subtitle font-normal mt-1">02</span>
              </div>
              <span className="odibee-sans-font text-white section-subtitle text-center tracking-wide">German Consistency</span>
            </div>
            
            {/* Pillar 3 */}
            <div className="flex flex-col items-center gap-3 w-full sm:w-1/3 px-3 py-4 sm:py-0">
              <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-md">
             <span className="odibee-sans-font text-[#F79320] section-subtitle font-normal mt-1">03</span>
              </div>
              <span className="odibee-sans-font text-white section-subtitle text-center tracking-wide">German Exactness</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
