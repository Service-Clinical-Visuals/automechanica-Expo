import { ArrowRightIcon, User } from "lucide-react";
import Container from "./Container";

const logisticsSections = [
  {
    img: "/moto/meat-doria/logistics/1.png",
    title: "Inbound Logistics",
    paragraphs: [
      "The use of advanced technologies and dedicated software, together with precise activity planning and warehouses located in strategic areas, allows us to efficiently manage incoming flows of goods.",
      "The integration of different transport modes - road, rail, sea, and air - guarantees the flexibility necessary to respond quickly to customer needs.",
    ],
  },
  {
    img: "/moto/meat-doria/logistics/2.png",
    title: "Outbound Logistics",
    paragraphs: [
      "Distribution is fast and efficient thanks to the high level of automation of our operations: the AutoStore™ system and the automatic conveyor line manage the picking and handling phases with precision and continuity",
      "The strategic presence of our branches in the main European logistics hubs guarantees widespread coverage and competitive delivery times in all markets.",
    ],
  },
];

export default function Logistics() {
  return (
    <section className="bg-[#F9F9F9] py-16 md:py-24">
      <Container>
        {/* Heading */}
        <div className="max-w-[900px] mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="heading text-[28px]! font-medium! mb-4">Our Cutting Edge Logistics</h2>
          <p className="content text-[18px]!">
            Our integrated logistics network ensures seamless movement of goods from suppliers to
            customers. With efficient inbound and outbound operations, we deliver reliability, speed, and
            exceptional service.
          </p>
        </div>

        {/* Logistics cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
          {logisticsSections.map((section, i) => (
            <div
              key={section.title}
              className="grid grid-cols-1 sm:grid-cols-2"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div>
                <img src={section.img} alt={section.title} className="w-full h-full aspect-[400/416] object-cover" />
              </div>
              <div className="bg-primary text-white py-14 px-4 flex flex-col justify-center gap-4">
                <h3 className="heading-white text-[24px]! font-medium! uppercase mb-2">{section.title}</h3>
                {section.paragraphs.map((p) => (
                  <p key={p} className="content-white">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr className="border-t border-[#00000020] mb-12" />

        {/* Bottom statement */}
        <div className="max-w-[1400px] mx-auto text-center flex flex-col justify-center items-center" data-aos="fade-up">
          <p className="heading text-primary! text-[34px]! font-semibold! leading-[145%]! mb-8">
            Advanced logistics processes keep your supply chain connected, agile, and efficient. We
            combine smart technology with strategic operations to deliver outstanding performance.
          </p>

          <button
              className="navlink gap-1 flex max-w-[200px] justify-between text-white! rounded-tr-[16px] rounded-bl-[16px] bg-primary px-4 py-3 transition-colors"
          >
              Explore more
              <ArrowRightIcon fill="white" />
          </button>
        </div>
      </Container>
    </section>
  );
}
