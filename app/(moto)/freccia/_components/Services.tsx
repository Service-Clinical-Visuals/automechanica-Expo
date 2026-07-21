"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      img: "/moto/freccia/service1.png",
      title: "Manufacturing",
      desc: "Advanced technology and precision engineering ensure high-performance components, tested to meet international standards for reliability and durability."
    },
    {
      img: "/moto/freccia/service2.png",
      title: "OEM Supply",
      desc: "OEM parts engineered to meet original specifications, ensuring precise fit, reliable performance, and long-lasting durability."
    },
    {
      img: "/moto/freccia/service3.png",
      title: "Quality Testing",
      desc: "Every product undergoes rigorous testing to ensure high performance, safety, and reliability, delivering consistent and durable results."
    },
    {
      img: "/moto/freccia/service4.png",
      title: "Customer Support",
      desc: "Responsive customer support delivering expert guidance, seamless service, and reliable assistance at every stage."
    }
  ];

  return (
    <section id="service" className="w-full py-16 bg-white">
      <div className="custom-container flex flex-col items-center">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center  mx-auto mb-12" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 bg-secondary"></div>
            <Typography variant="h6" color="secondary" className="uppercase font-semibold tracking-wider">
              OUR SERVICES
            </Typography>
          </div>
          <Typography variant="h2" color="dark" className="font-bold mb-4">
            Comprehensive Support Services
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed  xl:max-w-[70%]">
            We provide a complete range of support services designed to enhance customer experience and ensure seamless operations. From technical assistance and product guidance to efficient logistics and digital tools, our services are built to deliver reliability, speed, and convenience at every stage.
          </Typography>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-8" data-aos="fade-up" data-aos-delay="100">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col border border-gray-800 rounded overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <Typography variant="h4" color="dark" className="font-medium mb-3">
                  {service.title}
                </Typography>
                <Typography variant="p" color="muted" className="leading-relaxed text-sm mb-3 flex-grow">
                  {service.desc}
                </Typography>
                <div className="flex items-center gap-2 cursor-pointer group w-max">
                  <Typography variant="h6" color="dark" className="underline group-hover:text-primary transition-colors">
                    Read More
                  </Typography>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div data-aos="fade-up" data-aos-delay="200">
          <Button text="See All Services" showIcon={true} />
        </div>

      </div>
    </section>
  );
};

export default Services;
