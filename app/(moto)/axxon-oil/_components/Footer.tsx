import { Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react";
import Container from "./Container";

const axxonoilLinks = ["About us", "Quality", "Research and development", "Distribution", "General conditions of sale"];

const productLinks = ["Passenger cars motor oils", "Motorcycles motor oils", "Heavy duty motor oils", "Agricultural motor oils"];

export default function Footer() {
  return (
    <footer className="bg-white text-[#1A1A1A] pt-14 border-t border-gray-100">
      <Container data-aos="fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[19fr_27fr_27fr_27fr] gap-10 pb-10">
          {/* Logo + tagline + social */}
          <div>
            <img src="/moto/axon-oil/logo.png" alt="AxxonOil" className="w-[220px] h-auto object-contain mb-4" />
            <p className="content text-[16px]! leading-[24px]! mb-6">
              AxxonOil is an international operating company, based in Italy, leader in the
              production of lubricants.
            </p>
            <p className="heading text-[19px]! font-medium! mb-4 text-[#5D5D5D]!">Quick Links</p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full hover:opacity-90 transition-opacity"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full hover:opacity-90 transition-opacity"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full hover:opacity-90 transition-opacity"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Axxonoil links */}
          <div>
            <p className="heading text-[19px]! font-medium! mb-5 text-[#5D5D5D]!">Axxonoil</p>
            <ul className="space-y-3">
              {axxonoilLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="content text-[16px]! hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="heading text-[19px]! font-medium! mb-5 text-[#5D5D5D]!">Products</p>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="content text-[16px]! hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="text-primary text-[16px]! underline underline-offset-2">
                  See More
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <p className="heading text-[19px]! text-[#5D5D5D]! font-medium! mb-4">Subscribe For More Information</p>
            <p className="content text-[16px]! leading-[150%]! font-medium! mb-5">
              Stay informed with the latest product launches, industry news, technical updates,
              and innovations from AxxonOil Srl
            </p>
            <div className="flex items-center shadow-md gap-2 py-1.5 border border-gray-300 rounded-md pl-4 pr-1.5">
              <input
                type="email"
                placeholder="Email Address..."
                className="flex-1 min-w-0 heading text-[16px]! font-normal! text-black outline-none placeholder-gray-400 bg-transparent"
              />
              <button
                type="button"
                aria-label="Subscribe"
                className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-md shrink-0 hover:opacity-90 transition-opacity"
              >
                <ArrowRight size={32} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 py-5 text-center">
          <p className="content text-[13px]! text-gray-500">
            00196 Roma - P.iva 11193961007 |{" "}
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-primary transition-colors">
              Terms of use
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-primary transition-colors">
              General conditions of sale
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
