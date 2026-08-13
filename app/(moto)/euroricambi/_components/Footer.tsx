"use client";

import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import Container from "./Container";

const groupLinks = ["Euroricambi", "AM Gears", "Eurotec", "Lambert Getriebeteile", "FA.TA. Ricambi Group"];

const productLinks = [
  "Gearboxes and Differentials",
  "Earthmoving and Mining",
  "Customized Production",
  "Complementary Parts",
  "Technology and Quality",
];

const contactInfo = [
  { icon: Phone, text: "+39 0516506811" },
  { icon: Mail, text: "info@euroricambigroup.com" },
  {
    icon: MapPin,
    text: "Via Chiesaccia, 5 - Loc. Crespellano 40053 Valsamoggia - Bologna - Italy",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <Container>
        <div className="px-4 sm:px-8 md:px-10 lg:px-[40px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_1fr_1fr_1.2fr] gap-10">
            {/* Col 1: Logo + blurb */}
            <div>
              <img src="/moto/euroricambi/logo.png" alt="Euroricambi Group" className="h-12 w-auto mb-7" />
              <p className="content text-[16px]! font-normal! leading-[150%]!">
                Over 15 years of delivering reliable automotive components, innovative solutions,
                and trusted global service.
              </p>
            </div>

            {/* Col 2: The Group */}
            <div>
              <h4 className="heading2 text-[#1A1A1A]! text-[19px]! font-bold! leading-[27.2px]! mb-7">The Group</h4>
              <ul className="space-y-3">
                {groupLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="content text-[16px]! font-normal! leading-[150%]! hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Products and Quality */}
            <div>
              <h4 className="heading2 text-[#1A1A1A]! text-[19px]! font-bold! leading-[27.2px]! mb-7">Products and Quality</h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="content text-[16px]! font-normal! leading-[150%]! hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact Us */}
            <div>
              <h4 className="heading2 text-[#1A1A1A]! text-[19px]! font-bold! leading-[27.2px]! mb-7">Contact Us</h4>
              <ul className="space-y-4">
                {contactInfo.map(({ icon: Icon, text }, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="content text-[16px]! font-normal! leading-[150%]!">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 5: Subscribe */}
            <div>
              <h4 className="heading2 text-[#1A1A1A]! text-[19px]! font-bold! leading-[27.2px]! mb-7">Subscribe For More Information</h4>
              <p className="content text-[16px]! font-normal! leading-[150%]! mb-5">
                Stay informed with the latest product launches, industry news, technical updates,
                and innovations from Euroricambi Group
              </p>
              <form className="flex items-center gap-2 border shadow-md max-w-[300px] border-gray-300 rounded-md p-1.5 pl-4">
                <input
                  type="email"
                  placeholder="Email Address...."
                  className="content flex-1 min-w-0 text-[16px]! font-normal! leading-[150%]! outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="shrink-0 w-9 h-9 flex items-center justify-center bg-primary rounded-md hover:opacity-90 transition-opacity"
                >
                  <ArrowRight size={22} className="text-white" />
                </button>
              </form>
            </div>
          </div>

          <hr className="border-t border-gray-200 mt-12 mb-6" />

          <p className="content text-[16px]! text-center text-[#212121]!">
            © 2020 FA.TA. Ricambi S.p.A. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
