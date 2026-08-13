import Container from "./Container";

const solutions = [
  { img: "/moto/seld-production/solutions/1.png", name: "Competition" },
  { img: "/moto/seld-production/solutions/2.png", name: "Heavy Industry" },
  { img: "/moto/seld-production/solutions/3.png", name: "Automobile" },
  { img: "/moto/seld-production/solutions/4.png", name: "Transport Vehicles" },
  { img: "/moto/seld-production/solutions/5.png", name: "Public Works Machinery" },
  { img: "/moto/seld-production/solutions/6.png", name: "Agricultural Machinery" },
  { img: "/moto/seld-production/solutions/7.png", name: "Nautical Sector" },
  { img: "/moto/seld-production/solutions/8.png", name: "Ski Lift Fleet" },
];

export default function Solutions() {
  return (
    <section className="bg-white py-16">
      <Container>
        {/* Heading */}
        <div className="max-w-[900px] mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="heading mb-4">Solutions tailored to your needs and markets.</h2>
          <p className="content">
            50 years experience in formulation and manufacturing of fuel additives, special lubricants and
            high performance maintenance products. 3 generations of dedicated technicians continuously
            searching for high performances solutions and products to meet the market requireme.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {solutions.map((item, i) => (
            <div key={item.name} className="flex flex-col items-center" data-aos="fade-up" data-aos-delay={i * 50}>
              <div className="w-full aspect-[400/234] border border-[#0000001A] shadow-md flex items-center justify-center p-8">
                <img src={item.img} alt={item.name} className="max-w-full max-h-full object-contain" />
              </div>
              <p className="heading font-bold! text-[22px]! mt-4 text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
