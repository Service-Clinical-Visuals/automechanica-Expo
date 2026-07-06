"use client";

import React, { useState } from "react";
import Button from "./Button";
import Typography from "./Typography";
import Container from "./Container";

const sliderData = [
  {
    title: "Engine and transmission",
    desc: "Based on the EFI Automotive Group's Original Equipment production, this range includes camshaft and crankshaft sensors, MAP and fuel pressure sensors, mass air flow sensors and temperature sensors. All of these products play a major role in the optimal functioning of the engine and transmission, all the more reason to choose a specialist in the field.",
    mainImage: "/moto/efi-aftermarket/products/slider1/section10.png",
    products: [
      { img: "/moto/efi-aftermarket/products/slider1/frame11.png", name: "Camshaft", highlight: "Sensors" },
      { img: "/moto/efi-aftermarket/products/slider1/frame12.png", name: "Crankshaft", highlight: "Sensors" },
      { img: "/moto/efi-aftermarket/products/slider1/frame13.png", name: "Temperature", highlight: "Sensors" },
    ]
  },
  {
    title: "Emissions",
    desc: "When it comes to cars, comfort and safety are closely linked. A comfortable driver will be more alert, while the increasing number of safety systems in the car gives them peace of mind. This peace of mind is at the centre of all our concerns through our ranges of air conditioning pressure sensors, wheel speed sensors (ABS) and parking sensors.",
    mainImage: "/moto/efi-aftermarket/products/slider2/section20.png",
    products: [
      { img: "/moto/efi-aftermarket/products/slider2/frame21.png", name: "Oxygen", highlight: "Sensors" },
      { img: "/moto/efi-aftermarket/products/slider2/frame22.png", name: "Gas temperature", highlight: "Sensors" },
      { img: "/moto/efi-aftermarket/products/slider2/frame23.png", name: "DPF", highlight: "Sensors" },
    ]
  },
  {
    title: "Comfort and security",
    desc: "When it comes to cars, comfort and safety are closely linked. A comfortable driver will be more alert, while the increasing number of safety systems in the car gives them peace of mind. This peace of mind is at the centre of all our concerns through our ranges of air conditioning pressure sensors, wheel speed sensors (ABS) and parking sensors.",
    mainImage: "/moto/efi-aftermarket/products/slider3/section30.png",
    products: [
      { img: "/moto/efi-aftermarket/products/slider3/frame31.png", name: "Pedal Position", highlight: "Sensors" },
      { img: "/moto/efi-aftermarket/products/slider3/frame32.png", name: "Conditioning Pressure", highlight: "Sensors" },
      { img: "/moto/efi-aftermarket/products/slider3/frame33.png", name: "Wheel Speed", highlight: "Sensors" },
    ]
  },
  {
    title: "E-mobility",
    desc: "Electrification is a structural trend in the car sector, encompassing hybrid vehicles (including PHEVs) and 100% electric vehicles (BEVs). We want to position ourselves now on the coming new opportunities - such as the brake pedal sensor or the electric motor position sensor (EMPOS) - so that you can benefit from the OEM solutions developed by the EFI Automotive Group.",
    mainImage: "/moto/efi-aftermarket/products/slider4/section40.png",
    products: [
      { img: "/moto/efi-aftermarket/products/slider4/frame41.png", name: "Electric Motor", highlight: "Position Sensors" },
      { img: "/moto/efi-aftermarket/products/slider4/frame42.png", name: "Brake Pedal", highlight: "Sensors" },
    ]
  },
  {
    title: "Ignition",
    desc: "Since 1959, through our world-renowned brand Bougicord®, EFI Automotive Service has built up proven know-how in the field of ignition. Our range of products has grown with the evolution of the automotive industry, and now includes ignition cables and parts, as well as latest generation pencil coils and ignition ramps.",
    mainImage: "/moto/efi-aftermarket/products/slider5/section50.png",
    products: [
      { img: "/moto/efi-aftermarket/products/slider5/frame51.png", name: "Ignition", highlight: "Coils" },
      { img: "/moto/efi-aftermarket/products/slider5/frame52.png", name: "Ignition", highlight: "Wire Sets" },
      { img: "/moto/efi-aftermarket/products/slider5/frame53.png", name: "Ignition", highlight: "Parts" },
    ]
  }
];

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  const currentSlide = sliderData[activeIndex];

  return (
    <section id="products" className="py-10 md:py-15 bg-[#F8F9FA]">
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-8 md:mb-8" data-aos="fade-up">
          <div className="relative inline-block mb-4">
            <Typography variant="h2" color="dark" className="font-semibold">
              Our Product Range
            </Typography>
            <div className="absolute -left-4 md:-left-6 -bottom-2 w-16 md:w-20 h-1 rounded-xl bg-[var(--color-primary)]"></div>
          </div>
          <Typography variant="p" color="dark" className="max-w-[70%] text-black mx-auto text-center leading-relaxed">
            Our products improve passengers' comfort and safety and help to make vehicles more economical, intelligent and safe. Marketed under our three brands, including the globally recognised Bougicord® brand, (re)discover the variety of sensor and ignition product families that make up our offering.
          </Typography>
        </div>

        {/* Large Rounded Container (The Swiper) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500" data-aos="fade-up" data-aos-delay="200">

          {/* Left: Dynamic Image */}
          <div className="col-span-1 xl:col-span-6 h-[400px] xl:h-auto overflow-hidden">
            <img
              key={currentSlide.mainImage}
              src={currentSlide.mainImage}
              alt={currentSlide.title}
              className="w-full h-full object-cover animate-fade-in"
            />
          </div>

          {/* Right: Content (Dark Background) */}
          <div className="col-span-1 xl:col-span-6 bg-[#1E1E1E] text-white p-8 md:p-12 lg:p-10 flex flex-col justify-center">

            <div className="flex items-center gap-4 mb-4">
              <Typography variant="h3" color="white" className="font-semibold m-0">
                {currentSlide.title}
              </Typography>

              {/* Slider Arrows */}
              <div className="ml-auto flex gap-4 text-white/50 shrink-0">
                <button
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full border-2 border-[var(--color-primary)] flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors group"
                  aria-label="Previous"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full border-2 border-[var(--color-primary)] flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors group"
                  aria-label="Next"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="w-16 h-[3px] bg-[var(--color-primary)] mb-8"></div>

            <Typography variant="p" color="white" className=" mb-12 leading-relaxed text-[15px] md:text-base min-h-[120px] animate-fade-in" key={currentSlide.desc}>
              {currentSlide.desc}
            </Typography>

            {/* Dynamic Products Sub-Grid */}
            <div className={`grid gap-4 md:gap-6 mb-12 animate-fade-in ${currentSlide.products.length === 2 ? 'grid-cols-2 max-w-[70%]' : 'grid-cols-1 sm:grid-cols-3'}`} key={currentSlide.title}>

              {currentSlide.products.map((product, index) => (
                <div key={index} className="flex flex-col items-center gap-4 group cursor-pointer">
                  {/* White Box for Image Only */}
                  <div className="bg-white rounded-[1.5rem] p-4 flex flex-col items-center justify-center w-full aspect-[5/4] border-[1.8px] border-primary hover:border-[var(--color-primary)] transition-colors overflow-hidden shadow-md">
                    <img src={product.img} alt={product.name} className="object-cover scale-[1.3] w-full h-full group-hover:scale-[1.15] transition-transform duration-300" />
                  </div>
                  {/* Text Below the Box */}
                  <div className="text-white text-center  font-semibold font-poppins leading-tight">
                    <Typography variant="h4" color="white" className="text-center m-0">{product.name}</Typography>
                    <Typography variant="h4" color="primary" className="text-center">{product.highlight}</Typography>
                  </div>
                </div>
              ))}

            </div>
            <div className="w-full h-0.5 bg-white/30  mb-5"></div>

            <div className="flex justify-center xl:justify-center">
              <Button text="View Our Products" variant="primary" />
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default Products;
