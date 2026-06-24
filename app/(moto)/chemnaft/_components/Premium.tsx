import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";

export default function Premium() {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ backgroundImage: "url('/moto/chemnaft/bg.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <Container>
        <div className="absolute inset-0 pointer-events-none" />

        {/* Top heading */}
        <div className="relative max-w-[1200px] mx-auto text-center px-6 mb-10" data-aos="fade-up">
            <h2 className="heading-white mb-4">Premium Lubricants For Maximum Performance</h2>
            <p className="content-white">
            Chemnaft lubricants are formulated with premium European base oils and advanced additive
            technologies to deliver exceptional protection, performance, and reliability for modern engines
            and machinery.
            </p>
        </div>

        <hr className="border-t border-white/20 mb-12" />

        {/* Two-column content */}
        <div className="relative flex flex-col lg:flex-row gap-10 items-center">
            {/* Left: image */}
            <div className="w-full lg:w-[65%] shrink-0" data-aos="fade-right">
                <div className="w-full bg-[#f0f0f0] aspect-[4/3] md:aspect-video rounded flex items-center justify-center border border-gray-100 overflow-hidden relative">
                    <DynamicVideoPlayer type="360" />
                </div>
            </div>

            {/* Right: text */}
            <div className="w-full lg:w-[35%] space-y-4" data-aos="fade-left" data-aos-delay="150">
            <h3 className="heading2">
                Advanced Technology For Modern Engines
            </h3>

            <p className="content-white">
                Modern engines operate under increasingly demanding conditions, requiring lubricants that can
                maintain stability, cleanliness, and protection throughout their service life.
            </p>

            <p className="content-white">
                Chemnaft lubricants are formulated with advanced additive technologies that help reduce
                friction, improve fuel economy, prevent sludge formation, and protect critical engine
                components from premature wear.
            </p>

            <p className="content-white">
                Chemnaft lubricants are specifically engineered to maintain their stability and effectiveness
                even under the most demanding operating conditions. Their advanced formulations create a
                durable protective film between moving engine components, helping to minimize metal-to-metal
                contact, reduce friction, and significantly decrease wear.
            </p>

            <p className="content-white">
                This protection is essential for extending engine life, maintaining performance, and reducing
                maintenance costs over time.
            </p>

            <div className="pt-4">
                <button
                className="bg-white content text-[#10355F]! text-xs font-bold tracking-widest px-8 py-1.5 hover:bg-gray-100 transition-colors"
                style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)" }}
                >
                VIEW PRODUCT DETAILS
                </button>
            </div>
            </div>
        </div>
      </Container>
    </section>
  );
}
