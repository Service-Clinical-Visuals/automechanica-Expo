"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Typography from "./Typography";
import Button from "./Button";

const Updates = () => {
  const newsData = [
    {
      id: 1,
      image: "/esan/news1.png",
      date: "12/05/2025",
      tag: "New Product",
      title: "Opel Insignia Battery",
      desc: "High-performance batteries for Opel Insignia, manufactured by Esan Akü, are designed to meet and exceed driver expectations with reliability, efficiency, and long-lasting performance.",
    },
    {
      id: 2,
      image: "/esan/news2.png",
      date: "07/09/2025",
      tag: "New Event",
      title: "Audi A3 Battery",
      desc: "Ensure reliable performance for your Audi A3 with high-quality batteries from Esan Akü. Designed for durability and consistent power, our batteries support smooth starts, advanced electronics, and long-lasting efficiency in all driving conditions.",
    },
    {
      id: 3,
      image: "/esan/news3.png",
      date: "11/07/2025",
      tag: "New Blog",
      title: "Opel Astra 1.3 Akü",
      desc: "High-performance batteries manufactured by Esan Akü for the Opel Astra 1.3 deliver powerful initial starting, a long service life, and reliable energy. They provide consistent performance even under demanding driving conditions, seamlessly supporting all of your vehicle's electrical systems.",
    },
  ];

  return (
    <section id="news" className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 xl:gap-14 min-[3800px]:gap-20">

        {/* Header Group */}
        <div className="flex flex-col items-center text-center gap-4 w-full xl:w-3/4 mx-auto" data-aos="fade-up">
          <Typography variant="h4" color="primary" className="font-bold tracking-wide">
            Latest Insights
          </Typography>
          <Typography variant="h2" color="dark" className="font-bold leading-snug">
            Stay Updated with Industry Trends
          </Typography>
          <Typography variant="p" color="dark" className="leading-relaxed mt-2 md:max-w-[80%] mx-auto opacity-80 min-[2100px]:text-lg min-[3800px]:text-2xl">
            Explore our latest articles, updates, and expert insights from the automotive industry. From product innovations to technical knowledge, stay informed with content designed to keep you ahead.
          </Typography>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-[2100px]:gap-10 min-[3800px]:gap-12">
          {newsData.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col bg-white border border-gray-200 rounded-md overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="w-full p-3 aspect-video min-[3800px]:aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 min-[2100px]:p-8 min-[3800px]:p-12 gap-5 flex-grow">
                {/* Meta */}
                <div className="flex items-center justify-between w-full">
                  <Typography variant="span" color="dark" className="text-sm min-[3800px]:text-xl opacity-60">
                    {item.date}
                  </Typography>
                  <div className="bg-primary text-white text-xs min-[3800px]:text-lg font-medium px-3 py-1 min-[3800px]:px-5 min-[3800px]:py-2 rounded-[4px]">
                    {item.tag}
                  </div>
                </div>

                {/* Title */}
                <Typography variant="h4" color="dark" className="font-bold">
                  {item.title}
                </Typography>

                {/* Description */}
                <Typography variant="p" color="dark" className="leading-relaxed opacity-80 flex-grow text-[15px] min-[2100px]:text-base min-[3800px]:text-xl">
                  {item.desc}
                </Typography>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-primary font-bold mt-2 min-[3800px]:mt-6 group-hover:text-primary transition-colors">
                  <span className="text-sm min-[3800px]:text-xl">Read More</span>
                  <ArrowRight className="w-4 h-4 min-[3800px]:w-6 min-[3800px]:h-6" strokeWidth={2} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="flex justify-center mt-4 min-[2100px]:mt-8" data-aos="fade-up">
          <Button text="Read All News" href="#news" variant="primary" showIcon={true} />
        </div>

      </div>
    </section>
  );
};

export default Updates;
