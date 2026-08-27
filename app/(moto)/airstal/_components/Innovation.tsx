import React from "react";
import Typography from "./Typography";
import Link from "next/link";

export default function Innovation() {
  const cards = [
    {
      image: "/moto/airstal/complete1.png",
      title: "We are in TECDOC",
      date: "days ago",
      text: "Discover the new products in the patient positioning category",
    },
    {
      image: "/moto/airstal/complete2.png",
      title: "Airstal is a member of the MACS community",
      date: "10/1/2019",
      text: "We are pleased to announce that Airstal",
    },
    {
      image: "/moto/airstal/complete3.png",
      title: "GDPR - Personal Data Protection Regulation",
      date: "5/5/2018",
      text: "Dear Customer, On 25 May 2018, Regulation",
    },
    {
      image: "/moto/airstal/complete4.png",
      title: "Airstal Business Gazelle 2013",
      date: "days ago",
      text: "We are delighted to announce that Airstal has once again been awarded the Business",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-primary text-white" data-aos="fade-up">
      <div className="custom-container flex flex-col items-center">
        <Typography variant="h1" color="white" weight="bold" className="text-center font-primary mb-6">
          Latest Innovations in Air Conditioning Technology</Typography>

        <div className="w-[50%]  h-px bg-white/30 mb-6"></div>

        <Typography variant="p" color="white" className="text-center max-w-full lg:max-w-[85%] leading-relaxed mb-12 ">
          Airstal offers a comprehensive range of automotive air conditioning products designed for performance, durability, and efficiency. From premium compressors and replacement parts to oils, chemicals, and refrigerants, every product meets strict quality standards, ensuring dependable operation across a wide range of vehicles. Whether for maintenance, repair, or system replacement, Airstal delivers trusted solutions that keep air conditioning systems performing at their best.
        </Typography>

        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-6 w-full">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col bg-white rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="w-full p-2 sm:p-4 pb-0">
                <div className="w-full aspect-square sm:aspect-video md:aspect-[4/3] xl:aspect-[5/4] shadow-md sm:shadow-xl overflow-hidden rounded-[12px] sm:rounded-xl relative">
                  <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="p-3 sm:p-6 flex flex-col flex-1 text-left">
                <Typography variant="h6" color="dark" weight="bold" className="font-primary leading-tight mb-1 sm:mb-2 min-h-[40px] sm:min-h-[48px] text-[13px] sm:text-base">
                  {card.title}
                </Typography>
                <Typography variant="span" color="muted" className="text-[10px] sm:text-sm mb-2 sm:mb-4">
                  {card.date}
                </Typography>
                <Typography variant="p" color="muted" className="text-[11px] sm:text-sm leading-relaxed mb-2 sm:mb-3 flex-1 line-clamp-2 sm:line-clamp-none">
                  {card.text}
                </Typography>
                <Link href="#" className="inline-block border-b border-[#4E1E2D] pb-0.5 text-[#4E1E2D] text-md font-bold w-fit hover:opacity-80 transition-opacity mt-auto">
                  Read More &gt;&gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
