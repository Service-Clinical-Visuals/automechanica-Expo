import Image from "next/image";

const pillars = [
  {
    icon: "/moto/synmar/24x7.png",
    alt: "Truck",
    title: "Large Stock & Fast Delivery",
    description:
      "With extensive inventory and efficient logistics, we ensure product availability and fast, reliable delivery to keep your business running smoothly.",
  },
  {
    icon: "/moto/synmar/truck.png",
    alt: "Shield",
    title: "Protection In The Market",
    description:
      "We support our partners with strong market protection, fair business opportunities, and dedicated support to help drive long-term success.",
  },
  {
    icon: "/moto/synmar/shield.png",
    alt: "24x7",
    title: "Response Within 24 Hours",
    description:
      "Our team responds to all inquiries within 24 hours, providing fast and reliable support whenever you need it.",
  },
];

export default function TrustedWorldwideSection() {
  return (
    <section className="bg-white twok">
      {/* Gold top bar — image overlaps into this */}
      <div className="h-40 bg-[#c9a84c] w-full" />

      {/* Two-column content */}
      <div className="pb-16">
        <div className="mx-auto max-w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: image pulled up to overlap gold bar */}
          <div data-aos="fade-right" className="relative w-full rounded-xl overflow-hidden -mt-35 z-10" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/moto/synmar/trustedworldwide.png"
              alt="Trusted Worldwide"
              fill
              className="object-contain"
            />
          </div>

          {/* Right: text content */}
          <div className="flex flex-col gap-6 pt-4">
            <div data-aos="fade-up">
              <h2 className="heading">
                Trusted Worldwide
              </h2>
            </div>
            <p data-aos="fade-up" data-aos-delay="100" className="content">
              Synmar is a young and ambitious company that develops and produces high-quality lubricants — entirely in-house, Made in Holland. With a focus on reliability, innovation, and sustainability, we deliver custom solutions for customers worldwide. Curious about who we are and what we stand for? Then get in touch with us!
            </p>
            <p data-aos="fade-up" data-aos-delay="200" className="content">
              As a true Made in Holland manufacturer, every product is carefully formulated, tested, and produced under our direct supervision. This allows us to maintain consistent quality, respond quickly to market needs, and create tailor-made solutions for a wide range of applications, including automotive, industrial, agricultural, maritime, and heavy-duty sectors. Driven by quality, powered by innovation, and committed to sustainability—Synmar is your trusted partner in lubrication solutions.
            </p>
            <div data-aos="fade-up" data-aos-delay="300" className="flex items-center">
              <button className="relative bg-[#c9a84c] text-white font-black uppercase tracking-widest text-xs px-10 py-3 hover:bg-[#b8973b] transition-colors"
                style={{ clipPath: "polygon(0% 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, 16px 100%, 0% calc(100% - 16px))" }}
              >
                Our Quality
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 max-w-[90%] mx-auto" />

      {/* Commitment tagline */}
      <div data-aos="fade-up" className="pt-10 pb-4">
        <div className="mx-auto max-w-[90%]">
          <p className="subheading text-center text-[#9F3414]!">
            Our commitment to responsiveness, strong inventory management, and partner protection ensures a seamless experience from inquiry to delivery.
          </p>
        </div>
      </div>

      {/* Pillar cards */}
      <div className="pb-16 pt-8">
        <div className="mx-auto max-w-[90%] grid grid-cols-1 xl:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} data-aos="fade-up" data-aos-delay={index * 120} className="flex items-stretch rounded-xl overflow-hidden border border-gray-200 shadow-sm">

              {/* Icon panel */}
              <div className="bg-[#666666] flex items-center justify-center shrink-0 w-40 rounded-tr-[50px] rounded-br-[50px]">
                <Image src={pillar.icon} alt={pillar.alt} height={120} width={90}/>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 px-5 py-5 bg-white">
                <h3 className="subheading">
                  {pillar.title}
                </h3>
                <p className="content">
                  {pillar.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
