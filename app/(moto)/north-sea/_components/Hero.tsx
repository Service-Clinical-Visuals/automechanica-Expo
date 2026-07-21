
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from '@/app/_components/DynamicVideoPlayer';

const navLinks = [
  "Home",
  "About",
  "Sleep",
  "Oxygen",
  "Ventilation",
  "Resources",
];

export default function Herobanner() {
  return (

        <section className="w-full pt-[25px] xl:pt-[40px] bg-white">
          <div className="custom-container">
           
            {/* Banner Container */}
            <div className="relative overflow-hidden w-full h-[100dvh] xl:h-auto xl:aspect-video rounded-[12px] xl:rounded-[24px]" data-aos="zoom-in" data-aos-delay="100">
              
              {/* Background Video */}
              <div className="absolute inset-0 w-full h-full">
                 <DynamicVideoPlayer type="banner" className="w-full h-full object-cover" />
              </div>
              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 md:p-16 lg:px-20 lg:pb-24 flex flex-col justify-end items-start">
                 <div className="max-w-3xl text-left flex flex-col gap-6">
                   <h2 className=" banner-title text-white font-semibold"data-aos="fade-right" data-aos-delay="300">
                      Made in Holland. Trusted Worldwide.
                   </h2>

                    <p className="text-white section-text font-normal">
                Discover the power of North Sea Lubricants—premium Dutch-made lubricants engineered for exceptional performance and OEM-quality protection
      </p>
                   
                 
                 </div>
              </div>
           
            </div>
          </div>
        </section>


  )
}
