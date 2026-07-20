"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";

export default function Footer() {
  return (
    <footer className="w-full bg-primary pt-14 lg:pt-16 pb-10 text-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-10 border-b border-white/10">

          <div className="space-y-6 lg:col-span-1">
            <Link href="#" className="inline-block">
              <img src="/moto/soylu/Group.png" alt="Soylu Logo" className="h-12 w-auto object-contain" />
            </Link>
            <Typography color="none"  className="footer-body text-white/90 max-w-md font-normal">
              Soylu Group is a privately owned company specializing in shipping, construction, and real estate management.
            </Typography>
            <div className="flex items-center gap-3">
              <Link href="#" className="inline-flex h-9 w-9 items-center justify-center text-white transition hover:bg-white/20">
                <span className="sr-only">LinkedIn</span>
                <img src="/moto/soylu/linked.png" alt="LinkedIn" className="h-4 w-4 object-contain" />
              </Link>
              <Link href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
                <span className="sr-only">Twitter</span>
                <img src="/moto/soylu/twitter.png" alt="Twitter" className="h-4 w-4 object-contain" />
              </Link>
              <Link href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
                <span className="sr-only">Facebook</span>
                <img src="/moto/soylu/fb.png" alt="Facebook" className="h-4 w-4 object-contain" />
              </Link>
            </div>
          </div>

          <div>
            <Typography color="none" variant="h4" className="footer-heading text-white mb-6">Corporate</Typography>
            <div className="flex flex-col gap-3">
              <Link href="#" className="text-white hover:text-white transition"><Typography color="none"  className="footer-body">About Us</Typography></Link>
              <Link href="#" className="text-white hover:text-white transition"><Typography color="none"  className="footer-body">Vision</Typography></Link>
              <Link href="#" className="text-white hover:text-white transition"><Typography color="none"  className="footer-body">Strategy</Typography></Link>
              <Link href="#" className="text-white hover:text-white transition"><Typography color="none"  className="footer-body">Quality</Typography></Link>
              <Link href="#" className="text-white hover:text-white transition"><Typography color="none"  className="footer-body">Job Security</Typography></Link>
              <Link href="#" className="text-white hover:text-white transition"><Typography color="none"  className="footer-body font-semibold">See More &gt;</Typography></Link>
            </div>
          </div>

          <div>
            <Typography color="none" variant="h4" className="footer-heading text-white mb-6">Product Groups</Typography>
            <div className="flex flex-col gap-3">
              <Link href="#" className="text-white hover:text-white transition"><Typography color="none"  className="footer-body">Exhaust & Emission Systems</Typography></Link>
              <Link href="#" className="text-white hover:text-white transition"><Typography color="none"  className="footer-body">Air Reservoirs</Typography></Link>
              <Link href="#" className="text-white hover:text-white transition"><Typography color="none"  className="footer-body">Fuel & Oil Tanks</Typography></Link>
              <Link href="#" className="text-white hover:text-white transition"><Typography color="none"  className="footer-body">NOx & Temperature Sensors</Typography></Link>
              <Link href="#" className="text-white hover:text-white transition"><Typography color="none"  className="footer-body">Engine Pipes</Typography></Link>
              <Link href="#" className="text-white hover:text-white transition"><Typography color="none"  className="footer-body font-semibold">See More &gt;</Typography></Link>
            </div>
          </div>

          <div>
            <Typography color="none" variant="h4" className="footer-heading text-white mb-6">Product Catalogs</Typography>
            <div className="flex flex-col gap-3">
              <Link href="#" className="text-white hover:text-white transition"><Typography color="none"  className="footer-body">Fast-Moving Products</Typography></Link>
              <Link href="#" className="text-white hover:text-white transition"><Typography color="none"  className="footer-body">EURO I, II, III Exhaust Systems For Heavy Duty Vehicles</Typography></Link>
              <Link href="#" className="text-white hover:text-white transition"><Typography color="none"  className="footer-body">Fuel & Oil Tanks</Typography></Link>
              <Link href="#" className="text-white hover:text-white transition"><Typography color="none"  className="footer-body">EURO IV, V Exhaust Systems For Heavy Duty Vehicles</Typography></Link>
              <Link href="#" className="text-white hover:text-white transition"><Typography color="none"  className="footer-body">Exhaust & Emission Systems For Buses</Typography></Link>
              <Link href="#" className="text-white hover:text-white transition"><Typography color="none"  className="footer-body font-semibold">See More &gt;</Typography></Link>
            </div>
          </div>

          <div>
            <Typography color="none" variant="h4" className="footer-heading text-white mb-6">Contact Us</Typography>
            <div className="flex flex-col gap-4 text-white/90">
              <div className="flex items-start gap-3">
                <img src="/moto/soylu/phone.png" alt="Phone" className="h-4 w-4 object-contain mt-1" />
                <Typography color="none"  className="footer-body">+90 380 544 36 36</Typography>
              </div>
              <div className="flex items-start gap-3">
                <img src="/moto/soylu/mail.png" alt="Email" className="h-4 w-4 object-contain mt-1" />
                <Typography color="none"  className="footer-body">Info@Soylu.com</Typography>
              </div>
              <div className="flex items-start gap-3">
                <img src="/moto/soylu/map.png" alt="Address" className="h-4 w-4 object-contain mt-1" />
                <div className="space-y-1">
                  <Typography color="none"  className="footer-body">D-100 Yolu Üzeri</Typography>
                  <Typography color="none"  className="footer-body">745. Sokak No:2</Typography>
                  <Typography color="none"  className="footer-body">81852 Gümüşova</Typography>
                  <Typography color="none"  className="footer-body">Düzce</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Typography color="none"  className="footer-body pt-8 text-center text-white/70">Copyright © 2024 Soylu Exhaust & Automotive A.S.</Typography>
      </div>
    </footer>
  );
}
