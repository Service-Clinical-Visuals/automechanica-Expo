import { Mail, Phone } from "lucide-react";
import Container from "./Container";
import { ImMail } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const quickLinks = ["Home", "About", "Cross References", "Products", "Contact"];

export default function Footer() {
  return (
    <>
      <footer
        className="relative w-full overflow-hidden bg-cover bg-center pt-16"
        style={{ backgroundImage: "url(/moto/eurolub/qualitybg.png)" }}
      >
        <Container className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[40fr_20fr_20fr_20fr] gap-10 mb-14">
            {/* Logo + tagline */}
            <div data-aos="fade-up">
              <img src="/moto/eurolub/logo.png" alt="Eurolub" className="w-[300px] h-auto object-contain mb-5" />
              <p className="content max-w-[500px]">
                EUROLUB provides high-quality lubricants and automotive solutions for enhanced
                performance, reliability, and innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div data-aos="fade-up">
              <h3 className="heading text-[28px]! leading-[28px]! mb-6">Quick Links</h3>
              <ul className="flex flex-col gap-4">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="content text-[#1A1A1A]! hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div data-aos="fade-up">
              <h3 className="heading text-[28px]! leading-[28px]! mb-6">Contact</h3>
              <p className="content mb-5">
                EUROLUB GmbH
                <br />
                Freisinger Stra&szlig;e 25&ndash;27
                <br />
                85386 Eching, Germany
              </p>
              <div className="flex flex-col gap-3 content text-[20px]!">
                <a href="mailto:info@eurolub.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <MdEmail size={20} />
                  info@eurolub.com
                </a>
                <a href="tel:+4981659591-0" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone size={18} />
                  +49 8165 9591-0
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div data-aos="fade-up">
              <h3 className="heading text-[28px]! leading-[28px]! mb-6">News Letter</h3>
              <p className="content mb-4">
                Subscribe to our newsletter to receive updates on the latest news!
              </p>
              <input
                type="email"
                placeholder="Subscribe with us..."
                className="w-full shadow-md navlink text-[#1A1A1A]! bg-white border border-[#E5E7EB] rounded-md px-4 py-2.5 mb-4 outline-none placeholder:text-[#9CA3AF]"
              />
              <button
                type="button"
                className="content-white font-semibold! uppercase bg-primary rounded-lg px-6 py-2.5 hover:bg-primary-hover transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>


        </Container>
      </footer>
      <div className="border-t border-[#E5E7EB] py-4 flex items-center justify-center">
        <p className="content text-[16px]! text-[#4B5563]!">
          &copy; 2026 | EUROLUB GmbH &ndash; all rights reserved.
        </p>
      </div>
    </>
  );
}
