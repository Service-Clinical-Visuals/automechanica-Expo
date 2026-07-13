import React from "react";
import Link from "next/link";
import Typography from "./Typography";

export default function Footer() {
  return (
    <footer className="w-full relative bg-[url('/moto/veneporte/bg3.jpg')] bg-cover bg-center pt-16 pb-0 overflow-hidden">
      {/* Light gradient overlay to ensure readability and match the cyan vibe */}
      <div className="absolute inset-0 bg-[#BAEEFF] opacity-[0.45] z-0"></div>

      <div className="custom-container px-4 md:px-8 max-w-[1920px] mx-auto flex flex-col relative z-10">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">

          {/* Column 1: Logo & Info */}
          <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
            <Link href="/" className="inline-block mb-2 w-max">
              <img src="/moto/veneporte/logo.png" alt="Veneporte Logo" className="h-[70%]  xl:h-[100%] w-auto object-contain" />
            </Link>
            <Typography variant="p" className="footer-body leading-relaxed text-[#484848] pr-4">
              VENEPORTE Manufactures Exhaust Systems, Catalytic Converters, Particulate Filters, SCR's And Other Components For The Automotive Industry.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6 lg:pl-10" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <Typography variant="h4" weight="semibold" className="footer-heading text-[#34414C] relative pb-2 inline-block w-max">
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></span>
            </Typography>
            <div className="flex flex-col gap-4 mt-2">
              {['Home', 'About Us', 'Products', 'Markets', 'Contact Us'].map((link) => (
                <Link key={link} href="#" className="footer-body text-[#484848] hover:text-primary transition-colors ">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
            <Typography variant="h4" weight="semibold" className="footer-heading text-[#34414C] relative pb-2 inline-block w-max">
              Products
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></span>
            </Typography>
            <div className="flex flex-col gap-4 mt-2">
              {['Catalytic Converters', 'Particulate Filters', 'Silencers', 'SCRs & LNTs', 'Mounting Parts'].map((link) => (
                <Link key={link} href="#" className="footer-body text-[#484848] hover:text-primary transition-colors ">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
            <Typography variant="h4" weight="semibold" className="footer-heading text-[#34414C] relative pb-2 inline-block w-max">
              Contact Info
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></span>
            </Typography>
            <div className="flex flex-col gap-4 mt-2">
              <Typography variant="p" className="footer-body text-[#484848] leading-relaxed">
                Rua Jesse Almeida, 412, 3750-066<br />
                Vale Grande, Águeda - Portugal
              </Typography>
              <Typography variant="p" className="footer-body text-[#484848] mt-2">
                +351 234 660 370
              </Typography>
              <Typography variant="p" className="footer-body text-[#484848] ">
                +351 234 660 372
              </Typography>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-white py-5 relative z-10 border-t border-gray-200 shadow-inner">
        <div className="custom-container px-4 mx-auto text-center">
          <Typography variant="h5" font="oxanium" color="dark" className="font-semibold text-[#5D5D5D] tracking-wide" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">
            © 2018 - 2026 Indústrias Metálicas Veneporte, SA - All Rights Reserved
          </Typography>
        </div>
      </div>
    </footer>
  );
}
