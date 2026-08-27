"use client";

import React from "react";
import Link from "next/link";

export default function Partners() {
  const newsItems = [
    {
      image: "/moto/orijin/partner1.png",
      title: "2019 First Aid Training",
      desc: "Orjin Automotive conducted first aid training for its employees, combining theoretical and practical sessions to enhance workplace safety and identify certified first responders."
    },
    {
      image: "/moto/orijin/partner2.png",
      title: "R&D DISH",
      desc: "Orjin Automotive organized a dinner with its young R&D team to appreciate their contributions, with Chairman Kadri ÖZTÜRK expressing gratitude for their dedication and efforts."
    },
    {
      image: "/moto/orijin/partner3.png",
      title: "2019 Support for Sports and Athletes",
      desc: "Orjin Automotive continues to support athlete Yasemin Hamamcı, celebrating her achievements and wishing her continued success in marathon running."
    }
  ];

  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <h2 className="section-title oswald-font font-semibold text-[#272727] mb-4">
            Latest News & Updates
          </h2>
          <p className="font-regular text-[#4B5563] rubik-font section-text max-w-3xl mx-auto leading-relaxed">
            Discover the latest updates, achievements, and developments from Orjin Automotive as we continue to deliver innovative and reliable automotive solutions.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" data-aos="fade-up" data-aos-delay="100">
          {newsItems.map((news, index) => (
            <div key={index} className="flex flex-col bg-white border border-[#E4E4E4] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full p-2">

              {/* Image */}
              <div className="w-full h-full rounded-2xl overflow-hidden mb-5">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">News Image</div>' }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow px-2">
                <h3 className="oswald-font font-semibold text-[#272727] card-title mb-3 leading-snug">
                  {news.title}
                </h3>
                <p className="text-[#4B5563] rubik-font font-regular card-text leading-relaxed mb-6">
                  {news.desc}
                </p>
                <div className="mt-auto flex justify-end mb-2">
                  <Link href="#" className="text-[#F39200] section-text rubik-font underline font-regular hover:underline">
                    Read More
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
