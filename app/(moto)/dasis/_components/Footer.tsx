import { MapPin, Phone, Printer, Mail } from "lucide-react";
import Container from "./Container";

const quickLinks = ["Home", "Shop", "logistics", "About DASIS", "Portfolio", "Repair Request"];

const portfolioLinks = ["Motor Vehicles", "Rail Transport", "Services"];

export default function Footer() {
  return (
    <footer className="bg-primary text-white ptclass overflow-y-hidden">
      <Container data-aos="fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[35fr_16.25fr_16.25fr_16.25fr_16.25fr] gap-10 mb-10">
          {/* Newsletter */}
          <div>
            <p className="heading-white font-normal! mb-4 text-[28px]! uppercase">
              Trust in Our Expertise - When Can We Meet?
            </p>
            <div className="flex items-center gap-3 min-w-[280px] max-w-[350px]">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 min-w-0 text-[15px] text-black bg-white px-6 py-2 outline-none placeholder-[#48484899]"
              />
                <button
                  className="heading-white rounded-tr-[16px] rounded-bl-[16px] text-[24px]! uppercase text-white! bg-secondary px-6 py-0.5 hover:bg-primary-hover transition-colors"
                >
                  Subscribe
                </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="heading-white font-normal! mb-6 text-[24px]!">Quick Links</p>
            <ul className="space-y-4 content-white font-semibold! text-[16px]! leading-[150%]! tracking-[0%]!">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Portfolio */}
          <div>
            <p className="heading-white font-normal! mb-6 text-[24px]!">Our Portfolio</p>
            <ul className="space-y-4 content-white font-semibold! text-[16px]! leading-[150%]! tracking-[0%]!">
              {portfolioLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="heading-white font-normal! mb-6 text-[24px]!">Contact Info</p>
            <ul className="space-y-4 content-white font-semibold! text-[16px]! leading-[150%]! tracking-[0%]!">
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                +49 (0) 2630 9401 0
              </li>
              <li className="flex items-center gap-3">
                <Printer size={18} className="shrink-0" />
                +49 (0) 2630 9401 94
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                info(at)dasis.de
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <p className="heading-white font-normal! mb-6 text-[24px]!">Address</p>
            <ul className="space-y-4 content-white font-semibold! text-[16px]! leading-[150%]! tracking-[0%]!">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-1" />
                <span className="leading-[26px]">
                  AKS DASIS Dommermuth GmbH &amp; Co. KG, At Hahnenberg 14 (Industrial Park),
                  D-56218 M&uuml;lheim&ndash;K&auml;rlich
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white py-4 flex items-center justify-center">
          <p className="content-white text-medium! text-[16px]!">
            &copy; 2026 &ndash; AKS Dasis Dommermuth GmbH &amp; Co. KG
          </p>
        </div>
      </Container>
    </footer>
  );
}
