"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Button from "./Button";

const categories = [
  {
    title: "Tie rod end",
    description: "Connects the steering to the wheel for precise control.",
    image: "/moto/ditas/p3.jpg",
  },
  {
    title: "Drawbar",
    description: "Connects the axle to the chassis for stability and control.",
    image: "/moto/ditas/p4.jpg",
  },
  {
    title: "Idler arm",
    description: "Supports the steering linkage for smooth, stable steering.",
    image: "/moto/ditas/p2.jpg",
  },
  {
    title: "Push rod ball joint",
    description: "Transfers steering movement to the wheel.",
    image: "/moto/ditas/p1.jpg",
  },
  {
    title: "Drawbar",
    description: "Connects the axle to the chassis for stability and control.",
    image: "/moto/ditas/p4.jpg",
  },
  {
   title: "Idler arm",
    description: "Supports the steering linkage for smooth, stable steering.",
    image: "/moto/ditas/p2.jpg",
  },
];

type Category = {
  title: string;
  description: string;
  image: string;
};

function CategoryCard({
  category,
  index,
}: {
  category: Category;
  index: number;
}) {
  return (
    <div
      className="mx-auto flex h-[520px] w-full max-w-[390px] flex-col rounded-[5px] border border-[#CCCCCC] bg-white p-4 pb-8"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={index * 100}
      data-aos-once="true"
    >
      <div className="mb-3 flex h-[320px] w-full items-center justify-center overflow-hidden border border-[#E4E4E4] bg-white shadow-[0_3px_8px_rgba(0,0,0,0.24)]">
        <img
          src={category.image}
          alt={category.title}
          className="max-h-[280px] max-w-[320px] object-contain 2xl:max-h-[300px] 2xl:max-w-[320px]"
        />
      </div>

      <h3 className="card-title mb-3 text-center text-[#272727]">
        {category.title}
      </h3>

      <p className="body-text flex-1 text-center text-[#4B5563]">
        {category.description}
      </p>

      <a
        href="#"
        className="link-text mt-4 text-center text-[#ED1C24] transition-opacity hover:opacity-80"
      >
        View Products
      </a>
    </div>
  );
}

export default function ProductCategories() {
  return (
    <section className="w-full py-16 md:py-20 xl:py-[100px]">
      <div className="custom-container">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div
            className="max-w-[677px]"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-once="true"
          >
            <h2 className="section-title mb-4 text-[#272727]">
              Our Product Categories
            </h2>

            <p
              className="body-text text-[#4B5563]"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="150"
              data-aos-once="true"
            >
              Explore DİTAŞ&apos;s steering and suspension components,
              engineered for durability, precision, and reliable performance.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
            data-aos-once="true"
          >
            <Button
              href="#"
              bgColor="#ED1C24"
              textColor="#FFFFFF"
              className="flex-shrink-0"
            >
              View All
            </Button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={900}
          spaceBetween={45}
          className="pb-5"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: ".product-categories-pagination",
            renderBullet: (_, className) => {
              return `
                <span
                  class="${className}"
                  style="
                    width:83.55px;
                    height:14px;
                    border-radius:11px;
                    border:1px solid #005BAB;
                    background:transparent;
                    display:inline-block;
                    margin:0;
                    opacity:1;
                  "
                ></span>
              `;
            },
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide
              key={`${category.title}-${index}`}
              className="!flex !h-auto !justify-center"
            >
              <CategoryCard
                category={category}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="product-categories-pagination mt-20 flex items-center justify-center gap-[6px]"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="200"
          data-aos-once="true"
        />

        <style jsx global>{`
          .product-categories-pagination {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
          }

          .product-categories-pagination .swiper-pagination-bullet {
            background: transparent !important;
            opacity: 1 !important;
            margin: 0 !important;
          }

          .product-categories-pagination
            .swiper-pagination-bullet-active {
            background: #005bab !important;
          }
        `}</style>
      </div>
    </section>
  );
}