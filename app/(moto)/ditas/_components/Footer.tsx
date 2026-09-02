"use client";

import Link from "next/link";
import { Search } from "lucide-react";

const linksList = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Products", href: "#" },
  { name: "Technology", href: "#" },
  { name: "Governance", href: "#" },
  { name: "Investors", href: "#" },
  { name: "Customers", href: "#" },
  { name: "Career", href: "#" },
  { name: "Contact", href: "#" },
];

const productsList = [
  "Tie rod end",
  "Drawbar",
  "Idler arm",
  "Push rod ball joint",
  "Pitman arm",
  "Tie rod",
  "Ball Joint",
  "Swing arm",
  "Stabilizer steering arm",
];

const socialLinks = [
  {
    icon: "/moto/ditas/fb.png",
    href: "#",
    label: "Facebook",
  },
  {
    icon: "/moto/ditas/link.png",
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: "/moto/ditas/insta.png",
    href: "#",
    label: "Instagram",
  },
  {
    icon: "/moto/ditas/x.png",
    href: "#",
    label: "X",
  },
  {
    icon: "/moto/ditas/yt.png",
    href: "#",
    label: "YouTube",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#F3F5F7] pt-8 pb-10 xl:pt-12 xl:pb-10">
      <div className="custom-container">
        <div
          className="
            mb-12 grid grid-cols-2 gap-x-6 gap-y-10
            md:grid-cols-2 md:gap-10
            xl:flex xl:flex-nowrap xl:justify-between xl:gap-10
          "
        >
          {/* Logo + Description */}
          <div
            className="
              col-span-2 min-w-0
              md:col-span-2
              xl:col-span-1 xl:flex-1 xl:min-w-0 xl:max-w-[320px]
            "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <Link href="#">
              <img
                src="/moto/ditas/logo.png"
                alt="DİTAŞ Logo"
                className="mb-6 h-[109px] w-[247px] object-contain"
              />
            </Link>

            <p className="body-text text-[#4B5563]">
              DİTAŞ BDY Yedek Parça İmalat ve Teknik A.Ş. manufactures
              high-quality steering and suspension components for OEM and
              aftermarket vehicles.
            </p>
          </div>

          {/* Links */}
          <div
            className="
              col-span-1 min-w-0
              md:col-span-1
              xl:col-span-1 xl:flex-1 xl:min-w-0 xl:max-w-[150px]
            "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <h4 className="mb-6 font-oswald text-2xl font-semibold text-[#474747]">
              Links
            </h4>

            <ul className="flex flex-col gap-[11px]">
              {linksList.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="body-text whitespace-nowrap text-[#4B5563] transition-colors hover:text-[#005BAB]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div
            className="
              col-span-1 min-w-0
              md:col-span-1
              xl:col-span-1 xl:flex-1 xl:min-w-0 xl:max-w-[180px]
            "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <h4 className="mb-6 font-oswald text-2xl font-semibold text-[#474747]">
              Products
            </h4>

            <ul className="flex flex-col gap-[11px]">
              {productsList.map((product) => (
                <li key={product}>
                  <a
                    href="#"
                    className="body-text text-[#4B5563] transition-colors hover:text-[#005BAB]"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            className="
              col-span-2 min-w-0
              md:col-span-1
              xl:col-span-1 xl:flex-1 xl:min-w-0 xl:max-w-[220px]
            "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-once="true"
          >
            <h4 className="mb-6 font-oswald text-2xl font-semibold text-[#272727]">
              Contact
            </h4>

            <ul className="flex flex-col gap-[17px]">
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center">
                  <img
                    src="/moto/ditas/phone.png"
                    alt=""
                    className="h-6 w-6 object-contain"
                  />
                </span>

                <a
                  href="tel:+903882324100"
                  className="body-text text-[#4B5563] transition-colors hover:text-[#005BAB]"
                >
                  +90 388 232 4100
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center">
                  <img
                    src="/moto/ditas/mail.png"
                    alt=""
                    className="h-5 w-6 object-contain"
                  />
                </span>

                <a
                  href="mailto:info@ditas.com.tr"
                  className="body-text text-[#4B5563] transition-colors hover:text-[#005BAB]"
                >
                  info@ditas.com.tr
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center">
                  <img
                    src="/moto/ditas/web.png"
                    alt=""
                    className="h-6 w-6 object-contain"
                  />
                </span>

                <a
                  href="#"
                  className="body-text text-[#4B5563] transition-colors hover:text-[#005BAB]"
                >
                  www.ditas.com.tr
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center">
                  <img
                    src="/moto/ditas/loc.png"
                    alt=""
                    className="h-6 w-4 object-contain"
                  />
                </span>

                <p className="body-text text-[#4B5563]">
                  DİTAŞ BDY Yedek Parça İmalat ve Teknik A.Ş. Niğde, Merkez, Türkiye
                </p>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div
            className="
              col-span-2 min-w-0
              md:col-span-1
              xl:col-span-1 xl:flex-1 xl:min-w-0 xl:max-w-[320px]
            "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <h4 className="mb-6 font-oswald text-2xl font-semibold text-[#272727]">
              Subscribe for more information
            </h4>

            <p className="body-text mb-6 text-[#4B5563]">
              Stay updated with DİTAŞ&rsquo;s latest products, news, and
              innovations.
            </p>

            <form className="relative flex items-center rounded-[10px] bg-white p-[5px] shadow-[0_3px_8px_rgba(0,0,0,0.24)]">
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full bg-transparent px-3 py-2 text-sm font-rubik text-[#4B5563] placeholder-[#4B5563] focus:outline-none"
                required
              />

              <button
                type="submit"
                className="flex h-[31px] w-[31px] flex-shrink-0 items-center justify-center rounded-[5px] bg-[#ED1C24] text-white transition-opacity hover:opacity-90"
                aria-label="Subscribe"
              >
                <Search className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </form>
          </div>
        </div>

        <hr
          className="mb-6 border-t border-[#272727]"
          data-aos="fade-in"
          data-aos-duration="700"
          data-aos-once="true"
        />

        {/* Bottom Section */}
        <div
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          data-aos-once="true"
        >
          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-7 w-7 items-center justify-center transition-opacity hover:opacity-70"
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  className="h-auto w-auto max-h-5 max-w-5 object-contain"
                />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="body-text order-3 whitespace-nowrap text-center text-[11px] text-[#4B5563] sm:text-sm md:order-2 md:whitespace-normal">
            Copyrights © 2026 Ditas BDY - Powered By İDESOFT
          </p>

          {/* Footer Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="body-text order-3 whitespace-nowrap text-center text-[11px] text-[#4B5563] sm:text-sm md:order-2 md:whitespace-normal"
            >
              Visitor information text
            </a>

            <a
              href="#"
              className="body-text order-3 whitespace-nowrap text-center text-[11px] text-[#4B5563] sm:text-sm md:order-2 md:whitespace-normal"
            >
              Cookie information text
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}