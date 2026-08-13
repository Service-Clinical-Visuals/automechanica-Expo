"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const events = [
  {
    title: "Automechanika Frankurt 2026",
    date: "8.9.2026 - 12.9.2026",
    image: "/moto/ifa/events/1.png",
    smallimage: "/moto/ifa/events/small1.png",
    description:
      "We are excited to follow the latest developments from the exhibition and explore emerging technologies that will influence the next generation of automotive products and services. Stay connected with us as we share key event highlights, industry trends, product innovations, and exclusive updates from Automechanika Frankfurt 2026 throughout the event.",
  },
  {
    title: "Autopromotec 2026",
    date: "26.5.2027 - 29.5.2027",
    image: "/moto/ifa/events/2.png",
    smallimage: "/moto/ifa/events/small2.png",
    description:
      "Autopromotec serves as a premier platform for showcasing cutting-edge innovations in workshop equipment, digital transformation, electric mobility, connected vehicles, tire technologies, sustainability, and advanced automotive services. The exhibition offers valuable opportunities for networking, business development, product launches, and knowledge sharing across the global automotive ecosystem.",
  },
  {
    title: "Automechanika Dubai",
    date: "10.12.2026 - 12.12.2026",
    image: "/moto/ifa/events/3.png",
    smallimage: "/moto/ifa/events/small3.png",
    description:
      "Automechanika Dubai continues to serve as a strategic gateway connecting the automotive aftermarket across the Middle East, Africa, Asia, and international markets. The event provides an ideal platform for discovering emerging industry trends, launching innovative products, and strengthening global business relationships.",
  },
];

export default function Events() {
  const [active, setActive] = useState(0);
  const current = events[active];

  return (
    <section className="relative bg-white py-16 md:py-24" id="events">
      <Container>
        {/* Heading row (mobile / tablet) */}
        <div
          className="flex xl:hidden items-center justify-between flex-wrap gap-4 mb-8"
          data-aos="fade-up"
        >
          <h2 className="heading flex items-center gap-3">
            <span className="text-primary text-[28px]">▶</span>
            Events
          </h2>

          <button
            style={{ clipPath: "polygon(0% 0%, calc(100% - 30px) 0%, 100% 50%, calc(100% - 30px) 100%, 0% 100%)" }}
            className="heading text-white! text-[18px]! inline-flex items-center gap-3 pl-8 pr-10 py-1.5 bg-primary font-semibold transition-opacity hover:opacity-90"
          >
            View All
            <ArrowRight size={26}/>
          </button>
        </div>

        <div className="flex w-full gap-6 xl:items-stretch">
          {/* Left: heading + selectable list (desktop) */}
          <div className="hidden xl:flex xl:w-[42%] flex-col gap-4">
            <div className="flex items-center justify-between gap-4 mb-4 mt-2" data-aos="fade-up">
              <h2 className="heading flex items-center gap-3">
                <span className="text-primary text-[28px] -mt-1">▶</span>
                Events
              </h2>

              <button
                style={{ clipPath: "polygon(0% 0%, calc(100% - 30px) 0%, 100% 50%, calc(100% - 30px) 100%, 0% 100%)" }}
                className="heading text-white! text-[18px]! inline-flex items-center gap-3 pl-8 pr-10 py-1.5 bg-primary font-semibold transition-opacity hover:opacity-90"
              >
                View All
                <ArrowRight size={26}/>
              </button>
            </div>

            {events.map((event, i) => (
              <div key={event.title} data-aos="fade-up" data-aos-delay={i * 100}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`flex border-[3px] items-center gap-4 p-2 pl-10 pr-6 shadow-md shadow-[#0000003D] border text-left w-full transition-colors duration-300 cursor-pointer ${
                    active === i
                      ? "border-primary"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={event.smallimage}
                    alt={event.title}
                    className="w-[90px] h-[90px] rounded-lg object-contain"
                  />
                  <div className="flex-1 ml-2">
                    <h3 className="heading font-semibold! text-[24px]! text-[#212121]!">
                      {event.title}
                    </h3>
                    <p className="content font-medium! text-[16px]! text-[#212121]!">{event.date}</p>
                  </div>
                  <span className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <ArrowRight size={25} className="text-white" />
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Right: active event display (desktop) */}
          <div
            className="hidden xl:flex xl:w-[58%] aspect-1620/472 h-[472px] items-center"
            data-aos="fade-left"
          >
            <img
              src={current.image}
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover "
            />
            <div className="relative z-10 h-full flex flex-col p-10 justify-center">
              <h3 className="heading-white text-[24px]! leading-[100%]! mb-6">
                {current.title}
              </h3>
              <p className="heading-white font-medium! text-[18px]! leading-[28px]! mb-12 w-[95%]">
                {current.description}
              </p>
              <Link
                href="#"
                className="heading-white text-[16px]! underline font-bold! w-fit"
              >
                Read More...
              </Link>
            </div>
          </div>

          {/* Mobile / tablet: stacked full cards */}
          <div className="flex xl:hidden flex-col gap-6">
            {events.map((event, i) => (
              <div key={event.title} data-aos="fade-up" data-aos-delay={i * 100}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`relative overflow-hidden aspect-video w-full text-left transition-colors duration-300 ${
                    active === i ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="relative z-10 p-6">
                    <h3 className="heading-white text-[20px]! leading-[26px]! mb-3">
                      {event.title}
                    </h3>
                    <p className="content-white text-[14px]! leading-[24px]! mb-3">
                      {event.description}
                    </p>
                    <span className="content-white text-[14px]! underline font-semibold">
                      Read More...
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
