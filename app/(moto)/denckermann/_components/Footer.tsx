"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  const menu = [
    {name : "About The Company", url: "#"},
    {name : "Awards", url: "#"},
    {name : "News", url: "#"},
    {name : "Parts Finder", url: "#"},
    {name : "Distributor Zone", url: "#"},
  ]

  const products = [
    {name : "Filters", url: "#"},
    {name : "Brakes", url: "#"},
    {name : "Steering system", url: "#"},
    {name : "Engine accessories", url: "#"},
  ]

  const filters = [
    {name : "Filters For Commercial Vehicles<br/>And Trucks", url: "#"},
    {name : "Automatic Transmission Filters", url: "#"},
    {name : "Cabin Filters", url: "#"},
    {name : "Oil Filters", url: "#"},
  ]
  
  return (
    <footer className="w-full flex flex-col relative">
      {/* Main Footer Content */}
      <div className="w-full bg-[var(--color-primary)] py-10 md:py-16 relative overflow-hidden">
       
        <div className="custom-container relative z-10 grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10 xl:gap-8">
          
          {/* Column 1: Company Info */}
          <div className="flex flex-col gap-6 col-span-2 md:col-span-1" data-aos="fade-up" data-aos-delay="0">
            <Link href="/denckermann">
           
              <img src="/moto/denckermann/logo1.png"
                alt="Denckermann Logo"
                className="object-contain w-[200px] md:w-[250px] xl:w-[300px] max-w-full"
                />
            </Link>
            
            <div className="flex items-start gap-4 mt-4">
              <div className="flex-shrink-0 mt-1">
               
                <img src="/moto/denckermann/location.png"
                  alt="Location"
                  className="object-contain w-[25px] "
                  />
              </div>
              <div className="flex flex-col gap-1 text-[#ffffff] sora font-normal section-text">
                <span>Denckermann Sp. Z O. O.</span>
                <span>Ul. Daniszewska 14, 03-230 Warsaw</span>
                <span>
                  Tel.: <a href="tel:+48228646700" className="underline hover:text-white transition-colors">+48 22 864 67 00</a>
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              <Link href="#" className=" transition-opacity">
                <img src="/moto/denckermann/fb.png" alt="Facebook" className="object-contain hover:scale-110 transition-opacity" />
              </Link>
              <Link href="#" className=" transition-opacity">
                <img src="/moto/denckermann/insta.png" alt="Instagram" className="object-contain hover:scale-110" />
              </Link>
              <Link href="#" className="transition-opacity">
                <img src="/moto/denckermann/in.png" alt="LinkedIn" className="object-contain hover:scale-110" />
              </Link>
              <Link href="#" className="transition-opacity">
                <img src="/moto/denckermann/you.png" alt="YouTube" className="object-contain hover:scale-110" />
              </Link>
            </div>
          </div>

          {/* Column 2: Mark */}
          <div className="flex flex-col gap-6 col-span-1" data-aos="fade-up" data-aos-delay="100">
          
            <h3 className="product-title oswald text-white font-normal mb-2">Mark</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              {menu.map((item, index) => (
                <li key={index}><Link href={item.url} className="section-text font-normal sora text-white hover:text-secondary transition-colors" dangerouslySetInnerHTML={{__html: item.name}}></Link></li>
              ))}
              </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="flex flex-col gap-6 col-span-1" data-aos="fade-up" data-aos-delay="200">
            <h3 className="product-title oswald text-white font-normal mb-2">Our Products</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              {products.map((item, index) => (
                <li key={index}><Link href={item.url} className="section-text font-normal sora text-white hover:text-secondary transition-colors" dangerouslySetInnerHTML={{__html: item.name}}></Link>
                </li>               
              ))}
              </ul>
              <Link href="#" className="section-text font-normal  sora text-secondary hover:font-semibold transition-colors">See All</Link>
          </div>

          {/* Column 4: Our Filters */}
          <div className="flex flex-col gap-6 col-span-2 md:col-span-1" data-aos="fade-up" data-aos-delay="300">
            <h3 className="product-title oswald text-white font-normal mb-2">Our Filters</h3>
             <ul className="flex flex-col gap-4 text-sm text-gray-300">
              {filters.map((item, index) => (
                <li key={index}><Link href={item.url} className="section-text font-normal sora text-white hover:text-secondary transition-colors" dangerouslySetInnerHTML={{__html: item.name}}></Link></li>
              ))}
              </ul>
               <Link href="#" className="section-text font-normal  sora text-secondary  hover:font-semibold transition-colors">See All</Link>
          </div> 

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full bg-white py-6 border-t border-gray-200" data-aos="fade-in" data-aos-delay="400">
        <div className="custom-container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-700 font-medium text-center md:text-left">
          <p className="section-text font-normal sora text-black">Copyright © 2026 Denckermann Sp. Z O. O.</p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <Link href="#" className="section-text font-normal sora hover:text-[var(--color-primary)] transition-colors">Privacy and cookie Policy</Link>
            <Link href="#" className="section-text font-normal sora hover:text-[var(--color-primary)] transition-colors">Information Clause</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
