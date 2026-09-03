"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Institutional", href: "/institutional" },
  { label: "Products", href: "/products" },
  { label: "Quality", href: "/quality" },
  { label: "Media", href: "/media" },
  { label: "Communication", href: "/communication" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling half the viewport height
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: "-100%", opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-0 z-50 w-full bg-white">
        <div
          className="
            container flex items-center justify-between
            h-[100px]
            max-[1279px]:h-[90px]
            max-[768px]:h-[80px]
            max-[480px]:h-[72px]
          ">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}>
              {/* <Image
                src="/moto/gunesmotor/logo.png"
                alt="Güneş Engine Valves"
                width={165}
                height={55}
                priority
                className="
                  h-auto w-[165px]
                  max-[1280px]:w-[150px]
                  max-[1279px]:w-[145px]
                  max-[768px]:w-[140px]
                  max-[480px]:w-[125px]
                "
              /> */}
              <img src="/moto/gunesmotor/logo.png" alt="Güneş Engine Valves" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.07, delayChildren: 0.2 },
              },
            }}
            className="
              hidden items-center xl:flex
              gap-[38px]
              min-[1921px]:gap-[42px]
              min-[2200px]:gap-[45px]
              min-[2560px]:gap-[45px]
              max-[1920px]:gap-[32px]
              max-[1440px]:gap-[27px]
              max-[1280px]:gap-[20px]
            ">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}>
                <Link
                  href={link.href}
                  className={`
                    whitespace-nowrap
                    font-oswald text-[18px] font-normal leading-[150%]
                    transition-colors duration-200
                    max-[1440px]:text-[17px]
                    max-[1280px]:text-[16px]
                    ${
                      i === 0
                        ? "text-[#D9000D] underline underline-offset-[2px]"
                        : "text-[#4B5563] hover:text-[#D9000D]"
                    }
                  `}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Right Side */}
          <div
            className="
              hidden shrink-0 items-center xl:flex
              gap-[25px]
              min-[1921px]:gap-[30px]
              min-[2200px]:gap-[32px]
              max-[1920px]:gap-[22px]
              max-[1280px]:gap-[18px]
            ">
            {/* Catalog */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="
                group
                flex h-[54px] w-[113px]
                items-center justify-center gap-[5px]
                rounded-[5px]
                border border-[#D9000D]
                bg-transparent
                font-oswald text-[18px] font-semibold leading-[150%]
                text-[#272727]
                transition-colors duration-200
                hover:bg-[#D9000D] hover:text-white
                max-[1280px]:h-[50px]
                max-[1280px]:w-[105px]
                max-[1280px]:text-[17px]
              ">
              <span>Catalog</span>

              <Image
                src="/moto/gunesmotor/arrow.png"
                alt=""
                width={13}
                height={11}
                className="
                  ml-[3px] h-[11px] w-[13px] object-contain
                  transition-all duration-200
                  group-hover:brightness-0 group-hover:invert
                "
              />
            </motion.button>

            {/* Language */}
            <motion.button
              type="button"
              aria-label="Select language"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center gap-[5px]">
              <Image
                src="/moto/gunesmotor/world.png"
                alt="Language"
                width={25}
                height={25}
                className="h-[25px] w-[25px] object-contain"
              />

              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                aria-hidden="true">
                <path d="M1 1L5 5L9 1" stroke="#D9000D" strokeWidth="1.5" />
              </svg>
            </motion.button>
          </div>

          {/* Mobile / Tablet Hamburger */}
          <motion.button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            whileTap={{ scale: 0.9 }}
            className="
              flex h-[34px] w-[34px]
              flex-col items-center justify-center gap-[5px]
              xl:hidden
            ">
            <span
              className={`
                block h-[2px] w-[25px] bg-[#272727]
                transition-all duration-300
                ${menuOpen ? "translate-y-[7px] rotate-45" : ""}
              `}
            />

            <span
              className={`
                block h-[2px] w-[25px] bg-[#272727]
                transition-all duration-300
                ${menuOpen ? "opacity-0" : ""}
              `}
            />

            <span
              className={`
                block h-[2px] w-[25px] bg-[#272727]
                transition-all duration-300
                ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}
              `}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="
                absolute left-0 top-full
                flex w-full flex-col gap-[22px]
                overflow-hidden
                border-t border-[#E4E4E4]
                bg-white px-[20px] py-[25px]
                shadow-lg
                xl:hidden
                max-[480px]:px-[15px]
              ">
              {/* Links */}
              <nav className="flex flex-col gap-[18px]">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.05 }}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`
                        font-oswald text-[18px] font-normal leading-[150%]
                        ${
                          i === 0
                            ? "text-[#D9000D] underline"
                            : "text-[#4B5563]"
                        }
                      `}>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Catalog */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="
                  group
                  flex h-[54px] w-full
                  items-center justify-center gap-[6px]
                  rounded-[5px]
                  border border-[#D9000D]
                  bg-transparent
                  font-oswald text-[18px] font-semibold
                  text-[#272727]
                ">
                <span>Catalog</span>

                <Image
                  src="/moto/gunesmotor/arrow.png"
                  alt=""
                  width={13}
                  height={11}
                  className="
                    h-[11px] w-[13px] object-contain
                    transition-all duration-200
                    group-hover:brightness-0 group-hover:invert
                  "
                />
              </motion.button>

              {/* Mobile Language */}
              <button
                type="button"
                aria-label="Select language"
                className="flex w-fit items-center gap-[5px]">
                <Image
                  src="/moto/gunesmotor/world.png"
                  alt="Language"
                  width={25}
                  height={25}
                  className="h-[25px] w-[25px] object-contain"
                />

                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  aria-hidden="true">
                  <path d="M1 1L5 5L9 1" stroke="#D9000D" strokeWidth="1.5" />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
