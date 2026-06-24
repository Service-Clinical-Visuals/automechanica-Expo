import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button";

export default function Products() {
  const products = [
    {
      title: "ENGINE LUBRICANTS",
      image: "section4.png",
      hoverContent: [
        { subtitle: "PASSENGER CAR & LIGHT TRUCK ENGINE", text: "Engine lubricants specially formulated to deliver smooth performance, enhanced protection, and improved fuel efficiency for passenger cars and light trucks." },
        { subtitle: "HEAVY DUTY DIESEL & OFF - ROAD MACHINERY", text: "High-performance lubrication solutions developed for heavy-duty diesel engines and off-road equipment." },
        { subtitle: "AGRICULTURAL MACHINERY", text: "Advanced lubricants designed to support agricultural equipment with reliable protection and efficient performance." }
      ]
    },
    {
      title: "SMALL ENGINE LUBRICANTS",
      image: "section5.png",
      hoverContent: [
        { subtitle: "MOTORCYCLE & MARINE ENGINE", text: "Specially formulated lubricants designed to deliver reliable protection, smooth performance." },
        { subtitle: "TWO - STROKE ENGINE", text: "Advanced lubrication solutions developed for two-stroke engines to support cleaner operation, reduce wear." },
        { subtitle: "OUTBOARD ENGINE", text: "High-performance lubricants engineered for outboard engines to ensure reliable protection, efficient operation." }
      ]
    },
    {
      title: "MARINE LUBRICANTS",
      image: "section6.png",
      hoverContent: [
        { subtitle: "MARITIME TP 4030 / 4040", text: "High-performance marine lubricants developed to provide reliable protection, enhanced engine efficiency." },
        { subtitle: "MARITIME TP 3030 / 3040", text: "Advanced marine lubrication solutions engineered to support engine durability, reduce wear, and deliver dependable performance." },
        { subtitle: "MARITIME TP 1230 / 1240", text: "Premium marine lubricants formulated for consistent protection, operational efficiency, and long-lasting performance in challenging." }
      ]
    },
  ];

  return (
    <section className="py-20 md:py-32 w-full bg-white">
      <Container>
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12" data-aos="fade-up">
          {/* Title Section based on AboutUs style */}
          <div className="relative mb-1 flex flex-col items-start">
            {/* Cropped Number */}
            <div className="absolute top-0 left-0 h-[40px] md:h-[70px] overflow-hidden">
              <span className="font-bebas text-[80px] md:text-[140px] leading-none text-[#2B2B2B]">
                03
              </span>
            </div>

            {/* Heading */}
            <div className="pt-[40px] md:pt-[70px] relative z-10">
              <Typography
                variant="h2"
                color="primary"
                className="font-bebas tracking-wide leading-none"
              >
                OUR PRODUCTS
              </Typography>
            </div>
          </div>

          <Button text="EXPLORE PRODUCTS" variant="dark" />
        </div>



        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden border-[3px] border-primary cursor-default group max-w-[500px] mx-auto aspect-[5/2] md:aspect-[500/638]"
            >
              {/* Background Image */}
              <img
                src={`/moto/slider/${product.image}`}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-105"
              />

              {/* Title Bar (Always visible at bottom, fades out on hover on Desktop) */}
              <div className="absolute bottom-0 left-0 w-full h-[120px] z-10 flex flex-col justify-end pb-8 px-6 md:px-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 lg:group-hover:opacity-0">
                <Typography variant="h3" color="white" className="font-bebas tracking-widest uppercase mb-0 drop-shadow-lg leading-none">
                  {product.title}
                </Typography>
              </div>

              {/* Sliding Content Drawer (Desktop Only) */}
              <div className="absolute inset-0 z-20 flex-col pt-12 pb-8 px-6 md:px-8 bg-[#111111]/80 translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 ease-in-out hidden lg:flex">
                <div className="overflow-y-auto scrollbar-hide flex flex-col gap-6 h-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {product.hoverContent.map((hc, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <Typography variant="h4" color="white" className="font-bebas tracking-wider uppercase leading-none drop-shadow-md">
                        {hc.subtitle}
                      </Typography>
                      <Typography variant="lead" className="text-gray-300 text-[15px] leading-relaxed drop-shadow">
                        {hc.text}
                      </Typography>
                    </div>
                  ))}

                  {/* View More Link */}
                  <div className="mt-auto pt-4">
                    <Typography variant="h4" color="primary" className="font-bebas tracking-wider uppercase cursor-pointer hover:text-primary-hover transition-colors inline-block drop-shadow-md">
                      VIEW MORE
                    </Typography>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
