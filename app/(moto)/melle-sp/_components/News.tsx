"use client";

import React from "react";
import { Image as ImageIcon, Calendar, User } from "lucide-react";
import Container from "./Container";
import Typography from "./Typography";

const posts = [
  {
    title: "Melle at Automechanika Frankfurt",
    description: "Melle Sp. z o.o. presented its latest professional detailing line and high-performance TEXAR lubricants at the world's leading trade show.",
    date: "June 25, 2026",
    author: "Melle Newsroom",
    placeholderLabel: "Event Exhibition Image",
  },
  {
    title: "Guide: Choosing the Right Engine Oil",
    description: "How viscosity indexes and manufacturer OEM specifications affect your engine's longevity. Learn how to decode the TEXAR lubricant labels.",
    date: "June 12, 2026",
    author: "Tech Support Team",
    placeholderLabel: "TEXAR Engine Oil Guide Image",
  },
  {
    title: "K2 Detailing Tips: Ultimate Car Wash",
    description: "Step-by-step instructions on achieving a swirl-free, mirror-like gloss using the dual bucket method and K2 ceramic wax formulas.",
    date: "May 28, 2026",
    author: "Detailing Lab",
    placeholderLabel: "Car detailing process Image",
  },
];

export default function News() {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="blog">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4" data-aos="fade-up">
          <Typography variant="h5" color="primary" weight="bold" className="uppercase tracking-widest text-sm">
            News & Blog
          </Typography>
          <Typography variant="h2" color="dark" weight="extrabold" className="leading-tight font-montserrat">
            Latest Car Care Insights
          </Typography>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => {
            return (
              <article
                key={post.title}
                className="flex flex-col h-full rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Image Placeholder Space */}
                <div className="w-full aspect-[16/10] border-b border-gray-100 bg-gray-50 flex flex-col items-center justify-center text-center p-6 transition-colors group-hover:bg-gray-100/50">
                  <div className="p-3 bg-white rounded-full shadow-sm text-gray-300 mb-3">
                    <ImageIcon size={22} strokeWidth={1.5} />
                  </div>
                  <Typography variant="small" color="muted" weight="semibold" className="text-[11px] uppercase tracking-wider">
                    {post.placeholderLabel}
                  </Typography>
                </div>

                {/* Content Box */}
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  {/* Meta (Date and Author) */}
                  <div className="flex items-center gap-4 text-gray-400 text-xs font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={13} />
                      <span>{post.author}</span>
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 flex-grow">
                    <Typography
                      variant="h4"
                      color="dark"
                      weight="bold"
                      className="text-lg font-montserrat group-hover:text-primary transition-colors line-clamp-2"
                    >
                      {post.title}
                    </Typography>
                    <Typography variant="body" color="body" className="text-[14px] leading-relaxed line-clamp-3">
                      {post.description}
                    </Typography>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-50 flex items-center">
                    <a
                      href="#blog"
                      className="text-primary font-montserrat font-bold text-xs uppercase tracking-wider hover:text-primary-hover flex items-center gap-1 transition-all group-hover:translate-x-0.5"
                    >
                      <span>Read Article</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
