import React from 'react';
import Button from './Button';

const cardsData = [
  {
    titleLine1: "Premium Raw",
    titleLine2: "Materials",
    paragraph: "Sourced from the highest quality base oils to guarantee superior, consistent results in every product, delivering exceptional performance, reliability, durability, and long-term equipment protection.",
    icon: "oval.png",
    delay: 0
  },
  {
    titleLine1: "Advanced",
    titleLine2: "Additives",
    paragraph: "Specially combined additive packages destroy harmful deposits and protect your engine under heavy loads, ensuring enhanced performance, efficiency, and long-lasting reliability.",
    icon: "oval.png",
    delay: 100
  },
  {
    titleLine1: "Every Blend",
    titleLine2: "Tested",
    paragraph: "We monitor and test each blend of every product to ensure the exact properties, consistent quality, superior performance, and long-lasting reliability of every lubricant.",
    icon: "oval.png",
    delay: 200
  },
  {
    titleLine1: "All-Temperature",
    titleLine2: "Film",
    paragraph: "Outstanding lubricating film that stays strong across any working temperature range, providing exceptional wear protection, stable performance, and reliability.",
    icon: "oval.png",
    delay: 300
  }
];

export default function WhyChoose() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="custom-container">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 mb-8" data-aos="fade-up">
          <div className="max-w-5xl">
            <h2 className="teko-font font-semibold text-[#333333] section-title mb-4 tracking-wide ">
              Why Choose AMB Oil
            </h2>
            <p className="oswald-font font-normal text-[#4e4e4e] section-text mt-2">
              Meticulously developed to meet the stringent requirements of modern vehicle manufacturers.
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-3 mt-6 lg:mt-0">
            <h3 className="oswald-font font-semibold text-[#333333] section-text1 tracking-wide">
              Performance You Can Rely On
            </h3>
            <Button href="#" variant="withArrow">
              Explore Our Advantages
            </Button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 mb-12 w-full" />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mb-16">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="relative bg-white rounded-t-[70px]   
                         shadow-lg
                         p-8 pt-12 overflow-visible transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={card.delay}
            >
              {/* Floating Oval Icon */}
              <div className="absolute top-0 right-0 z-20">
                {/* White Oval */}
                <div
                  className="w-[120px] h-[145px]
                             bg-white/30
                             rounded-[50%]
                             shadow-[-8px_4px_20px_rgba(0,0,0,0.08)]
                             flex items-center justify-center"
                >
                  {/* Gold Oval */}
                  <div
                    className="w-[95px] h-[120px]
                               bg-[#C99843]
                               rounded-[50%]
                               flex flex-col justify-end items-center pb-3"
                  >
                    <img
                      src={`/moto/amboils/${card.icon}`}
                      alt={card.titleLine1}
                      className="w-[64px] h-[64px] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col h-full">
                <h4
                  className="teko-font
                             card-title
                             font-semibold
                             text-[#212121]
                             mb-8 pr-24"
                >
                  {card.titleLine1}
                  <br />
                  {card.titleLine2}
                </h4>

                <p
                  className="oswald-font
                             section-text
                             leading-[1.8]
                             text-[#6D6B6B]
                             font-normal
                             mb-10 w-full"
                >
                  {card.paragraph}
                </p>

                <a
                  href="#"
                  className="inline-block
                             text-[#C99843]
                             font-bold
                             section-text2
                             teko-font
                             underline mt-5 mt-auto"
                >
                  Read More &gt;&gt;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner (Stats) */}
        <div className="w-full rounded-4xl overflow-hidden relative  flex flex-col min-h-[300px]" data-aos="fade-up">
          {/* Background Image */}
          <img src="/moto/amboils/bg.png" alt="Engine Background" className="absolute inset-0 w-full h-full object-cover z-0" />
          
          {/* Oil Image (Absolute right) */}
          <img src="/moto/amboils/oil.png" alt="Oil Splash" className="absolute right-0 bottom-0 h-auto w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] object-contain object-right-bottom z-10 pointer-events-none opacity-90 lg:opacity-100" />
          
          {/* Stats Content */}
          <div className="relative z-20 flex-grow grid grid-cols-2 lg:grid-cols-5 items-center divide-white/20 text-center w-full h-full py-10 lg:py-14">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center px-4">
                <span className="teko-font font-semibold text-white text-5xl md:text-[64px] tracking-wide leading-none">15</span>
                <span className="teko-font font-semibold text-[#C99843] text-2xl md:text-3xl mt-1 ml-1">+</span>
              <span className="oswald-font font-normal text-white text-[15px] tracking-wide mt-2 uppercase">Years of Excellence</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center px-4 pt-12 lg:pt-0">
                <span className="teko-font font-semibold text-white text-5xl md:text-[64px] tracking-wide leading-none">120</span>
                <span className="teko-font font-semibold text-[#C99843] text-2xl md:text-3xl mt-1 ml-1">+</span>
              <span className="oswald-font font-normal text-white text-[15px] tracking-wide mt-2 uppercase">Premium Products</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center px-4 pt-12 lg:pt-0">
                <span className="teko-font font-semibold text-white text-5xl md:text-[64px] tracking-wide leading-none">40</span>
                <span className="teko-font font-semibold text-[#C99843] text-2xl md:text-3xl mt-1 ml-1">+</span>
              <span className="oswald-font font-normal text-white text-[15px] tracking-wide mt-2 uppercase">Countries Served</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center justify-center px-4 pt-12 lg:pt-0">
                <span className="teko-font font-semibold text-white text-5xl md:text-[64px] tracking-wide leading-none">500</span>
                <span className="teko-font font-semibold text-[#C99843] text-2xl md:text-3xl mt-1 ml-1">+</span>
              <span className="oswald-font font-normal text-white text-[15px] tracking-wide mt-2 uppercase">Trusted Partners</span>
            </div>
            
            {/* Empty space for oil splash on Desktop */}
            <div className="hidden lg:block"></div>

          </div>

        </div>

      </div>
    </section>
  );
}
