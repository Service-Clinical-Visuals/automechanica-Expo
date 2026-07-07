"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const newsItems = [
  {
    category: "Automotive",
    date: "10.5.2026",
    title: "Silicone Ignition Boots",
    status: "Completed",
  },
  {
    category: "Automotive",
    date: "21.5.2025",
    title: "New expanded range of bulbs",
    status: "Completed",
  },
  {
    category: "General",
    date: "3.12.2025",
    title: "TESLA BLATNÁ, a.s.",
    status: "Completed",
  }
];

export default function News() {
  return (
    <section id="news" className="py-16 md:py-24 bg-[#F4F6FBD6]">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-12 items-center">

          {/* News Items Left */}
          <div className="col-span-1 xl:col-span-7 flex flex-col gap-4 order-2 xl:order-1" data-aos="fade-right">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-sm border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-shadow hover:shadow-md group cursor-pointer"
              >
                {/* Left part of item */}
                <div className="flex flex-col gap-2">
                  <Typography variant="h3" color="dark" className="text-gray-800 group-hover:text-primary transition-colors mb-2">
                    {item.title}
                  </Typography>

                  <div className="flex items-center gap-6">
                    <Typography variant="p" color="dark" className="text-[16px] text-primary font-medium">
                      {item.category}
                    </Typography>
                    <Typography variant="p" color="dark" className="text-[16px] text-gray-500 flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      {item.date}
                    </Typography>
                  </div>
                </div>

                {/* Right part of item */}
                <div className="flex items-center gap-4 md:gap-8 self-end md:self-auto">
                  <div className="px-6 py-2 border border-primary/40 rounded-sm bg-white">
                    <Typography variant="h6" color="dark" className="font-semibold text-primary">
                      {item.status}
                    </Typography>
                  </div>
                  <ArrowRight className="text-gray-900 w-6 h-6 group-hover:text-primary transition-colors" />
                </div>
              </div>
            ))}
          </div>

          {/* Text Content Right */}
          <div className="col-span-1 xl:col-span-5 flex flex-col order-1 xl:order-2 pl-0 xl:pl-10 relative" data-aos="fade-up-left" data-aos-duration="1200" data-aos-delay="200">

            <div className="absolute left-0 top-0 bottom-0  w-[2.5px] rounded bg-gray-400 hidden xl:block"></div>

            <div className="mb-1">
              <div className="flex gap-1.5 mb-[-10] ml-1">
                <div className="w-2.5 h-2.5 bg-primary"></div>
                <div className="w-2.5 h-2.5 bg-primary"></div>
                <div className="w-2.5 h-2.5 bg-primary"></div>
                <div className="w-2.5 h-2.5 bg-primary"></div>
                <div className="w-2.5 h-2.5 bg-primary"></div>
              </div>
            </div>

            <Typography variant="h2" color="dark" className=" mb-6 text-gray-900 leading-tight">
              News
            </Typography>

            <div className="flex flex-col gap-5 mb-10">
              <Typography variant="p" color="dark" className="text-gray-600 leading-relaxed text-[16px]">
                Stay connected with our latest events, exhibitions, product showcases, and industry engagements. Our events section highlights key moments where innovation, expertise, and performance come together to create meaningful experiences for customers, partners, and automotive professionals.
              </Typography>
              <Typography variant="p" color="dark" className="text-gray-600 leading-relaxed text-[16px]">
                Join us as we connect with communities, introduce new technologies, share industry knowledge, and celebrate milestones that continue to shape the future of automotive performance and innovation.
              </Typography>
            </div>

            <div className="mt-2">
              <Button text="Explore More" variant="hero" showIcon={true} />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
