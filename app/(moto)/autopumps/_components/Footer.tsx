import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pb-8 mt-10 ">
      <div className="custom-container px-6 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 xl:gap-12 mb-16">
          
          {/* Column 1: Logo & Text */}
          <div className="xl:col-span-1">
            <Link href="/autopumps" className="inline-block mb-6">
              <img 
                src="/moto/autopumps/footerlogo.png" 
                alt="Autopumps Logo" 
                className="w-70 h-auto object-cover"
              />
            </Link>
            <p className="text-[#4a4a4a] section-text leading-relaxed pr-4 tracking-wide">
              Autopumps UK is a trusted supplier of premium engine and pump components, delivering OE-quality solutions engineered for precision, durability, and performance across the global automotive aftermarket.
            </p>
          </div>

          {/* Column 2 & 3: Quick Links & Our Products */}
          <div className="col-span-1 md:col-span-1 xl:col-span-2 grid grid-cols-2 gap-4 xl:gap-0">
            {/* Quick Links */}
            <div className="xl:pl-10">
              <h3 className="card-text text-[#2a2a2a] font-semibold mb-6">Quick Links</h3>
              <ul className="flex flex-col gap-3">
                <li><Link href="/autopumps" className="tracking-wide section-text text-[#4a4a4a] hover:text-[#064da1] transition-colors">Home</Link></li>
                <li><Link href="/autopumps/about" className="tracking-wide section-text text-[#4a4a4a] hover:text-[#064da1] transition-colors">About Us</Link></li>
                <li><Link href="/autopumps/products" className="tracking-wide section-text text-[#4a4a4a] hover:text-[#064da1] transition-colors">Products</Link></li>
                <li><Link href="/autopumps/quality" className="tracking-wide section-text text-[#4a4a4a] hover:text-[#064da1] transition-colors">Quality</Link></li>
                <li><Link href="/autopumps/contact" className="tracking-wide section-text text-[#4a4a4a] hover:text-[#064da1] transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Our Products */}
            <div>
               <h3 className="card-text text-[#2a2a2a] font-semibold mb-6">Our Products</h3>
              <ul className="flex flex-col gap-3">
                <li><Link href="/autopumps/products/pumps" className="tracking-wide section-text text-[#4a4a4a] hover:text-[#064da1] transition-colors">Pumps</Link></li>
                <li><Link href="/autopumps/products/cylinder-heads" className="tracking-wide section-text text-[#4a4a4a] hover:text-[#064da1] transition-colors">Cylinder Heads</Link></li>
                <li><Link href="/autopumps/products/bottom-end" className="tracking-wide section-text text-[#4a4a4a] hover:text-[#064da1] transition-colors">Bottom End</Link></li>
                <li><Link href="/autopumps/products/timing" className="tracking-wide section-text text-[#4a4a4a] hover:text-[#064da1] transition-colors">Timing</Link></li>
                <li><Link href="/autopumps/products/gaskets-seals" className="tracking-wide section-text text-[#4a4a4a] hover:text-[#064da1] transition-colors">Gaskets & Seals</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="xl:col-span-1">
            <h3 className="card-text text-[#2a2a2a] font-semibold mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <Phone className="text-[#064da1] mt-1.5 flex-shrink-0" size={20} />
                <span className="tracking-wide section-text text-[#4a4a4a] hover:text-[#064da1] transition-colors">+ 44 (0) 1908 378 165</span>
              </li>
              <li className="flex gap-3 items-start">
                <Mail className="text-[#064da1] mt-1.5 flex-shrink-0" size={20} />
                <span className="tracking-wide section-text text-[#4a4a4a] hover:text-[#064da1] transition-colors break-all">sales@autopumps.co.uk</span>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="text-[#064da1] mt-1.5 flex-shrink-0" size={20} />
                <span className="tracking-wide section-text text-[#4a4a4a] hover:text-[#064da1] transition-colors leading-snug">Bramley Road, Mount Farm,<br/>Milton Keynes, MK1 1PT,<br/>United Kingdom</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Subscribe */}
          <div className="xl:col-span-1">
            <h3 className="card-text text-[#2a2a2a] font-semibold mb-6">Subscribe For More Information</h3>
            <p className="text-[#4a4a4a] section-text leading-relaxed mb-6 tracking-wide">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from Autopumps UK Ltd
            </p>
            <form className="flex w-full bg-white border border-gray-300 rounded-md overflow-hidden p-1 shadow-sm focus-within:border-[#064da1] focus-within:ring-1 focus-within:ring-[#064da1] transition-all">
              <input 
                type="email" 
                placeholder="Email Address..." 
                className="w-full px-3 py-2 outline-none text-[#4a4a4a] bg-transparent placeholder-gray-400 font-sans"
                required
              />
              <button 
                type="submit"
                className="bg-[#002f6c] text-white px-5 py-2 rounded-sm hover:bg-[#001f4c] transition-colors flex items-center justify-center flex-shrink-0"
              >
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>
            </form>
          </div>
          
        </div>

        {/* Footer Bottom */}
        <div className="w-full border-t border-gray-300 pt-6 flex justify-center text-center">
          <p className="text-[#4a4a4a] section-text leading-relaxed ">
            © 2025 Autopumps UK Ltd | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
