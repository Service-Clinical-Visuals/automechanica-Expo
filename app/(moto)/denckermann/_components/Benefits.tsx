"use client";
import React, { useState } from "react";

type SlideData = {
  src: string;
  title: string;
  subtitle: string;
};

function ImageSlider({ slides }: { slides: SlideData[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/10] xl:aspect-[16/11] group shadow-sm bg-gray-900">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img 
            src={slide.src} 
            alt={`Benefit slide ${idx + 1}`} 
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay for Text Readability */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${idx === currentIndex ? 'opacity-100 delay-500' : 'opacity-0 delay-0'}`}></div>
          
          {/* Fading Text Content */}
          <div 
            className={`absolute bottom-20 md:bottom-24 left-6 md:left-10 max-w-[85%] transition-all duration-1000 ease-out ${
              idx === currentIndex 
                ? 'opacity-100 translate-y-0 delay-1000' 
                : 'opacity-0 translate-y-8 delay-0'
            }`}
          >
         
             <h2 
          className="section-title text-[#ffffff] font-medium oswald mb-1 md:mb-2 leading-tight"
          data-aos="fade-up"
        >
              {slide.title}
            </h2>
            <p className="text-[#ffffff] section-text sora drop-shadow-md font-normal">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}
      
      {/* Pagination Indicators */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex justify-center items-center gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1 transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-8 bg-[var(--color-secondary)]' : 'w-5 bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Benefits() {
  const leftSlides: SlideData[] = [
    {
      src: "/moto/denckermann/1.png",
      title: "Does your engine need turbo power?",
      subtitle: "Choose DENCKERMANN charge air pipes"
    },
    {
      src: "/moto/denckermann/3.png",
      title: "Silver ION cabin air filters",
      subtitle: "Breathe clean air on every journey"
    },
    {
      src: "/moto/denckermann/5.png",
      title: "DENCKERMANN wipers",
      subtitle: "Perfect visibility in all conditions"
    }
  ];

  const rightSlides: SlideData[] = [
    {
      src: "/moto/denckermann/2.png",
      title: "Something didn't work out again?",
      subtitle: "Time to replace the ignition coil"
    },
    {
      src: "/moto/denckermann/4.png",
      title: "Brake pads for commercial vehicles",
      subtitle: "High efficiency in all conditions"
    },
    {
      src: "/moto/denckermann/6.png",
      title: "Window lifters",
      subtitle: "A safe and durable solution"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#f5f5f5] relative">
      <div className="custom-container">
        <h2 
          className="section-title text-[var(--color-primary)] font-medium oswald mb-16 text-center"
          data-aos="fade-up"
        >
          The Benefits Of Choosing Denckermann Parts
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8 ">
          <div data-aos="fade-up">
            <ImageSlider slides={leftSlides} />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <ImageSlider slides={rightSlides} />
          </div>
        </div>
      </div>
    </section>
  );
}
