import Image from "next/image";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";

const features = [
  {
    num: "/moto/technilub/1.png",
    title: "Enhanced Engine Cleanliness",
    desc: "Helps prevent sludge and deposit formation for cleaner operation.",
  },
  {
    num: "/moto/technilub/2.png",
    title: "Fuel Efficiency Support",
    desc: "Optimized formulation contributes to smoother performance and reduced fuel consumption.",
  },
  {
    num: "/moto/technilub/3.png",
    title: "Thermal Stability",
    desc: "Optimized formulation contributes to smoother performance and reduced fuel consumption.",
  },
  {
    num: "/moto/technilub/4.png",
    title: "Extended Engine Life",
    desc: "Delivers reliable lubrication for long-lasting engine durability.",
  },
];

export default function Choose() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 lg:gap-10 items-center">

          {/* Left: video */}
          <div data-aos="fade-right" className="w-full aspect-video bg-[#f0f0f0] flex items-center justify-center overflow-hidden relative">
            <DynamicVideoPlayer type="short-1" />
          </div>

          {/* Right: content */}
          <div className="flex flex-col gap-6">
            {/* Heading */}
            <div data-aos="fade-left" data-aos-delay="150">
              <h2 className="heading font-bold text-[#24397E]!">
                Why Choose Technilub 360° Engine Oil?
              </h2>
              <hr className="mt-5 border-gray-200" />
            </div>

            {/* Feature list */}
            <div className="flex flex-col gap-5">
              {features.map((f, i) => (
                <div key={f.title} data-aos="fade-up" data-aos-delay={i * 100} className="flex items-start gap-4">
                  {/* Number badge */}
                  {/* <div className="shrink-0 w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center"> */}
                    <Image
                      src={f.num}
                      alt={f.title}
                      width={40}
                      height={40}
                      className="w-17 h-17 object-contain"
                    />
                  {/* </div> */}
                  {/* Text */}
                  <div className="flex flex-col gap-0.5 max-w-[72%] mt-0.5">
                    <p className="font-bold heading2">{f.title}</p>
                    <p className="content text-[#555] leading-relaxed">{f.desc}</p>
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
