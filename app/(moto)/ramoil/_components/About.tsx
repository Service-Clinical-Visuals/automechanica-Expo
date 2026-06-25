"use client";

import Container from "./Container";
import ParallelogramButton from "./ParallelogramButton";

const stats = [
  { label: "76.2 million euros in turnover for 2023", img: "/moto/ramoil/about/yellow1.png" },
  { label: "104 employees 2023", img: "/moto/ramoil/about/yellow2.png" },
  { label: "1.49 million euros invested in 2023", img: "/moto/ramoil/about/yellow3.png" },
  { label: "+0.6% turnover growth 2022–2023", img: "/moto/ramoil/about/yellow4.png" },
  { label: "19,895 tons of products recovered from used oils in 2023", img: "/moto/ramoil/about/yellow5.png" },
  { label: "60,000 m² of production site surface area", img: "/moto/ramoil/about/yellow6.png" },
];

export default function About() {
  return (
    <section className="py-16 bg-white">
      <Container>
        {/* Dashed border wrapper */}
        <div className="px-4 sm:px-8 md:px-14 lg:px-[100px]">

          {/* Top: image + text */}
          <div className="flex flex-col lg:flex-row gap-10 items-center mb-15">
            {/* Left image */}
            <div className="w-full lg:w-1/2 shrink-0 items-center" data-aos="fade-right">
              <img
                src="/moto/ramoil/about.png"
                alt="Ra.M.Oil production facility"
                className="w-full h-full object-cover"
                style={{ minHeight: 320 }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.background = "#cbd5e1";
                }}
              />
            </div>

            {/* Right content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5 self-center" data-aos="fade-left" data-aos-delay="150">
              <h2 className="heading text-[#00437A]">About Our Company</h2>

              <p className="content text-justify leading-[170%]!">
                Ra.M.Oil operates in the national and international markets through the production and
                marketing of petroleum products. It also recovers used oils through a regeneration process
                that transforms used oil into a lubricant base with qualitative characteristics similar to those
                obtained from crude oil processing.
              </p>

              <p className="content text-justify leading-[170%]!">
                In 2019, Ra.M.Oil chose to support a concrete project of great human value: the construction of
                a drinking water well in a village in Burkina Faso. Through its collaboration with the non-profit
                organization 12 Scatti, which has been committed since 2008 to improving the living
                conditions of vulnerable communities, the company aimed to provide safe and continuous
                access to a vital resource: water.
              </p>

              <div className="pt-2">
                <ParallelogramButton size="lg">KNOW MORE ABOUT US</ParallelogramButton>
              </div>
            </div>
          </div>

          {/* Bottom: stats on dark blue background */}
          <div className="bg-[#00437A] px-8 py-10">
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center" data-aos="fade-up" data-aos-delay={i * 80}>
                  {/* Yellow hexagon — sits on top of card's left edge */}
                  <div className="relative z-10 shrink-0" style={{ width: 120, height: 120 }}>
                    <img src={stat.img} alt="" className="w-full h-full object-contain" />
                  </div>

                  {/* White parallelogram card — slides under hexagon */}
                  <div
                    className="flex-1 subheading bg-white text-[#1E1E1E] font-medium min-h-[72px] flex items-center py-2 pr-8"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, calc(100% - 22px) 100%, 0 100%)",
                      marginLeft: -20,
                      paddingLeft: 28,
                      // borderRadius: "0 8px 8px 0",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
