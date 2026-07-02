import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Container from "./Container";

const quickLinks = ["Home", "Company", "Activities", "Csr", "Media"];
const legalLinks = ["Privacy Policy", "Cookie Policy", "Whistleblowing Portal", "Accessibility Statement", "Privacy Preferences"];

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white">
      {/* Main footer */}
      <Container>
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.3fr_1.5fr] gap-10">

          {/* Logo + tagline */}
          <div className="lg:col-span-1 flex flex-col items-start gap-3" data-aos="fade-up">
            <img src="/moto/intercar/logo.png" alt="InterCar" className="w-[90%] mb-4" />
            <p className="content-white text-[16px]!">
              Part of the OMR Automotive Group, InterCar is an Italian manufacturer specialized in the
              production of high-performance brake discs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="100">
            <p className="heading-white font-bold mb-8 text-[18px]!">Quick Links</p>
            <ul className="space-y-4 content-white text-[16px]! leading-[125%]!">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="200">
            <p className="heading-white font-bold mb-8 text-[18px]!">Legal</p>
            <ul className="space-y-4 content-white text-[16px]! leading-[125%]!">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="300">
            <p className="heading-white font-bold mb-8 text-[18px]!">Contact Us</p>
            <ul className="space-y-4 font-normal content-white text-[16px]! leading-[125%]!">
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-secondary" />
                +39 030 7758100
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-secondary" />
                Info@Intercar.Org
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5 text-secondary" />
                <span>
                  Via Bonfadina, 2/4<br />
                  25046 Cazzago San Martino (BS)
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="400">
            <p className="heading-white font-bold mb-8 text-[18px]!">Subscribe For More Information</p>
            <p className="content-white text-[16px]! mb-8 leading-[125%]!">
              Stay informed with the latest product launches, industry news, technical updates, and
              innovations from Intercar S.P.A.
            </p>
            <div className="flex bg-white rounded-md max-w-[340px]!">
              <input
                type="email"
                placeholder="Email Address..."
                className="flex-1 text-[#1a2e5a] text-sm px-3 py-2.5 outline-none placeholder-gray-400"
              />
              <button className="bg-secondary rounded-md px-3 py-3 hover:bg-secondary-hover transition-colors shrink-0 m-1.5">
                <ArrowRight size={16} className="text-white" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-4">
          <p className="text-center content-white font-normal! text-[16px]!">
            InterCar S.p.A. – Via Bonfadina, 2/4 – 25046 Cazzago San Martino (BS) – Italy – C.F.
            00300510179 – P.I.00552580987 – Copyright 2020 ©
          </p>
        </div>
      </Container>
    </footer>
  );
}
