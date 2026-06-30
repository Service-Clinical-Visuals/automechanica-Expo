import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const ArrowUpRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export default function Events() {
  const eventsList = [
    {
      status: "Upcoming",
      title: "Automechanika Frankfurt 2026",
      date: "September 8 @ 8:00am – September 12 @ 5:00pm CEST",
    },
    {
      status: "Upcoming",
      title: "Automechanika Dubai 2026",
      date: "November 10 @ 8:00 a.m. – November 12 @ 5:00 p.m. CET",
    },
    {
      status: "Upcoming",
      title: "Automechanika Dubai 2026",
      date: "December 2 @ 8:00 a.m. – December 5 @ 5:00 p.m. CET",
    }
  ];

  return (
    <section className="w-full bg-[#f8faff] py-16 md:py-24 xl:py-32">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-0">
          
          {/* Left Column */}
          <div className="xl:col-span-5 flex flex-col justify-center xl:pr-10" data-aos="fade-right">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/moto/bluechem/arrow.png" 
                alt="Arrow Icon" 
                width={24} 
                height={24} 
                className="object-contain"
              />
              {/* Note: the screenshot shows "Engine Compatibility & Technical Approvals" here but the content is events */}
                <h2 className="text-[#0E4194] oswald font-semibold text-3xl md:text-4xl lg:text-[32px] 4xl:text-[36px]">
                Engine Compatibility & Technical Approvals
              </h2>
            </div>

            <p className="text-[#484848]  text-[15px] md:text-base text-center leading-relaxed font-medium oxanium mb-6 text-justify">
              Stay connected with our latest events, exhibitions, product showcases, and industry engagements. Our events section highlights key moments where innovation, expertise, and performance come together to create meaningful experiences for customers, partners, and automotive professionals.
            </p>

            <p className="text-[#484848]  text-[15px] md:text-base text-center leading-relaxed font-medium oxanium mb-10 text-justify">
              Join us as we connect with communities, introduce new technologies, share industry knowledge, and celebrate milestones that continue to shape the future of automotive performance and innovation.
            </p>

            <Button href="#news" text="View All News" />
          </div>

          {/* Vertical Divider (Hidden on mobile) */}
          <div className="hidden xl:block xl:col-span-1 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[90%] bg-gray-300"></div>
          </div>

          {/* Right Column - Events List */}
          <div className="xl:col-span-6 flex flex-col gap-6 xl:pl-6 justify-center mt-8 xl:mt-0">
            {/* Mobile Divider */}
            <div className="block xl:hidden w-full h-[2px] bg-gray-300 mb-4"></div>

            {eventsList.map((event, index) => (
              <div 
                key={index} 
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex items-center justify-between hover:shadow-md transition-shadow duration-300 group cursor-pointer"
              >
                <div className="flex-1 pr-4">
                  <div className="bg-[#0E4194] text-white text-[11px] md:text-xs font-normal px-8 py-1 rounded-full inline-block mb-3 oswald  tracking-wide group-hover:bg-[#ffffff] group-hover:text-[#0E4194] group-hover:border group-hover:border-[#0E4194]">
                    {event.status}
                  </div>
             
                  <h3 className="text-[#000000] oswald font-medium text-xl md:text-2xl mb-2 tracking-wide group-hover:text-[#0E4194]">
                    {event.title}
                  </h3>
                  <p className="text-[#0E4194] text-[13px] md:text-[14px] font-medium oxanium">
                    {event.date}
                  </p>
                </div>
                <button className="bg-[#0E4194] group-hover:bg-[#0a3170] transition-colors w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                  <ArrowUpRightIcon />
                </button>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
