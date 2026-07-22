"use client";

import React, { useState, useRef } from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Products() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const categoriesData = [
    {
      id: "Motor oils",
      brandTitle: "Motor Oils Our Brands",
      logos: [
        "/moto/autochemi/icon1-1.png",
        "/moto/autochemi/icon1-2.png",
        "/moto/autochemi/icon1-3.png",
        "/moto/autochemi/icon1-4.png",
      ],
      infoTitle: "Comprehensive Engine Solutions",
      infoText: [
        "AutoChemie Bitterfeld GmbH combines both products of classic German recipes and new generation products developed on the basis of the discovery of the re-metallization effect. Special additives take care of vehicle parts and restore worn ones while driving. When creating formulas for our motor oils, we take into account all the variable performance characteristics: seasonality, driving mode, mileage, and age of the vehicle. This allows us to manufacture a range of oils for a specific vehicle.",
        "On the basis of multi-year researches, a fundamentally new formula of the motor oil was developed and introduced: it combines optimally basic oils and additive sets. Our assortment includes motor oils for passenger diesel and gasoline motors, as well as oils to protect commercial diesel motors."
      ]
    },
    {
      id: "Transmission oils",
      brandTitle: "Transmission Oils Our Brands",
      logos: [
        "/moto/autochemi/icon1-1.png",
        "/moto/autochemi/icon1-2.png",
        "/moto/autochemi/icon1-3.png",
        "/moto/autochemi/icon1-4.png",
      ],
      infoTitle: "Transmission Oils",
      infoText: [
        "Gear oils manufactured by AutoChemie Bitterfeld GmbH are a wide choice of products for various types of gearboxes for both cars and trucks. The line of new generation synthetic and mineral gear oils has been designed for continuous operation under high loads. Silver Wheel and E-tec oils are the development of our own innovation department.",
        "Ultra-modern gear oils are characterized by excellent resistance to precipitate and deposit formation. The use of our oils extends the service life of the gear, ensures stable viscosity, optimum lubricating properties, and protection against wear and oxidation. Gear oils meet the most stringent current requirements of the global vehicle makers and your expectations."
      ]
    },
    {
      id: "Antifreezes & Coolants",
      brandTitle: "Antifreezes & Coolants Our Brands",
      logos: [
        "/moto/autochemi/icon1-1.png",
        "/moto/autochemi/icon1-2.png",
        "/moto/autochemi/icon1-3.png",
        "/moto/autochemi/icon1-4.png",
      ],
      infoTitle: "Antifreezes & Coolants",
      infoText: [
        "AutoChemie Bitterfeld GmbH is an expert in the manufacture of cooling fluids. We offer our customers a wide range of antifreezes with various freezing points, additives, including additives of our own production, providing superior engine protection, enhanced thermal stability, and reliable year-round performance.",
        "We offer antifreezes with both standard service life (2 years) and extended service life (up to 5 years or 250,000 km). Our cooling fluids meet international standards and are recommended for all engine types, ensuring reliable performance, superior protection, and long-lasting durability in operation."
      ]
    },
    {
      id: "Brake fluids",
      brandTitle: "Brake Fluids Our Brands",
      logos: [
        "/moto/autochemi/icon1-1.png",
        "/moto/autochemi/icon1-2.png",
        "/moto/autochemi/icon1-3.png",
        "/moto/autochemi/icon1-4.png",
      ],
      infoTitle: "Brake Fluids",
      infoText: [
        "Brake fluid is the guarantee of the vehicle safety. That is why it should ensure the excellent protection for the braking system. Up-to-date brake fluids DOT-3 and DOT 4 manufactured by AutoChemie Bitterfeld GmbH far exceed the requirements of international standards. Anticorrosive additives in brake fluids ensure the high degree of protection of metal parts of the brake system, and lubricating characteristics guarantee their long service life. Brake fluids are highly stable, so they are recommended for use at a temperature of -50 °C to +50 °C. Low fluidity is specially developed for anti-lock braking systems (ABS). The high boiling point of the dry fluid of at least 205 °C reduces the risk of the fluid evaporation and possible failure of brakes. The boiling point of the wet liquid is at least 140 °C."
      ]
    },
    {
      id: "Screen washes",
      brandTitle: "Screenwashes Our Brands",
      logos: [
        "/moto/autochemi/icon2-1.png",
        "/moto/autochemi/icon2-2.png",
        "/moto/autochemi/icon2-3.png",
      ],
      infoTitle: "Screen Washes",
      infoText: [
        "AutoChemie GmbH manufactures both ready-to-use and concentrated winter and summer windscreen washers. Due to own developments, the washers have excellent detergent properties and a pleasant persistent odor. For consumers experiencing discomfort from different odors in the summer, the company has developed a non-allergic washer.",
        "In addition to commercial products, the company manufactures technical fluids and lubricants to individual orders, with unique characteristics, and commercial products under the Private Label trademark, tailored to customer requirements with consistent quality and reliable performance standards."
      ]
    }
  ];

  const handleTabClick = (index: number) => {
    setActiveCategoryIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <section className="w-full py-16  bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4 mx-auto mb-4 lg:mb-5" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-semibold leading-tight">
            Comprehensive Product Portfolio
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed xl:max-w-[70%]">
            Explore the extensive product portfolio of AutoChemie Bitterfeld GmbH, featuring high-performance lubricants and automotive fluids designed for passenger cars, commercial vehicles, and industrial applications. Every solution is developed with advanced German technology to ensure maximum efficiency, superior protection, and dependable performance.
          </Typography>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4 w-full border-t border-gray-300 pt-4 lg:pt-5" data-aos="fade-up" data-aos-delay="100">
          {categoriesData.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => handleTabClick(index)}
              className={`px-4 py-2 transition-all duration-300 ${
                activeCategoryIndex === index 
                  ? "bg-primary text-white border border-primary font-semibold" 
                  : "bg-white text-[#131312] border border-[#131312]/20 hover:border-primary hover:text-primary"
              }`}
            >
              <Typography variant="p" color={activeCategoryIndex === index ? "white" : "dark"} className={activeCategoryIndex === index ? "font-semibold" : ""}>
                {cat.id}
              </Typography>
            </button>
          ))}
        </div>

        {/* Swiper Slider */}
        <div className="w-full relative mt-1 max-h-[2100px]:mt-5" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveCategoryIndex(swiper.activeIndex)}
            className="w-full !overflow-visible"
            autoHeight={true}
          >
            {categoriesData.map((category) => (
              <SwiperSlide key={category.id}>
                
                {/* Slide Content: Left White Box, Right Red Box */}
                <div className="relative w-full flex flex-col xl:flex-row xl:items-center py-6 xl:py-12 gap-6 xl:gap-0">
                  
                  {/* White Box */}
                  <div className="bg-white rounded-3xl xl:rounded-none shadow-[0_0_40px_rgba(0,0,0,0.12)] border border-gray-100 w-full xl:w-[60%] xl:min-h-[550px] min-[2000px]:min-h-[800px] min-[2500px]:min-h-[1100px] p-8 lg:p-14 xl:p-20 flex flex-col justify-center">
                    
                    <Typography variant="h1" color="dark" className=" mb-8 lg:mb-10 text-center tracking-wide">
                      {category.brandTitle}
                    </Typography>
                    
                    <div className="flex flex-wrap justify-center items-center gap-4 xl:gap-8 max-w-[480px] md:max-w-[650px] min-[2000px]:max-w-[85%] mx-auto w-full">
                      {category.logos.map((logo, idx) => (
                        <div key={idx} className="w-[calc(50%-8px)] md:w-[293px] md:h-[129px] min-[2000px]:w-[350px] min-[2000px]:h-[155px] flex items-center justify-center border border-gray-200 p-4  rounded-xl xl:rounded-none bg-white">
                          <img 
                            src={logo} 
                            alt={`Brand Logo ${idx + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Red Box */}
                  <div className="bg-primary rounded-3xl xl:rounded-[1.25rem] shadow-xl xl:shadow-none p-8 lg:p-12 xl:p-16 w-full xl:w-[48%] relative xl:-ml-[8%] z-20">
                    <div className="product mb-6 tracking-wide text-white ">
                      {category.infoTitle}
                    </div>
                    <div className="flex flex-col gap-5">
                      {category.infoText.map((paragraph, pIdx) => (
                        <Typography key={pIdx} variant="p" color="white" className="leading-relaxed opacity-95 font-medium">
                          {paragraph}
                        </Typography>
                      ))}
                    </div>
                  </div>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
   
      </div>
    </section>
  );
}
