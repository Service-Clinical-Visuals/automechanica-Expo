"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

const KnowledgeCenter = () => {
  const articles = [
    {
      image: "/moto/eurol/section75.png",
      title: "Critical large bearings and hydraulics in concrete..."
    },
    {
      image: "/moto/eurol/section76.png",
      title: "The cooling strategy of Volvo heavy duty engines"
    },
    {
      image: "/moto/eurol/section77.png",
      title: "How modern two- and four-stroke engines evolve"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="knowledge">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="max-w-5xl">
            <Typography variant="h2" color="dark" className="font-goldman mb-4 text-3xl md:text-4xl text-[#1A1A1A]">
              Knowledge center
            </Typography>
            <Typography variant="body" color="dark" className="font-albert  text-sm md:text-base leading-relaxed text-gray-600">
              We are happy to share our knowledge with you. Read background articles about Eurol, our products and our vision on developments in the lubricants industry.
            </Typography>
          </div>

          <div className="shrink-0 font-goldman">
            <Button text="See All Articles" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-[#F5F5F5] group cursor-pointer flex flex-col h-full hover:shadow-md transition-shadow duration-300">
              <div className="h-48 md:h-64 p-4 overflow-hidden mb-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className=" w-[93%] mx-auto px-4 h-px bg-black/30 mt-2 2xl:mt-5" />
              <div className="p-6 flex justify-between items-start grow gap-4 border-t border-gray-200">
                <Typography variant="h5" className="font-goldman text-primary text-lg leading-snug">
                  {article.title}
                </Typography>
                <div className="bg-secondary text-white border border-[#112C63] w-10 h-10 xl:h-12 xl:w-12 flex items-center justify-center shrink-0 hover:bg-secondary-hover transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default KnowledgeCenter;
