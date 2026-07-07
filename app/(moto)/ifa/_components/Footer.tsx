import { MapPin, Phone, Printer } from "lucide-react";
import Container from "./Container";

const quickLinks = ["Home", "About Us", "Products", "News"];

const productLinks = ["Cabin Filter", "Air Filter", "Diesel Filters", "Oil Filters"];

export default function Footer() {
  return (
    <footer className="bg-[#212121] text-white pt-16 overflow-y-hidden">
      <Container data-aos="fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-[43fr_57fr] gap-10 mb-6">
          {/* Logo + tagline + newsletter */}
          <div className="flex flex-col justify-between gap-10 lg:gap-16">
            <div >
              <img src="/moto/ifa/logo.png" alt="IFA" className="h-13 w-auto object-contain mb-6" />
              <p className="content-white text-[16px]! max-w-[490px] leading-[28px]! tracking-[0%]!">
                This extensive presence enables the company to efficiently serve customers, provide
                reliable technical support, and ensure the timely delivery of high-quality air
                filtration solutions.
              </p>
            </div>
            <div className="w-full">
              <p className="heading-white font-medium! mb-4 text-[20px]! leading-[28px]! tracking-[0%]!">
                Subscribe to Newsletter :
              </p>
              <div className="flex max-w-[430px] py-0.5 px-1.5 bg-white border border-primary">
                <input
                  type="email"
                  placeholder="Enter Your E-Mail id"
                  className="flex-1 text-[16px]! leading-[100%]! tracking-[0%]! text-black px-4 outline-none placeholder-[#48484866]"
                />
                <button className="bg-primary px-2 py-1 font-semibold! heading-white text-[16px]! text-white hover:opacity-90 transition-opacity shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {/* Quick Links */}
            <div>
              <p className="heading-white font-semibold! mb-6 text-[18px]!">Quick Links</p>
              <ul className="space-y-5 content-white font-light! text-[16px]! leading-[100%]! tracking-[0%]!">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <p className="heading-white font-semibold! mb-6 text-[18px]!">Products</p>
              <ul className="space-y-5 content-white font-light! text-[16px]! leading-[100%]! tracking-[0%]!">
                {productLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="heading-white font-semibold! text-[16px]! hover:text-gray-300 transition-colors">
                    See More...
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="heading-white font-semibold! mb-6 text-[18px]!">Contact</p>
              <ul className="space-y-5 content-white font-light! text-[16px]! leading-[100%]! tracking-[0%]!">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="shrink-0 mt-1" />
                  <span className="leading-[28px]">
                    IFA Industria Filtri Aria Srl
                    <br />
                    Via Boscofangone - Zona ASi
                    <br />
                    80035 NOLA (NA) - Italy
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="shrink-0" />
                  +39 081 519 82 13
                </li>
                <li className="flex items-center gap-3">
                  <Printer size={20} className="shrink-0" />
                  +39 081 519 82 07
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white pt-3 pb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="content-white text-[16px]!">
            Copyrights@2026 IFA Industrial Filtri Aria S.r.l. All Rights Reserved
          </p>
          <div className="flex gap-6 content-white text-[16px]!">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Credits</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
