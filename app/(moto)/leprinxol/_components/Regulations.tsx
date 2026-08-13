import React from 'react';

export default function Regulations() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="custom-container">

        {/* Heading */}
        <div data-aos="fade-up" className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#212121] pb-3 border-b-2 border-[#1a3a6e]">
            Made in Germany
          </h2>
        </div>

        {/* Paragraph */}
        <p
          data-aos="fade-up"
          className="max-w-4xl mx-auto text-center text-[#333333] section-text lato-font mb-12"
        >
          We produce our products (blending/bottling) at four different locations in Germany. Leprinxol offers
          state-of-the-art blending capacities, laboratory and R&amp;D resources and the most modern bottling
          facilities. This ensures the highest quality standards. Our R&amp;D team develops customized product
          solutions.
        </p>

        {/* Image Row */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="w-full aspect-[4/3] overflow-hidden">
            <img
              src="/moto/leprinxol/product1.jpg"
              alt="Bottling production line"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/3] overflow-hidden">
            <img
              src="/moto/leprinxol/product2.jpg"
              alt="Quality certification"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/3] overflow-hidden">
            <img
              src="/moto/leprinxol/product3.jpg"
              alt="Production facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
