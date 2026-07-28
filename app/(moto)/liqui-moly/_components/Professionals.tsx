import React from "react";
import Button from "./Button";

export default function Professionals() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative">
      <div className="custom-container">
        
        {/* Title */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="section-title font-semibold text-[var(--color-primary)] mb-2 inline-block relative">
            Solutions for Professionals and Drivers
             <div className="absolute bottom-0 left-0 w-full flex items-center gap-1">
              <div className="h-[3px] flex-1 bg-[var(--color-primary)]"></div>
              <div className="h-[3px] w-[3px] bg-[var(--color-primary)]"></div>
              <div className="h-[3px] w-[3px] bg-[var(--color-primary)]"></div>
              <div className="h-[3px] w-[3px] bg-[var(--color-primary)]"></div>
              <div className="h-[3px] w-[3px] bg-[var(--color-primary)]"></div>
            </div>
          </h2>
        </div>

        {/* Row 1: Workshops */}
        <div className="mb-8 md:mb-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center mb-15 md:mb-20">
          {/* Left: Image with offset red block */}
          <div className="relative mb-10 xl:mb-0" data-aos="fade-right">
            {/* Red offset block - left aligned */}
            <div className="absolute -bottom-12 left-0 w-[85%] h-24 2xl:h-40 bg-[var(--color-secondary)] rounded-md"></div>
            <div className="relative z-10 rounded-md overflow-hidden shadow-lg">
               <img src="/moto/liqui-moly/cust1.png" alt="For Workshops" className="w-full h-[500px] object-cover object-top" />
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="flex flex-col" data-aos="fade-left">
            <h3 className="card-title1 font-bold text-[#111827] mb-6">For Workshops</h3>
            <p className="section-text text-[var(--color-third)]  leading-[2.2] font-normal tracking-wide mb-6">
              Empower your workshop with professional support, expert knowledge, and reliable solutions. From training and equipment to efficient processes and marketing support, we provide everything needed to improve daily operations, enhance service quality, increase efficiency, and help workshops grow with confidence in a competitive automotive industry. With innovative tools, technical expertise, and dedicated support, we help professionals optimize their workflow, strengthen customer relationships, and deliver better automotive services every day.
            </p>
            <div>
              <Button variant="secondary" className="px-6 py-2 rounded-md font-semibold text-sm shadow-md" showArrow={true}>
                Learn more
              </Button>
            </div>
          </div>
        </div>

        {/* Row 2: Private Customers */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          
          {/* Left: Content (Order 2 on mobile, Order 1 on Desktop) */}
          <div className="flex flex-col order-2 xl:order-1" data-aos="fade-right">
            <h3 className="card-title1 font-bold text-[#111827] mb-6">For private customers</h3>
            <p className="section-text text-[var(--color-third)]  leading-[2.2] font-normal tracking-wide mb-6">
              <span className="font-bold text-[#111827]">LIQUI MOLY</span> always offers practical tips, reliable services, and innovative products designed to make everyday driving easier and more efficient. From vehicle care advice and maintenance solutions to helpful guides and expert recommendations, we provide everything private customers need to keep their vehicles performing at their best. Explore our solutions to stay informed, protect your vehicle, and stay one step ahead on every journey.
            </p>
            <div>
              <Button variant="secondary" className="px-6 py-2 rounded-md font-semibold text-sm shadow-md" showArrow={true}>
                Learn more
              </Button>
            </div>
          </div>

          {/* Right: Image with offset red block (Order 1 on mobile, Order 2 on desktop) */}
          <div className="relative order-1 xl:order-2 mb-10 xl:mb-0" data-aos="fade-left">
            {/* Red offset block - right aligned */}
            <div className="absolute -bottom-12 right-0 w-[85%] h-24 2xl:h-40 bg-[var(--color-secondary)] rounded-md"></div>
            <div className="relative z-10 rounded-md overflow-hidden shadow-lg">
               <img src="/moto/liqui-moly/cust2.jpg" alt="For Workshops" className="w-full h-[500px] object-cover object-top" />
            </div>
          </div>

        </div>
        </div>

      </div>
    </section>
  );
}
