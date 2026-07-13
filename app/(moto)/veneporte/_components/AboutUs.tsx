import React from 'react';
import Typography from './Typography';
import Button from './Button';

export default function AboutUs() {
  return (
    <section className="bg-white py-16  relative overflow-hidden">
      {/* 50/50 Background */}
      <div className="absolute top-0 left-0 w-full lg:h-[55%] h-full bg-[url('/moto/veneporte/bg1.jpg')] bg-cover bg-right opacity-30 lg:opacity-100 z-0"></div>

      <div className="custom-container px-4 md:px-8 max-w-[1920px] mx-auto relative z-10">
        <div className="grid grid-cols-1 2xl:grid-cols-12 gap-8 items-center">

          <div className="order-1 2xl:col-span-5 flex flex-col justify-center">
            <Typography variant="h2" color="secondary" className="mb-6 relative pb-4 inline-block font-bold" data-aos="fade-right" data-aos-duration="800">
              About Our Company
              <div className="absolute bottom-0 left-0 w-[41%] h-[1px]  bg-primary rounded-full"></div>
            </Typography>

            <Typography variant="p" color="muted" className="mb-6 leading-relaxed" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
              Veneporte Dedicates To The Development, Production, And Commercialization Of The Different Exhaust System Components (Catalytic Converters, Particulate Filters, SCRs, And Silencers) For The Different Automobile Vehicles.
            </Typography>

            <Typography variant="p" color="muted" className="mb-12 leading-relaxed" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
              Amongst The Best In Its Sector, VENEPORTE Uses The Most Advanced Technology In Its Production Process, Aiming To Reach An Even Bigger Competitive Capacity And A Permanent Reinforcement Of The Product Quality And Service Level To All Its Customers.
            </Typography>

            <div className="pt-10 mt-2 bg-white p-8 rounded-xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] 2xl:shadow-none 2xl:bg-transparent 2xl:p-0 2xl:rounded-none">
              <Typography variant="h1" color="secondary" className="mb-8 font-bold leading-snug" data-aos="flip-up" data-aos-delay="300" data-aos-duration="800">
                100% <span className="text-primary">Homologated</span> Range, With{" "}
                <span className="text-primary">High Environmental Performance</span>{" "}
                And <span className="text-primary">Direct Fit</span> Assembling
              </Typography>

              <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                <Button text="Know About Us" variant="primary" showIcon={true} />
              </div>
            </div>
          </div>

          <div className="order-2 2xl:col-span-7 w-full h-full min-h-[300px] sm:min-h-[400px] 2xl:min-h-[600px] relative">
            <img
              src="/moto/veneporte/section2.png"
              alt="Veneporte Building"
              className="w-full h-full object-cover rounded-2xl"
              data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1000"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
