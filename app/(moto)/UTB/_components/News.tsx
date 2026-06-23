"use client";

import React from "react";
import Container from "./Container";
import { Calendar } from "lucide-react";
import Typography from "./Typography";

const News = () => {
  const newsItems = [
    {
      title: "UTB present at Automechanika Shanghai 2026",
      date: "Wednesday 1 October 2025",
      desc: "UTB will participate for the second time at Automechanika Shanghai. Asia's largest automotive trade fair. From 26 to 29 November 2025, we will showcase our latest generation of lubricants, greases and fuel solutions in Hall 2.2 - Booth M23.",
      link: "#",
      isActive: true, // blue background
    },
    {
      title: "Sponsorship UTB met Ola Jaeger autodrifting team",
      date: "Thursday 27 April 2023",
      desc: "UTB is ingestapt bij het drifting team van Ola Jaeger in Noorwegen. Ola Jaeger is een auto drifter met hoge ambities in de Formula Drift. Hij rijdt wedstrijden in de VS en Scandinavië. De eerste wedstrijd is gereden op het stratencircuit van Long Beach in de VS. Hij is nummer 21 geworden.",
      link: "#",
      isActive: false,
    },
    {
      title: "UTB present at Automechanika Shanghai 2026",
      date: "Wednesday 1 October 2025",
      desc: "UTB will participate for the second time at Automechanika Shanghai. Asia's largest automotive trade fair. From 26 to 29 November 2025, we will showcase our latest generation of lubricants, greases and fuel solutions in Hall 2.2 - Booth M23.",
      link: "#",
      isActive: false,
    },
    {
      title: "Meest voorkomende vragen over koelvloeistof en antivries",
      date: "Tuesday 4 August 2020",
      desc: "Antivries is een mengsel van Mono Ethyleen Glycol (MEG) of Mono Propyleen Glycol (MPG) met het juiste additievenpakket en kleurstof. Waaruit bestaat koelvloeistof?",
      link: "#",
      isActive: false,
    },
  ];

  return (
    <section className="py-20 bg-white" id="news">
      <Container>
        {/* Top Header Row */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-16 gap-8">

          {/* Left Title */}
          <div className="space-y-4" data-aos="fade-right" data-aos-duration="1000">
            <Typography variant="h2" color="dark" weight="semibold" className="italic">
              Discover Our Latest Updates
            </Typography>
            <div className="flex items-center gap-4">
              <div className="w-[20%] rounded h-1 bg-secondary"></div>
              <Typography variant="h4" color="primary" className="italic">
                Our Recent Blogs
              </Typography>
            </div>
          </div>

          {/* Right Title (Image) */}
          <div className="xl:text-right" data-aos="fade-left" data-aos-duration="1000">
            <img
              src="/moto/UTB/heading7.png"
              alt="Our News"
              className="h-12 md:h-17 lg:h-18 w-auto object-contain object-right"
            />
          </div>

        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className={`p-8 flex flex-col justify-between min-h-[250px] shadow-sm transition-transform hover:scale-[1.01] ${item.isActive ? "bg-primary text-white" : "bg-[#f5f5f5] text-dark"
                }`}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div>
                <Typography variant="h5" color={item.isActive ? "white" : "dark"} weight="bold" className="mb-3 italic">
                  {item.title}
                </Typography>

                <div className={`flex items-center gap-2 text-md font-semibold mb-4 ${item.isActive ? "text-white" : "text-black"}`}>
                  <Calendar size={16} className={item.isActive ? "text-secondary" : "text-secondary"} />
                  <span>{item.date}</span>
                </div>

                <Typography variant="small" color={item.isActive ? "white" : "muted"} className="mb-6">
                  {item.desc}
                </Typography>
              </div>

              <div>
                <a
                  href={item.link}
                  className={`text-md font-bold italic underline decoration-1 underline-offset-4 hover:opacity-80 transition-opacity ${item.isActive ? "text-white" : "text-primary"
                    }`}
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default News;
