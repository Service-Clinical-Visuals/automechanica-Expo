"use client";

import Container from "./Container";

export default function About() {
  return (
    <section className="pt-16 pb-24 bg-[#121212]">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[60px]">

          {/* Heading */}
          <div className="text-center max-w-[920px] mx-auto mb-14" data-aos="fade-up">
            <h2 className="heading-white text-white mb-6">About LRT Automotive GmbH</h2>
            <p className="content font-normal!">
              LRT Automotive GmbH is a family-owned, mid-sized manufacturing company based near
              Heidelberg, Germany, and proudly active in the European aftermarket since 1998. As a
              market leader in aftermarket exhaust manifolds, we offer the broadest range of
              applications outside of OEMs.
            </p>
          </div>

          {/* Images */}
          <div className="flex flex-col lg:flex-row gap-6 mb-10">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <img
                src="/moto/lrt/about1.png"
                alt="LRT Automotive manufacturing facility"
                className="w-full h-full object-cover"
                style={{ minHeight: 320 }}
              />
            </div>
            <div className="w-full lg:w-1/2" data-aos="fade-left" data-aos-delay="150">
              <img
                src="/moto/lrt/about2.png"
                alt="LRT Automotive team"
                className="w-full h-full object-cover"
                style={{ minHeight: 320 }}
              />
            </div>
          </div>

          {/* Bottom: description + button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="content font-normal! max-w-[920px]">
              We specialize in the production of high-quality exhaust system components, including
              exhaust manifolds, catalytic converters, diesel particulate filters, and flex pipes,
              serving distributors, wholesalers, and professional workshops across Europe
            </p>

            <button className="flex navlink text-[18px]! font-bold! text-black! items-center gap-2 bg-white rounded-full pl-5 pr-1.5 py-1.5 hover:opacity-90 transition-opacity shrink-0">
              <span>About LRT Automotive</span>
              <img src="/moto/lrt/arrowup.png" alt="" className="h-6.5 w-6.5" />
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
}
