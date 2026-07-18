import { Facebook, Instagram, Linkedin, Youtube, MapPin } from "lucide-react";
import Container from "./Container";
import Link from "next/link";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const contentsLinks = ["Home", "About us", "Products", "Distributors", "News"];
const productLinks = ["Automotive", "Heavy Duty", "Small Engine", "Agricultural"];
const legalLinks = ["Privacy Policy", "Cookie Policy", "Disclaimer", "Legal Information"];

export default function Footer() {
  return (
    <footer className=" text-white relative">
      {/* Curvy yellow/blue wave with logo */}
      <div className="relative w-full leading-[0]" data-aos="fade-up">
        <img src="/moto/north-sea/footer-curve.png" alt="" className="w-full h-auto block" />
        <div className="absolute inset-0 flex items-end">
          <Container className="w-full">
            <div className="flex flex-col items-end pb-[7%] sm:pb-[8%] md:pb-[1%]">
              <img
                src="/moto/north-sea/logo_white.png"
                alt="North Sea Lubricants"
                className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 w-auto  "
              />
              <div className="w-full max-w-[160px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] h-px bg-yellow-400 mt-1.5 sm:mt-2 md:mt-3" />
            </div>
          </Container>
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-[#004A94]">
      <Container>
        <div className="pt-8 pb-10 sm:pt-10 sm:pb-12 md:pt-12 md:pb-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-9 md:gap-x-8">
          {/* Follow or contact us */}
          <div className="col-span-2 sm:col-span-1">
            <p className="font-bold text-[15px]! sm:text-[16px]! md:text-[18px]! mb-4">Follow or contact us.</p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="bg-white text-[#004A94] w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Contents */}
          <div>
            <p className="font-bold text-[15px]! sm:text-[16px]! md:text-[18px]! mb-4">Contents</p>
            <ul className="space-y-2.5">
              {contentsLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="content-white text-[13px]! sm:text-[14px]! text-white/85 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="font-bold text-[15px]! sm:text-[16px]! md:text-[18px]! mb-4">Products</p>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="content-white text-[13px]! sm:text-[14px]! text-white/85 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="content-white text-[13px]! sm:text-[14px]! text-white underline underline-offset-2 hover:text-yellow-400 transition-colors">
                  More
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <p className="font-bold text-[15px]! sm:text-[16px]! md:text-[18px]! mb-4">Contact Us</p>
            <div className="flex gap-2">
              <MapPin size={16} className="shrink-0 mt-0.5 text-white/85" />
              <p className="content-white text-[13px]! sm:text-[14px]! text-white/85 leading-[150%]!">
                North Sea Lubricants B.V.
                <br />
                Ampèrestraat 5
                <br />
                3846AN Harderwijk
                <br />
                The Netherlands
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="font-bold text-[15px]! sm:text-[16px]! md:text-[18px]! mb-4">Legal</p>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="content-white text-[13px]! sm:text-[14px]! text-white/85 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <p className="content-white text-[13px]! text-white/80 leading-[160%]!">
              North Sea Lubricants is an independent lubricating oil brand based in the Netherlands.
              From our plant in the Port of Rotterdam, we offer a wide selection of the highest
              quality European manufactured lubricants.
            </p>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/20">
        <Container>
          <p className="text-center content-white text-[12px]! sm:text-[13px]! text-white/70 py-4 sm:py-5">
            © {new Date().getFullYear()} North Sea Lubricants
          </p>
        </Container>
      </div>
      </div>
    </footer>
  );
}
