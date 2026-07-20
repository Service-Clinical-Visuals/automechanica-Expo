import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-16 pb-12 ">
      <div className="custom-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-10 xl:gap-6">
          
          {/* Column 1: Brand */}
          <div className="xl:col-span-1 flex flex-col space-y-10">
            <Link href="#" className="inline-block">
         
              <img src="/moto/liqui-moly/logo.png" alt="Liqui Moly" className="w-[200px] h-auto object-contain " />
            </Link>
            <p className="section-text white leading-relaxed pr-4">
              Premium oils, additives, and automotive solutions for lasting protection.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <img src="/moto/liqui-moly/fb.png" alt="Facebook" className="w-6 h-6 object-contain" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <img src="/moto/liqui-moly/inta.png" alt="Instagram" className="w-6 h-6 object-contain" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <img src="/moto/liqui-moly/you.png" alt="YouTube" className="w-6 h-6 object-contain" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <img src="/moto/liqui-moly/in.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <img src="/moto/liqui-moly/x.png" alt="X" className="w-6 h-6 object-contain" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div className="flex flex-col space-y-3 lg:pl-15">
            <h4 className="card-title white font-semibold mb-3">Quick links</h4>
            <Link href="#" className="section-text white hover:text-[var(--color-secondary)] hover:underline transition-colors w-max">Home</Link>
            <Link href="#" className="section-text white hover:text-[var(--color-secondary)] hover:underline transition-colors w-max">About</Link>
            <Link href="#" className="section-text white hover:text-[var(--color-secondary)] hover:underline transition-colors w-max">Products</Link>
            <Link href="#" className="section-text white hover:text-[var(--color-secondary)] hover:underline transition-colors w-max">For Drivers</Link>
            <Link href="#" className="section-text white hover:text-[var(--color-secondary)] hover:underline transition-colors w-max">For Partners</Link>
            <Link href="#" className="section-text white hover:text-[var(--color-secondary)] hover:underline transition-colors w-max">Press</Link>
            <Link href="#" className="section-text white hover:text-[var(--color-secondary)] hover:underline transition-colors w-max">Contact</Link>
          </div>

          {/* Column 3: Foundations */}
          <div className="flex flex-col space-y-3">
            <h4 className="card-title white font-semibold mb-3">Foundations</h4>
            <Link href="#" className="section-text white hover:text-[var(--color-secondary)] hover:underline transition-colors w-max">Ernst Prost foundation</Link>
            <Link href="#" className="section-text white hover:text-[var(--color-secondary)] hover:underline transition-colors w-max">Ernst Prost foundation for Africa</Link>
            <Link href="#" className="section-text white hover:text-[var(--color-secondary)] hover:underline transition-colors w-max">People for peace - peace for people</Link>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col space-y-4 xl:pl-4 2xl:pl-2">
            <h4 className="card-title white font-semibold mb-3">Contact</h4>
            <div className="flex items-start gap-3 text-sm text-gray-200">
              <img src="/moto/liqui-moly/location.png" alt="Location" className="w-4 h-4 mt-1 object-contain" />
              <span className="section-text white leading-relaxed">LIQUI MOLY GmbH<br/>Jerg-Wieland-Straße 4<br/>89081 Ulm</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-200">
              <img src="/moto/liqui-moly/phone.png" alt="Phone" className="w-4 h-4 object-contain" />
              <span className="section-text white leading-relaxed">+49 731 1420-0</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-200">
              <img src="/moto/liqui-moly/mail.png" alt="Mail" className="w-4 h-4 object-contain" />
              <span className="section-text white leading-relaxed">info@liqui-moly.de</span>
            </div>
          </div>

          {/* Column 5: News Letter */}
          <div className="flex flex-col space-y-4 lg:pl-4">
            <h4 className="card-title white font-semibold mb-3">News Letter</h4>
            <p className="section-text leading-relaxed white">
              Subscribe to our newsletter to receive updates on the latest news!
            </p>
            <div className="flex flex-col space-y-3 mt-2">
              <input 
                type="email" 
                placeholder="Subscribe with us..." 
                className="w-full bg-white px-4 py-2.5 rounded-md text-gray-800 section-text outline-none border-none shadow-md"
              />
              <Button type="button" variant="secondary" className="px-6 py-2 w-max">
                SUBSCRIBE
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
