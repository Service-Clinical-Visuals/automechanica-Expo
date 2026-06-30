"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#272727] pt-16 pb-6 text-white ">
            <Container className="custom-container">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Column 1: Logo and Socials */}
                    <div className="flex flex-col space-y-6" data-aos="fade-up" data-aos-delay="0">
                        <Link href="/mapetrol">
                            <img
                                src="/moto/mapetrol/logo.png"
                                alt="Mapetrol Logo"
                                className="h-6 sm:h-8 object-contain"
                            />
                        </Link>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-[#484848] flex items-center justify-center hover:bg-[#5a5a5a] transition-colors">
                                <Facebook size={18} className="text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#484848] flex items-center justify-center hover:bg-[#5a5a5a] transition-colors">
                                <Instagram size={18} className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Menu */}
                    <div className="flex flex-col space-y-4" data-aos="fade-up" data-aos-delay="100">
                        <Typography variant="h6" color="white" className="font-orbitron font-medium text-[16px]">
                            Menu
                        </Typography>
                        <nav className="flex flex-col space-y-3">
                            {['Products', 'Technology, Innovations and design', 'About Us', 'Contact Us'].map((item) => (
                                <Link key={item} href="#" className="text-white hover:text-white text-[16px] transition-colors">
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="flex flex-col space-y-4" data-aos="fade-up" data-aos-delay="200">
                        <Typography variant="h6" color="white" className="font-orbitron font-medium text-[16px]">
                            Contact
                        </Typography>
                        <div className="flex flex-col space-y-3">
                            <a href="mailto:info@mapetrol.si" className="text-white hover:text-white text-[16px] transition-colors">
                                info@mapetrol.si
                            </a>
                            <a href="tel:+38622302880" className="text-white hover:text-white text-[16px] transition-colors">
                                +386 2 230 28 80
                            </a>
                        </div>
                    </div>

                    {/* Column 4: Certifications */}
                    <div className="flex flex-col space-y-4" data-aos="fade-up" data-aos-delay="300">
                        <Typography variant="h6" color="white" className="font-orbitron font-medium text-[16px]">
                            Our Certifications
                        </Typography>
                        <div className="flex items-center gap-8 lg:gap-15 pt-2">
                            <img
                                src="/moto/mapetrol/certificate1.png"
                                alt="TUV Austria Certification"
                                className="h-15 lg:h-[95%]  w-auto object-contain "
                            />
                            <img
                                src="/moto/mapetrol/certificate2.png"
                                alt="EELQMS Certification"
                                className="h-15 lg:h-[95%] w-auto object-contain"
                            />
                        </div>
                    </div>

                </div>

                {/* Divider & Copyright */}
                <div className="pt-6 border-t border-[#3a3a3a] flex flex-col md:flex-row items-center justify-center text-center" data-aos="fade-in" data-aos-delay="400">
                    <Typography variant="p" className="text-white text-[12px]">
                        © 2026 MAPETROL. All rights reserved. Design and development: Business Solutions
                    </Typography>
                </div>

            </Container>
        </footer>
    );
}
