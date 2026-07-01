import React from "react";
import { CheckCircle } from "lucide-react";
import Button from "./Button";

export default function OurValues() {
  const values = [
    {
      title: "Integrity & Transparency",
      desc: "We conduct every aspect of our business with honesty, ethics, and openness to build lasting trust."
    },
    {
      title: "Customer Satisfaction",
      desc: "We prioritize customer needs by delivering high-quality products, dependable service, and long-term support."
    },
    {
      title: "Quality Excellence",
      desc: "We are committed to maintaining the highest standards in product performance, reliability, and consistency."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#A27F41]">
      <div className="custom-container">
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 items-center mb-12">
          {/* Left Content */}
          <div className="text-white" data-aos="fade-right">
            <h2 className="section-title font-semibold text-white mb-6 exo-2 drop-shadow-sm">
              Our Values
            </h2>
            <div className="space-y-4 mb-8 opacity-95">
              <p className="section-text text-white niramit mb-6 leading-[1.8] ">
                Our values define who we are and inspire the way we operate every day. They shape our culture, strengthen our relationships, and drive our commitment to delivering premium automotive lubricants and reliable solutions. By combining ethical business practices, continuous innovation, and a customer-focused approach.
              </p>
              <p className="section-text text-white niramit mb-6 leading-[1.8] ">
                Our goal is to be a trusted global partner, delivering sustainable solutions that benefit society, preserve natural resources.
              </p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {values.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <img src="/moto/rexoil/checkcircle.png" alt="Check Mark" className="w-4 h-4 mt-2" />
                  <p className="section-text text-white niramit  ">
                    <strong className="font-bold">{item.title}</strong> – {item.desc}
                  </p>
                </li>
              ))}
            </ul>

            <Button variant="white-outline">
              Our Commitment
            </Button>
          </div>

          {/* Right Image */}
          <div className="w-full relative  rounded-xl overflow-hidden " data-aos="fade-left">
            <img 
              src="/moto/rexoil/values.png" 
              alt="Our Values" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-white/30 mb-12" />

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100" data-aos="fade-up" data-aos-delay="100">
            <h3 className="product-card-title font-semibold text-[#f26828] mb-3 exo-2" >
              Our Vision
            </h3>
            <p className="product-card-text text-[#333333] niramit mb-6 leading-[1.8] ">
              To be a globally recognized leader by embracing innovation, respecting people and the environment, and driving sustainable growth. We are committed to following industry advancements, delivering high-quality solutions, and creating lasting value for our customers, partners, and communities.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100" data-aos="fade-up" data-aos-delay="200">
            <h3 className="product-card-title font-semibold text-[#f26828] mb-3 exo-2" >
              Our Mission
            </h3>
            <p className="product-card-text text-[#333333] niramit mb-6 leading-[1.8] ">
              To manufacture or supply high-quality, affordable products that meet our customers' expectations, to utilize technological capabilities to the fullest extent, to be open to innovation, to create a happy family atmosphere with our employees, and to be a leader in adhering to laws and business ethics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
