import { MapPin, Phone } from "lucide-react";
import Container from "./Container";

const quickLinks = ["Home", "About Us", "Products", "News"];

const productLinks = [
  "Air Filtration Automotive",
  "Oil and air filters for motorcycles",
  "Air Filtration Industries",
  "Motor attachments",
];

const socials = [
  { icon: "/moto/hengst/socials/linkedIn.png", href: "#" },
  { icon: "/moto/hengst/socials/youtube.png", href: "#" },
  { icon: "/moto/hengst/socials/instagram.png", href: "#" },
  { icon: "/moto/hengst/socials/facebook.png", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#484848] text-white pt-16 overflow-y-hidden">
      <Container data-aos="fade-up">
        <div className="mb-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            {/* Logo + tagline */}
            <div className="flex flex-col items-start gap-4">
              <img
                src="/moto/hengst/logo.png"
                alt="Hengst Filtration"
                className="h-16 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p className="content-white text-[16px]! max-w-[460px] leading-[150%]! tracking-[0%]!">
                We work every day on the major issues of our time. And we do so with the goal of
                making the planet a cleaner place. That is why our vision is: Purifying our planet
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[25fr_40fr_35fr] gap-10">
              {/* Quick Links */}
              <div>
                <p className="heading-white font-semibold! mb-6 text-[18px]!">Quick Links</p>
                <ul className="space-y-5 content-white text-[16px]!  leading-[100%]! tracking-[0%]!">
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
                <ul className="space-y-5 content-white text-[16px]! leading-[100%]! tracking-[0%]!">
                  {productLinks.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-gray-300 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#" className=" heading-white font-semibold! text-[16px]! hover:text-gray-300 transition-colors">
                      See More...
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <p className="heading-white font-semibold! mb-4 text-[18px]!">Contact</p>
                <ul className="space-y-5 content-white text-[16px]! leading-[100%]!">
                  <li className="flex items-start gap-3">
                    <MapPin size={24} className="shrink-0 mt-2" />
                    <span className="leading-[28px] whitespace-nowrap">
                      Hengst SE Nienkamp 55-85
                      <br />
                      48147 Münster GERMANY
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={24} className="shrink-0" />
                    +49 251 20202-0
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Socials + Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="heading-white font-semibold! mb-5 text-[20px]!">Socials</p>
              <div className="flex gap-3">
                {socials.map(({ icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <img src={icon} alt="" className="w-8 h-auto object-contain" />
                  </a>
                ))}
              </div>
            </div>

            <div className="w-full flex-col xl:flex-row flex items-start xl:items-center gap-4 xl:gap-6 justify-start xl:justify-end">
              <p className="heading-white font-semibold! text-[20px]! whitespace-nowrap">Subscribe to Newsletter :</p>
              <div className="flex max-w-[430px] py-0.5 px-1.5 bg-white">
                <input
                  type="email"
                  placeholder="Enter Your E-Mail id"
                  className="flex items-center text-[16px]! leading-[100%]! tracing-[0%]! justify-center w-[160px] xl:w-[280px] text-black px-4 outline-none placeholder-[#48484866]"
                />
                <button className="bg-primary px-2 py-1 font-normal! heading-white text-[16px]! text-white hover:opacity-90 transition-opacity shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-#FFFFFF py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="content-white text-[16px]!">Copyrights@2026 Hengst s e .All Rights Reserved</p>
          <div className="flex gap-6 content-white text-[16px]!">
            <a href="#" className="hover:text-gray-300 transition-colors">GTC</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Imprint</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Data Protection</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
