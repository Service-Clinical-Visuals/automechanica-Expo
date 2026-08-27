import Container from "./Container";

const cards = [
  {
    img: "/moto/lrt/replacement/1.png",
    title: "Quality",
    text: "LRT Automotive improves original parts by identifying weak points and enhancing them, delivering greater durability, improved reliability, superior performance, and long-lasting customer satisfaction.",
  },
  {
    img: "/moto/lrt/replacement/2.png",
    title: "Innovation",
    text: "LRT Automotive stays ahead of the market, developing sought-after spare parts like cast manifolds in 2005 and Euro5 catalytic converters in 2012, meeting evolving industry demands.",
  },
  {
    img: "/moto/lrt/replacement/3.png",
    title: "Customer",
    text: "Customer focus drives us. Our spare parts come with easy installation kits for simplicity, ensuring a hassle-free fit, reduced installation time, and reliable performance every time.",
  },
];

export default function Replacement() {
  return (
    <section className="bg-[#121212] py-16">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[60px]">

          {/* Heading */}
          <div className="text-center max-w-[920px] mx-auto mb-14" data-aos="fade-up">
            <h2 className="heading mb-6">Replacement Parts That Are Better Than The Original!</h2>
            <p className="content">
              LRT Automotive&apos;s claim has always been not to simply copy original parts, but to identify weak points and consistently improve them. This is also reflected in our corporate principles
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-30 xl:gap-8 mb-14 pt-30">
            {cards.map((card, i) => (
                <div
                key={i}
                className="relative flex flex-col items-center rounded-2xl border border-[#FFFFFF40] bg-[#1D1D1D] pt-36 pb-15 px-6 text-center overflow-visible"
                >
                {/* Creates the notch in the border */}
                <div className="absolute top-[-1px] left-1/2 border-3 border-t-0 border-[#FFFFFF40] bg-[#1D1D1D] -translate-x-1/2 h-[152px] w-[302px] bg-[#111111] rounded-b-3xl z-[1]" />

                {/* Image container */}
                <div
                    className="absolute -top-20 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center rounded-2xl bg-white shadow-lg"
                    style={{ width: 260, height: 210 }}
                >
                    <img
                    src={card.img}
                    alt={card.title}
                    className="w-40 h-40 object-contain"
                    />
                </div>

                <h3 className="subheading mb-3 z-10 mt-10">{card.title}</h3>
                <p className="content max-w-[450px] pb-10 text-[18px] z-10">
                    {card.text}
                </p>
                </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center" data-aos="fade-up">
            <button className="flex navlink font-bold! text-[#00437A]! items-center gap-2 bg-white rounded-full pl-5 pr-1.5 py-1.5 hover:opacity-90 transition-opacity">
              <span>Why Choose LRT</span>
              <img src="/moto/lrt/arrowup.png" alt="" className="h-6.5 w-6.5" />
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
}
