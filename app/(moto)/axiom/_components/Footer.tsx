
"use client";

import Link from "next/link";
import { MapPin, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "#", active: true },
  { name: "About Us", href: "#" },
  { name: "Our Products", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden pt-16 pb-10 xl:pt-[61px] xl:pb-10">
      <img
        src="/moto/axiom/bg1.png"
        alt=""
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div className="custom-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 grid grid-cols-2 items-start gap-x-6 gap-y-10 xl:flex xl:flex-nowrap xl:justify-between xl:gap-x-10"
        >
          {/* Company Info */}
          <div className="col-span-2 xl:max-w-[416px]">
            <p className="logo-text mb-6 text-white">
              AXIOM Autotech Inc.
            </p>

            <p className="body-text text-white">
              Connect with our team for product inquiries, technical support,
              and customized automotive solutions for your business.
            </p>
          </div>

          {/* Quick Links */}
          <div className="xl:max-w-[150px]">
            <h4 className="card-title mb-6 text-white">
              Quick Links
            </h4>

            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`whitespace-nowrap font-poppins text-base transition-colors ${
                      link.active
                        ? "font-semibold text-white"
                        : "font-normal text-white hover:text-gray-200"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="xl:max-w-[315px]">
            <h4 className="card-title mb-6 text-white">
              Contact Info
            </h4>

            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-1 h-6 w-6 flex-shrink-0 text-white"
                  strokeWidth={2}
                />

                <p className="body-text text-white">
                  Die Lächner 4
                  <br />
                  68642 Bürstadt, Deutschland
                  <br />
                  ein Unternehmen der AXIOM GmbH
                </p>
              </li>

              <li className="flex items-center gap-3">
                <Mail
                  className="h-6 w-6 flex-shrink-0 text-white"
                  strokeWidth={2}
                />

                <a
                  href="mailto:info@axiom-autotech.de"
                  className="body-text text-white transition-colors hover:text-gray-200"
                >
                  info@axiom-autotech.de
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 xl:col-span-1 xl:max-w-[294px]">
            <h4 className="card-title mb-6 text-left text-white">
              Subscribe to Our Newsletter
            </h4>

            <form className="relative mt-8 flex items-center overflow-hidden rounded-lg bg-[#F9F9F9] p-1">
              <input
                type="email"
                placeholder="Please enter your email"
                className="w-full bg-transparent px-3 py-2 text-sm font-poppins text-black placeholder-black/25 focus:outline-none"
                required
              />

              <button
                type="submit"
                className="flex h-[41px] w-[41px] flex-shrink-0 items-center justify-center rounded-lg bg-[#003344] text-white transition-colors hover:bg-[#00495e]"
                aria-label="Subscribe"
              >
                <Send
                  className="h-6 w-6"
                  strokeWidth={2}
                />
              </button>
            </form>
          </div>
        </motion.div>

        <hr className="mb-6 border-t border-[#D9D9D9]" />

        <p className="body-text text-center text-white">
          Copyrights Axiom Autotech Inc. - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
