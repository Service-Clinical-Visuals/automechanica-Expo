import React from 'react';
import Typography from './Typography';
import Button from './Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Catalytic Converters",
      image: "/moto/veneporte/product1.png"
    },
    {
      id: 2,
      title: "Particulate Filters",
      image: "/moto/veneporte/product2.png"
    },
    {
      id: 3,
      title: "SCRs & LNTs",
      image: "/moto/veneporte/product3.png"
    },
    {
      id: 4,
      title: "Silencers",
      image: "/moto/veneporte/product4.png"
    },
    {
      id: 5,
      title: "Mounting Parts",
      image: "/moto/veneporte/product5.png"
    },
    {
      id: 6,
      title: "Exhaust Systems",
      image: "/moto/veneporte/product1.png"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/moto/veneporte/bg2.png')] bg-cover bg-center z-0">
      </div>
      <div className="custom-container px-4 md:px-8 max-w-[1920px] mx-auto relative z-10">
        {/* {bg image} */}


        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6 border-b border-white/60 pb-6">
          <Typography variant="h2" color="white" className="font-bold" data-aos="fade-right" data-aos-duration="800">
            Global Range Supplier
          </Typography>
          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
            <Button text="View All Products" variant="secondary" showIcon={true} />
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="w-full mx-auto relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24, slidesPerGroup: 2 },
              1536: { slidesPerView: 3, spaceBetween: 32, slidesPerGroup: 3 },
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination-lines',
            }}
            className="w-full !pb-4"
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id} className="h-auto pb-4">
                <div className="bg-white rounded-xl overflow-hidden flex flex-col p-6 shadow-xl transition-transform hover:-translate-y-2 duration-300 group h-full" data-aos="zoom-in-up" data-aos-delay={100 + (index * 150)} data-aos-duration="800">
                  <div className="w-full rounded-lg mb-6 flex items-center justify-center relative overflow-hidden ">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center flex flex-col items-center flex-grow justify-end">
                    <Typography variant="h3" color="primary" className="mb-4 font-medium ">
                      {product.title}
                    </Typography>
                    <div className="flex items-center justify-center gap-2 text-secondary hover:text-primary transition-colors cursor-pointer group/link">
                      <Typography variant="h5" color='secondary' weight='bold' className="underline font-bold tracking-wide group-hover/link:text-primary transition-colors">
                        View More
                      </Typography>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:text-primary transition-colors">
                        <circle cx="12" cy="12" r="10" />
                        <path d="m12 16 4-4-4-4" />
                        <path d="M8 12h8" />
                      </svg>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination-lines flex justify-center items-center mt-8"></div>
        </div>

      </div>
    </section>
  );
}
