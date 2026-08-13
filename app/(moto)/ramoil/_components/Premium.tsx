import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";
import ParallelogramButton from "./ParallelogramButton";

const features = [
  { img: "/moto/ramoil/1.png", text: "Advanced engine protection against wear, deposits." },
  { img: "/moto/ramoil/2.png", text: "Enhanced fuel efficiency for improved vehicle performance." },
];

export default function Premium() {
  return (
    <section className="">
      <Container className="bg-[#00437A] py-14 rounded-[24px]!">
        <div className="px-4 sm:px-8 md:px-14 lg:px-[100px]">
            {/* Top row: heading + button */}
            <div className="flex items-center justify-between mb-6" data-aos="fade-up">
            <h2 className="heading-white">360° Product Experience</h2>

            <ParallelogramButton fill="white" textClassName="heading text-[#00437A]! text-[22px]!">
              Explore Our Product
            </ParallelogramButton>
            </div>

            <hr className="border-t border-white/20 mb-10" />

            {/* Two-column layout */}
            <div className="flex flex-col lg:flex-row gap-10 items-center">

            {/* Left: 360 video */}
            <div className="w-full lg:w-[55%] shrink-0" data-aos="fade-right">
                <div className="w-full bg-white rounded-2xl aspect-video flex items-center justify-center overflow-hidden">
                <DynamicVideoPlayer type="360" />
                </div>
            </div>

            {/* Right: text + features */}
            <div className="w-full lg:w-[45%] space-y-5" data-aos="fade-left" data-aos-delay="150">
                <h3 className="heading-white">Efficiency Through Innovation</h3>

                <p className="content-white leading-[30px]! tracking-[0%]!">
                Ra.M.Oil operates in the national and international markets through the production
                and marketing of petroleum products. It also recovers used oils through a
                regeneration process that transforms used oil into a lubricant base with qualitative
                characteristics similar to those obtained from crude oil processing.
                </p>

                <p className="content-white leading-[30px]! tracking-[0%]!">
                Formulated with advanced additive technology and high-quality base oils, our
                products help reduce wear, improve fuel economy, and extend engine life. Explore
                every detail of the product and experience the innovation behind our lubrication
                solutions.
                </p>

                <hr className="border-t border-white/20" />

                {/* Feature badges */}
                <div className="flex flex-col sm:flex-row gap-6 pt-1">
                {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                    <img src={f.img} alt="" className="shrink-0 w-14 h-14 object-contain" />
                    <p className="content-white text-sm leading-snug">{f.text}</p>
                    </div>
                ))}
                </div>
            </div>

            </div>
        </div>
      </Container>
    </section>
  );
}
