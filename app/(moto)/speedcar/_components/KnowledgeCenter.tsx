"use client";

import React from "react";
import Container from "./Container";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    image: "/moto/speedcar/news1.png",
    title: "Symptoms of overheated engine oil",
    date: "August 11 2025",
  },
  {
    image: "/moto/speedcar/news2.png",
    title: "New! SPEEDCAR Brake Cleaner",
    date: "August 11 2025",
  },
  {
    image: "/moto/speedcar/news3.png",
    title: "SpeedCar Lithium Grease ŁT 43",
    date: "August 11 2025",
  },
];

const KnowledgeCenter = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="news">
      <Container>

        {/* Header Row */}
        <div className="flex items-start justify-between mb-10">
          <div data-aos="fade-right">
            <h2 className="heading">
              Our News &amp; Articles
            </h2>
            <div className="h-[3px] w-50 bg-primary mt-2" />
          </div>
          <a
            href="#news"
            data-aos="fade-left"
            data-aos-delay="150"
            className="inline-block bg-primary px-3 py-2 content-white font-bold hover:bg-primary/90 transition-colors shrink-0"
          >
            View All News
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 120} className="flex flex-col group cursor-pointer">
              {/* Image */}
              <div className="w-full aspect-[530/323] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title + Arrow + Date */}
              <div className="flex items-start justify-between mt-4">
                <span className="content text-[20px]! font-semibold">
                  {article.title}
                </span>
                <div className="bg-primary text-white w-10 h-10 flex items-center justify-center shrink-0 ml-3 hover:bg-primary/90 transition-colors">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <span className="font-medium content -mt-2">{article.date}</span>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default KnowledgeCenter;
