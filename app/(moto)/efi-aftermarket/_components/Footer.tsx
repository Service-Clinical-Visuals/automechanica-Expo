import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button";
import { Divide, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#1E1E1E] py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* Column 1: Logo & Subscribe */}
          <div className="flex flex-col pr-0 xl:pr-8" data-aos="fade-up" data-aos-delay="0">
            <div className="mb-10">
              <img src="/moto/efi-aftermarket/footer-logo.png" alt="EFI Aftermarket" className="h-[100px]  object-contain" />
            </div>

            <div className="font-semibold footer-heading text-white mb-6 font-exo">
              EFI Automotive Service
            </div>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-white text-black px-4 py-3 outline-none rounded-sm font-exo"
                required
              />
              <div>
                <button type="submit" className="bg-[var(--color-primary)] text-white px-6 py-2.5 font-semibold hover:opacity-90 transition-opacity rounded-sm">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Column 2: Quick Links */}
          <div className="bg-[#2D2D2D] p-8 flex flex-col" data-aos="fade-up" data-aos-delay="100">
            <div className="footer-heading font-semibold text-white font-exo">Quick Links</div>
            <div className="w-full h-[1px] bg-white/20 my-6"></div>

            <div className="grid grid-cols-2 gap-y-5 gap-x-4">
              <div className="flex flex-col gap-5">
                <a href="#" className="footer-body text-white hover:text-primary transition-colors font-poppins">Our Ranges</a>
                <a href="#" className="footer-body text-white hover:text-primary transition-colors font-poppins">Resources</a>
                <a href="#" className="footer-body text-white hover:text-primary transition-colors font-poppins">News</a>
                <a href="#" className="footer-body text-white hover:text-primary transition-colors font-poppins">About us</a>
                <a href="#" className="footer-body text-white hover:text-primary transition-colors font-poppins">Our teams</a>
              </div>
              <div className="flex flex-col gap-5">
                <a href="#" className="footer-body text-white hover:text-primary transition-colors font-poppins">Our Teams</a>
                <a href="#" className="footer-body text-white hover:text-primary transition-colors font-poppins">Our Brands</a>
                <a href="#" className="footer-body text-white hover:text-primary transition-colors font-poppins">Our Expertise</a>
                <a href="#" className="footer-body text-white hover:text-primary transition-colors font-poppins">Our DNA</a>
              </div>
            </div>
          </div>

          {/* Column 3: Our Company */}
          <div className="bg-[#2D2D2D] p-8 flex flex-col" data-aos="fade-up" data-aos-delay="200">
            <div className="footer-heading font-semibold  text-white font-exo">Our Company</div>
            <div className="w-full h-[1px] bg-white/20 my-6"></div>

            <div className="flex flex-col gap-5">
              <a href="#" className="footer-body text-white hover:text-primary transition-colors font-poppins">Our CSR commitment</a>
              <a href="#" className="footer-body text-white hover:text-primary transition-colors font-poppins">Legal information</a>
              <a href="#" className="footer-body text-white hover:text-primary transition-colors font-poppins">Confidentiality policy</a>
              <a href="#" className="footer-body text-white hover:text-primary transition-colors font-poppins">Cookie Policy</a>
              <a href="#" className="footer-body text-white hover:text-primary transition-colors font-poppins">Terms and conditions of sale</a>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="bg-[#2D2D2D] p-8 flex flex-col" data-aos="fade-up" data-aos-delay="300">
            <div className="footer-heading font-semibold text-white font-exo">Contact</div>
            <div className="w-full h-[1px] bg-white/20 my-6"></div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white hover:text-primary shrink-0 mt-1" />
                <div className="footer-body hover:text-primary  text-white leading-relaxed font-poppins">
                  1, Rue de l'Industrie<br />
                  Parc d'Activités du Rongeant<br />
                  52300 Joinville - France
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 hover:text-primary text-white shrink-0" />
                <div className="footer-body hover:text-primary  text-white font-poppins">
                  +33 (0)3 25 94 01 86
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;
