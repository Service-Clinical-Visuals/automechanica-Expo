import React from 'react';

const features = [
  { id: '01', title: 'Quality' },
  { id: '02', title: 'Compatibility with the original item' },
  { id: '03', title: 'Development' },
  { id: '04', title: 'Services' },
  { id: '05', title: 'Versatility' },
  { id: '06', title: 'Flexibility' },
  { id: '07', title: 'Skills' },
  { id: '08', title: 'Strong Collaboration' },
];

export default function Features() {
  return (
    <section className="pb-16 md:pb-24 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-8 xl:gap-x-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group relative flex items-center h-[80px] md:h-[120px]"
            >
              {/* Box (Pill shape) - positioned behind */}
              <div className="absolute left-[30px] md:left-[45px] right-0 top-[12px] bottom-[12px] border border-[#7285A5] rounded-r-xl bg-[#FAFAFA] z-0 shadow-sm"></div>
              
              {/* Polygon Wrapper */}
              <div className="relative z-10 w-[80px] h-[80px] md:w-[120px] md:h-[120px] flex-shrink-0 flex items-center justify-center">
                <img src="/moto/mistral/Polygon1.png" alt="" className="absolute inset-0 w-full h-full object-contain drop-shadow-sm transition-transform duration-700 ease-in-out group-hover:rotate-[180deg]" />
                <span className="text-white oswald-font font-bold section-title relative z-20 pb-0.5 pr-0.5">{feature.id}</span>
              </div>
              
              {/* Text Content */}
              <div className="relative z-10 pl-4 md:pl-5 flex-1 pr-2">
                <h2 className="section-text text-[#212121]  oswald-font font-normal tracking-wide leading-tight ">
                  {feature.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
