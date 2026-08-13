"use client";

import Container from "./Container";

const quickLinks = ["Home", "Agency", "Products", "Sectors", "News", "Contact"];

const companyLinks = [
  "Code of Ethics",
  "General conditions of sale",
  "Model 231",
  "Whistleblowing",
  "Privacy Policy",
  "Cookie Policy",
];

const contactInfo = [
  { icon: "/moto/ramoil/map-pin.png",    text: "Plant: Via Filichito, 28 80013 Casalnuovo (NA)" },
  { icon: "/moto/ramoil/phone-call.png", text: "+39 081.519.51.11" },
  { icon: "/moto/ramoil/printer.png",    text: "+39 081.842.10.79" },
  { icon: "/moto/ramoil/mail.png",       text: "info@ramoil.it" },
];


export default function Footer() {
  return (
    <footer className="bg-white py-10">
      <Container>
        <div className="border bg-[#F2F4F7] border-[#00437A] rounded-2xl px-4 sm:px-8 md:px-14 lg:px-[100px] py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[35fr_20fr_20fr_25fr] gap-10">

            {/* Col 1: Logo + subscribe + socials */}
            <div className="flex flex-col gap-6">
              <img src="/moto/ramoil/logo.png" alt="Ramoil" className="h-auto w-[172px]" />

              {/* Subscribe form */}
              <div className="flex max-w-[80%] heading">
                <input
                  type="email"
                  placeholder="Please Enter Your Email"
                  className="flex-1 bg-[#00437A] text-white! text-[20px]! font-normal! placeholder-white px-4 outline-none min-w-0"
                  style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%)" }}
                />
                <button
                  className="bg-[#F5C400] heading text-black! font-bold text-[20px]! font-normal! px-5 shrink-0 hover:bg-[#e0b200] transition-colors"
                  style={{ clipPath: "polygon(10px 0, 100% 0, 100% 100%, 0 100%)", marginLeft: -2 }}
                >
                  Subscribe
                </button>
              </div>

              {/* Social icons */}
              <div className="flex gap-3">
                <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                  <img src="/moto/ramoil/insta.png" alt="Instagram" className="w-13 h-13 object-contain" />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                  <img src="/moto/ramoil/linkedIn.png" alt="LinkedIn" className="w-13 h-13 object-contain" />
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <p className="font-medium heading text-[#00437A] mb-5 text-[28px]!">Quick Links</p>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="heading font-normal! text-[20px]! text-[#1A1A1A]! hover:text-[#00437A] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Company */}
            <div>
              <p className="font-medium heading text-[#00437A] mb-5 text-[28px]!">Company</p>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="heading font-normal! text-[20px]! text-[#1A1A1A]! hover:text-[#00437A] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact Info */}
            <div>
              <p className="font-medium heading text-[#00437A] mb-5 text-[28px]!">Contact Info</p>
              <ul className="space-y-4">
                {contactInfo.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <img src={item.icon} alt="" className="w-5 h-5 shrink-0 mt-0.5 object-contain" />
                    <span className="heading font-normal! text-[20px]! text-[#1A1A1A]!">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </Container>
    </footer>
  );
}
