import Container from "./Container";

export default function About() {
  return (
    <section className="bg-white py-16">
    <Container>
      <div className="flex flex-col lg:flex-row gap-10 items-center">

        {/* Left: image */}
        <div className="w-full lg:w-[48%] shrink-0" data-aos="fade-right">
          <img
            src="/moto/chemnaft/about.png"
            alt="Qualitium Motor Oil catalogue"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right: content */}
        <div className="w-full lg:w-[52%] space-y-4" data-aos="fade-left" data-aos-delay="150">
          <h2 className="heading2 text-[28px]! mb-8">ABOUT THE BRAND</h2>

          <p className="content leading-[150%]!">
            The development of technology, the desire to compete, and improvement are the components
            that contributed to the creation of the Qualitium brand.
          </p>

          <p className="content leading-[150%]!">
            The brand's name is no accident – it forms the core of a range of oils characterized by
            high quality and, equally importantly, reliability . The Qualitium brand is backed by
            experienced staff with technical support and expert knowledge.
          </p>

          <p className="content leading-[150%]!">
            Great emphasis is placed on the selection of raw materials , which, in addition to
            obtaining the appropriate quality of oil, also allows for the creation of a product at
            an optimal price level .
          </p>

          <p className="content leading-[150%]!">
            In response to market demand, the Qualitium brand has developed dedicated lines for the
            automotive industry: POWER, PROTEC, TRUCK, MOTO, GEAR , and agriculture: AGRI . Modern
            research facilities allow for the analysis of each batch of oil for compliance with
            applicable quality classifications and standards.
          </p>

          <p className="content font-bold text-[#1a2e5a] leading-[150%]! mb-7">
            The newly created line of oils is the NANO line – developed as a result of a research
            and development project.
          </p>

          <div>
            <p className="heading2 text-[20px]! mb-1 leading-[150%]!">Driven by Innovation</p>
            <p className="content leading-[150%]!">
              Built on continuous technological development, improvement, and a commitment to
              delivering high-performance lubrication solutions.
            </p>
          </div>

          <div>
            <p className="heading2 text-[20px]! mb-1 leading-[150%]!">Quality & Reliability</p>
            <p className="content leading-[150%]!">
              The Qualitium brand is recognized for lubricants that combine exceptional quality,
              dependable performance, and long-term reliability.
            </p>
          </div>

          <div className="pt-5 ">
            <button
              className="bg-[#1a2e5a] text-white text-xs font-bold tracking-widest px-8 py-1.5 hover:bg-[#162448] transition-colors content-white"
              style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)" }}
            >
              EXPLORE THE BRAND
            </button>
          </div>
        </div>

      </div>
    </Container>
    </section>
  );
}
