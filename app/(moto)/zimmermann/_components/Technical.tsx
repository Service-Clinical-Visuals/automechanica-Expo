"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const resources = [
  {
    image: "/moto/zimmermann/technical/faq.png",
    icon: "/moto/zimmermann/technical/1.png",
    title: "FAQ",
    description: "Find answers to the most common questions about our products, installation and services.",
    linkText: "Learn More",
  },
  {
    image: "/moto/zimmermann/technical/downloads.png",
    icon: "/moto/zimmermann/technical/2.png",
    title: "Downloads",
    description: "Access catalogues, brochures, technical documents and installation guides.",
    linkText: "Explore Downloads",
  },
  {
    image: "/moto/zimmermann/technical/videos.png",
    icon: "/moto/zimmermann/technical/3.png",
    title: "Videos",
    description: "Watch product videos, installation guides and technical explanations from our experts.",
    linkText: "Watch Videos",
  },
  {
    image: "/moto/zimmermann/technical/measures.png",
    icon: "/moto/zimmermann/technical/4.png",
    title: "Measures to Reduce Noise",
    description: "Technical information and practical tips to reduce brake noise effectively.",
    linkText: "Learn More",
  },
  {
    image: "/moto/zimmermann/technical/webinars.png",
    icon: "/moto/zimmermann/technical/5.png",
    title: "Webinars",
    description: "Join our webinars and training sessions to expand your technical knowledge.",
    linkText: "View Webinars",
  },
  {
    image: "/moto/zimmermann/technical/complaint.png",
    icon: "/moto/zimmermann/technical/6.png",
    title: "Complaint Assessment Brake Disc",
    description: "Guidelines for assessing brake disc complaints and identifying causes.",
    linkText: "View Guidelines",
  },
];

export default function Technical() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24" id="technical">
      <Container>
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3.5 h-3.5 bg-secondary shrink-0" />
            <h2 className="heading uppercase">Technical Resources &amp; Support</h2>
          </div>
          <p className="content">
            Everything you need&mdash;from installation videos and technical documentation to
            expert training and troubleshooting resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {resources.map((item) => (
            <div
              key={item.title}
              className="border border-border overflow-hidden flex flex-col"
              data-aos="fade-up"
            >
              <div className="h-[180px] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <img src={item.icon} alt="" className="w-9 h-9 shrink-0 object-contain" />
                  <h3 className="subheading leading-[100%]!">{item.title}</h3>
                </div>

                <p className="content text-[16px]! mb-6 flex-1">{item.description}</p>

                <Link href="#" className="group flex items-center justify-between">
                  <span className="heading text-[18px]! uppercase tracking-wide text-secondary!">
                    {item.linkText}
                  </span>
                  <ArrowRight
                    size={32}
                    className="text-secondary transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
