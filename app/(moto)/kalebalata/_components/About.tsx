import React from 'react';

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      <div className="custom-container flex flex-col items-center relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Background Watermark Text */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 kalebalatatext font-normal  whitespace-nowrap anton-font pointer-events-none select-none leading-none flex items-center justify-center w-full"
          style={{
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.05)',
            color: 'transparent',
            zIndex: -1
          }}
          data-aos="fade-in"
        >
          Kale Balata
        </div>

        {/* Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-4 mt-8 sm:mt-10 md:mt-12 lg:mt-18 relative z-10">
          <h2 
            className="anton-font text-white section-title fonr-normal leading-tight tracking-wide"
            data-aos="fade-up"
          >
            About Kale Balata
          </h2>
          <p 
            className="oswald-font text-white section-text font-normal leading-relaxed tracking-wide mt-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Kale Balata A.Ş. was established in 1976 in Maslak, Istanbul, to produce friction brake components. In order to meet the increasing production capacity and customer needs more quickly and effectively, our firm has moved to its production facility with an area of 16,000 m² in Kocaeli Gebze in 1992.
          </p>
        </div>

        {/* Image */}
        <div 
          className="w-full mt-10 md:mt-16 rounded-xl overflow-hidden shadow-2xl flex justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img 
            src="/moto/kalebalata/abt.jpg" 
            alt="Kale Balata Factory" 
            className="w-full h-auto object-cover"
          />
        </div>
        
      </div>
    </section>
  );
}
