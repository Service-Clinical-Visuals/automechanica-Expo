import Image from "next/image";
import Container from "./Container";

export default function About() {
  return (
    <section className="bg-[#F5F5F5] py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-start">

          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Heading */}
            <div data-aos="fade-right">
              <h2 className="text-[32px]! font-bold text-[#1a1a1a] heading">Who We are</h2>
              <div className="mt-2 w-14 h-[3px] bg-[#c8102e]" />
            </div>

            {/* Text content */}
            <div data-aos="fade-up" data-aos-delay="100" className="flex content flex-col gap-4 text-[#333] leading-relaxed">
              <p>
                <span className="text-[#E00918] font-semibold">
                  TECHNILUB is a French brand of high-quality lubricants,
                </span>{" "}
                packaged in northern France at our Tech-Oil plant.
              </p>
              <p>
                This brand was created in 2009 by DLBC to serve all players in the lubricant
                market, as our products are suitable for all types of sectors.
              </p>
              <p>
                DLBC has been an expert in agricultural, automotive, and motorcycle lubricants
                for nearly 15 years. Today, it has become a leading French brand, selling over
                16 million liters of lubricants annually.
              </p>
            </div>

            {/* Building image */}
            <div data-aos="fade-up" data-aos-delay="200" className="rounded-xl overflow-hidden">
              <Image
                src="/moto/technilub/wholeft.png"
                alt="DLBC facility"
                width={640}
                height={380}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {/* Oil image */}
            <div data-aos="fade-left" data-aos-delay="150" className="rounded-xl overflow-hidden">
              <Image
                src="/moto/technilub/whoright.png"
                alt="High quality lubricants"
                width={640}
                height={380}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text content */}
            <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col gap-4 content leading-relaxed">
              <p>
                A company that has maintained a human scale, DLBC has, since its inception,
                cultivated close and trusting relationships with its clients thanks to a
                dedicated sales team, deeply invested in the specific concerns and needs of the
                agricultural, automotive, and motorcycle sectors.
              </p>
              <p>
                DLBC also offers unique expertise in agriculture, automotive, and motorcycles
                through its team of industry experts who can provide the best advice and
                solutions.
              </p>
              <p className="text-[#1e3a8a] font-bold">
                Today, DLBC is one of the leading lubricant manufacturers in France.
              </p>
            </div>

            {/* Learn More button */}
            <div data-aos="fade-up" data-aos-delay="250">
              <button className="bg-[#1e3a8a] hover:bg-[#162d6e] transition-colors text-white! heading text-[18px]! font-medium px-8 py-3 rounded-lg">
                Learn More
              </button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
