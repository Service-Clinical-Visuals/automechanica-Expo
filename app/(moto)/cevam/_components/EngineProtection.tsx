"use client";

import React from "react";
import Button from "./Button";

export default function EngineProtection() {
  return (
    <section className="py-16 xl:py-20 bg-white relative overflow-hidden">
      <div className="custom-container relative z-10">

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-10 items-center">

          {/* Left Content */}
          <div className="flex flex-col lg:col-span-6" data-aos="fade-right">
            <h2 className="section-title text-[#272727] oswald-font font-semibold mb-6">
              Global Distribution & Customer Support
            </h2>

            <div className="flex flex-col gap-5 text-[#4B5563] rubik-font section-text font-regular leading-relaxed">
              <p>
                Efficient product availability is ensured through express service, online customer portals, and strategically located regional distribution networks. With streamlined order processing and advanced delivery capabilities such as H+4 and J+1, reliable and flexible solutions help customers receive the right components on time while maintaining high standards of service and responsiveness.
              </p>
              <p>
                With a dedicated sales department and strong research and development focus, CEVAM continuously analyzes market requirements and new vehicle models to expand its catalogue and provide responsive solutions for customers.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full h-full rounded-[10px] overflow-hidden lg:col-span-6" data-aos="fade-left">
            <img
              src="/moto/cevam/q1.png"
              alt="Workers packing CEVAM boxes"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 rounded-[16px]">Image 1</div>' }}
            />
          </div>

        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-10 items-center">

          {/* Left Image */}
          <div className="w-full h-full lg:col-span-6 rounded-[16px] overflow-hidden order-2 lg:order-1" data-aos="fade-right">
            <img
              src="/moto/cevam/q2.png"
              alt="CEVAM Warehouse"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 rounded-[16px]">Image 2</div>' }}
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col order-1 lg:order-2 lg:col-span-6" data-aos="fade-left">
            <div className="flex flex-col gap-5 text-[#4B5563] rubik-font section-text font-regular leading-relaxed mb-8">
              <p>
                Through its presence in four European countries, a strong and efficient export network operates with dedicated export support. Expert teams provide guidance, manage international orders, and ensure smooth processing from request to delivery. With reliable logistics solutions and a customer-focused approach, partners worldwide can access automotive components with confidence and efficiency.
              </p>
              <p>
                Through its presence in four European countries, an efficient export network is maintained with dedicated export support. Expert teams provide guidance, manage international orders, and ensure smooth processing with reliable logistics solutions.
              </p>
            </div>

            <Button href="#" variant="outline" className="!h-auto w-fit">
              Learn More
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
