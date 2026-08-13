import { Check, ArrowRight } from "lucide-react";
import Container from "./Container";

export default function About() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Top Text */}
            <div data-aos="fade-up" className="flex flex-col h-full justify-center">
              <h2 className="heading font-oswald text-[40px] font-bold mb-6 text-[#2A2A2A] ">
                Advanced Lubrication Solutions
              </h2>
              <p className="font-oswald text-[17px] text-[#4A4A4A] mb-5 ">
                Founded in 2005, FTAZA Industrial Co., Ltd. has grown into a leading automotive parts manufacturer with five specialized production facilities dedicated to delivering high-quality, reliable, and innovative solutions for the global automotive aftermarket. Through continuous investment in advanced manufacturing, research, and quality management, the company has established a strong reputation for excellence across international markets.
              </p>
              <p className="font-oswald text-[17px] text-[#4A4A4A]">
                Today, FTAZA operates as a comprehensive automotive group, integrating research & development, manufacturing, quality assurance, and global sales under one organization. With a skilled workforce of more than 1,600 employees, including 135 professional technicians, 30 engineers, 5 senior engineers, and 130 quality inspectors, the company is committed to producing components that meet the highest industry standards.
              </p>
            </div>

            {/* Bottom Image */}
            <div data-aos="fade-right" className="relative w-full">
              <img
                src="/moto/ftaza/abt1.png"
                alt="Car wheel"
                className="w-full h-auto object-cover rounded-none rounded-tl-[50px] rounded-br-[50px]"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10">
            {/* Top Image */}
            <div data-aos="fade-left" className="relative w-full">
              <img
                src="/moto/ftaza/abt2.png"
                alt="Car interior"
                className="w-full h-auto object-cover rounded-none rounded-tl-[50px] rounded-br-[50px]"
              />
            </div>

            {/* Bottom Text */}
            <div data-aos="fade-up" data-aos-delay="150" className="flex flex-col h-full justify-center">
              <p className="font-oswald text-[17px] text-[#4A4A4A] mb-6 ">
                FTAZA Industrial Co., Ltd. delivers reliable, high-performance automotive parts for the global aftermarket. Backed by advanced manufacturing, strong R&D, and rigorous quality control, we provide precision-engineered components meeting international standards.
              </p>

              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 shrink-0 bg-[#062AAA] rounded-full p-0.5">
                    <Check size={15} className="text-white" strokeWidth={3} />
                  </div>
                  <p className="font-oswald text-[17px] text-[#4A4A4A]">
                    Specialized Manufacturing Excellence – Operates five dedicated production facilities equipped with advanced technology to manufacture precision automotive components with consistent quality and efficiency.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 shrink-0 bg-[#062AAA] rounded-full p-0.5">
                    <Check size={15} className="text-white" strokeWidth={3} />
                  </div>
                  <p className="font-oswald text-[17px] text-[#4A4A4A]">
                    Strong Research & Development – Continuously invests in innovative product development, engineering improvements, and advanced manufacturing processes to meet the evolving needs of modern vehicles.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 shrink-0 bg-[#062AAA] rounded-full p-0.5">
                    <Check size={15} className="text-white" strokeWidth={3} />
                  </div>
                  <p className="font-oswald text-[17px] text-[#4A4A4A]">
                    Earning trust through dependable products, competitive pricing, and reliable service.<br />
                    Customer-Focused Solutions – Committed to delivering products that improve vehicle performance, extend service life, and provide long-term value for distributors, wholesalers, and automotive professionals.
                  </p>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="inline-flex font-oswald font-medium text-[17px] items-center bg-[#062AAA] px-6 py-2.5 text-white hover:bg-blue-800 transition-colors"
                >
                  Learn More
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
