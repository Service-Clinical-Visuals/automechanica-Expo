import Image from "next/image";
import Container from "./Container";

const areas = [
  {
    title: "Quality",
    desc: "Technilub entered the lubricants market just a few years ago. Building on its field experience.",
    icon: "/moto/technilub/area2/quality.png",
  },
  {
    title: "Innovation",
    desc: "Technilub entered the lubricants market just a few years ago. Building on its field experience.",
    icon: "/moto/technilub/area2/innovation.png",
  },
  {
    title: "Expertise",
    desc: "Technilub entered the lubricants market just a few years ago. Building on its field experience.",
    icon: "/moto/technilub/area2/expertise.png",
  },
  {
    title: "Proximity",
    desc: "Technilub entered the lubricants market just a few years ago. Building on its field experience.",
    icon: "/moto/technilub/area2/promise.png",
  },
];

export default function Area2() {
  return (
    <section
      className="relative py-24 min-h-125 overflow-hidden"
      style={{
        backgroundImage: "url('/moto/technilub/area2bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-[50fr_50fr] gap-12 items-center">

          {/* Left: text */}
          <div className="flex flex-col gap-6">
            <div data-aos="fade-right">
              <h2 className="heading-white font-bold text-[28px]!">Our Areas</h2>
              <div className="mt-2 w-14 h-[3px] bg-[#c8102e]" />
            </div>
            <p data-aos="fade-up" data-aos-delay="100" className="content-white leading-relaxed">
              We have always championed quality, close customer relationships, and innovation,
              building strong partnerships with each of our clients. The Technilub brand now offers
              one of the broadest product ranges on the market, covering all agricultural,
              automotive, and motorcycle lubricant needs with high-quality products that meet the
              specifications of leading manufacturers.
            </p>
            <div data-aos="fade-up" data-aos-delay="250">
              <button className="border bg-primary content-white border-white text-white text-sm font-medium px-6 py-1.5 rounded-lg hover:bg-white hover:text-[#1a1a1a] transition-colors">
                View More
              </button>
            </div>
          </div>

          {/* Right: 2×2 card grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {areas.map((area, i) => (
              <div
                key={area.title}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="bg-white rounded-xl p-5 flex flex-row gap-3 border border-[#1e3a8a]/20"
              >
                <Image src={area.icon} alt={area.title} width={40} height={40} className="w-18 h-18 object-contain shrink-0" />

                <div className="flex flex-col items-start gap-3">
                  <h3 className="font-bold heading text-[24px]! text-[#212121]!">{area.title}</h3>
                  <hr className=" border-1 border-[#21212159] w-full" />
                  <p className="content text-[#555] text-[16px]! leading-[20px]!">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
