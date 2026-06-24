import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function LatestNews() {
  const newsList = [
    {
      id: 1,
      title: "Recap Of Log 'Indus - Harnes Express: A Day Of Career Exploration In Harnes!",
      image: "/moto/durandProduction/news1.png"
    },
    {
      id: 2,
      title: "A Successful First Seminar For The Delight Of Our Clients!",
      image: "/moto/durandProduction/news2.png"
    },
    {
      id: 3,
      title: "An Extraordinary Idea To Boost The Sales Of Our VALCO Products.",
      image: "/moto/durandProduction/news3.png"
    }
  ];

  return (
    <section className="w-full bg-[#0a0f18] py-16 md:py-24" id="news">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_auto_1.5fr] gap-8 lg:gap-10 xl:gap-12 relative">
          
          {/* Left Column: News List */}
          <div className="flex flex-col h-full" data-aos="fade-right">
            {/* Header */}
            <div className="flex justify-between items-end mb-8 md:mb-10 flex-shrink-0">
              <div className="flex flex-col items-stretch">
                <div className="w-full h-1 bg-[#FF131C] mb-1 md:mb-2"></div>
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl heading font-medium tracking-wider leading-none">
                  Latest News
                </h2>
              </div>
              <Button href="#">Learn More</Button>
            </div>

            {/* List Items */}
            <div className="flex flex-col flex-grow gap-4 md:gap-6">
              {newsList.map((news) => (
                <Link key={news.id} href="#" className="bg-white flex items-center p-4 gap-4 group hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="w-[100px] h-[100px] md:w-[120px] md:h-[95px] 2xl:w-[160px] 2xl:h-[120px] flex-shrink-0 border border-[#FF131C] bg-white">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                  </div>
                  {/* Title */}
                  <h3 className="text-[#1a1a1a] text-lg md:text-xl lg:text-2xl heading font-medium leading-snug flex-grow pr-2 group-hover:text-[#FF131C] transition-colors">
                    {news.title}
                  </h3>
                 
                  {/* Arrow Button */}
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF131C] rounded-full flex items-center justify-center text-white flex-shrink-0 mr-2 md:mr-4 group-hover:bg-red-700 transition-colors">
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Center Divider Line */}
          <div className="hidden xl:flex items-center justify-center h-full ">
            <div className="w-[1px] h-[100%] bg-white"></div>
          </div>

          {/* Right Column: Featured News */}
          <div className="bg-white border-2 border-[#FF131C] p-6 md:p-8 flex flex-col h-full mt-4 lg:mt-0" data-aos="fade-left">
            {/* Top row: Image & Title */}
            <div className="flex flex-col sm:flex-row gap-6 mb-6 md:mb-8">
              <div className="w-full sm:w-[30%] xl:w-[25%] flex-shrink-0 border border-[#FF131C]">
                <img src="/moto/durandProduction/news4.png" alt="EcoVadis Bronze Medal" className="w-full h-auto object-cover shadow-sm border border-gray-100" />
              </div>
              <div className="flex flex-col justify-start pt-2">
                 <h2 className="text-[#1a1a1a] text-2xl md:text-3xl lg:text-4xl heading font-medium tracking-wider leading-tight mb-2">
                  Durand Production Awarded The EcoVadis Bronze Medal!
                  <img src="/moto/durandProduction/medal.png" alt="EcoVadis Bronze Medal" className="inline-block w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 ml-2 -mt-1 md:-mt-2 object-contain align-middle" />
                </h2>
                <p className="text-[#4a4a4a] text-sm md:text-md paragraph leading-[1.8] font-medium">30 Jan</p>
              </div>
            </div>

            {/* Description */}
            <div className="flex-grow flex flex-col justify-center">
              <p className="text-[#4a4a4a] text-sm md:text-md paragraph leading-[1.8] font-normal mb-5">
                We Are Proud To Announce That Durand Production Has Been Awarded The EcoVadis Bronze
                Medal In Its First Participation In This Renowned CSR Assessment.
              </p>
              <p className="text-[#4a4a4a] text-sm md:text-md paragraph leading-[1.8] font-normal mb-3">
                EcoVadis Evaluates Companies Based On Four Key Criteria:
              </p>
              
              {/* Features List */}
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="text-lg">🌿</span> <p className="text-[#4a4a4a] text-sm md:text-md paragraph leading-[1.8] font-normal"> Environment</p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lg">🤝</span> <p className="text-[#4a4a4a] text-sm md:text-md paragraph leading-[1.8] font-normal">Social & Human Rights</p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lg">⚖️</span> <p className="text-[#4a4a4a] text-sm md:text-md paragraph leading-[1.8] font-normal"> Ethics</p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lg">🛒</span> <p className="text-[#4a4a4a] text-sm md:text-md paragraph leading-[1.8] font-normal"> Sustainable Procurement</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
