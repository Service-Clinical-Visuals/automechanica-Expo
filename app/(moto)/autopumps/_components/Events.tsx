import React from "react";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Autopumps UK at Automechanika Frankfurt 2026",
    image: "/moto/autopumps/e1.png",
    link: "/autopumps/events/automechanika-2026"
  },
  {
    id: 2,
    title: "Frankfurt 2024: A Milestone Moment",
    image: "/moto/autopumps/e2.png",
    link: "/autopumps/events/frankfurt-2024"
  },
  {
    id: 3,
    title: "Premium AP Hydraulic Pumps for Heavy-Duty...",
    image: "/moto/autopumps/e3.png",
    link: "/autopumps/events/hydraulic-pumps"
  }
];

export default function Events() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#037CAF] to-[#0B274A]">
      <div className="custom-container px-6 xl:px-16">
        
        {/* Top Section */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16">
          <h2 className="section-title text-white mb-6">
            Our Events
          </h2>
          <p className="section-text text-white leading-relaxed">
            Keep up with the latest from Autopumps UK through our exhibitions, industry events, product launches, and company milestones. Discover how we're showcasing innovative products, strengthening partnerships, and connecting with customers across the global automotive aftermarket. Stay informed about our latest achievements, industry insights, and the events that continue to drive our commitment to quality, precision, and engineering excellence.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id}
              className={`bg-white flex flex-col h-full shadow-2xl transition-transform hover:-translate-y-2 duration-300 ${
                index === 2 
                  ? 'md:col-span-2 md:w-[calc(50%-16px)] md:justify-self-center xl:col-span-1 xl:w-full xl:justify-self-auto' 
                  : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-4 md:p-5 flex flex-col h-full">
                {/* Card Image */}
                <div className="w-full h-full mb-6">
                   <img 
                     src={event.image} 
                     alt={event.title} 
                     className="w-full h-full object-cover"
                   />
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-grow justify-between">
                  <h3 className="card-text text-[#2a2a2a] font-semibold mb-6 leading-tight">
                    {event.title}
                  </h3>
                  <div>
                    <Link 
                      href={event.link}
                      className="text-[#064da1] font-semibold btn-text hover:text-[#00a3e0] transition-colors inline-block tracking-wide group"
                    >
                      <span className="underline decoration-2 underline-offset-4">Read More</span>
                      <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">{'>>'}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
