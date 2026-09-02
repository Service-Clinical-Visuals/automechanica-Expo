import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const newsItems = [
  {
    image: "/moto/aisin/n1.png",
    title: "A Journey Through the History of Spa-Francorchamps Circuit",
    desc: "Nestled amidst the picturesque Ardennes Forest in Belgium lies one of the most iconic circuits in motorsport history - Spa-Francorchamps. With its challenging corners and undulating terrain,",
  },
  {
    image: "/moto/aisin/n2.png",
    title: "AISIN Starter: Reliable Performance for your vehicle",
    desc: "When it comes to automotive components, reliability is essential. Whether you're hitting the road for a daily commute or embarking on a cross-country adventure, having",
  },
  {
    image: "/moto/aisin/n3.png",
    title: "Prepare Your Vehicle for Winter : 5 Essential Tips",
    desc: "Embracing the onset of winter, the imperative task of readying your vehicle for the season takes center stage, paying the way for safe navigation through",
  },
  {
    image: "/moto/aisin/n4.png",
    title: "AISIN Drift project - Drift Masters 2021",
    desc: "The first calendar of the DMGP provided 5 different dates. The last leg of the championship is now canceled due to the covid situation",
  },
];

export default function News() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white relative z-10">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12 ">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-primary"></div>
              <span className="section-text font-manrope text-primary font-semibold">
              News & Event
            </span>
          </div>
          
            <h2 className="section-title font-manrope font-semibold text-[#202020]">
            Discover What's New in Products, Technology, and Innovation
          </h2>
          
              <p className="section-text text-[#404040] font-normal font-inter">
            Stay informed with our latest developments, including new product launches, technical advancements, and key industry updates. Our News & Updates section keeps you connected with everything happening across our brand—from innovation in engine components to improvements in quality, performance, and global market trends.
          </p>
        </div>
        
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newsItems.map((item, idx) => (
            <div key={idx} className="border border-gray-100 flex flex-col bg-white h-full group transition-shadow duration-300 hover:shadow-lg">
              
              {/* Image Container */}
              <div className="w-full aspect-[4/3] relative overflow-hidden p-2">
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Text Container */}
              <div className="flex flex-col p-6 flex-grow text-left">
                <h3 className="font-manrope font-semibold text-[#202020] icon-text mb-4 leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="font-inter text-[#404040] section-text mb-6 flex-grow line-clamp-4">
                  {item.desc}
                </p>
                <Link href="#" className="flex items-center text-primary font-manrope font-semibold hover:text-opacity-80 transition-colors w-fit group/link">
                  <span className="mr-2">Read More</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover/link:translate-x-1 transition-transform">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="flex justify-center">
          <Button>View All News</Button>
        </div>
        
      </div>
    </section>
  );
}
