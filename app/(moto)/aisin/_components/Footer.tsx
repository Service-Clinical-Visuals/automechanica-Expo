import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "News", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const productLinks = [
    { name: "Clutch Components", href: "#" },
    { name: "Brake Pads", href: "#" },
    { name: "DCT Kit", href: "#" },
    { name: "Break Pad Wear Indicator", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#242424] text-white pt-16 lg:pt-20">
      <div className="custom-container pb-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Logo & About */}
          <div className="col-span-2 md:col-span-1 lg:col-span-4 flex flex-col space-y-6">
            <Link href="/aisin" className="inline-block">
              <img
                src="/moto/aisin/logo.png"
                alt="Aisin Logo"
                className="object-contain brightness-0 invert w-[120px] 2xl:w-[160px] mb-4"
              />
            </Link>
              <p className="section-text text-[#ffffff] font-normal font-inter max-w-md">
              AISIN Aftermarket Europe delivers a wide range of OEM-quality automotive components, backed by decades of engineering expertise. Known for precision, reliability, and innovation, the company provides high-performance solutions that support safety, efficiency, and long-lasting vehicle performance across global markets.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="col-span-1 lg:col-span-2 lg:col-start-6 flex flex-col space-y-6">
            <h4 className="font-manrope font-semibold icon-text text-white">
              Quick Links
            </h4>
            <ul className="flex flex-col space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="font-inter text-white section-text hover:text-[#F8A122] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Products */}
          <div className="col-span-1 lg:col-span-2 flex flex-col space-y-6 lg:pl-15">
            <h4 className="font-manrope font-semibold icon-text text-white">
              Products
            </h4>
            <ul className="flex flex-col space-y-3">
              {productLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="font-inter text-white section-text hover:text-[#F8A122] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact & Socials */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3 flex flex-col space-y-8 lg:pl-15">
            <div className="flex flex-col space-y-4">
            <h4 className="font-manrope font-semibold icon-text text-white">
                Contact
              </h4>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-inter text-white section-text">
                  Braine-l'Alleud, Région wallonne
                </span>
              </div>
            </div>
            
            <div className="flex flex-col space-y-4">
            <h4 className="font-manrope font-semibold icon-text text-white">
                Follow Us On
              </h4>
              <div className="flex items-center space-x-4">
                <Link href="#" className="text-gray-300 hover:text-[#F8A122] transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-[#F8A122] transition-colors flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-[#F8A122] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-[#F8A122] transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="w-full border-t border-gray-300 py-6">
        <div className="custom-container flex justify-center text-center">
          <p className="font-inter text-white section-text">
            &copy; Aisin Europe 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
