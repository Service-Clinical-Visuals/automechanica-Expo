"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-12 pb-4 border-t border-gray-100" data-aos="fade-up">
      <div className="custom-container">
        
        <div className="grid grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8 min-[1440px]:gap-10 mb-12">
          
          {/* Column 1: Logo & About */}
          <div className="flex flex-col gap-4 col-span-2 xl:col-span-3 xl:pr-6">
            <Link href="/iadaAutomechanika" className="inline-block w-84 h-30 mb-2">
              <img src="/moto/iadaAutomechanika/logo.png" alt="IADA car chemicals" className="w-full h-full object-contain object-left" />
            </Link>
             <p className="!text-[#5e676b] text-xs md:text-[16px] leading-[1.8] text-justify font-normal amaranth">
              Founded in 1957 by Manuel Brustenga, IADA began its<br className="hidden lg:block"/>
              journey with the development of an innovative brake fluid<br className="hidden lg:block"/>
              for Pegaso trucks manufactured by ENASA in Barcelona.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-5 col-span-1 xl:col-span-2">
            <h4 className="text-[#1e1e1e] !font-normal text-xs md:text-[20px] mb-1 tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'Company', 'Products', 'News', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#5e676b]  text-xs md:text-[16px] hover:text-[#C00027] transition-colors font-normal amaranth">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-5 col-span-1 xl:col-span-2">
            <h4 className="text-[#1e1e1e] !font-normal text-xs md:text-[20px] mb-1 tracking-wide">Products</h4>
            <ul className="flex flex-col gap-3">
              {['Lubricants', 'Brakes & Automatic Transmissions', 'Coolants & Antifreezes', 'Windshield Cleaners & Car Care', 'Additives & Greases'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#5e676b]  text-xs md:text-[16px] hover:text-[#C00027] transition-colors font-normal amaranth">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-5 col-span-2 md:col-span-1 xl:col-span-3">
            <h4 className="text-[#1e1e1e] !font-normal text-xs md:text-[20px] mb-1 tracking-wide">Contact</h4>
            <ul className="flex flex-col gap-3 text-[#5e676b] text-xs md:text-[16px] font-normal amaranth">
              <li className="hover:text-[#C00027] transition-colors cursor-pointer">Ctra. Vilafranca A Guardiola De Font-Rubí, Km. 6,5.</li>
              <li className="hover:text-[#C00027] transition-colors cursor-pointer">08735 Vilobí Del Penedès, Barcelona - España</li>
              <li className="hover:text-[#C00027] transition-colors cursor-pointer">Tel.: +34 93 897 84 37</li>
              <li className="hover:text-[#C00027] transition-colors cursor-pointer">Fax.: +34 93 897 83 84</li>
              <li className="hover:text-[#C00027] transition-colors cursor-pointer">Dpto.Comercial@iada.Es</li>
            </ul>
          </div>

          {/* Column 5: Social Media & Logo */}
          <div className="flex flex-col gap-3 col-span-2 md:col-span-1 xl:col-span-2">
            <div>
               <h4 className="text-[#1e1e1e] !font-normal text-xs md:text-[20px] mb-3 ">Social Media Links</h4>
               <div className="flex items-center ">
                <img src="/moto/iadaAutomechanika/lnkin.png" alt="linkedin" className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.50)]  hover:-translate-y-1 transition-transform cursor-pointer" />
                <img src="/moto/iadaAutomechanika/in.png" alt="instagram" className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.50)]  hover:-translate-y-1 transition-transform cursor-pointer" />
                <img src="/moto/iadaAutomechanika/fb.png" alt="facebook" className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.50)]  hover:-translate-y-1 transition-transform cursor-pointer" />
               </div>
            </div>
            
            <div className="pt-2">
               <img src="/moto/iadaAutomechanika/footer4.png" alt="Jodima GROUP" className="h-[70px] object-contain object-left hover:opacity-100 transition-opacity" />
            </div>
          </div>

        </div>

        <hr className="border-gray-200 mb-6" />

        <div className="text-center">
           <p className="text-[#5e676b] text-xs md:text-[16px] font-normal tracking-wide">
              IADA S.L.U. Todos los derechos reservados. © 2023
           </p>
        </div>

      </div>
    </footer>
  );
}
