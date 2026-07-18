"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F3D26] pt-14 lg:pt-16 pb-10 text-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-10 border-b border-white/10">

          <div className="space-y-6 lg:col-span-1">
            <Link href="#" className="inline-block">
              <img src="/moto/soylu/Group.png" alt="Soylu Logo" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-7 text-white/90 max-w-md oswald-font font-normal">
              Soylu Group is a privately owned company specializing in shipping, construction, and real estate management.
            </p>
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
            <h4 className="oswald-font font-medium text-white mb-6">Corporate</h4>
            <div className="flex flex-col gap-3 text-sm oswald-font">
              <Link href="#" className="text-white/90 hover:text-white transition">About Us</Link>
              <Link href="#" className="text-white/90 hover:text-white transition">Vision</Link>
              <Link href="#" className="text-white/90 hover:text-white transition">Strategy</Link>
              <Link href="#" className="text-white/90 hover:text-white transition">Quality</Link>
              <Link href="#" className="text-white/90 hover:text-white transition">Job Security</Link>
              <Link href="#" className="text-sm text-white font-semibold hover:text-white transition">See More &gt;</Link>
            </div>
          </div>

          <div>
            <h4 className="oswald-font font-medium text-white mb-6">Product Groups</h4>
            <div className="flex flex-col gap-3 text-sm oswald-font">
              <Link href="#" className="text-white/90 hover:text-white transition">Exhaust & Emission Systems</Link>
              <Link href="#" className="text-white/90 hover:text-white transition">Air Reservoirs</Link>
              <Link href="#" className="text-white/90 hover:text-white transition">Fuel & Oil Tanks</Link>
              <Link href="#" className="text-white/90 hover:text-white transition">NOx & Temperature Sensors</Link>
              <Link href="#" className="text-white/90 hover:text-white transition">Engine Pipes</Link>
              <Link href="#" className="text-sm text-white font-semibold hover:text-white transition">See More &gt;</Link>
            </div>
          </div>

          <div>
            <h4 className="oswald-font font-medium text-white mb-6">Product Catalogs</h4>
            <div className="flex flex-col gap-3 text-sm oswald-font">
              <Link href="#" className="text-white/90 hover:text-white transition">Fast-Moving Products</Link>
              <Link href="#" className="text-white/90 hover:text-white transition">EURO I, II, III Exhaust Systems For Heavy Duty Vehicles</Link>
              <Link href="#" className="text-white/90 hover:text-white transition">Fuel & Oil Tanks</Link>
              <Link href="#" className="text-white/90 hover:text-white transition">EURO IV, V Exhaust Systems For Heavy Duty Vehicles</Link>
              <Link href="#" className="text-white/90 hover:text-white transition">Exhaust & Emission Systems For Buses</Link>
              <Link href="#" className="text-sm text-white font-semibold hover:text-white transition">See More &gt;</Link>
            </div>
          </div>

          <div>
            <h4 className="oswald-font font-medium text-white mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4 text-sm text-white/90 oswald-font">
              <div className="flex items-start gap-3">
                <img src="/moto/soylu/phone.png" alt="Phone" className="h-4 w-4 object-contain" />

                <span>+90 380 544 36 36</span>
              </div>
              <div className="flex items-start gap-3">
                <img src="/moto/soylu/mail.png" alt="Phone" className="h-4 w-4 object-contain" />
                <span>Info@Soylu.com</span>
              </div>
              <div className="flex items-start gap-3">
                <img src="/moto/soylu/map.png" alt="Address" className="h-4 w-4 object-contain" />
                <div className="text-sm leading-6 space-y-1">
                  <p>D-100 Yolu Üzeri</p>
                  <p>745. Sokak No:2</p>
                  <p>81852 Gümüşova</p>
                  <p>Düzce</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-sm text-white/70">Copyright © 2024 Soylu Exhaust & Automotive A.S.</div>
      </div>
    </footer>
  );
}
