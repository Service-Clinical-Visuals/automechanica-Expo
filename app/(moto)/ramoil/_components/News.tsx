'use client';

import Container from "./Container";
import ParallelogramButton from "./ParallelogramButton";

const newsItems = [
  {
    img: "/moto/ramoil/news/news1.png",
    title: "Ra.M.Oil obtained the CRIBIS D&B Rating 1",
    date: "November 10, 2024",
  },
  {
    img: "/moto/ramoil/news/news2.png",
    title: "Ra.M.Oil's path with Carbon Disclosure Project",
    date: "June 23, 2024",
  },
  {
    img: "/moto/ramoil/news/news3.png",
    title: "Ra.M.Oil received the Ethics and Legality Award",
    date: "April 16, 2024",
  },
];

export default function News() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[100px]">

          {/* Header row */}
          <div className="flex items-center justify-between mb-6" data-aos="fade-up">
            <h2 className="heading text-[#00437A]">Latest news and updates</h2>
            <ParallelogramButton>Explore All News</ParallelogramButton>
          </div>

          <hr className="border-t border-gray-200 mb-10" />

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-4"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Image */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.background = "#e5e7eb";
                    }}
                  />
                </div>

                {/* Text */}
                <h3 className="heading text-[#00437A] text-[32px]! font-normal">{item.title}</h3>
                <p className="content text-gray-500 text-[18px] -mt-2">{item.date}</p>

                {/* Read More */}
                <div>
                  <ParallelogramButton size="sm">Read More</ParallelogramButton>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
