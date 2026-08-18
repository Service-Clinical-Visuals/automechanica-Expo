import { Check, ArrowRight } from "lucide-react";
import Container from "./Container";

export default function Sustainability() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        {/* Top Header */}
        <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto mb-10" data-aos="fade-up">
          <h2 className="font-oswald text-[38px] sm:text-[38px] font-semibold text-[#2A2A2A] mb-4">
            Building A Sustainable Future Through Innovation
          </h2>
          <p className="font-oswald font-regular text-[17px] sm:text-[16px] text-[#4A4A4A] leading-[1.6]">
            At FTAZA Industrial Co., Ltd., sustainability is at the core of everything we do. We are committed to responsible manufacturing, environmental stewardship, efficient resource management, and continuous innovation to create lasting value for our customers, employees, and communities while driving a more sustainable automotive future through advanced technologies, energy-efficient processes, and responsible business practices.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Left Card */}
          <div
            className="bg-white  border-l-[3px] border-r-[3px] border-[#062AAA] rounded-tl-[60px] rounded-br-[60px] p-8 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col justify-center lg:col-span-4"
            data-aos="fade-right"
          >
            <h3 className="font-oswald text-[38px] sm:text-[32px] font-semibold text-[#2A2A2A] mb-5">
              Your Complete Engine Partner
            </h3>
            <p className="font-oswald font-regular text-[15px] text-[#4A4A4A] mb-8 leading-[1.6]">
              FTAZA Industrial Co., Ltd. is committed to building a sustainable future through responsible manufacturing, continuous innovation, and environmentally conscious practices. By improving production efficiency, reducing environmental impact, and optimizing resources, we deliver high-quality automotive components while creating lasting value for customers, employees, and communities.
            </p>

            <ul className="space-y-6 mb-10">
              <li className="flex gap-4">
                <div className="bg-[#062AAA] text-white rounded-full p-1 h-fit shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={4} />
                </div>
                <p className="font-oswald font-regular text-[15px] text-[#4A4A4A] leading-[1.5]">
                  Environmentally Responsible Manufacturing – We continuously improve our production processes to reduce environmental impact while maintaining the highest product quality.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="bg-[#062AAA] text-white rounded-full p-1 h-fit shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={4} />
                </div>
                <p className="font-oswald font-regular text-[15px] text-[#4A4A4A] leading-[1.5]">
                  Energy-Efficient Operations – Our facilities adopt energy-saving technologies and optimized manufacturing practices to reduce energy consumption and improve operational efficiency.
                </p>
              </li>
            </ul>

            <button className="bg-[#062AAA] text-white px-6 py-2.5 rounded-sm font-oswald font-medium flex items-center gap-2 w-fit text-[16px] hover:bg-blue-800 transition-colors">
              Explore Sustainability
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Image */}
          <div className="h-full w-full lg:col-span-8" data-aos="fade-left">
            <img
              src="/moto/ftaza/s1.png"
              alt="Sustainable Automotive Future"
              className="w-full h-full object-cover rounded-tl-[50px] rounded-br-[50px]"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
