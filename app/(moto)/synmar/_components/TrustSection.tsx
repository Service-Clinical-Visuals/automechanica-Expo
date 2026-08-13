export default function TrustSection() {
  return (
    <section
      className="py-8 md:py-12 lg:py-16 bg-cover bg-center bg-no-repeat twok"
      style={{ backgroundImage: "url('/moto/synmar/trustbg.png')" }}
    >
      <div className="mx-auto max-w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-6 lg:gap-4 items-start">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4 md:gap-10">
          <div data-aos="fade-right">
            <h2 className="heading mb-1 md:mb-2">
              Built on Trust
            </h2>
            <p className="content">
              Synmar is a dynamic young Dutch company specialising in high-quality lubricants and technical fluids. From our modern production facility in Lichtenvoorde we serve international markets. Relying on many years of experience, we develop and manufacture all our products entirely in the Netherlands—something we&apos;re proud of, which is why our packaging is marked{" "}
              <span className="text-[#D4B161]! font-semibold">&ldquo;Made in Holland&rdquo;.</span>
            </p>
          </div>

          <img data-aos="fade-up" data-aos-delay="200" src="/moto/synmar/trust2.png" alt="Built on Trust" className="max-w-full w-full object-contain self-center md:self-center lg:self-end" />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4 md:gap-10">
          <img data-aos="fade-up" data-aos-delay="100" src="/moto/synmar/trust1.png" alt="Conscious Choices" className="order-2 lg:order-1 max-w-full w-full object-contain self-center md:self-center lg:self-start" />

          <div data-aos="fade-left" className="order-1 lg:order-2">
            <h2 className="heading mb-1 md:mb-2">
              Conscious Choices
            </h2>
            <p className="content">
              We are proud of our Dutch roots. Synmar stands for{" "}
              <span className="text-[#D4B161]! font-semibold">quality</span>,{" "}
              <span className="text-[#D4B161]! font-semibold">consistency</span>, and a{" "}
              <span className="text-[#D4B161]! font-semibold">personal approach</span>. Customers value us for our reliability, technical expertise, and accessible communication. We believe in sustainable, long-term relationships and clear agreements. That&apos;s why we&apos;re an ATIEL member and work in accordance with the EELQMS system. All our products comply with current ACEA standards and are produced with respect for the environment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
