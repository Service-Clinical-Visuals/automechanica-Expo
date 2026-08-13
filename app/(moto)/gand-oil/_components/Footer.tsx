import Image from "next/image";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-black pt-14 pb-6" >
      <Container>
        {/* Logo centered */}
        <div data-aos="fade-up" className="flex justify-center mb-14">
          <div></div>
          <Image
            src="/moto/gand-oil/logo2.png"
            alt="Gand Oil"
            width={220}
            height={60}
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Links row */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 mb-6">
          {/* Left links */}
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 text-center">
            <a href="#" className="content text-[18px]! font-medium! hover:text-white/70 transition-colors whitespace-nowrap">
              View on Google Maps
            </a>
            <a href="#" className="content text-[18px]! font-medium! hover:text-white/70 transition-colors whitespace-nowrap">
              +30 210 5555136
            </a>
            <a href="#" className="content text-[18px]! font-medium! hover:text-white/70 transition-colors whitespace-nowrap">
              Get in Touch
            </a>
          </div>

          {/* Right links */}
          <div className="flex flex-col lg:flex-row items-center gap-3 text-center mt-4 lg:mt-0">
            <a href="#" className="content text-[18px]! font-medium! hover:text-white/70 transition-colors whitespace-nowrap">
              Terms &amp; Conditions
            </a>
            <span className="text-white/40 hidden lg:inline">|</span>
            <a href="#" className="content text-[18px]! font-medium! hover:text-white/70 transition-colors whitespace-nowrap">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/40 mb-6" />

        {/* Copyright */}
        <p data-aos="fade-up" data-aos-delay="200" data-aos-offset="0" className="content text-[#ffffff] text-[18px] font-medium text-center">
          © 2026 GAND OIL Lubricants. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}
