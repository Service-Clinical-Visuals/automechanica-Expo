import { MapPin, Phone, Mail } from "lucide-react";
import Container from "./Container";

const quickLinks = ["Home", "About Us", "Products", "Contacts"];
const companyLinks = ["Privacy Policy", "Terms of Use", "Cookie Policy"];

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] pt-10 pb-6">
      <Container>
        {/* Newsletter row */}
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
          data-aos="fade-up"
        >
          <h2 className="heading ">Subscribe to Our Newsletter</h2>
          <div className="flex w-full sm:w-auto sm:min-w-[480px] rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Please Enter Email"
              className="flex-1 min-w-0 heading border-[#0D3374] border-1 text-[18px]! px-4 py-2.5 outline-none placeholder-[#21212180]!"
            />
            <button
              type="button"
              className="content-white bg-primary ml-2 font-medium! px-6 whitespace-nowrap hover:bg-primary-hover transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Blue box */}
        <div className="bg-primary text-white p-12 py-14 rounded-2xl" data-aos="fade-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[31fr_23fr_23fr_23fr] gap-10">
            {/* Logo + tagline */}
            <div>
              <div className="bg-white inline-block mb-4">
                <img src="/moto/meat-doria/logo.png" alt="Meat & Doria" className="h-18 w-auto" />
              </div>
              <p className="content-white text-[16px]!">
                The goal is to offer a product that stands out for high performance, maximum reliability,
                and durability.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="heading-white font-bold mb-5 text-[24px]!">Quick Links</p>
              <ul className="space-y-3 content-white text-[16px]! leading-[150%]!">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Company */}
            <div>
              <p className="heading-white font-bold mb-5 text-[24px]!">Our Company</p>
              <ul className="space-y-3 content-white text-[16px]! leading-[150%]!">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="heading-white font-bold mb-5 text-[24px]!">Contact</p>
              <ul className="space-y-4 content-white text-[16px]! leading-[150%]!">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="shrink-0 mt-0.5" />
                  <span>
                    Via Emanuele Petri, 8
                    <br />
                    Trofarello 10028 (Torino - Italy)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0" />
                  +3901 1961 4301
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0" />
                  meat-doria@meat-doria.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 text-center">
          <p className="heading text-[20px]!">
            Copyrights @ 2026{" "}
            <a href="#" className="text-[#1C6E9F]! underline">
              Meat &amp; Doria SRL.
            </a>{" "}
            All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
