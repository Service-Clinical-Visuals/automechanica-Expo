"use client";

import React from "react";
import Typography from "./Typography";

const Protect = () => {
  return (
    <section id="protect" className="w-full py-16 bg-white">
      <div className="custom-container flex flex-col lg:grid lg:grid-cols-12 gap-14 items-center">
        
        {/* Image */}
        <div className="order-1 lg:col-span-5 w-full  flex justify-center" data-aos="fade-right">
          <img src="/moto/ows/section3.png" alt="Engine Protection" className="w-full  object-contain" />
        </div>

        {/* Content */}
        <div className="order-2 lg:col-span-7 w-full flex flex-col gap-6 relative" data-aos="fade-left">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Protect Your Engine. Maximize Every Drive.
          </Typography>
          
          <Typography variant="p" color="dark" className="leading-relaxed">
            OWS 220 Engine Protector is engineered to deliver outstanding engine protection and long-lasting performance. Its advanced anti-friction technology forms a durable protective layer on critical engine components, reducing wear even under high RPM and extreme operating conditions. By maintaining optimal viscosity and minimizing internal friction, it enhances horsepower, improves torque, increases fuel efficiency, and helps extend engine life. Whether for everyday driving or demanding performance applications, OWS 220 Engine Protector ensures reliable lubrication and dependable protection when it matters most.
          </Typography>

          <div className="flex justify-end mt-4">
             <p className=" font-bold text-black hover:text-primary transition-colors flex items-center gap-1 underline underline-offset-4">
               Download Datasheet <span className="text-xs">&gt;</span> 
             </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Protect;
