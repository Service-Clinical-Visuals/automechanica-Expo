"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Typography from "./Typography";
import Button from "./Button";

const productData: Record<string, any> = {
  "Brake Pads": {
    images: [
      "/moto/auto-gh/frame1-1.png",
      "/moto/auto-gh/frame1-2.png",
      "/moto/auto-gh/frame1-3.png",
      "/moto/auto-gh/frame1-4.png",
    ],
    code: "GH-410108",
    title: "Brake Pad set, Disc Brake",
    description: "Brake pads are essential components of a vehicle's braking system, designed to create friction against the brake disc to slow down or stop motion. Engineered with high-performance friction materials, they ensure reliable braking, reduced noise, and long-lasting durability. Built to withstand extreme temperatures and demanding conditions, modern brake pads deliver consistent performance, safety, and control across a wide range of industrial and automotive applications.",
    features: [
      "High-performance friction materials ensure reliable and consistent braking performance",
      "Designed to reduce noise and vibrations for smoother driving experience",
      "Withstands extreme temperatures and demanding operating conditions effectively",
      "Provides enhanced safety, control, and long-lasting durability in applications",
      "Suitable for automotive and industrial use across multiple environments"
    ]
  },
  "Suspension": {
    images: [
      "/moto/auto-gh/frame2-1.png",
      "/moto/auto-gh/frame2-2.png",
      "/moto/auto-gh/frame2-3.png",
      "/moto/auto-gh/frame2-4.png",
    ],
    code: "GH-501048",
    title: "Control/Trailing Arm Kit, wheel suspension",
    description: "Control / Trailing Arm Kits are key suspension components that connect the wheel hub to the vehicle frame, ensuring proper alignment, stability, and precise handling. They control wheel movement to deliver balanced performance during cornering, braking, and uneven road conditions. Built with high-strength materials, these kits are designed to handle heavy loads and harsh environments while effectively absorbing shocks and vibrations. This helps improve ride comfort, extend tire life, and maintain consistent control for a safer and smoother driving experience.",
    features: [
      "Reduces vibrations and enhances ride comfort on uneven road surfaces",
      "Manufactured using high-strength materials for long-lasting durability performance",
      "Supports suspension movement while maintaining proper wheel positioning consistently",
      "Designed for easy installation and compatibility with various vehicle models"
    ]
  },
  "Sensors": {
    images: [
      "/moto/auto-gh/frame3-1.png",
      "/moto/auto-gh/frame3-2.png",
      "/moto/auto-gh/frame3-3.png",
      "/moto/auto-gh/frame3-4.png",
    ],
    code: "GH-721277",
    title: "Mass Air Flow Sensor",
    description: "Mass Air Flow Sensors measure the amount of air entering the engine and transmit precise data to the engine control unit, enabling accurate fuel injection and efficient combustion. By maintaining the correct air-fuel mixture, they help optimize engine performance, ensure smooth acceleration, and improve overall driving efficiency. Designed to operate reliably under varying temperatures and conditions, these sensors also contribute to better fuel economy and reduced emissions, making them essential for consistent and eco-friendly engine operation.",
    features: [
      "Accurately measures incoming air for precise fuel and air mixture",
      "Improves engine efficiency and enhances overall vehicle performance significantly",
      "Supports reduced emissions by optimizing combustion process inside engine",
      "Ensures smooth acceleration and consistent engine response during driving"
    ]
  }
};

const Products = () => {
  const tabs = ["Brake Pads", "Suspension", "Sensors", "View All"];
  const [activeTab, setActiveTab] = useState("Brake Pads");

  // Track the currently displayed large image for the active tab
  const [activeImage, setActiveImage] = useState(productData["Brake Pads"].images[0]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (productData[tab]) {
      setActiveImage(productData[tab].images[0]);
    }
  };

  const currentProduct = productData[activeTab];

  return (
    <section className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-32 bg-white flex flex-col items-center overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 min-[2100px]:gap-6 min-[3800px]:gap-12" data-aos="fade-up">
          <Typography variant="h4" color="primary" className="font-bold">
            Our Product Lineup
          </Typography>
          <Typography variant="h2" color="dark" className="font-bold">
            Comprehensive Range of Automotive Components
          </Typography>
          <Typography variant="p" color="muted" className="max-w-[70%] min-[3800px]:max-w-7xl mx-auto min-[3800px]:text-3xl leading-relaxed">
            Explore our wide range of high-quality automotive components, engineered for performance, durability, and reliability. Each product is designed to meet industry standards and deliver consistent results across various applications.
          </Typography>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 min-[2100px]:mt-12 min-[3800px]:mt-20 mb-12 min-[2100px]:mb-16 min-[3800px]:mb-24" data-aos="fade-up" data-aos-delay="100">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-8 py-2 min-[2100px]:px-10 min-[2100px]:py-3 min-[3800px]:px-16 min-[3800px]:py-6 rounded-md font-semibold transition-colors duration-300 min-[3800px]:text-3xl border ${activeTab === tab
                ? "bg-[#F6A000] text-white border-[#F6A000]"
                : "bg-white text-gray-400 border-gray-200 hover:border-[#F6A000] hover:text-[#F6A000]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "View All" ? (
          <div className="w-full" data-aos="fade-up">
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
                3800: { slidesPerView: 3, spaceBetween: 60 }
              }}
              pagination={{ clickable: true, el: '.products-pagination' }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="w-full pb-12 min-[3800px]:pb-24"
            >
              {Object.entries(productData).map(([key, product]) => (
                <SwiperSlide key={key} className="h-auto">
                  <div className="flex flex-col bg-[#F8F9FA] rounded-xl border border-gray-100 p-8 min-[3800px]:p-16 h-full transition-transform duration-300 hover:-translate-y-2">
                    <div className="w-full aspect-[4/3] relative mb-8 min-[3800px]:mb-16">
                      <Image 
                        src={product.images[0]} 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        alt={product.title} 
                        className="object-contain mix-blend-multiply p-4 min-[3800px]:p-8"
                      />
                    </div>
                    <Typography variant="h3" color="primary" className="font-bold mb-3 min-[3800px]:mb-6">
                      {product.code}
                    </Typography>
                    <Typography variant="h4" color="dark" className="font-bold mb-4 min-[3800px]:mb-8 line-clamp-2 min-[3800px]:text-4xl">
                      {product.title}
                    </Typography>
                    <Typography variant="p" color="muted" className="mb-8 min-[3800px]:mb-16 line-clamp-4 min-[3800px]:text-3xl leading-relaxed">
                      {product.description}
                    </Typography>
                    <div className="mt-auto">
                      <Button text="View Product" variant="primary" showIcon={false} className="w-full justify-center min-[3800px]:text-3xl min-[3800px]:py-6" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Pagination Indicator */}
            <div className="products-pagination flex justify-center gap-2 min-[3800px]:gap-4 mt-8 min-[3800px]:mt-16"></div>
          </div>
        ) : (
          currentProduct && (
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-16 min-[3800px]:gap-32 w-full">
              {/* Left: Gallery (span 7) */}
              <div className="xl:col-span-7 flex flex-col gap-4 min-[3800px]:gap-8" data-aos="fade-right">
                {/* Main Image */}
                <div className="w-full aspect-[792/340] min-[3800px]:aspect-[16/9] relative bg-[#F8F9FA] rounded-md overflow-hidden">
                  <Image
                    src={activeImage}
                    alt="Product Image"
                    fill
                    sizes="(max-width: 1280px) 100vw, 60vw"
                    className="object-contain p-8 min-[3800px]:p-16 mix-blend-multiply"
                  />
                </div>
                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-4 min-[3800px]:gap-8">
                  {currentProduct.images.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-full aspect-[4/3] relative bg-[#F8F9FA] rounded-md overflow-hidden border transition-colors duration-300 ${activeImage === img ? "border-[#F6A000]" : "border-transparent hover:border-gray-300"
                        }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        sizes="(max-width: 1280px) 25vw, 15vw"
                        className="object-contain p-4 min-[3800px]:p-8 mix-blend-multiply"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Info (span 5) */}
              <div className="xl:col-span-5 flex flex-col justify-center" data-aos="fade-left">
                <Typography variant="h3" color="primary" className="font-bold mb-2 min-[3800px]:mb-6">
                  {currentProduct.code}
                </Typography>
                <Typography variant="h2" color="dark" className="font-bold mb-6 min-[3800px]:mb-12">
                  {currentProduct.title}
                </Typography>
                <Typography variant="p" color="muted" className="mb-6 min-[3800px]:mb-12 min-[3800px]:text-3xl leading-relaxed">
                  {currentProduct.description}
                </Typography>

                <ul className="flex flex-col gap-4 min-[3800px]:gap-8 mb-8 min-[3800px]:mb-16">
                  {currentProduct.features.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 min-[3800px]:gap-6">
                      <div className="w-1 h-1 min-[3800px]:w-2 min-[3800px]:h-2 rounded-full bg-gray-600 mt-2.5 min-[3800px]:mt-5 shrink-0"></div>
                      <Typography variant="p" color="muted" className="min-[3800px]:text-3xl leading-relaxed">
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>

                <div className="mt-2">
                  <Button text="View Product" variant="primary" showIcon={false} />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Products;
