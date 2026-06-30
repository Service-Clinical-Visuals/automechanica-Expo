import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-[#f8faff] pt-16 md:pt-24 lg:pt-24 pb-16 lg:pb-24 overflow-hidden flex flex-col">
      <div className="custom-container relative z-10">
        
        {/* CSS Grid for robust 2-row layout on Desktop */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-6 xl:gap-x-10 gap-y-6">
          
          {/* ROW 1, LEFT: Top Text Content (Span 6 for better reading width) */}
          <div className="xl:col-span-6 xl:row-start-1 xl:col-start-1 pb-16 flex flex-col justify-center relative z-20" data-aos="fade-right">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/moto/bluechem/arrow.png" 
                alt="Arrow Icon" 
                width={24} 
                height={24} 
                className="object-contain"
              />
              <h2 className="text-[#0E4194] oswald font-semibold text-3xl md:text-4xl xl:text-[32px] 4xl:text-[36px]">
                Why choose Us
              </h2>
            </div>
            
            <p className="text-[#484848] mb-6 font-medium sm:text-[16px] lg:text-[18px] leading-relaxed text-justify oxanium">
              Since 1988, our cleaning, maintenance, and care products, specifically for the automotive industry, have been sold on the international market. In 1999, Chemisch Technische Produktions GmbH was founded, relocating production of our extensive product range to Leutenberg in Thuringia.
            </p>
            
            <p className="text-[#484848] mb-6 font-medium sm:text-[16px] lg:text-[18px] leading-relaxed text-justify oxanium">
              In the following years, we experienced extremely rapid growth, both nationally and globally. This incredibly fast development enabled us to enter into numerous excellent partnerships.
            </p>
            
            <Button href="#learn-more" text="Learn More" />
          </div>

          {/* ROW 1 & 2, RIGHT: Image (Span 5) */}
          <div className="hidden xl:block xl:col-span-6 xl:row-start-1 xl:row-end-3 xl:col-start-7 relative z-30" data-aos="fade-left">
             <div className="absolute inset-0 rounded-[32px] overflow-hidden">
                <Image 
                  src="/moto/bluechem/whychooseimg.png" 
                  alt="Bluechem Group Building" 
                  fill 
                  className="object-cover object-center"
                />
             </div>
          </div>

          {/* Mobile Right Column Image */}
          <div className="block xl:hidden xl:col-span-12 relative z-20 mb-12" data-aos="fade-up">
             <div className="relative w-full h-[400px] sm:h-[500px] rounded-[24px] overflow-hidden shadow-xl">
                <Image 
                  src="/moto/bluechem/whychoose.png" 
                  alt="Bluechem Group Building" 
                  fill 
                  className="object-cover object-center"
                />
             </div>
          </div>

          {/* DARK BACKGROUND ROW (Spans all 12 columns, starts at row 2) */}
          <div className="xl:col-span-12 xl:row-start-2 xl:col-start-1 relative z-0">
             {/* The absolute div extends to full screen width and downwards infinitely */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[2000px] bg-[#28282b]"></div>
          </div>

          {/* ROW 2, LEFT: Bottom Cards (Span 6) */}
          {/* Note: no bottom padding here, padding is on the section. This ensures grid row ends exactly with the cards. */}
          <div className="xl:col-span-6 xl:row-start-2 xl:col-start-1 relative z-20 pt-12 xl:pt-16" data-aos="fade-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-10">
              {/* Card 1 */}
              <div className="bg-white rounded-[24px] p-6 md:p-8 flex flex-col justify-start">
                <h3 className="text-[#0E4194] oswald font-semibold text-xl md:text-2xl text-center mb-6 leading-tight min-h-[60px]">
                  Continuous collaboration as the key to success
                </h3>
                <p className="text-[#484848]  text-[15px] sm:text-[16px] lg:text-[18px] text-center leading-relaxed font-medium oxanium">
                  In testing new technologies and optimizing existing ones, close cooperation with partners from industry, science, and motorsport, such as the Fraunhofer Institute, TÜV, and various racing teams, has repeatedly proven invaluable.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white rounded-[24px] p-6 md:p-8 flex flex-col justify-start">
                <h3 className="text-[#0E4194] oswald font-semibold text-xl md:text-2xl text-center mb-6 leading-tight min-h-[60px]">
                  Long-term concepts for the future
                </h3>
                <p className="text-[#484848]  text-[15px] sm:text-[16px] lg:text-[18px] text-center leading-relaxed font-medium oxanium">
                  The philosophy of the bluechem GROUP is geared towards developing needs-based and consumer-friendly products that guarantee its customers and partners a sustainable and targeted increase in profitability.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
