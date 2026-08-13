import React from 'react';
import Typography from './Typography';
import Button from './Button';

export default function News() {
  const newsItems = [
    {
      id: 1,
      image: "/moto/veneporte/news1.png",
      date: "11.2025",
      title: "Veneporte Is At The Belém Palace For The Second Year As A Finalist For The COTEC-BPI SME Innovation Award"
    },
    {
      id: 2,
      image: "/moto/veneporte/news2.png",
      date: "11.2025",
      title: "Veneporte Among The 6 Finalists Of The 21st Edition Of The COTEC-BPI SME Innovation Award"
    },
    {
      id: 3,
      image: "/moto/veneporte/news3.png",
      date: "10.2025",
      title: "Distinguished As SME Excellence 2024"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-[url('/moto/veneporte/bg1.jpg')] bg-cover bg-center bg-[#F8F9FA]">

      <div className="custom-container px-4 md:px-8 max-w-[1920px] mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6  pb-6 relative">
          <Typography variant="h2" color="secondary" className="font-bold relative pb-6 mb-[-24px]" data-aos="fade-right" data-aos-duration="800">
            Our Latest News
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary rounded-full"></span>
          </Typography>
          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
            <Button text="View All News" variant="primary" showIcon={true} />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 md:gap-8">
          {newsItems.map((news, index) => (
            <div key={news.id} className="bg-primary rounded-xl overflow-hidden flex flex-col p-4 sm:p-6 shadow-xl transition-transform hover:-translate-y-2 duration-300 group" data-aos="zoom-in-up" data-aos-delay={100 + (index * 150)} data-aos-duration="800">
              <div className="w-full aspect-[4/3] rounded-lg mb-6 overflow-hidden relative">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center flex flex-col items-center flex-grow">
                <Typography variant="h5" color="white" font='poppins' className="mb-3 font-bold tracking-wider text-sm">
                  {news.date}
                </Typography>
                <Typography variant="h3" color="white" weight='medium' className="mb-6 font-bold leading-snug">
                  {news.title}
                </Typography>
                <div className="mt-auto flex items-center justify-center gap-2 text-white hover:opacity-80 transition-opacity cursor-pointer">
                  <Typography variant="h5" color='white' font='oxanium' weight='bold' className=" underline text-sm tracking-wide">
                    View More
                  </Typography>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m12 16 4-4-4-4" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
