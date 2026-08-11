import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Brake() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-[#062AAA] bg-[url('/moto/ftaza/bg.png')] bg-cover bg-center">
      <Container>
        <div className="relative z-10 flex flex-col items-center text-center max-w-[1100px] mx-auto mb-10" data-aos="fade-up">
          <h2 className="text-[40px] font-semibold font-oswald text-white mb-6">Explore Our Ignition Coils In 360°</h2>
          <p className="text-[17px] font-oswald text-white/90 leading-[1.6]">
            Experience the exceptional quality and precision engineering of FTAZA Industrial Co., Ltd. ignition coils through our immersive 360° interactive product view. Rotate the product from every angle to examine its design, construction, connectors, packaging, and technical details with clarity. Discover the advanced engineering and manufacturing excellence behind every ignition coil, helping you make informed decisions. Our interactive experience provides a detailed look at product features, quality standards, and craftsmanship.
          </p>
        </div>

        <div className="relative z-10 w-full flex justify-center" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full max-w-[1300px] aspect-video relative overflow-hidden flex items-center justify-center rounded-none rounded-tl-[50px] rounded-br-[50px]" style={{
            backgroundColor: "#f5f5f5",
            backgroundImage:
              "linear-gradient(45deg, #e0e0e0 25%, transparent 25%), linear-gradient(-45deg, #e0e0e0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e0e0e0 75%), linear-gradient(-45deg, transparent 75%, #e0e0e0 75%)",
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
          }}>
            <DynamicVideoPlayer type="360" className="absolute aspect-video inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
