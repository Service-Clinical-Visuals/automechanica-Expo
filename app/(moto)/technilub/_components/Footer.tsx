import Image from "next/image";
import Container from "./Container";

const quickLinks = [
  { label: "Technilub", hasDropdown: true },
  { label: "Our Domains", hasDropdown: true },
  { label: "Our products", hasDropdown: true },
  { label: "Buyers Guide", hasDropdown: false },
];

const companyLinks = ["News", "Contact", "Legal Notice"];

const socials = [
  { src: "/moto/technilub/social/linkedin.png", alt: "LinkedIn" },
  { src: "/moto/technilub/social/fb.png", alt: "Facebook" },
  { src: "/moto/technilub/social/insta.png", alt: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white">
      <Container>
        <div className="py-14 grid grid-cols-1 lg:grid-cols-[40fr_20fr_20fr_20fr] gap-12">

          {/* Col 1: Logo + description */}
          <div className="flex flex-col gap-6">
            <Image
              src="/moto/technilub/logo.png"
              alt="Technilub"
              width={245}
              height={80}
              className="h-[80px]! w-auto object-contain self-start"
            />
            <p className="content-white max-w-[90%] font-normal! text-[19px]!">
              With more than 15 years&apos; experience and sales of over 16 million
              litres by 2023, DLBC has established itself as France&apos;s leading
              distributor of agricultural lubricants.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <p className="font-semibold heading-white underline underline-offset-4 mb-5 text-[20px]!">
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label} className="">
                  <a href="#" className="flex pt-[16px]! items-center gap-1 heading-white text-[18px]! hover:text-gray-300 transition-colors">
                    {link.label}
                    {link.hasDropdown && (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="opacity-70 mt-0.5">
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Company */}
          <div>
            <p className="font-semibold heading-white underline underline-offset-4 mb-5 text-[20px]!">
              Our Company
            </p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="flex pt-[18px]! items-center gap-1 heading-white text-[18px]! hover:text-gray-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Social */}
          <div>
            <p className="font-semibold heading-white underline underline-offset-4 mb-5 text-[20px]!">
              Social
            </p>
            <div className="flex items-center gap-3 mt-8">
              {socials.map((s) => (
                <a
                  key={s.alt}
                  href="#"
                  className="flex items-center justify-center hover:border-white transition-colors overflow-hidden"
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={22}
                    height={22}
                    className="w-13 h-13 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/15 py-5">
          <p className="text-center heading-white text-[18px]! font-medium!">
            © Copyrights 2026 - All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
