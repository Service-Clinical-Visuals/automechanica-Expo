import React from 'react';
import Button from './Button';

export default function Quality() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Left Content */}
          <div data-aos="fade-right">
            <h2 className="teko-font font-semibold text-[#333333] section-title mb-4 tracking-wide ">
              Quality Lubricants, Built To Last
            </h2>
            <hr className="border-t-2 border-gray-100 mb-6 w-full" />
            
            <p className="oswald-font font-normal text-[#4e4e4e] section-text mb-10 leading-relaxed text-justify md:text-left">
              Welcome to JOINT STOCK COMPANY AMB OILS — a leading provider of high-quality lubricants for a wide range of applications. Our company has been in business for over 12 years, and we are committed to delivering exceptional products and services to our customers around the world.
            </p>
            
            <div className="flex flex-col gap-6 mb-10">
              {/* Feature 1 */}
              <div className="flex gap-5 items-start group">
                <div className="w-14 h-14 rounded-full bg-[#C99843] flex-shrink-0 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                  <img src="/moto/amboils/1.png" alt="Extensive Product Portfolio" className="w-10 h-10 object-contain brightness-0 invert" />
                </div>
                <div className="pt-1">
                  <h3 className="teko-font font-semibold text-[#333333] card-title mb-1 leading-none tracking-wide">
                    Extensive Product Portfolio
                  </h3>
                  <p className="oswald-font font-normal text-[#4e4e4e] section-text leading-relaxed">
                    Offering a comprehensive range of mineral, synthetic, and specialty lubricants engineered for automotive, industrial, and commercial applications.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-5 items-start group">
                <div className="w-14 h-14 rounded-full bg-[#C99843] flex-shrink-0 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                  <img src="/moto/amboils/2.png" alt="Advanced Lubrication Technology" className="w-10 h-10 object-contain brightness-0 invert" />
                </div>
                <div className="pt-1">
                  <h3 className="teko-font font-semibold text-[#333333] card-title mb-1 leading-none tracking-wide">
                    Advanced Lubrication Technology
                  </h3>
                   <p className="oswald-font font-normal text-[#4e4e4e] section-text leading-relaxed">
                    Formulated with premium base oils and high-performance additives to deliver exceptional protection, efficiency, and long-lasting performance.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-5 items-start group">
                <div className="w-14 h-14 rounded-full bg-[#C99843] flex-shrink-0 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                  <img src="/moto/amboils/3.png" alt="Innovation & Continuous Growth" className="w-10 h-10 object-contain brightness-0 invert" />
                </div>
                <div className="pt-1">
                 <h3 className="teko-font font-semibold text-[#333333] card-title mb-1 leading-none tracking-wide">
                    Innovation & Continuous Growth
                  </h3>
                   <p className="oswald-font font-normal text-[#4e4e4e] section-text leading-relaxed">
                    Investing in research, development, and advanced technologies to provide next-generation lubricant solutions for evolving industry needs.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-5 items-start group">
                <div className="w-14 h-14 rounded-full bg-[#C99843] flex-shrink-0 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                  <img src="/moto/amboils/4.png" alt="Sustainable Manufacturing" className="w-10 h-10 object-contain brightness-0 invert" />
                </div>
                <div className="pt-1">
                 <h3 className="teko-font font-semibold text-[#333333] card-title mb-1 leading-none tracking-wide">
                    Sustainable Manufacturing
                  </h3>
                   <p className="oswald-font font-normal text-[#4e4e4e] section-text leading-relaxed">
                    Committed to environmentally responsible production processes that reduce waste while supporting a greener future.
                  </p>
                </div>
              </div>
            </div>

            <Button href="#" variant="withArrow">
              Discover Our Journey
            </Button>
          </div>

          {/* Right Image */}
          <div data-aos="fade-left" className="relative w-full flex justify-center lg:justify-end">
            <img 
              src="/moto/amboils/quality.png" 
              alt="Quality Lubricants Displays" 
              className="w-full h-auto object-contain "
            />
          </div>

        </div>
      </div>
    </section>
  );
}
