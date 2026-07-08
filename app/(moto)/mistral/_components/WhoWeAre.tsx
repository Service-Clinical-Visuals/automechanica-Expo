import React from 'react';
import Button from './Button';

export default function WhoWeAre() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Image */}
          <div data-aos="fade-right" className="order-2 xl:order-1">
            <img 
              src="/moto/mistral/who.png" 
              alt="Who We Are - Mistral" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          
          {/* Content */}
          <div data-aos="fade-left" className="flex flex-col gap-5 order-1 xl:order-2">
            <div className="flex items-center gap-3 mb-1">
              <img src="/moto/mistral/Polygon.png" alt="" className="w-7 h-7 object-contain" />
              <h2 className="section-title text-[#212121] font-medium tracking-wide">
                Who We Are
              </h2>
            </div>
            
            <div className="flex flex-col gap-4 text-[#333333] section-text lato-font">
              <p>
                Campi was established in 1992, when the first cars provided with anti-dust filters entered the market.
                Since then, it is dealing with Cabin Air Filters, basing on the following main principles:
              </p>
              <p>
                High Quality, care for details and price have been the determining criteria to operate in a sector in which
                we committed ourselves for many years, such as the First installation and the famous automotive brands.
                Only during the last years, the company changed its course completely, mainly devoting itself to the
                Aftermarket sector with the brand Mistral.
              </p>
              <p className="xl:hidden 2xl:block">
                For us, the customer represents the partner with whom to work to attain together the same result, that is
                to supply the best product on the market. The extremely high automation level of all the manufacturing
                processes of our company allows us to held an extremely competitive position on the market.
              </p>
            </div>
            
            <div className="mt-4 xl:hidden 2xl:block">
              <Button href="#" variant="primary">
                Register
              </Button>
            </div>
          </div>
          
          {/* Full Width Bottom Content specifically for XL screens (1440px) */}
          <div className="hidden xl:flex 2xl:hidden flex-col lg:col-span-2 gap-4 mt-2 order-3" data-aos="fade-up">
            <p className="text-[#333333] section-text lato-font">
              For us, the customer represents the partner with whom to work to attain together the same result, that is
              to supply the best product on the market. The extremely high automation level of all the manufacturing
              processes of our company allows us to held an extremely competitive position on the market.
            </p>
            <div className="mt-2">
              <Button href="#" variant="primary">
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
