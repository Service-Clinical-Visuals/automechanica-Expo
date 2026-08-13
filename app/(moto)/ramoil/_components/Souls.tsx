'use client';

import { useEffect, useRef } from 'react';
import Container from './Container';

function Pill({ src }: { src: string }) {
  return (
    <div
      className="shrink-0 rounded-full overflow-hidden bg-white border border-gray-100 shadow-sm"
      style={{ width: "auto", height: 100 }}
    >
      <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
  );
}

const TEXT = 'font-black text-[#1E1E1E]! leading-none heading font-normal! text-[30px]! md:text-[65px]! lg:text-[90px]! xl:text-[124px]! ';
const FS = { fontSize: 'clamp(44px, 5.5vw, 88px)' } as const;

export default function Souls() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      // distance of section center from viewport center — grows as you scroll past
      const distFromCenter = window.innerHeight / 2 - (rect.top + rect.height / 2);
      // only animate while section is below center; freeze at 0 once it reaches center
      const offset = Math.min(0, distFromCenter) * 0.5;

      rowRefs.current.forEach((el, i) => {
        if (!el) return;
        const dir = i % 2 === 0 ? 1 : -1;
        el.style.transform = `translateX(${offset * dir}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[100px]">

          <h2 className="heading text-[#00437A] text-center mb-6" data-aos="fade-up">
            Our Souls
          </h2>

          <div>
            <div className="border-t border-gray-200" />

            {/* Row 1 — pill left, text right */}
            <div
              ref={el => { rowRefs.current[0] = el; }}
              className="flex items-center justify-center gap-8 py-8 will-change-transform"
            >
              <Pill src="/moto/ramoil/souls/soul1.png" />
              <span className={TEXT} style={FS}>Regenerate</span>
            </div>

            <div className="border-t border-gray-200" />

            {/* Row 2 — text, pill, connector */}
            <div
              ref={el => { rowRefs.current[1] = el; }}
              className="flex items-center justify-center gap-8 py-8 will-change-transform"
            >
              <span className={TEXT} style={FS}>White Mineral Oils</span>
              <Pill src="/moto/ramoil/souls/soul2.png" />
              <span className={TEXT} style={FS}>and</span>
            </div>

            <div className="border-t border-gray-200" />

            {/* Row 3 — pill left, text right */}
            <div
              ref={el => { rowRefs.current[2] = el; }}
              className="flex items-center justify-center gap-8 py-8 will-change-transform"
            >
              <Pill src="/moto/ramoil/souls/soul3.png" />
              <span className={TEXT} style={FS}>Petroleum Jelly</span>
            </div>

            <div className="border-t border-gray-200" />

            {/* Row 4 — text left, pill right */}
            <div
              ref={el => { rowRefs.current[3] = el; }}
              className="flex items-center justify-center gap-8 py-8 will-change-transform"
            >
              <span className={TEXT} style={FS}>Lubricant Oils</span>
              <Pill src="/moto/ramoil/souls/soul4.png" />
            </div>

            <div className="border-t border-gray-200" />
          </div>

        </div>
      </Container>
    </section>
  );
}
