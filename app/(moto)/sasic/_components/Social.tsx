import Container from "./Container";

export default function Social() {
  return (
    <section className="py-16 bg-[#F9F9F9]">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[100px]">
          <div className="flex flex-col xl:flex-row gap-10 items-center">
            {/* Left: text */}
            <div className="w-full xl:w-1/2 flex flex-col gap-5" data-aos="fade-right">
                <div>
                <span className="block h-[3px] w-16 bg-[#F2A93B]" />
                <h2 className="heading uppercase mt-2">
                    Social and environmental issues are at the heart of our business.
                </h2>
                </div>

              <p className="content text-justify">
                With over 70 years of expertise, we specialize in the design and manufacture of
                high-performance ignition cables and wiring harnesses for the automotive industry. As a
                trusted supplier to vehicle manufacturers, Tier 1 suppliers, and industrial partners, we
                produce premium copper, resistive, and reactive ignition cables that meet stringent
                quality standards. Our advanced manufacturing capabilities deliver over 4,000 km of
                ignition cables and 5 million ignition wires, ensuring dependable performance, durability,
                and precision for a wide range of applications.
              </p>

              <p className="content text-justify">
                We are committed to advancing the circular economy through expert remanufacturing and
                technical assembly solutions. As a trusted supplier to the automotive, naval, and rail
                industries, we refurbish more than 120,000 clutch kits annually while delivering
                OEM-equivalent quality. Since 2019, our capabilities have expanded to include the
                refurbishment of turbochargers, power steering systems, current sensors, and other
                electronic components, helping customers reduce waste, extend product life, and achieve
                sustainable performance without compromising quality.
              </p>
            </div>

            {/* Right: image */}
            <div className="w-full xl:w-1/2" data-aos="fade-left" data-aos-delay="150">
              <img
                src="/moto/sasic/social.png"
                alt="SASIC circular economy and remanufacturing"
                className="w-full h-full object-cover rounded-lg"
                style={{ minHeight: 320 }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
