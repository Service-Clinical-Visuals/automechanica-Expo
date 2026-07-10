import React from 'react';
import Link from 'next/link';
import Button from './Button';

export default function RecentNews() {
  const news = [
    {
      title: "AUTOMECHANIKA Frankfurt 2022",
      image: "/moto/muller-filter/news1.png",
      link: "#"
    },
    {
      title: "Equip Auto Paris 2019",
      image: "/moto/muller-filter/news2.png",
      link: "#"
    },
    {
      title: "AUTOMECHANIKA Frankfurt 2018",
      image: "/moto/muller-filter/news3.png",
      link: "#"
    }
  ];

  return (
    <section className="w-full text-white py-12 lg:py-20 bg-[#008F33]">
       <div className="custom-container px-6 lg:px-20 ">
        
        {/* Header Section */}
        <div className="text-center max-w-7xl mx-auto mb-12 lg:mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-1.5 h-10 lg:h-12 bg-[#F3DD01] rounded-full"></div>
            <h2 className="section-title font-bold font-chakra  tracking-wide">View Our Recent News</h2>
          </div>
          <p className="section-text leading-[1.6] font-mulish font-semibold">
            With a rich history spanning over 40 years, we are proud to be at the forefront of OE filter innovation. As a trusted independent supplier in the European aftermarket, we continually enhance our product offerings to ensure the highest quality and performance standards for our customers.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 lg:gap-8 ">
          {news.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white border-2 border-[#F3DD01] rounded-2xl p-4 lg:p-5 flex flex-col items-center text-center shadow-xl transition-transform duration-300 hover:-translate-y-2 group ${
                index === 2 ? 'md:col-span-2 2xl:col-span-1 md:w-[calc(50%-12px)] lg:w-[calc(50%-16px)] 2xl:w-full md:mx-auto 2xl:mx-0' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full h-[220px] lg:h-[300px] rounded-xl overflow-hidden mb-6 shadow-inner border border-gray-100 bg-[#f8f9fa]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className={`sub-title font-bold font-chakra  mb-6 px-2 lg:px-4 ${index === 0 ? 'text-[#1e1e1e]' : 'text-gray-800'} group-hover:text-[#008F33] transition-colors duration-300 leading-tight`}>
                {item.title}
              </h3>
              <div className="mt-auto pb-2 w-full px-6 lg:px-8">
                <Button 
                  href={item.link} 
                  variant="yellow"
                  className="w-[70%] py-3 section-text font-semibold text-[#1e1e1e] shadow-[4px_4px_8px_rgba(0,0,0,0.25)]"
                >
                  View More
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
