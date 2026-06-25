import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function About() {
  const advantages = [
    {
      title: "Dedicated contact person",
      description: "With a cutting-edge Customer Service team, you are guaranteed a dedicated contact person throughout our professional relationship. Here, no case gets left behind.",
    },
    {
      title: "ISO 9001, ISO 14001 and ISO 45001",
      description: "The joint and constant effort of our different divisions allows us to be certified for the quality of our processes and the environmental impact of our actions.",
    },
    {
      title: "Monitoring and Traceability",
      description: "We sample every production run. So even years later, we are able to verify any batch from one of your previous orders.",
    },
    {
      title: "Dynamic Storage",
      description: "Our dual role as manufacturer and stockist allows us to deliver very quickly. Whether you're looking for a rare item or restocking a classic, we'll have it.",
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-14 items-start">
          
          {/* Left Column - Content */}
          <div className="flex flex-col xl:col-span-7 " data-aos="fade-right">
            <h2 className="text-[#484848] text-3xl md:text-4xl lg:text-[36px]  font-bold oxanium mb-6 tracking-wide">
              The ACCOR Lubrifiants Advantage
            </h2>
            
            <div className="w-full h-[1px] bg-gray-200 mb-8"></div>
            
            <p className="text-[#484848] exo2 text-[16px] md:text-[18px]   leading-relaxed mb-10">
              At ACCOR Lubrifiants, we combine technical expertise, certified quality standards, rigorous product control, and efficient supply capabilities to deliver reliable lubricant solutions for customers worldwide. Our commitment to performance, consistency, and customer satisfaction ensures you receive products and support you can trust, every time.
            </p>

            <div className="flex flex-col space-y-8 mb-12">
              {advantages.map((item, index) => (
                <div key={index} className="flex items-start gap-5 md:gap-6">
                  {/* Red Icon Wrapper */}
                  <div className="flex-shrink-0 w-14 h-14 md:w-[60px] md:h-[60px] rounded-full bg-[#E41B13] flex items-center justify-center">
                    <img src="/moto/accorLubricants/abtlist1.png" alt="icon" className="w-7 h-7 md:w-8 md:h-8 object-contain"/>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex flex-col pt-0.5 md:pt-1">
                    <h3 className="text-[16px] md:text-[18px]   font-semibold oxanium text-[#484848] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#484848] exo2 text-[14px] md:text-[16px]   leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Button href="#">Discover Our Journey</Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full h-full min-h-[500px] xl:min-h-[700px] relative xl:col-span-5" data-aos="fade-left">
            <div className="absolute inset-0 shadow-xl overflow-hidden">
              <img 
                src="/moto/accorLubricants/about.jpg" 
                alt="ACCOR Exhibition Booth" 
                className="w-full h-full object-cover object-center"
                
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
