"use client";
import React, { useState, useEffect } from 'react';
import Button from './Button';

const slides = [
  {
    id: 1,
    image: "/moto/kalebalata/v1.jpg",
    title: "Our Vision",
    buttonText: "Discover Our Purpose",
    paragraphs: [
      "To be the globally preferred and most trusted brake pad manufacturer, recognized for delivering innovative, high-performance, and reliable braking solutions that exceed customer expectations and international safety standards.",
      "We are committed to advancing braking technology through continuous research, precision engineering, and state-of-the-art manufacturing processes. By prioritizing uncompromising quality, product safety, environmental responsibility, and sustainable production, we strive to enhance vehicle performance and driving confidence.",
      "Through strong customer partnerships, operational excellence, and a culture of continuous improvement, we are committed to shaping the future of the global automotive braking industry. By investing in advanced technologies, enhancing manufacturing capabilities, and maintaining the highest standards of quality and safety, we create lasting value for customers, business partners, employees, and communities worldwide while driving sustainable growth, innovation, and long-term success across every market we serve."
    ]
  },
  {
    id: 2,
    image: "/moto/kalebalata/v2.jpg",
    title: "OUR MISSION",
    buttonText: "Explore Products",
    paragraphs: [
      "To ensure customer satisfaction by manufacturing brake pads that meet the expectations of our customers in the automotive industry and aftermarket sectors, both domestically and internationally, while complying with customer-specific requirements as well as all applicable legal and regulatory requirements.",
      "To transform Kale Balata from a domestic OEM manufacturer into an internationally recognized OEM manufacturer by embracing product safety and a strong quality culture as fundamental principles.",
      "To understand and meet the expectations of customers, interested parties, suppliers, and employees at the highest level through a sustainable approach focused on quality, product safety, and continual improvement. To achieve continual development by utilizing all resources efficiently, adopting risk-based thinking, enhancing the effectiveness of the Quality Management System, and driving continuous improvement throughout the organization"
    ]
  }
];

export default function Vision() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      <div className="custom-container flex flex-col items-center relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        
          {/* Background Watermark Text */}
            <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 kalebalatatext font-normal  whitespace-nowrap anton-font pointer-events-none select-none leading-none flex items-center justify-center w-full"
          style={{
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.05)',
            color: 'transparent',
            zIndex: -1
          }}
          data-aos="fade-in"
        >
          Kale Balata
        </div>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-4 mt-8 sm:mt-10 md:mt-12 lg:mt-18 relative z-10">
         <h2 
            className="anton-font text-white section-title fonr-normal leading-tight tracking-wide"
            data-aos="fade-up"
          >
            Driven By Vision, Guided By Purpose
          </h2>
          <p 
            className="oswald-font text-white section-text font-normal leading-relaxed tracking-wide mt-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Kale Balata Otomotiv San. ve Tic. A.Ş. is committed to delivering high-quality braking solutions through innovation, continuous improvement, and trusted manufacturing excellence.
          </p>
          </div>

        {/* Bottom Content / Carousel Slide */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 mt-10 md:mt-16 items-center w-full">
          
          {/* Left Side: Image */}
          <div className="w-full relative aspect-[16/9] rounded-xl overflow-hidden shadow-2xl" data-aos="fade-right">
            <img 
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col gap-6" data-aos="fade-left">
            <h3 className="oswald-font text-white card-title1 font-semibold tracking-wide uppercase">
              {slide.title}
            </h3>
            
            <div className="flex flex-col gap-5 text-white oswald-font header-link leading-relaxed tracking-wide">
              {slide.paragraphs.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
            
            <div className="mt-4 flex">
              <Button text={slide.buttonText} />
            </div>
          </div>

        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-12 md:mt-16" data-aos="fade-up">
          {slides.map((_, idx) => (
            <div 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`${
                currentSlide === idx 
                  ? "w-10 h-1.5 md:h-2 bg-[#F8AC1A]" 
                  : "w-2 h-2 md:w-2.5 md:h-2.5 bg-white/30 hover:bg-white/50"
              } rounded-full cursor-pointer transition-all duration-300`}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
}
