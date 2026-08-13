import Image from "next/image";
import Container from "./Container";

const newsItems = [
  {
    title: "Technilub à Automechanika Dubai",
    desc: "Technilub at Automechanika Dubai: our international lubricant expertise",
  },
  {
    title: "2nd edition for Technilub at Automechanika Dubai",
    desc: "Technilub at Automechanika Dubai: our international lubricant expertise",
  },
  {
    title: "Sponsoring Clio Pela & Fun Meca Sport",
    desc: "Team Fun Meca Sport & Clio Pela X Technilub partners!",
  },
];


export default function News() {
  return (
    <section className="bg-white py-16">
      <Container>
        {/* Top row: heading + button */}
        <div className="flex items-start justify-between gap-4 mb-9">
          <div data-aos="fade-right">
            <h2 className="heading font-bold text-[#1a1a1a]">Our News</h2>
            <div className="mt-2 w-14 h-[3px] bg-[#c8102e]" />
          </div>
          <div data-aos="fade-left" data-aos-delay="150">
            <button className="bg-primary hover:bg-primary/90 transition-colors content-white font-medium px-6 py-1.5 rounded-lg">
              View All News
            </button>
          </div>
        </div>

        <hr className="border-[#00000073] mb-16" />

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <div key={item.title} data-aos="fade-up" data-aos-delay={i * 120} className="flex flex-col">
              {/* Image */}
              <div className="w-full aspect-[16/10] overflow-hidden rounded-[15px]">
                <Image
                  src="/moto/technilub/news.png"
                  alt={item.title}
                  width={560}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-2 pt-4">
                <a href="#" className="heading2 text-[#24397E]! text-[28px]! font-bold leading-[36px]! hover:underline">
                  {item.title}
                </a>
                <p className="content text-[19px]! leading-relaxed">{item.desc}</p>
                <a
                  href="#"
                  className="flex items-center content text-[#24397E] font-semibold mt-1"
                >
                  View More <Image src="/moto/technilub/arrow-right-circle.png" alt="arrow" width={24} height={24} className="w-6 h-6 ml-1.5 object-contain" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
