import Image from "next/image";
import Button from "./Button";

export default function About() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white relative z-10">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative w-full ">
            <img
              src="/moto/aisin/abt.png"
              alt="About Aisin"
              className="object-cover w-full h-full"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-primary"></div>
              <span className="section-text font-manrope text-primary font-semibold">
                About Aisin
              </span>
            </div>
            
            <h2 className="section-title font-manrope font-semibold text-[#202020]">
              Global Excellence in Automotive Engineering
            </h2>
            
            <div className="space-y-4">
              <p className="section-text text-[#404040] font-normal font-inter">
                AISIN Aftermarket Europe is a leading supplier of premium automotive components, backed by the legacy and innovation of the AISIN Group—one of the world's largest OEM manufacturers. With a strong focus on quality, precision, and advanced engineering, the company delivers reliable solutions that meet the highest industry standards.
              </p>
              
              <p className="section-text text-[#404040] font-normal font-inter">
                Driven by continuous innovation and decades of expertise, AISIN provides a comprehensive range of products designed to ensure optimal vehicle performance, safety, and efficiency across global markets.
              </p>
            </div>
            
            <ul className="space-y-3 pt-2">
              {[
                "Part of a globally recognized OEM leader in automotive technology.",
                "Wide portfolio including drivetrain, engine, and thermal management components.",
                "Engineered to meet strict OE quality and performance standards."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary font-bold mr-3 text-xl leading-none">-</span>
                  <span className="section-text text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-6">
              <Button>Explore Our Products</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
