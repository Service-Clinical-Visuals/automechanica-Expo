import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function BrakePads() {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#f9f9f9] relative z-10">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Content */}
          <div className="flex flex-col space-y-6 lg:col-span-5">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-primary"></div>
             <span className="section-text font-manrope text-primary font-semibold">
                Reliable Brake Pads
              </span>
            </div>
            
            <h2 className="section-title font-manrope font-semibold text-[#202020]">
              High-Performance Brake Pads for Safer Driving
            </h2>
            
            <div className="space-y-4">
               <p className="section-text text-[#404040] font-normal font-inter">
                Our brake pads are engineered to deliver reliable stopping power, enhanced safety, and consistent performance across all driving conditions. Developed with OEM expertise and advanced friction materials, they ensure optimal braking efficiency while minimizing noise, vibration, and wear.
              </p>
              
 <p className="section-text text-[#404040] font-normal font-inter">                Designed for modern vehicles, these brake pads provide excellent heat resistance and durability, making them ideal for both everyday driving and demanding applications.
              </p>
            </div>
            
            <ul className="space-y-3 pt-2">
              {[
                "OEM-quality design ensuring precise fit and reliable braking performance.",
                "Advanced friction materials for consistent stopping power and reduced wear.",
                "High heat resistance for stable performance under demanding conditions.",
                "Suitable for a wide range of passenger and commercial vehicles."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary font-bold mr-3 text-xl leading-none">-</span>
                  <span className="section-text text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-6">
              <Button>Explore Break Pads</Button>
            </div>
          </div>
          
          {/* 360 Video Player */}
          <div className="relative w-full aspect-video overflow-hidden flex items-center justify-center lg:col-span-7 order-1 lg:order-2">
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
