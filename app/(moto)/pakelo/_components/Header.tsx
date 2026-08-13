// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import Button from "./Button";

// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "#" },
//     { name: "Factory", href: "#" },
//     { name: "Services", href: "#" },
//     { name: "Certifications", href: "#" },
//     { name: "Magazine", href: "#" },
//     { name: "Contacts", href: "#" },
//   ];

//   return (
//     <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#111111] py-4 shadow-lg" : "bg-[#111111] py-6"}`}>
//       <div className="custom-container">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="#">
//               <img 
//                 src="/moto/pakelo/logo.png" 
//                 alt="Pakelo Logo" 
//                 className="w-[120px] md:w-[150px] xl:w-[180px] h-auto object-contain" 
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="header-link text-white hover:text-primary transition-colors dm-sans"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Actions */}
//           <div className="hidden lg:flex items-center gap-6">
//             <div className="flex items-center gap-2 cursor-pointer text-white hover:text-primary transition-colors">
//               <span className="header-link">EN</span>
//             </div>
            
//             <Button href="#" variant="outline">
//               Login
//             </Button>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="lg:hidden flex items-center">
//             <button 
//               className="text-white focus:outline-none"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? (
//                 <X size={32} strokeWidth={2} />
//               ) : (
//                 <Menu size={32} strokeWidth={2} />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 w-full bg-[#111111] shadow-lg border-t border-gray-800 flex flex-col z-50">
//           <div className="custom-container">
//             <nav className="flex flex-col py-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="block py-4 border-b border-gray-800 last:border-0 header-link text-white hover:text-primary transition-colors"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
              
//               <div className="py-4 flex items-center border-t border-gray-800">
//                 <span className="header-link text-white">EN</span>
//               </div>
//               <div className="py-4">
//                 <Button href="#" variant="outline" className="w-full">
//                   Login
//                 </Button>
//               </div>
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }


"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X,  } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling half the viewport height
      if (window.scrollY > window.innerHeight / 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


    const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Factory", href: "#" },
    { name: "Services", href: "#" },
    { name: "Certifications", href: "#" },
    { name: "Magazine", href: "#" },
    { name: "Contacts", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-transform duration-500 py-4 bg-[#242424] shadow-md ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="custom-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#">
              <img src="/moto/pakelo/logo.png" alt="Celikis Logo" className="w-[120px] md:w-[140px] xl:w-[160px] h-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`header-link uppercase dm-sans ${link.active ? "text-white font-bold underline underline-offset-3" : "text-white  font-semibold hover:font-bold hover:underline hover:underline-offset-3"}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

           <div className="hidden xl:flex items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer text-white hover:text-primary transition-colors">
              <span className="header-link dm-sans font-bold">EN</span>
            </div>
            
            <Button href="#" variant="outline">
              Login
            </Button>
          </div>


          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center">
            <button 
              className="text-primary focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={32} strokeWidth={2} />
              ) : (
                <Menu size={32} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col z-50">
          <div className="custom-container">
            <nav className="flex flex-col py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                
                  className={`header-link block py-4 border-b border-gray-50 last:border-0 uppercase dm-sans ${link.active ? "text-[#242424] font-bold underline underline-offset-3" : "text-[#242424]  font-semibold hover:font-bold hover:underline hover:underline-offset-3"}`}
                >
                  {link.name}
                </Link>
              ))}

                       
            <div className="py-4 flex items-center border-t border-gray-800">
                <span className="header-link text-[#242424] dm-sans font-bold">EN</span>
              </div>
              <div className="py-4">
                <Button href="#" variant="outline-black" className="text-[#242424]">
                  Login
                </Button>
              </div>
            
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
