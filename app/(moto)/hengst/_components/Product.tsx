import { ArrowRight } from "lucide-react";
import Container from "./Container";

const products = [
  { img: "/moto/hengst/products/1.png", title: "Extraction systems for industry" },
  { img: "/moto/hengst/products/2.png", title: "Filtration Fuel Cells" },
  { img: "/moto/hengst/products/3.png", title: "Air Filtration for Buildings" },
];

export default function Product() {
  return (
    <section className="relative bg-[#161616] py-16 md:py-24 overflow-hidden">
      <img
        src="/moto/hengst/products/bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
      <Container>
        <img
          src="/moto/hengst/03.png"
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute top-24 left-1 w-30 pointer-events-none select-none"
        />
      </Container>
      <Container className="relative z-10">
        {/* Heading row */}
        <div className="flex items-center justify-between flex-wrap gap-6 mb-10" data-aos="fade-up">
          <div className="flex items-center gap-4">
            <h2 className="heading-white">Our Products</h2>
          </div>

          <div className="inline-flex items-center" data-aos="fade-up" data-aos-delay="100">
            <a
              href="#"
              className="content text-[#002880]! font-semibold px-12 py-3 bg-white btntext transition-opacity hover:opacity-90"
            >
              View All
            </a>
            <span className="w-14 h-14 -ml-5 bg-white border-1 border-primary rotate-45 flex items-center justify-center shrink-0">
              <ArrowRight size={30} className="-rotate-45 text-primary" />
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item, i) => (
            <div
              key={item.title}
              className="relative aspect-519/628 overflow-hidden sm:last:col-span-2 sm:last:w-1/2 sm:last:mx-auto lg:last:col-span-1 lg:last:w-auto lg:last:mx-0"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-[#48484899] pt-4 pb-4 px-3">
                <p className="heading-white text-[20px]! text-center font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
