import Container from "./Container";

export default function Presence() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[100px]">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="heading text-[46px]! leading-[100%]! text-[#00437A]! mb-6">Our presence in the world</h2>
            <p className="heading text-[46px]! leading-[54px]! text-[#555555]! px-10">
              With an ever-expanding global network, we provide tailored solutions and high-quality
              products to customers across diverse industries, ensuring efficiency, reliability, and
              innovation in every market we serve.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden" data-aos="fade-up" data-aos-delay="150">
            <img
              src="/moto/ramoil/presence.png"
              alt="Ra.M.Oil global presence"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
