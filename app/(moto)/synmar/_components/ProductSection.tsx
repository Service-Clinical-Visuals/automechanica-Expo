import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowUpRight } from "lucide-react";

export default function ProductSection() {
  return (
    <section className="bg-[#f0ede8] py-16 twok">
      <div className="mx-auto max-w-[90%] rounded-2xl relative flex flex-col justify-center">

        {/* Header */}
        <div className="text-center mb-8">
          <div data-aos="fade-up">
            <h2 className="heading mb-4">
              High-Performance Engine Oils
            </h2>
          </div>
          <p data-aos="fade-up" data-aos-delay="150" className="content max-w-[1000px] mx-auto">
            Synmar Engine Oils are developed using advanced lubricant technology and carefully selected base oils to provide superior engine protection, enhanced performance, and long-lasting reliability. Designed for modern gasoline, diesel, hybrid, and heavy-duty engines; our products help reduce wear, improve fuel efficiency, and extend engine life under the most demanding operating conditions.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="
            max-h-[707px]
            aspect-video
            relative
            flex
            items-center
            justify-center
          "
        >
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover self-center" />
            <button className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[#b5451b] flex items-center justify-center text-white hover:bg-[#9a3a15] transition-colors z-10">
              <ArrowUpRight size={22} />
            </button>
        </div>



      </div>
    </section>
  );
}
