import { ArrowRight } from "lucide-react";
import Container from "./Container";

export default function Service() {
  return (
    <section className="bg-white py-16">
      <Container>
        {/* Top heading */}
        <div className="max-w-[1100px] mx-auto text-center px-6 mb-10" data-aos="fade-up">
          <h2 className="heading mb-4">Comprehensive Service Excellence</h2>
          <p className="content">
            The positive relation between corporate culture and performance achieved is also demonstrated
            by the ability to offer a consultancy and customization service. In fact, the Company, in
            addition to ensuring high product quality, offers complete services of painting, marking in
            full compliance with ECE R90 standards and customized packaging.
          </p>
        </div>

        <hr className="border-t border-gray-200 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2" data-aos="fade-up" data-aos-delay="100">
          <img
            src="/moto/intercar/service/1.png"
            alt="Brake discs packaging line"
            className="w-full h-full object-cover"
          />
          <img
            src="/moto/intercar/service/2.png"
            alt="Brake discs packaging on conveyor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CTA button */}
        <div className="flex justify-center mt-10" data-aos="fade-up" data-aos-delay="200">
          <button className="bg-primary navlink text-white! text-[16px]! font-medium rounded-md px-6 py-2.5 flex items-center gap-2 hover:bg-secondary-hover transition-colors">
            <span>View More</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </Container>
    </section>
  );
}
