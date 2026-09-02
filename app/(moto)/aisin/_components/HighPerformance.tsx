import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function HighPerformance() {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#F8F9FA] relative z-10">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Content */}
          <div className="flex flex-col space-y-6 lg:col-span-5">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-primary"></div>
              <span className="section-text font-manrope text-primary font-semibold">
                Our Products
              </span>
            </div>
            
            <h2 className="section-title font-manrope font-semibold text-[#202020]">
              High-Performance Automotive Parts You Can Trust
            </h2>
            
            <div className="space-y-4">
              <p className="section-text text-[#404040] font-normal font-inter">
                We offer a comprehensive portfolio of high-performance automotive parts developed with the same precision and engineering excellence as original equipment. From drivetrain and transmission systems to braking, cooling, and engine components, our products are designed to deliver reliability, safety, and optimal vehicle performance across global markets.
              </p>
              
              <p className="section-text text-[#404040] font-normal font-inter">
                Built on decades of innovation and advanced manufacturing expertise, our solutions ensure seamless compatibility, long service life, and consistent quality for modern passenger and commercial vehicles.
              </p>
            </div>
            
            <ul className="space-y-3 pt-2">
              {[
                "Engineered with advanced technology for precision and durability.",
                "Wide range of OEM-quality automotive components across multiple systems."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary font-bold mr-3 text-xl leading-none">-</span>
                  <span className="section-text text-[#404040] font-normal font-inter">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-6">
              <Button>Explore Break Pads</Button>
            </div>
          </div>
          
          {/* Video 02 Player */}
          <div className="lg:col-span-7 relative w-full aspect-video  overflow-hidden flex items-center justify-center">
            {/* The requirement specifies using DynamicVideoPlayer for videos */}
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
           
          </div>
          
        </div>
      </div>
    </section>
  );
}
