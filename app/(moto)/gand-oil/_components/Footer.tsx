import Image from "next/image";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-black pt-14 pb-6">
      <Container>
        {/* Logo centered */}
        <div data-aos="fade-up" className="flex justify-center mb-14">
          <Image
            src="/moto/gand-oil/logo2.png"
            alt="Gand Oil"
            width={220}
            height={60}
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Links row */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex items-center justify-between mb-6">
          {/* Left links */}
          <div className="flex items-center gap-8">
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
          <div className="flex items-center gap-3">
            <a href="#" className="content text-[18px]! font-medium! hover:text-white/70 transition-colors whitespace-nowrap">
              Terms &amp; Conditions
            </a>
            <span className="text-white/40">|</span>
            <a href="#" className="content text-[18px]! font-medium! hover:text-white/70 transition-colors whitespace-nowrap">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Divider */}content
        <hr className="border-white/10 mb-6" />

        {/* Copyright */}
        <p data-aos="fade-up" data-aos-delay="200" className="content text-[18px]! font-medium! text-center text-white/60">
          © 2026 GAND OIL Lubricants. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}
