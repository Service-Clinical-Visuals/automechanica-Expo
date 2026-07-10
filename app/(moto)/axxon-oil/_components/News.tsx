"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const news = [
  {
    image: "/moto/axon-oil/news/1.png",
    date: "18.09.2025",
    title: "AEO-C Certification Achieved: a European",
    href: "#",
  },
  {
    image: "/moto/axon-oil/news/2.png",
    date: "27.05.2025",
    title: "AxxonOil takes you to Equip Auto Paris 2025",
    href: "#",
  },
  {
    image: "/moto/axon-oil/news/3.png",
    date: "03.09.2025",
    title: "AxxonOil @ Autopromotec",
    href: "#",
  },
];

export default function News() {
  return (
    <section className="bg-[#F5F5F5] py-16 md:py-20">
      <Container>
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8" data-aos="fade-up">
          <div>
            <h2 className="heading mb-3">Latest News &amp; Updates</h2>
            <p className="content max-w-[950px]">
              Stay informed with the latest company announcements, industry insights, product
              launches, upcoming events, and important milestones. Explore how we&rsquo;re driving
              innovation, strengthening partnerships, and delivering excellence across global
              markets.
            </p>
          </div>

          <Link
            href="#"
            className="flex max-w-[180px] items-center relative shrink-0 group bg-primary text-white pl-6 pr-16 py-1.5"
          >
            <span className="navlink text-white! whitespace-nowrap">View All News</span>
            <span className="absolute right-[-25px] top-1/2 -translate-y-1/2 w-11 h-12 shrink-0">
              <span className="absolute inset-[2px] bg-white [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
              <span className="absolute inset-[4.5px] bg-primary [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] flex items-center justify-center">
                <ArrowRight size={34} className="text-white transition-transform group-hover:translate-x-0.5" />
              </span>
            </span>
          </Link>
        </div>

        <div className="h-px bg-gray-200 mb-10" />

        {/* News cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <div
              key={item.title}
              className="bg-white flex flex-col p-4"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="relative w-full aspect-[4/3]">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-1 pt-3 flex flex-col gap-2">
                <span className="content text-[14px]! text-gray-500">{item.date}</span>
                <Link
                  href={item.href}
                  className="heading text-primary! text-[18px]! leading-snug! hover:opacity-80 transition-opacity"
                >
                  {item.title}
                </Link>
                <Link
                  href={item.href}
                  className="text-[#FFCB05] text-[14px]! font-semibold underline underline-offset-2 mt-1"
                >
                  Read More&gt;&gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
