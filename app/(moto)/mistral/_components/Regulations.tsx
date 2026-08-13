import React from 'react';
import Button from './Button';

export default function Regulations() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-10 items-center">
          
          {/* Left: Content Section */}
          <div data-aos="fade-right" className="flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <img src="/moto/mistral/Polygon.png" alt="" className="w-7 h-7 object-contain" />
              <h2 className="section-title text-[#212121] font-medium tracking-wide">
                Regulations about filtering
              </h2>
            </div>
            
             <div className="flex flex-col gap-4 text-[#333333] section-text lato-font">
              <p>
                Several regulations exist to classify filters and their efficiency. When we started our activity, Eurovent
                regulations were in force: they classified efficiency but did not consider capacity. In 1993 the European
                commission published the standard EN779, about Anti-dust Air Filters for general ventilation systems. It
                got the idea from Eurovent and from the American Ashrae 52-58
              </p>
              <p>
                In 2002, the standard EN779 was modified introducing a series of tests, too, fit for setting the evolution of
                the filter in time, i.e. measuring its efficiency and loss of load both when it was new and when it was
                clogged.
              </p>
              <p>
                Actually, the filter has to be tested without electrostatic charge, too. The initial efficiency of an
                electrostatically charged filter may significantly worsen when it loses its charge.
              </p>
            </div>
            
            <div className="mt-2">
              <Button href="#" variant="primary">
                Discover More
              </Button>
            </div>
          </div>
          
          {/* Right: Image Section */}
          <div data-aos="fade-left" className="w-full flex justify-center xl:justify-end mt-8 xl:mt-0">
            <img 
              src="/moto/mistral/regulate.png" 
              alt="Regulations about filtering diagram" 
              className="w-full  object-contain"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
