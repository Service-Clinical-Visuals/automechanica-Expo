import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";

export default function Choose() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ backgroundImage: "url('/moto/chemnaft/choosebg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
        <Container>
            <div className="absolute inset-0 bg-[#0d1e3a]/50 pointer-events-none" />

            {/* Top row: heading + CTA */}
            <div className="relative flex flex-col md:flex-row items-start justify-between gap-8 mb-6">
                <div className="w-full md:max-w-[70%]">
                    <h2 className="heading-white mb-3">Why Choose Chemnaft Lubricants?</h2>
                    <p className="content-white">
                        For decades, Chemnaft has been committed to delivering lubricant solutions that combine
                        exceptional quality, advanced technology, and reliable performance. Our products are developed
                        to meet the evolving requirements of modern vehicles, machinery, and industrial equipment,
                        ensuring maximum protection and efficiency in every application.
                    </p>
                </div>
                <div className="shrink-0 pt-1">
                    <button
                        className="bg-white text-[#10355F]! content font-bold tracking-widest px-8 py-1.5 hover:bg-gray-100 transition-colors"
                        style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)" }}
                    >
                        EXPLORE THIS PRODUCT
                    </button>
                </div>
            </div>

            <hr className="relative border-t border-white/20 mb-12" />

            {/* Three-column content */}
            <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 items-start">

                {/* Left: text */}
                <div className="space-y-4">
                <h3 className="heading-white text-[28px]! leading-[150%]!">Built On Quality And Innovation</h3>
                <p className="content-white leading-[150%]!">
                    The automotive and industrial sectors continue to evolve rapidly, with modern engines and
                    equipment becoming increasingly sophisticated. Chemnaft stays ahead of these developments
                    through continuous research and product innovation, ensuring our lubricants meet the latest
                    manufacturer specifications and industry requirements.
                </p>
                <p className="content-white leading-[150%]!">
                    From passenger vehicles and motorcycles to agricultural machinery, heavy-duty fleets, and
                    industrial systems, Chemnaft lubricants provide the performance and protection required to
                    keep operations running smoothly and efficiently.
                </p>
                <p className="content-white leading-[150%]!">
                    This forward-thinking approach enables Chemnaft to remain a trusted partner for customers
                    seeking reliability, durability, and excellence in lubrication technology.
                </p>
                </div>

                {/* Center: image */}
                <div className="w-full self-center">
                    <div className="w-full bg-[#f0f0f0] aspect-[4/3] md:aspect-video rounded flex items-center justify-center overflow-hidden relative">
                        <DynamicVideoPlayer type="short-1" />
                    </div>
                </div>

                {/* Right: key benefits */}
                <div className="space-y-6">
                <h3 className="heading-white text-[28px]! leading-[150%]!">Key Benefits Of Chemnaft Lubricants</h3>

                <div>
                    <p className="heading2 text-[22px]! mb-1 leading-[26px]!">Premium European Base Oils</p>
                    <p className="content-white leading-[26px]!">
                    Manufactured using carefully selected base oils sourced from trusted European refineries,
                    ensuring superior quality and consistency.
                    </p>
                </div>

                <div>
                    <p className="heading2 text-[22px]! mb-1 leading-[26px]!">Advanced Additive Technology</p>
                    <p className="content-white leading-[26px]!">
                    Enhanced with modern additive systems that improve protection, cleanliness, efficiency,
                    and overall lubricant performance.
                    </p>
                </div>

                <div>
                    <p className="heading2 text-[22px]! font-bold mb-1 leading-[26px]!">Superior Engine and Equipment Protection</p>
                    <p className="content-white leading-[26px]!">
                    Provides a durable protective layer that minimizes wear, reduces friction, and safeguards
                    critical components.
                    </p>
                </div>
                </div>
            </div>
        </Container>
    </section>
  );
}
