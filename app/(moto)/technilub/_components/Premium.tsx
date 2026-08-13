import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";

export default function Premium() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[42fr_58fr] gap-10 lg:gap-10 items-center">

          {/* Left: text */}
          <div className="flex flex-col gap-6">
            <h2 data-aos="fade-right" className="heading text-[#212121] font-bold mb-3">
              Lubrication for Peak Engine Performance
            </h2>

            <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col gap-4 content">
              <p>
                Technilub 360° Engine Oil combines innovative lubricant technology with
                high-quality formulations to provide maximum protection, performance, and
                reliability. Designed for modern engines, it keeps your vehicle running
                smoothly while helping maintain optimal efficiency and engine longevity.
              </p>
              <p>
                Experience complete engine care with Technilub 360° Engine Oil, engineered to
                deliver superior protection, enhanced efficiency, and long-lasting performance.
                Formulated using premium base oils and advanced additive technology, it helps
                reduce friction, prevent wear, and maintain engine cleanliness under all
                driving conditions.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="250">
              <button className="bg-primary hover:bg-primary/80 transition-colors text-white content-white font-medium px-5 py-1.5 rounded-lg">
                Explore Product
              </button>
            </div>
          </div>

          {/* Right: 360° video */}
          <div data-aos="fade-left" data-aos-delay="150" className="w-full aspect-video bg-[#f0f0f0] flex items-center justify-center overflow-hidden relative">
            <DynamicVideoPlayer type="360" />
          </div>

        </div>
      </Container>
    </section>
  );
}
