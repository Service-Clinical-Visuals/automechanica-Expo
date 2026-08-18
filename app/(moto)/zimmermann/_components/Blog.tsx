"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Container from "./Container";

import "swiper/css";
import "swiper/css/pagination";

const posts = [
  {
    img: "/moto/zimmermann/blog/1.png",
    day: "8",
    month: "May",
    year: "2026",
    title: "Brake Kit Z for Mercedes Sprinter and e-Sprinter",
    description:
      "The complete kits combine Zimmermann brake discs, brake pads and accessories, thus simplifying the repair process.",
  },
  {
    img: "/moto/zimmermann/blog/2.png",
    day: "16",
    month: "Apr",
    year: "2026",
    title: "NLS 3: Podium Finish for Team Zimmermann",
    description:
      "The driver team drove the #900 Porsche 992 GT3 Cup to second place in the highly competitive CUP2 class.",
  },
  {
    img: "/moto/zimmermann/blog/3.png",
    day: "22",
    month: "Mar",
    year: "2026",
    title: "NLS 2 Pole Position in the PETN CUP2",
    description:
      "The trio of drivers collected valuable points for the PETN championship at the start of the new season.",
  },
  {
    img: "/moto/zimmermann/blog/4.png",
    day: "22",
    month: "Jan",
    year: "2026",
    title: "Euro 7 for Brake Discs Put to the Test",
    description:
      "Even during the ongoing negotiations for EURO7, we are developing our own solutions for brake discs.",
  },
  {
    img: "/moto/zimmermann/blog/5.png",
    day: "07",
    month: "Oct",
    year: "2025",
    title: "Championship Title Already Won in the Penultimate Race",
    description:
      "Zimmermann Porsche now has an unassailable lead in the PRO/AM points standings of the PETN Cup 2 class.",
  },
  {
    img: "/moto/zimmermann/blog/6.png",
    day: "15",
    month: "Sep",
    year: "2025",
    title: "NLS 7 and 8: Successful Weekend",
    description:
      "In the PETN CUP2 Pro/Am category, the team achieved two second places with the Porsche 992 GT3 Cup (#900).",
  },
];

export default function Blog() {
  return (
    <section className="relative w-full bg-[#f4f4f4] py-16 md:py-24" id="blog">
      <Container>
        <div className="flex flex-col items-center text-center mb-14" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3.5 h-3.5 bg-secondary shrink-0" />
            <h2 className="heading uppercase">What&apos;s New at Zimmermann</h2>
          </div>
          <p className="content max-w-[1300px]">
            Discover the latest stories from Otto Zimmermann&mdash;from advanced braking
            technologies and product innovations to motorsport highlights and company updates.
            Follow our journey as we continue to deliver precision-engineered solutions for
            drivers worldwide.
          </p>
        </div>

        <div
          className="blog-swiper-wrap"
          style={
            {
              "--swiper-pagination-color": "#FD0000",
              "--swiper-pagination-bullet-inactive-color": "#D1D5DB",
              "--swiper-pagination-bullet-inactive-opacity": "1",
            } as CSSProperties
          }
          data-aos="fade-up"
        >
          <Swiper
            modules={[Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              1280: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
            className="pb-14"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.title} className="h-auto">
                <div className="flex flex-col h-full border border-border overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                    <div className="absolute -bottom-8 right-4 bg-secondary text-white text-center px-4 py-3">
                      <div className="heading-white text-[24px]! leading-[28px]!">{post.day}</div>
                      <div className="heading-white text-[24px]! uppercase leading-[28px]!">
                        {post.month}
                      </div>
                      <div className="heading-white text-[24px]! leading-[28px]!">{post.year}</div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-6 pt-10">
                    <h3 className="subheading text-[24px]! uppercase leading-[28px]! mb-3">{post.title}</h3>
                    <p className="content mb-5 flex-1">
                      {post.description}
                    </p>

                    <Link
                      href="#"
                      className="group inline-flex items-center gap-2 heading text-secondary! text-[16px]! uppercase tracking-wide w-fit"
                    >
                      Read News
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
