import { Check, ArrowRight } from "lucide-react";
import Container from "./Container";

export default function Products() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6" data-aos="fade-up">
          <div className="max-w-[800px]">
            <h2 className="heading font-oswald text-[38px] font-semibold text-[#2A2A2A] mb-3">Our Services</h2>
            <p className="text-[17px] font-oswald text-[#4A4A4A] leading-[1.6]">
              Driven by continuous innovation and customer satisfaction, FTAZA remains a trusted global partner, delivering high-performance automotive parts, reliable manufacturing solutions, and long-term value to customers worldwide.
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 inline-flex font-oswald font-medium text-[17px] items-center bg-[#062AAA] px-6 py-2.5 text-white hover:bg-blue-800 transition-colors"
          >
            Discover our Service
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>

        <hr className="border-black mb-12" />

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Left: Image */}
          <div className="lg:col-span-8" data-aos="fade-right">
            <img
              src="/moto/ftaza/p.png"
              alt="Our Services"
              className="w-full h-full object-cover rounded-none rounded-tl-[50px] rounded-br-[50px]"
            />
          </div>

          {/* Right: Text */}
          <div className="lg:col-span-4 flex flex-col justify-center" data-aos="fade-left">
            <h3 className="heading font-oswald text-[36px] sm:text-[36px] font-semibold text-[#2A2A2A] mb-5">
              Your Complete Engine Partner
            </h3>
            <p className="text-[17px] font-oswald text-[#4A4A4A] mb-5 leading-[1.6]">
              FTAZA Industrial Co., Ltd. delivers comprehensive automotive manufacturing and supply solutions designed to meet the evolving needs of distributors, wholesalers, OEM partners, and aftermarket professionals worldwide. Backed by advanced manufacturing facilities, experienced engineering teams, and strict quality management systems, we provide end-to-end solutions that combine innovation, precision, and reliability.
            </p>
            <p className="text-[17px] font-oswald text-[#4A4A4A] mb-8 leading-[1.6]">
              We provide end-to-end solutions that combine innovation, precision, and reliability. From product design and development to production, quality assurance, packaging, and global logistics, our integrated services ensure every component meets international standards while exceeding customer expectations.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <div className="mt-1 shrink-0 bg-[#062AAA] rounded-full p-0.5">
                  <Check size={15} className="text-white" strokeWidth={3} />
                </div>
                <p className="text-[17px] font-oswald text-[#4A4A4A] leading-[1.6]">
                  Specialized Manufacturing Excellence – Operates five dedicated production facilities equipped with advanced technology to manufacture precision automotive components with consistent quality and efficiency.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 shrink-0 bg-[#062AAA] rounded-full p-0.5">
                  <Check size={15} className="text-white" strokeWidth={3} />
                </div>
                <p className="text-[17px] font-oswald text-[#4A4A4A] leading-[1.6]">
                  Specialized Manufacturing Excellence – Operates five dedicated production facilities equipped with advanced technology to manufacture precision automotive components with consistent quality and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
