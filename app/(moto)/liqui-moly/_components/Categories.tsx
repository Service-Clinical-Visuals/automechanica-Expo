import React, { useState, useEffect } from "react";
import Button from "./Button";

export default function Categories() {
  const [currentPage, setCurrentPage] = useState(0);

  const categories = [
    {
      title: "Additives",
      description: "Improve performance, reduce friction, and protect engine components.",
      image: "/moto/liqui-moly/pro1.jpg",
    },
    {
      title: "Oils",
      description: "Premium engine oils for superior protection and lasting performance.",
      image: "/moto/liqui-moly/pro2.jpg",
    },
    {
      title: "Engine Oils",
      description: "Protect your engine with high-performance oils for every journey.",
      image: "/moto/liqui-moly/pro3.jpg",
    },
    {
      title: "Gear Oils",
      description: "Reliable gear oils for efficient power transfer and transmission durability.",
      image: "/moto/liqui-moly/pro4.jpg",
    },
    {
      title: "Greases",
      description: "High-performance greases for smooth operation and lasting protection.",
      image: "/moto/liqui-moly/pro5.jpg",
    },
    {
      title: "Pastes",
      description: "Protect your engine with high-performance oils for every journey.",
      image: "/moto/liqui-moly/pro6.jpg",
    },
    {
      title: "Vehicle care",
      description: "Vehicle care solutions designed to protect and  maintain your vehicle.",
      image: "/moto/liqui-moly/pro7.jpg",
    },
    {
      title: "Repair Aids / Service Products",
      description: "Reliable repair aids for efficient maintenance and performance.",
      image: "/moto/liqui-moly/pro8.jpg",
    },
    {
      title: "Workshop Pro-Line",
      description: "Professional workshop products for efficient servicing and maintenance.",
      image: "/moto/liqui-moly/pro9.jpg",
    }
  ];

  const totalPages = Math.ceil(categories.length / 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(timer);
  }, [totalPages]);

  const displayedCategories = categories.slice(currentPage * 3, currentPage * 3 + 3);

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 relative">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-center mb-10 gap-6" data-aos="fade-up">
          <div className="max-w-5xl">
            <h2 className="section-title font-semibold text-[var(--color-primary)] mb-2 inline-block relative">
              Discover Our Product Categories
              <div className="absolute bottom-0 left-0 w-full flex items-center gap-1">
              <div className="h-[3px] flex-1 bg-[var(--color-primary)]"></div>
              <div className="h-[3px] w-[3px] bg-[var(--color-primary)]"></div>
              <div className="h-[3px] w-[3px] bg-[var(--color-primary)]"></div>
              <div className="h-[3px] w-[3px] bg-[var(--color-primary)]"></div>
              <div className="h-[3px] w-[3px] bg-[var(--color-primary)]"></div>
            </div>
            </h2>
            <p className="section-text text-[var(--color-third)] mt-6 leading-relaxed font-normal">
            <span className="font-bold text-[#111827]">LIQUI MOLY</span> delivers trusted automotive solutions with decades of expertise, enhancing vehicle performance, efficiency, and reliability for drivers worldwide. Our innovative products are designed to provide superior protection and a better driving experience.
            </p>
          </div>
          <div className="flex-shrink-0 ">
            <Button variant="secondary" className="px-5 py-2" showArrow={true}>
              View all categories
            </Button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {displayedCategories.map((cat, index) => (
            <div 
              key={`${currentPage}-${index}`} 
              className={`bg-white rounded-xl overflow-hidden drop-shadow-md border border-gray-100 flex flex-col h-full animate-[fadeIn_0.5s_ease-in-out] ${
                index === 2 ? 'md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto xl:col-span-1 xl:w-full xl:mx-0' : ''
              }`}
            >
              <div className="aspect-[4/3] w-full relative overflow-hidden mb-6 shrink-0">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
                />
              </div>
              <div className="px-15 lg:px-25 pb-15 flex flex-col flex-grow text-center items-center justify-between">
                <div>
                  <h3 className="card-title font-semibold text-[#111827] mb-4">{cat.title}</h3>
                  <p className="section-text text-[var(--color-third)] mb-8 font-normal">{cat.description}</p>
                </div>
                <Button variant="secondary" className="px-6 py-2 " showArrow={true}>
                  Read more
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-12" data-aos="fade-up">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-4 h-4 rounded-[4px] transition-all duration-300 ${
                currentPage === index 
                  ? "bg-[var(--color-primary)]" 
                  : "border-2 border-[var(--color-primary)] bg-transparent hover:bg-blue-100"
              }`}
              aria-label={`Page ${index + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}
