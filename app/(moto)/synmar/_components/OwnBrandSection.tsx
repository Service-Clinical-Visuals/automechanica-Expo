import Image from "next/image";

const features = [
  { num: "01", text: "Production: From formulation to filling, fully in-house" },
  { num: "02", text: "Portfolio: A complete range for various applications" },
  { num: "03", text: "Private Label: Your brand built on our years of expertise" },
  { num: "04", text: "Design & DTP: Labels and packaging developed in-house" },
  {
    num: "05",
    text: "Fast communication: Short lines of communication, fixed contacts, fast turnaround times",
  },
];

export default function OwnBrandSection() {
  return (
    <section className="bg-white py-16 twok">
      <div className="mx-auto max-w-[90%] grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-12 items-center">

        {/* Left: content */}
        <div className="flex flex-col gap-6">
          <div data-aos="fade-right">
            <h2 className="heading mb-4">
              To Your Own Brand
            </h2>
            <p className="content">
              Synmar combines technical knowledge with commercial flexibility. Our experienced team advises, supports, and collaborates on everything from product selection to packaging.
            </p>
          </div>

          {/* Feature list */}
          <div className="flex flex-col gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.num}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative flex items-center gap-3 bg-white rounded-full pl-4 pr-14 py-3 border border-gray-200"
              >
                <Image src="/moto/synmar/check.png" alt="check" width={20} height={20} className="shrink-0" />
                <span className="content">{feature.text}</span>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#8b2a1a] text-white text-lg font-bold flex items-center justify-center leading-none">
                  {feature.num}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div data-aos="fade-up" data-aos-delay="300" className="flex items-center">
            <button className="relative bg-[#c9a84c] text-white font-black uppercase tracking-widest text-xs px-10 py-3 hover:bg-[#b8973b] transition-colors"
              style={{ clipPath: "polygon(0% 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, 16px 100%, 0% calc(100% - 16px))" }}
            >
              Get Technical Support
            </button>
          </div>
        </div>

        {/* Right: product image */}
        <div data-aos="fade-left" data-aos-delay="150" className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
          <Image
            src="/moto/synmar/ownbrand.png"
            alt="Own Brand"
            fill
            className="object-cover max-h-[717px] max-w-[952px]"
          />
        </div>

      </div>
    </section>
  );
}
