import { ArrowRightIcon, User } from "lucide-react";
import Container from "./Container";

const products = [
  { img: "/moto/meat-doria/products/1.png", title: "Air Conditioning Compressor" },
  { img: "/moto/meat-doria/products/2.png", title: "Air Conditioning Condenser" },
  { img: "/moto/meat-doria/products/3.png", title: "Evaporators" },
  { img: "/moto/meat-doria/products/4.png", title: "Air Conditioning Compressor" },
];

export default function Products() {
  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24" id="products">
      <Container>
        {/* Heading */}
        <div className="max-w-[980px] mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="heading text-[28px]! mb-4">Our Product Range</h2>
          <p className="content text-[18px]!">
            Our diverse product range encompasses a variety of categories, ensuring we meet the unique
            needs of every customer. From automotive components to specialized tools, we prioritize
            quality and innovation in every item we offer.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product, i) => (
            <div
              key={`${product.title}-${i}`}
              className="border-[1.5px] border-[#1C6E9F]!  bg-white flex flex-col  py-4 px-2"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="h-[290px] flex items-center justify-center">
                <img src={product.img} alt={product.title} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="px-4 pt-3 pb-6">
                <hr className="border-t border-[#00000020] mb-4" />
                <p
                  className={`heading text-center text-[24px]! font-medium!`}
                >
                  {product.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-center" data-aos="fade-up">
          <button
              className="navlink gap-1 flex max-w-[200px] justify-between text-white! rounded-tr-[16px] rounded-bl-[16px] bg-primary px-4 py-3 transition-colors"
          >
              View All Products
              <ArrowRightIcon fill="white" />
          </button>
        </div>
      </Container>
    </section>
  );
}
