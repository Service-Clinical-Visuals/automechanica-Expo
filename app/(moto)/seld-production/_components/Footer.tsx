import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Container from "./Container";

const usefulLinks = ["Homepage", "Methodology", "Products", "Packaging", "Our Strengths"];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <Container>
        {/* Main footer */}
        <div className="py-14 relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[25fr_20fr_20fr_25fr_10fr] gap-10">


          {/* Logo + tagline */}
          <div className="flex flex-col items-start gap-4" data-aos="fade-up">
            <img src="/moto/seld-production/logo.png" alt="SELD Production" className="h-16 w-auto" />
            <p className="content-white text-[16px]!">
              50 years&apos; experience in formulation and manufacturing of fuel additives, special
              lubricants and High Performance maintenance products
            </p>
          </div>

          {/* Useful Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="heading-white font-bold mb-6 text-[19px]!">Useful Links</p>
            <ul className="space-y-4 content-white text-[16px]! leading-[125%]!">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div data-aos="fade-up" data-aos-delay="200">
            <p className="heading-white font-bold mb-6 text-[19px]!">Contact Us</p>
            <ul className="space-y-4 font-normal content-white text-[16px]! leading-[125%]!">
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                +33 (0)4 37 25 16 16
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                contact@seld-production.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span>
                  6 Rue Jules Guesde<br />
                  Z.I. Du Pontet<br />
                  69360 St-Symphorien D&apos;Ozon
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div data-aos="fade-up" data-aos-delay="300">
            <p className="heading-white font-bold mb-6 text-[19px]!">Subscribe For More Information</p>
            <p className="content-white text-[16px]! mb-6 leading-[125%]!">
              Stay informed with the latest product launches, industry news, technical updates, and
              innovations from SAS Societé d&apos;Exploitation des Lubrifiants Dagan
            </p>
            <div className="flex bg-white rounded-md max-w-[340px]!">
              <input
                type="email"
                placeholder="Email Address..."
                className="flex-1 text-[#1a2e5a] text-sm px-3 py-2.5 outline-none placeholder-gray-400"
              />
              <button className="bg-primary rounded-md px-3 py-3 hover:bg-primary-hover transition-colors shrink-0 m-1.5">
                <ArrowRight size={16} className="text-white" />
              </button>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <img
              src="/moto/seld-production/dnv.png"
              alt="DNV Certification"
              className="hidden lg:block absolute top-0 right-0 w-20 h-20"
              data-aos="fade-up"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#FFFFFF] py-6">
          <p className="text-center heading-white font-normal! text-[18px]!">
            Copyright ©SAS Societé d&apos;Exploitation des Lubrifiants Dagan. 2026
          </p>
        </div>
      </Container>
    </footer>
  );
}
