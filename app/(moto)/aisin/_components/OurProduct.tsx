import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function OurProduct() {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#F8F9FA] relative z-10">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Video 01 Player */}
          <div className="lg:col-span-7 relative w-full aspect-video overflow-hidden flex items-center justify-center order-2 lg:order-1">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
           
          </div>
          
          {/* Content */}
          <div className=" lg:col-span-5 flex flex-col space-y-6 order-1 lg:order-2">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-primary"></div>
              <span className="section-text font-manrope text-primary font-semibold">
                Our Product
              </span>
            </div>
            
            <h2 className="section-title font-manrope font-semibold text-[#202020]">
              OEM-Quality Automotive Solutions for Global Performance
            </h2>
            
            <div className="space-y-4">
              <p className="section-text text-[#404040] font-normal font-inter">
                We offer a comprehensive range of high-quality automotive components engineered to deliver reliability, precision, and long-lasting performance. Backed by OEM expertise, our products are designed to meet the exact standards of original equipment, ensuring seamless compatibility and trusted operation across a wide range of vehicles.
              </p>
              
              <p className="section-text text-[#404040] font-normal font-inter">
                From driveline and engine components to cooling and braking systems, our portfolio reflects advanced engineering, innovation, and a commitment to excellence in every detail.
              </p>
            </div>
            
            <ul className="space-y-3 pt-2">
              {[
                "Wide product portfolio including driveline, engine, and braking systems.",
                "Trusted performance across European and global vehicle applications."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary font-bold mr-3 text-xl leading-none">-</span>
                  <span className="section-text text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-6">
              <Button>Explore Products</Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
