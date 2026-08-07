import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#303030] pt-16 md:pt-20">
      <div className="custom-container px-6 xl:px-16">
        <div className="grid grid-cols-2 xl:grid-cols-12 gap-4 md:gap-8 xl:gap-12 mb-16">
          
          <div className="col-span-2 xl:col-span-4 flex flex-col gap-6">
            <Link href="/frenos-sauleda" className="inline-block">
              <img 
                src="/moto/frenos-sauleda/footerlogo.png" 
                alt="Frenos Sauleda Logo" 
                className="h-10 md:h-15 lg:h-18 w-auto object-contain "
              />
            </Link>
            <p className="section-text text-[#ffffff] font-regular inter leading-relaxed">
              Frenos Sauleda is a manufacturer of high-quality braking components, known for its strong focus on safety, compliance, and performance. With decades of experience, the company delivers reliable braking solutions designed to meet international standards and ensure consistent performance across global automotive markets.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-6 xl:pl-4">
            <h3 className="sora footer-link text-white font-semibold ">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="" className="text-[#ffffff] inter font-normal section-text">Home</Link></li>
              <li><Link href="" className="text-[#cccccc] inter font-normal section-text">About Us</Link></li>
              <li><Link href="" className="text-[#cccccc] inter font-normal section-text">Products</Link></li>
              <li><Link href="" className="text-[#cccccc] inter font-normal section-text">News</Link></li>
              <li><Link href="" className="text-[#cccccc] inter font-normal section-text">Gallery</Link></li>
              <li><Link href="" className="text-[#cccccc] inter font-normal section-text">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-6">
             <h3 className="sora footer-link text-white font-semibold ">Products</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="" className="text-[#ffffff] inter font-normal section-text">Brake plates</Link></li>
              <li><Link href="" className="text-[#cccccc] inter font-normal section-text">Clutch facings</Link></li>
              <li><Link href="" className="text-[#cccccc] inter font-normal section-text">Tractor brakes</Link></li>
              <li><Link href="" className="text-[#cccccc] inter font-normal section-text">Industrial rings</Link></li>
              <li><Link href="" className="text-[#cccccc] inter font-normal section-text">Gear Rings & Monoblocks</Link></li>
            </ul>
          </div>

          {/* Column 4: Materials */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-6">
             <h3 className="sora footer-link text-white font-semibold ">Materials</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="" className="text-[#ffffff] inter font-normal section-text">Yarn</Link></li>
              <li><Link href="" className="text-[#ffffff] inter font-normal section-text">Rigid</Link></li>
              <li><Link href="" className="text-[#ffffff] inter font-normal section-text">Paper</Link></li>
              <li><Link href="" className="text-[#ffffff] inter font-normal section-text">Flexible</Link></li>
              <li><Link href="" className="text-[#ffffff] inter font-normal section-text">Woven</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-6">
           <h3 className="sora footer-link text-white font-semibold ">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <img src="/moto/frenos-sauleda/location.png" alt="Location" className="w-6 h-6 object-contain flex-shrink-0" />
                <span className="text-[#ffffff] inter font-normal section-text">Barri del migdia S/N - E 08396<br/>Sant Cebrià de Vallalta<br/>(Barcelona - Spain)</span>
              </li>
              <li className="flex gap-3 items-center">
                <img src="/moto/frenos-sauleda/ph.png" alt="Phone" className="w-6 h-6 object-contain flex-shrink-0" />
                <a href="" className="text-[#ffffff] inter font-normal section-text">(+34) 93 763 11 20</a>
              </li>
              <li className="flex gap-3 items-center">
                <img src="/moto/frenos-sauleda/mail.png" alt="Email" className="w-6 h-6 object-contain flex-shrink-0" />
                <a href="" className="text-[#ffffff] inter font-normal section-text break-all">sauleda@frenossauleda.com</a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Footer Bottom */}
        <div className="w-full border-t border-gray-200 py-6 flex justify-center">
          <p className="text-[#ffffff] inter font-normal section-text">
            © 2026 FRENOS SAULEDA S.A. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
