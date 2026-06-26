import Container from "./Container";

export default function ProductsBar() {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{
        backgroundImage: "url('/moto/technilub/products_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* #212121 at 85% opacity overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(33, 33, 33, 0.85)" }}
      />

      <Container>
        <div className="relative flex flex-col items-center text-center gap-8">
          <div className="flex flex-col items-center gap-8">
            <h2 data-aos="fade-up" className="heading2 text-white! font-bold text-[24px]! uppercase">
              Our Products
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="heading-white max-w-[850px] text-[24px]! font-normal! leading-[36px]!">
              Constantly seeking improvement and innovation, TECHNILUB complies
              with the latest technical and regulatory requirements for lubricants.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="250">
            <button className="border content-white bg-primary border-white font-medium px-6 py-1.5 rounded-lg hover:bg-white hover:text-[#212121] transition-colors">
              View All Products
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
