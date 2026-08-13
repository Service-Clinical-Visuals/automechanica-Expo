import { ArrowRightIcon, User2 } from "lucide-react";
import Container from "./Container";

const stats = [
  { icon: "/moto/meat-doria/about/medal.png", value: "80+", label: "Years of Italian history" },
  { icon: "/moto/meat-doria/about/warehouse.png", value: "11", label: "Warehouses" },
  { icon: "/moto/meat-doria/about/office.png", value: "13", label: "Offices" },
];

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className=" grid gap-10 grid-cols-1 xl:grid-cols-2" data-aos="fade-up">
          {/* Top-left: image */}
          <div className="order-2 xl:order-1 h-[220px] md:h-[422px] ">
            <img
              src="/moto/meat-doria/about/1.png"
              alt="Precision manufacturing"
              className="w-full h-full object-contain aspect-[1206/422]"
            />
          </div>

          {/* Top-right: content */}
          <div className="order-1 xl:order-2 flex flex-col justify-center">
            <h2 className="heading text-[28px]! mb-4">About Our Company</h2>
            <p className="content mb-4">
              Founded in 1945, M&amp;D Group - with its brands Meat&amp;Doria and Hoffer Products - is
              today an independent multinational reality and a global reference point in the automotive
              aftermarket.
            </p>
            <p className="content mb-4">
              Our catalogue, in continuous growth, exceeds 40,000 references and covers a complete range
              of solutions for professionals in the sector, guaranteeing quality, innovation and
              widespread distribution worldwide.
            </p>
            <p className="content mb-6">
              The payoff Expertise By Your Side summarizes who we are: high-level technical competence and
              constant, concrete, and specialized support for every customer.
            </p>
            <button
                className="navlink gap-1 flex font-normal! max-w-[200px] justify-between text-white! rounded-tr-[16px] rounded-bl-[16px] bg-primary px-4 py-3 transition-colors"
            >
                Know More About Us
                <ArrowRightIcon fill="white" />
            </button>
          </div>

          {/* Bottom-left: stats */}
          <div className="order-3 flex flex-col justify-center">
            <h3 className="heading mb-6">M&amp;D Group</h3>
            <p className="heading text-primary! text-[24px]! font-semibold! mb-3 leading-[30px]!">Expertise at your side</p>
            <p className="content mb-6">
              A family history born in Italy that branches out into a multinational structure of
              excellence.
            </p>

            <div className="bg-primary rounded-xl grid grid-cols-3 divide-x divide-white/30 p-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-2 py-3 px-2 text-center">
                  <img src={stat.icon} alt="" className="w-auto h-15" />
                  <p className="content-white text-[45px]! font-semibold! leading-[100%]!">{stat.value}</p>
                  <p className="content-white text-[18px]! font-normal! leading-[30px]!">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom-right: image */}
          <div className="order-4 h-[220px] md:h-[422px]">
            <img
              src="/moto/meat-doria/about/2.png"
              alt="Automated warehouse"
              className="w-full h-full object-contain aspect-[1206/422]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
