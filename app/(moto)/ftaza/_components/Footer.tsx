import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Container from "./Container";

export default function Footer() {
  const quickLinks = ["Home", "About Us", "Products", "News", "Contact Us"];
  const products = ["Air Compressor", "Airvalveblock", "Ignition Coil", "Oxygen Sensor"];

  return (
    <footer className="bg-[#F8F9FA] text-[#4A4A4A] border-t border-gray-200">
      <Container>
        {/* Main footer */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.2fr_1.5fr_2fr] gap-10">

          {/* Logo + tagline */}
          <div className="flex flex-col items-start gap-10 mr-20" data-aos="fade-up">
            <div className="bg-[#062AAA] p-4 flex items-center justify-center">
              <img src="/moto/ftaza/logo.png" alt="FTAZA Industrial" className="h-10 w-auto object-contain" />
            </div>
            <p className="font-oswald font-regular text-[17px] leading-[1.6]">
              FTAZA Industrial Co., Ltd. is a trusted automotive parts manufacturer delivering high-quality, precision-engineered solutions through advanced manufacturing, innovation, and global expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="font-oswald font-semibold text-[#2A2A2A] mb-6 text-[22px]">Quick Links</p>
            <ul className="space-y-3 font-regular font-oswald text-[17px]">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#062AAA] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div data-aos="fade-up" data-aos-delay="150">
            <p className="font-oswald font-semibold text-[#2A2A2A] mb-6 text-[22px]">Our Products</p>
            <ul className="space-y-3 font-regular font-oswald text-[17px]">
              {products.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#062AAA] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div data-aos="fade-up" data-aos-delay="200">
            <p className="font-oswald font-semibold text-[#2A2A2A] mb-6 text-[22px]">Contact Us</p>
            <ul className="space-y-4 font-regular font-oswald text-[17px]">
              <li className="flex items-start gap-3">
                <Phone size={18} className="shrink-0 text-[#062AAA] mt-0.5" />
                323-908-8554
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="shrink-0 text-[#062AAA] mt-0.5" />
                ftazaindustiralusa@gmail.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-[#062AAA] mt-0.5" />
                <span>
                  10018 River Rd. Saint Rose<br />
                  LA 70087, USA
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div data-aos="fade-up" data-aos-delay="300">
            <p className="font-oswald font-semibold text-[#2A2A2A] mb-6 text-[22px]">Subscribe For More Information</p>
            <p className="font-oswald font-regular text-[17px] mb-6 leading-[1.6]">
              Stay informed with the latest product launches, <br /> industry news, technical updates, and innovations from FTAZA <br />Industrial CO.,Ltd
            </p>
            <div className="flex bg-white rounded border border-gray-200">
              <input
                type="email"
                placeholder="Email Address..."
                className="flex-1 text-[#2A2A2A] font-oswald font-regular text-[16px] px-4 py-2.5 outline-none placeholder-gray-400"
              />
              <button className="bg-[#062AAA] rounded-sm px-4 py-2 hover:bg-blue-800 transition-colors shrink-0 m-1">
                <ArrowRight size={16} className="text-white" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-300 py-6">
          <p className="text-center font-regular font-oswald text-[#4A4A4A] text-[17px]">
            Copyright © 2026 FTAZA Industrial CO.,Ltd All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
