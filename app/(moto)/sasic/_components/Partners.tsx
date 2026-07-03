import Container from "./Container";

const partners = [
  { name: "SPMI Groupe", img: "/moto/sasic/partners/1.png" },
  { name: "Sadex", img: "/moto/sasic/partners/2.png" },
  { name: "Sofare by Sasic", img: "/moto/sasic/partners/3.png" },
  { name: "SiCab", img: "/moto/sasic/partners/4.png" },
];

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[100px]">
          <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
            <div>
                <span className="block h-[3px] w-14 bg-[#F2A93B] mb-3" />
                <h2 className="heading uppercase -mt-3">SPMI Group Brands</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, i) => (
              <div
                key={partner.name}
                className="border border-gray-200 rounded-lg flex items-center justify-center h-auto px-8 py-6"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <img
                  src={partner.img}
                  alt={partner.name}
                  className=" max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
