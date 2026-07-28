"use client";
import React from "react";

export default function News() {
  const newsItems = [
    {
      id: 1,
      image: "/moto/autopartbattery/nw1.png",
      dateDay: "15",
      dateMonth: "Jun",
      title: "AUTOMECHANIKA FRANKFURT 2026",
      excerpt: "The next edition of Automechanika Frankfurt, Europe's largest automotive technology event, is coming up in September......",
      link: "#"
    },
    {
      id: 2,
      image: "/moto/autopartbattery/nw2.png",
      dateDay: "26",
      dateMonth: "Jan",
      title: "Capturing the 2026 Dakar Classic",
      excerpt: "The Kamena Rally Team brought home the highest trophy from the 2026 DAKAR CLASSIC Rally. As a partner.......",
      link: "#"
    },
    {
      id: 3,
      image: "/moto/autopartbattery/nw3.png",
      dateDay: "17",
      dateMonth: "Jan",
      title: "Poland's Historic Dakar Victory",
      excerpt: "For the forming and punching of sheet material, a classic emulsion bath is still often used. However, you can save a....",
      link: "#"
    },
    {
      id: 4,
      image: "/moto/autopartbattery/nw4.png",
      dateDay: "02",
      dateMonth: "Jan",
      title: "DAKAR CLASSIC RACE 2026",
      excerpt: "The Kamena Rally Team, comprised of Tomasz Białkowski, Dariusz Baśkiewicz, and Adam Grodzki, has just embarked......",
      link: "#"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white w-full overflow-hidden border-b border-gray-100">
      <div className="custom-container flex flex-col items-center">
        
        {/* Section Title */}
        <h2 
          className="oswald-font text-[#000000] section-title font-semibold  tracking-wide mb-4 text-center"
          data-aos="fade-up"
        >
          Latest News & Insights
        </h2>

        {/* Section Paragraph */}
        <p 
          className="lato-font text-[#333333] section-text font-normal max-w-7xl mx-auto mb-12 md:mb-16 leading-relaxed text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Stay informed with the latest AUTOPART news, product innovations, company updates, and industry insights. Discover our newest technologies, sustainability initiatives, and developments shaping the future of battery manufacturing.
        </p>

        {/* News Grid (4 Columns on Large Screens) */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {newsItems.map((news, idx) => (
            <div 
              key={news.id} 
              className="bg-white rounded-[22px] border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group h-full hover:-translate-y-1.5 relative"
            >
              {/* Image & Overlapping Badge Container */}
              <div className="relative w-full">
                <div className="w-full aspect-[4/3] overflow-hidden rounded-t-[22px] bg-gray-100">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Overlapping Date Badge */}
                <div className="absolute right-0 -bottom-7 bg-[#003876] text-white rounded-xl w-16 h-16 flex flex-col items-center justify-center shadow-lg z-20 border border-white/20">
                  <span className="oswald-font card-title1 font-normal leading-none">{news.dateDay}</span>
                  <span className="oswald-font card-title1 font-normal tracking-wider leading-none mt-0.5">{news.dateMonth}</span>
                </div>
              </div>

              {/* Content Area below Date Badge */}
              <div className="pt-10 px-6 pb-6 flex flex-col flex-grow justify-between text-left">
                <div>
                  <h3 className="oswald-font text-[#15468e] card-title font-normal mb-3 line-clamp-2 tracking-wide group-hover:text-[#EE2A35] transition-colors">
                    {news.title}
                  </h3>
                  
                  <p className="lato-font text-[#333333] section-text font-normal leading-relaxed mb-6 line-clamp-3">
                    {news.excerpt}
                  </p>
                </div>

                <a 
                  href={news.link} 
                  className="lato-font text-[#15468e] font-semibold section-text self-end hover:underline tracking-wider  mt-auto flex items-center gap-1 group-hover:text-[#EE2A35] transition-colors underline-offset-2 underline"
                >
                  Read 
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
