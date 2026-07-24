import React from "react";
import Button from "./Button";
import Link from "next/link";

const smallBlogs = [
  {
    id: 1,
    title: "The Importance of High-Quality Motor Oil",
    excerpt: "The oil in your car is one of the most important fluids that keep your vehicle running smoothly. It lubricates the engine and other moving...",
    image: "/moto/baroxoil/b2.png",
    link: "#",
  },
  {
    id: 2,
    title: "How Oil Protects Your Engine?",
    excerpt: "Engine oil is typically made up of different types of oils that are blended together to provide specific benefits for different parts of the engine...",
    image: "/moto/baroxoil/b3.png",
    link: "#",
  },
  {
    id: 3,
    title: "Difference between American Petroleum standards",
    excerpt: "Engine oil is typically made up of different types of oils that are blended together to provide specific benefits for different parts of the engine...",
    image: "/moto/baroxoil/b4.png",
    link: "#",
  },
];

export default function Blogs() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 md:py-24 overflow-hidden">
      <div className="custom-container">
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 relative items-center" data-aos="fade-up">
          
          {/* Vertical Divider (Hidden on mobile) */}
          <div className="hidden xl:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300 -translate-x-1/2"></div>

          {/* Left Side: Featured Post */}
          <div className="order-2 xl:order-1 flex flex-col gap-6 xl:pr-8">
            <div className="relative w-full aspect-[4/3] sm:aspect-video xl:aspect-[4/3] mb-4">
              {/* Decorative offset background */}
              <div className="absolute -left-4 -bottom-4 w-[95%] h-[95%] bg-[#0F2469] rounded-2xl sm:rounded-3xl z-0"></div>
              {/* Main Image */}
              <img 
                src="/moto/baroxoil/b1.png" 
                alt="Understanding Lubricant Oil" 
                className="absolute inset-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl z-10 shadow-sm"
              />
            </div>
            
            <div className="flex flex-col gap-3">
              <h2 className="odibee-sans-font section-subtitle text-[#212121] font-normal mt-2 leading-tight">
                Understanding Lubricant Oil: A Quick Guide
              </h2>
              <p className="text-[#333333] instrument-sans-font section-text font-normal  leading-relaxed">
                What is Lubricant Oil? Lubricant oil is a fluid that reduces friction between moving parts in machines and engines. It helps keep everything running smoothly and prevents wear and tear. Types of Lubricant Oil Mineral Oil: Derived from crude oil, it's commonly used in many applications. Reduces Friction: Keeps parts moving smoothly. Prevents Overheating: Helps dissipate ... <Link href="#" className="text-[#0F2469] font-medium hover:underline">[Read More]</Link>
              </p>
            </div>
          </div>

          {/* Right Side: Blog List */}
          <div className="order-1 xl:order-2 flex flex-col gap-6 xl:pl-8">
            <div>
              <span className="odibee-sans-font text-[#EB2226] section-subtitle font-normal  flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#EB2226]"></span> Our Blog
              </span>
              <h2 className="odibee-sans-font section-title text-[#212121] font-normal mt-2 leading-tight">
                Driving Innovation and Sharing Insights
              </h2>
            </div>
            
            <div className="flex flex-col gap-4 mt-2">
              {smallBlogs.map((blog) => (
                <div key={blog.id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-stretch bg-white border border-gray-200 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-full sm:w-[140px] md:w-[160px] aspect-video sm:aspect-square shrink-0 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center flex-1">
                    <h2 className="odibee-sans-font section-subtitle text-[#212121] font-normal mt-2 leading-tight">
                      {blog.title}
                    </h2>
                    <p className="text-[#333333] instrument-sans-font section-text font-normal  leading-relaxed">
                      {blog.excerpt} <Link href={blog.link} className="text-[#0F2469] font-medium hover:underline">[Read More]</Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2">
              <Button href="#">
                View All News
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
