"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "./Button";

const linksColumn = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Institutional", href: "/institutional" },
  { label: "Products", href: "/products" },
  { label: "Quality", href: "/quality" },
  { label: "Media", href: "/media" },
  { label: "Communication", href: "/communication" },
];

const institutionalColumn = [
  {
    label: "President's Message",
    href: "/institutional/president-message",
  },
  {
    label: "Company Profile",
    href: "/institutional/company-profile",
  },
  {
    label: "Vision",
    href: "/institutional/vision",
  },
  {
    label: "Mission",
    href: "/institutional/mission",
  },
  {
    label: "Quality Policy",
    href: "/institutional/quality-policy",
  },
  {
    label: "Ethical Policy",
    href: "/institutional/ethical-policy",
  },
  {
    label: "Processing of Personal Data",
    href: "/institutional/personal-data",
  },
];

const productsColumn = [
  {
    label: "Engine Valves",
    href: "/products/engine-valves",
  },
  {
    label: "Motor Guides",
    href: "/products/motor-guides",
  },
  {
    label: "Valve Seat",
    href: "/products/valve-seat",
  },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: "/moto/gunesmotor/fb.png" },
  { label: "LinkedIn", href: "#", icon: "/moto/gunesmotor/link.png" },
  { label: "Instagram", href: "#", icon: "/moto/gunesmotor/insta.png" },
  { label: "X", href: "#", icon: "/moto/gunesmotor/x.png" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1F2937] text-white">
      <div className="container pt-8 pb-2 sm:pt-10 md:pt-12 xl:pt-14">

        {/* Main Footer */}
        <div className="flex flex-col xl:flex-row">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full xl:w-[375px] xl:shrink-0"
          >
            <Link
              href="/"
              className="inline-block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {/* <Image
                  src="/moto/gunesmotor/logo.png"
                  alt="Güneş Engine Valve"
                  width={247}
                  height={67}
                  className="h-auto w-[200px] md:w-[225px] xl:w-[247px]"
                /> */}
                <img className="h-auto w-[200px] md:w-[225px] xl:w-[247px]" src="/moto/gunesmotor/logo.png" alt="logo" />
              </motion.div>
            </Link>

            <p className="mt-6 max-w-[390px] font-rubik text-[15px] font-normal leading-[150%] text-white md:text-[16px]">
              With over 50 years of expertise, GÜNEŞ Motor Supapları delivers
              precision engine components with trusted quality and reliable
              performance worldwide.
            </p>

            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="mt-7 inline-block"
            >
              <Button
                label="See Our Location"
                href="/contact"
                bgColor="#FFFFFF"
                className="w-auto min-w-[175px] px-6 md:px-7"
              />
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="hidden xl:block xl:mx-[55px] xl:w-px xl:self-stretch xl:bg-white/60" />

          {/* Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.1 },
              },
            }}
            className="mt-14 grid w-full grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-4 md:gap-x-10 xl:mt-0 xl:grid-cols-4 xl:gap-x-[65px]"
          >

            {/* Links Column */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h4 className="font-oswald text-[22px] font-semibold leading-[150%] text-white md:text-[24px] xl:text-[25px]">
                Links
              </h4>

              <ul className="mt-5 flex flex-col gap-[9px]">
                {linksColumn.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-rubik text-[14px] leading-[150%] text-white transition-colors hover:text-[#D9000D] md:text-[15px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Institutional */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h4 className="font-oswald text-[22px] font-semibold leading-[150%] text-white md:text-[24px] xl:text-[25px]">
                Institutional
              </h4>

              <ul className="mt-5 flex flex-col gap-[9px]">
                {institutionalColumn.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-rubik text-[14px] leading-[150%] text-white transition-colors hover:text-[#D9000D] md:text-[15px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h4 className="font-oswald text-[22px] font-semibold leading-[150%] text-white md:text-[24px] xl:text-[25px]">
                Products
              </h4>

              <ul className="mt-5 flex flex-col gap-[9px]">
                {productsColumn.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-rubik text-[14px] leading-[150%] text-white transition-colors hover:text-[#D9000D] md:text-[15px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h4 className="font-oswald text-[22px] font-semibold leading-[150%] text-white md:text-[24px] xl:text-[25px]">
                Contact
              </h4>

              <div className="mt-5 flex flex-col gap-4">

                {/* Phone */}
                <a
                  href="tel:+903322390667"
                  className="flex items-center gap-3 font-rubik text-[14px] leading-[150%] text-white transition-colors hover:text-[#D9000D] md:text-[15px]"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#D9000D"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <path d="M6.6 10.8C8 13.6 10.4 16 13.2 17.4L15.4 15.2C15.7 14.9 16.1 14.8 16.5 15C17.7 15.4 19 15.6 20.3 15.6C20.9 15.6 21.4 16.1 21.4 16.7V20.3C21.4 20.9 20.9 21.4 20.3 21.4C10.7 21.4 2.6 13.3 2.6 3.7C2.6 3.1 3.1 2.6 3.7 2.6H7.3C7.9 2.6 8.4 3.1 8.4 3.7C8.4 5 8.6 6.3 9 7.5C9.1 7.9 9 8.3 8.8 8.6L6.6 10.8Z" />
                  </svg>

                  <span>
                    +90 (332) 239 06 67
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:gunes@gunessupap.com.tr"
                  className="flex items-center gap-3 font-rubik text-[14px] leading-[150%] text-white transition-colors hover:text-[#D9000D] md:text-[15px]"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#D9000D"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <path d="M2 5C2 3.9 2.9 3 4 3H20C21.1 3 22 3.9 22 5V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V5Z" />
                    <path
                      d="M3 5L12 13L21 5"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>

                  <span className="break-all">
                    gunes@gunessupap.com.tr
                  </span>
                </a>

              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-10 flex justify-end sm:mt-12"
        >
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.2, rotate: -6 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="flex h-7 w-7 items-center justify-center transition-opacity hover:opacity-70"
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="mt-4 h-px w-full bg-white/60"
        />

        {/* Copyright */}
        <div className="flex justify-center pt-5">
          <p className="text-center font-rubik text-[13px] font-normal leading-[150%] text-white md:text-[14px]">
            © {new Date().getFullYear()} Gunes Engine Valves | All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}