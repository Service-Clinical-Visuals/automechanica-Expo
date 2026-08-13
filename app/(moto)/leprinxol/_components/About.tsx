import React from 'react';
import Button from './Button';

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="custom-container">
        {/* Top Block: Images + About Our Company */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-14 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4" data-aos="fade-right">
            <img
              src="/moto/leprinxol/about2.jpg"
              alt="Leprinxol production line"
              className="w-full h-[280px] sm:h-[340px] md:h-[475px] object-cover rounded-md shadow-md"
            />
            <img
              src="/moto/leprinxol/about1.jpg"
              alt="Leprinxol lubricant products"
              className="w-full h-[280px] sm:h-[340px] md:h-[475px] object-cover rounded-md shadow-md mt-[20px]"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5" data-aos="fade-left">
            <div className="flex flex-col gap-1">
              <h2 className="section-title text-[#212121] font-bold">
                About Our Company
              </h2>
              <span className="block w-14 h-[3px] bg-[#004F9F]" />
            </div>

            <div className="flex flex-col gap-4 text-[#333333] section-text lato-font">
              <p>
                Since 1868, the Leprinxol® brand has stood for reliability and innovation in the
                field of lubricants. Thanks to a strong international network and clear strategic
                focus, it has succeeded in positioning itself successfully worldwide. Partnerships
                and joint ventures in various regions – from Asia to the Middle East to South
                America – underline its global aspirations.
              </p>
              <p>
                The portfolio includes both standard lubricants and specialised products for
                particularly demanding automotive and industrial applications. In addition to
                classic mineral oil-based variants, sustainable solutions are increasingly being
                developed, including biodegradable lubricants based on renewable raw materials and
                high-performance synthetic products.
              </p>
              <p>
                Flexibility in delivery – from large quantities in containers and tankers to
                smaller containers – enables individual adaptation to customer requirements.
              </p>
            </div>

            <p className="section-title-2 text-[#004F9F] font-semibold leading-snug">
              For Leprinxol, the quality of our products and services is our most important
              success factory
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-12 md:my-16" />

        {/* Bottom Block: Map + Sales Territories */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-14 items-center">
          {/* Map */}
          <div
            className="bg-[#F2F2F2] rounded-md p-6 md:p-10 flex items-center justify-center"
            data-aos="fade-right"
          >
            <img
              src="/moto/leprinxol/about3.jpg"
              alt="Leprinxol sales territories map"
              className="w-full h-auto max-w-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6" data-aos="fade-left">
            <div className="flex flex-col gap-3">
              <h3 className="section-title text-[#212121] font-bold">
                Sales territories and network:
              </h3>
              <p className="text-[#333333] section-text lato-font">
                Egypt, Albania, Brazil, Chile, China, Denmark, Estonia, Finland, France, Georgia,
                Ghana, Greece, Great Britain, Iraq, Italy, Kazakhstan, Kurdistan, Latvia, Lebanon,
                Libya, Lithuania, Malaysia, Morocco, Mauritius, Namibia, Netherlands, Nigeria,
                Austria, Palestine, Poland, Romania, Sweden, Switzerland, Slovakia, Slovenia,
                Spain, South Korea, Syria, Taiwan, Czechia, Tunisia, Turkey, Hungary, United Arab
                Emirates, United States, Cyprus.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="section-title text-[#212121] font-bold">
                Joint ventures:
              </h3>
              <p className="text-[#333333] section-text lato-font">China, Malaysia</p>
            </div>

            <div className="mt-2">
              <Button href="#" variant="primary">
                Know more about us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
