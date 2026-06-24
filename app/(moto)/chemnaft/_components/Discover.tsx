import Container from "./Container";

export default function Discover() {
  return (
    <section className="bg-white py-16">
      <Container>
        {/* Top heading */}
        <div className="text-center px-6 mb-10 flex flex-col items-center" data-aos="fade-up">
            <h2 className="heading mb-4">Discover The Factory</h2>
            <p className="content max-w-[1100px]">
            Chemnaft specializes in premium lubricants engineered for performance, protection, and durability.
            Our product range covers automotive, agricultural, and industrial applications, offering advanced
            oil solutions that keep engines, transmissions, and machinery running smoothly and efficiently.
            </p>
        </div>

        <hr className="border-t border-gray-200 mb-12" />

        {/* Two-column content */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left: image */}
            <div className="w-full lg:w-1/2 shrink-0" data-aos="fade-right">
            <img
                src="/moto/chemnaft/discover.png"
                alt="Engine factory"
                className="w-full h-auto object-cover"
            />
            </div>

            {/* Right: text */}
            <div className="w-full lg:w-1/2 text-[#222] text-sm leading-relaxed space-y-4" data-aos="fade-left" data-aos-delay="150">
            <h3 className="heading2 text-[32px]!">
                Driven By Quality And Innovation
            </h3>

            <p className="content">
                Chemnaft is a manufacturer of lubricating oils dedicated to the automotive, agricultural and
                industrial sectors. Our primary goal is the highest possible QUALITY of the final product at an
                optimal and competitive price level. In order to obtain a high-quality final product, we use base
                oils purchased from renowned European refineries and additives (responsible for the product's
                quality standards) from global chemical companies Afton, Infineum and Chevron-Oronite.
            </p>

            <p className="content">
                The selection of ingredients used in oil compositions requires specialized research in accordance
                with international standards and requirements set by global manufacturers of both machines and
                vehicles.
            </p>

            <p className="content">
                <span className="text-[#CF3232] font-bold">Qualitium</span>
                {" "}– a brand of the Chemnaft Company – is a brand of top-class products , dedicated to
                customers from the passenger car and truck automotive sectors, as well as equipment used in
                modern agriculture.
            </p>

            <p className="content mb-6">
                <span className="text-[#CF3232] font-bold">Chemnaft line</span>
                {" – "}intended mainly for industry and older agricultural equipment.
            </p>

            <p className="content">
                Our main trading partners in the country are the largest oil and automotive wholesalers , which
                then sell our products to end customers. Chemnaft is gradually expanding its sales operations not
                only domestically but also internationally, expanding deeper into the European Union and Eastern
                European markets.
            </p>
            </div>
        </div>

        {/* CTA button */}
        <div className="flex justify-center mt-14" data-aos="fade-up" data-aos-delay="200">
            <button
            className="content-white bg-primary px-8 py-2.5 leading-[150%]! tracking-[0.8px]! hover:bg-[#162448] transition-colors"
            style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)" }}
            >
            LEARN MORE ABOUT US
            </button>
        </div>
      </Container>
    </section>
  );
}
