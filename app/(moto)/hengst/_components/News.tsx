'use client";'
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const newsItems = [
  {
    img: "/moto/hengst/news/1.png",
    title:
      "Hengst SE Wins the 2026 Münsterland Marketing Award for Successful Business Transformation",
    description:
      "The jury recognized the transformation of this long-established Münster-based company from an automotive supplier to a specialized provider of solutions for protecting human health.",
    day: "22",
    month: "Jun",
    year: "2026",
  },
  {
    img: "/moto/hengst/news/2.png",
    title:
      "FILTECH 2026: Hengst presents industrial filtration solutions for people, machines and the environment",
    description:
      "Under the motto “Clean In. Clean Out. Clear Impact.” Hengst presents solutions for applications with high hygiene requirements as well as dust-intensive and sensitive industrial process.",
    day: "31",
    month: "Jan",
    year: "2026",
    objectPosition: "75% center",
  },
];

export default function News() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <Container>
        <img
            src="/moto/hengst/about/gear1.png"
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute bottom-40 -right-20 w-64 lg:w-80 pointer-events-none select-none -rotate-90"
        />
        <img
            src="/moto/hengst/05.png"
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute top-24 left-1 w-30 pointer-events-none select-none"
        />
      </Container>
      <Container className="relative z-10">
        {/* Heading row */}
        <div className="flex items-start justify-between flex-wrap gap-6 mb-6" data-aos="fade-up">
          <div className="flex items-start gap-4">

            <div>
              <h2 className="heading mb-2">News</h2>
              <p className="content">
                Driven by passion and inspired by progress, we continuously push boundaries.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center shrink-0" data-aos="fade-up" data-aos-delay="100">
            <a href="#" className="font-semibold px-12 py-3 bg-btncolor btntext">
              View All News
            </a>
            <span className="w-14 h-14 -ml-5 bg-white border-2 border-btncolor rotate-45 flex items-center justify-center shrink-0">
              <ArrowRight size={26} className="-rotate-45 text-primary" />
            </span>
          </div>
        </div>

        <hr className="border-t border-gray-200 mb-12" />

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {newsItems.map((item, i) => (
            <div
              key={item.title}
              className="relativ overflow-hidde"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="w-full mb-3 rounded-2xl shadow-lg border-1 border-green-200 aspect-[794/362] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                />
              </div>
              <div className="px-1">
                <h3 className="heading text-[18px]! font-semibold! text-[#000000]! mb-3">
                  {item.title}
                </h3>
                <p className="content mb-2 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-semibold! content">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item.day} <span className="text-btncolor!">{item.month}</span> {item.year}
                  </div>
                  <a
                    href="#"
                    className="w-11 h-11 bg-primary flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
                  >
                    <ArrowRight size={28} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
