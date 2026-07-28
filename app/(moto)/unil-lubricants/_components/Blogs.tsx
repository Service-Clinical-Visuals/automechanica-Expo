"use client";
import React from "react";
import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      day: "05",
      month: "May",
      title: "The perfect solution for any operation",
      desc: "A metalworking fluid that is adapted to the machining process ensures perfect quality of the machined parts....",
      image: "/moto/unil-lubricants/b1.png"
    },
    {
      day: "10",
      month: "Feb",
      title: "How does the cold affect your car?",
      desc: "The coldest period of the year has arrived. For those who have to go out on the road, it is quite a challenge these days....",
      image: "/moto/unil-lubricants/b2.png"
    },
    {
      day: "10",
      month: "Feb",
      title: "Reduce Metalworking Costs",
      desc: "For the forming and punching of sheet material, a classic emulsion bath is still often used. However, you can save a....",
      image: "/moto/unil-lubricants/b3.png"
    },
    {
      day: "04",
      month: "Jan",
      title: "Lubricant Oxidation & Degradation",
      desc: "Oxidation of a lubricant is a chemical process that changes a lubricant and makes it lose its chemical and physical properties.....",
      image: "/moto/unil-lubricants/b4.png"
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 z-0">
      {/* Background split */}
      <div className="absolute inset-x-0 top-0 h-[45%] bg-[#111111] -z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-white -z-10"></div>

      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="oswald-font font-semibold text-[#ffffff] section-title mb-6">
            Blogs
          </h2>
          <p className="lato-font text-[#ffffff] section-text font-normal leading-relaxed">
            Stay informed with the latest industry insights, lubrication tips, product updates, and expert advice designed to help you get the most out of your vehicles and equipment. Our blog section covers a wide range of topics, including maintenance best practices, product innovations, performance recommendations, and practical guidance to support better engine care and long-term reliability. Whether you are looking for technical knowledge or everyday tips, our blogs are here to keep you informed and up to date.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
          {blogs.map((blog, idx) => (
            <div key={idx} className="bg-white   shadow-md flex flex-col h-full" data-aos="fade-up" data-aos-delay={idx * 100}>
              
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3]">
                
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Date Box overlapping image and text */}
                <div className="absolute right-0 bottom-0 translate-y-1/2 bg-[#002D5B] text-white flex flex-col items-center justify-center w-[72px] h-[84px] z-20">
                  <span className="oswald-font font-normal card-text leading-tight">{blog.day}</span>
                  <span className="oswald-font font-normal card-text leading-tight mt-1">{blog.month}</span>
                </div>
              </div>

              {/* Text Container */}
              <div className="p-6 flex flex-col flex-grow pt-10">
                <h3 className="oswald-font font-medium text-[#002D5B] card-text mb-4 pr-16 min-h-[56px]">
                  {blog.title}
                </h3>
                <p className="lato-font text-[#3a3a3a] section-text font-normal leading-relaxed">
                  {blog.desc}
                </p>
                
                <Link href="#" className="lato-font text-[#0A2B52] font-semibold section-text text-right underline underline-offset-2">
                  Read
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
