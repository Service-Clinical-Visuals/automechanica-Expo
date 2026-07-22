import React from 'react';
import Button from './Button';

export default function ReadyToPower() {
  return (
    <section className="relative w-full  py-30 lg:py-50 flex items-center overflow-hidden">
      {/* Background Image with golden tint and dark overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/moto/amboils/bg1.png" 
          alt="Engine Background" 
          className="w-full h-full object-cover " 
          onError={(e) => { e.currentTarget.src = "/moto/amboils/bg.png"; }}
        />
    
      </div>

      <div className="custom-container relative z-20 w-full flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="teko-font font-semibold text-[#ffffff] section-title mb-4 tracking-wide text-center">
            Ready To Power Your Engine?
          </h2>
          <p className="oswald-font font-normal text-[#ffffff] card-title leading-relaxed mb-10 text-center">
            Discover the AMB Oils range or talk to our team about private label and bulk solutions.
          </p>
          <Button href="#" variant="withArrow">
            Browse Products
          </Button>
        </div>
      </div>
    </section>
  );
}
