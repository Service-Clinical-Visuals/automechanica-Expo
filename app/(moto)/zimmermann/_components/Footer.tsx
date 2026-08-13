import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import Container from "./Container";

const quickLinks = ["Home", "About Us", "Products", "News"];

const socialLinks = [
  { icon: FaLinkedinIn, label: "LinkedIn" },
  { icon: FaXTwitter, label: "X" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaYoutube, label: "YouTube" },
];

export default function Footer() {
  return (
    <>
      <footer className="relative w-full overflow-hidden bg-[#F4F4F4] pt-16 pb-14">
        <div
          className="hidden md:block absolute inset-0 bg-no-repeat bg-cover bg-right-top pointer-events-none"
          style={{ backgroundImage: "url(/moto/zimmermann/footerbg.png)" }}
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[34fr_16fr_16fr_18fr_16fr] gap-10">
            {/* Logo + tagline */}
            <div data-aos="fade-up">
              <img
                src="/moto/zimmermann/logo.png"
                alt="Zimmermann"
                className="w-[220px] h-auto object-contain mb-5"
              />
              <p className="content max-w-[420px] mb-5">
                Driven by German engineering and decades of expertise, Otto Zimmermann develops
                precision braking solutions that deliver reliable performance, safety, and
                durability for modern vehicles.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="text-[#1A1A1A] hover:text-secondary transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div data-aos="fade-up">
              <h3 className="heading text-[24px]! leading-[24px]! mb-6">Quick Links</h3>
              <ul className="flex flex-col gap-4">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="content text-[#1A1A1A]! hover:text-secondary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div data-aos="fade-up">
              <h3 className="heading text-[24px]! leading-[24px]! mb-6">Contact Us</h3>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+4972619451423"
                  className="flex items-center gap-3 content text-[#1A1A1A]! hover:text-secondary transition-colors"
                >
                  <Phone size={18} className="shrink-0" />
                  +49 7261 94514 23.
                </a>
                <div className="flex items-start gap-3 content">
                  <MapPin size={18} className="shrink-0 mt-0.5" />
                  <span>
                    Riedacker 1, 74889
                    <br />
                    Sinsheim, Germany
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div data-aos="fade-up">
              <h3 className="heading text-[24px]! leading-[24px]! mb-6">Subscribe to Newsletter</h3>
              <div className="flex items-stretch rounded-sm border border-[#6B6B6B] bg-white max-w-[500px] py-1 px-1">
                <input
                  type="email"
                  placeholder="Enter Your E-Mail"
                  className="flex-1 min-w-0 navlink text-[#1A1A1A]! bg-transparent outline-none placeholder:text-[#9CA3AF]"
                />
                <button
                  type="button"
                  className="heading-white text-[16px]! leading-[24px]! tracking-[0%]! uppercase bg-secondary hover:bg-secondary-hover py-2.5 px-6 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </Container>
      </footer>

      <div className="bg-[#FFFFFF] py-4">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="content text-[16px]!">
            &copy; 2026 Otto Zimmermann Maschinen- und Apparatebau GmbH
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="content text-[16px]! hover:text-secondary transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="#" className="content text-[16px]! hover:text-secondary transition-colors">
              Privacy policy
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
