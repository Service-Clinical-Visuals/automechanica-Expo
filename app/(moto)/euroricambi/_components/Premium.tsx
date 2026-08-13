import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";

export default function Premium() {
  return (
    <section className="">
      <Container className="bg-primary py-10 rounded-[16px]! overflow-hidden">
        <div className="px-4 sm:px-8 md:px-14 lg:px-[100px]">
          {/* Top row: heading + button */}
          <div className="flex items-center justify-between gap-6 mb-6" data-aos="fade-up">
            <div className="max-w-[1100px]">
              <h2 className="heading-white mb-3">Advanced Gearbox Solutions</h2>
              <p className="content-white text-white/80">
                Designed for demanding operating conditions, our gearbox solutions provide superior
                strength, precision, and reliability. Every component is manufactured to meet the
                highest quality standards, ensuring efficient power transmission and dependable
                performance.
              </p>
            </div>

            <button
              type="button"
              aria-label="Explore gearbox solutions"
              className="hidden shrink-0 w-14 h-11 md:flex items-center justify-center bg-white rounded-sm hover:opacity-90 transition-opacity"
            >
              <img src="/moto/euroricambi/bluearrow.png" alt="" className="w-8 h-auto object-contain" />
            </button>
          </div>

          <hr className="border-t border-white/20 mb-10" />

          {/* 360 video */}
          <div
            className="relative w-full  lg:max-w-[80%] mx-auto aspect-video rounded-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                backgroundImage: "repeating-conic-gradient(#e9e9e9 0% 25%, #f7f7f7 0% 50%)",
                backgroundSize: "48px 48px",
              }}
            >
              <span
                className="text-[22px] font-bold text-[#1A1A1A] tracking-wide"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                360 DEG VIDEO CLIP
              </span>
            </div>
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
