import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Solutions() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-[#E6ECFF]">
      <Container>
        <div className="relative z-10 flex flex-col items-center text-center max-w-[1100px] mx-auto mb-10" data-aos="fade-up">
          <h2 className="text-[40px] font-oswald font-semibold text-[#2A2A2A] mb-6">Designed For Performance & Reliability</h2>
          <p className="text-[17px] font-oswald text-[#4A4A4A] leading-[1.6]">
            At FTAZA Industrial Co., Ltd., every ignition coil is developed to meet the demands of modern engine technology. Our products undergo rigorous testing to ensure dependable performance, consistent voltage output, and long-term durability across a wide range of driving conditions, delivering enhanced engine efficiency, reliable ignition, superior operational performance, reduced emissions, improved fuel economy, and extended component lifespan.
          </p>
        </div>

        <div className="relative z-10 w-full flex justify-center" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full max-w-[1300px] aspect-video relative overflow-hidden flex items-center justify-center rounded-none rounded-tl-[50px] rounded-br-[50px]" style={{
            backgroundColor: "#f0f0f0",
            backgroundImage:
              "linear-gradient(45deg, #e6e6e6 25%, transparent 25%), linear-gradient(-45deg, #e6e6e6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e6e6e6 75%), linear-gradient(-45deg, transparent 75%, #e6e6e6 75%)",
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
          }}>
            {/* VIDEO CLIP - 01 */}
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
            <h3 className="text-3xl font-oswald font-bold text-black z-10 pointer-events-none drop-shadow-md">VIDEO CLIP - 01</h3>
          </div>
        </div>
      </Container>
    </section>
  );
}
