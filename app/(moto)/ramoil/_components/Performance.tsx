import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";
import ParallelogramButton from "./ParallelogramButton";

export default function Performance() {
  return (
    <section className="">
      <Container className="bg-[#00437A] py-14 rounded-[24px]!">
        <div className="px-4 sm:px-8 md:px-14 lg:px-[100px]">
          <div className="flex flex-col lg:flex-row gap-10 items-center">

            {/* Left: text */}
            <div className="w-full lg:w-[45%] space-y-5" data-aos="fade-right">
              <h2 className="heading-white">Engineered for Performance</h2>
              <hr className="border-t border-white/30" />

              <p className="content-white leading-[30px]! tracking-[0%]! text-justify">
                Our premium engine oils are developed to deliver exceptional protection,
                efficiency, and reliability for modern engines. Designed using advanced
                lubricant technology, they help reduce friction, minimize wear, and maintain
                engine cleanliness, ensuring smooth performance even under demanding
                operating conditions. Whether for passenger vehicles, commercial fleets, or
                industrial equipment.
              </p>

              <p className="content-white leading-[30px]! tracking-[0%]! text-justify">
                Our advanced engine oils are formulated to protect engines from wear,
                deposits, and extreme temperatures. They help maintain smooth operation,
                improve efficiency, and extend engine life.
              </p>

              <div className="pt-2">
                <ParallelogramButton fill="white" textClassName="heading text-[#00437A]! text-[22px]!">
                  Explore Our Product
                </ParallelogramButton>
              </div>
            </div>

            {/* Right: 360 video */}
            <div className="w-full lg:w-[55%] shrink-0" data-aos="fade-left" data-aos-delay="150">
              <div className="w-full bg-white rounded-2xl aspect-video flex items-center justify-center overflow-hidden">
                <DynamicVideoPlayer type="360" />
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
