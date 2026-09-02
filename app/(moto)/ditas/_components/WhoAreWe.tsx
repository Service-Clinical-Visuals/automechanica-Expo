import Button from "./Button";

export default function WhoAreWe() {
  return (
    <section className="w-full py-16 md:py-20 xl:py-[100px]">
      <div className="custom-container flex flex-col xl:flex-row gap-10 xl:gap-[45px] items-stretch">
        {/* Content */}
        <div
          className="w-full xl:w-[48%] min-w-0 flex flex-col justify-center order-1 xl:order-2"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <h2
            className="section-title text-[#272727] mb-6 xl:mb-7 2xl:mb-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            Who are we?
          </h2>

          <p
            className="body-text text-[#4B5563] mb-5 xl:mb-5 2xl:mb-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="150"
            data-aos-once="true"
          >
            Founded in 1972, DİTAŞ BDY Yedek Parça İmalat ve Teknik A.Ş.
            specializes in the production of steering and suspension
            components, including tie rod ends, ball joints, control arms,
            tie rod arms, stabilizer arms, and V-shaped drawbar arms.
            Production began in 1978, and today the company has an annual
            manufacturing capacity of 7.8 million units.
          </p>

          <p
            className="body-text text-[#4B5563] mb-5 xl:mb-5 2xl:mb-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="250"
            data-aos-once="true"
          >
            With more than 40 years of industry experience, DİTAŞ has
            established itself as Turkey&rsquo;s leading OE tie rod
            manufacturer. The company supplies high-quality original
            equipment components to domestic and international vehicle
            manufacturers while expanding its presence in the global
            aftermarket. Operating from a 155,000 m² facility in Niğde,
            including 20,000 m² of covered production space, DİTAŞ employs
            approximately 340 skilled professionals. Its modern manufacturing
            technologies, prototype testing facilities, and flexible
            production processes ensure consistent quality and reliable
            performance.
          </p>

          <p
            className="body-text text-[#4B5563] mb-5 xl:mb-5 2xl:mb-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="350"
            data-aos-once="true"
          >
            Committed to quality and innovation, DİTAŞ continuously strives
            for excellence by maintaining the highest international
            standards with IATF 16949:2016, ISO 14001, and Ford Q1
            certifications. Through advanced technologies and rigorous
            quality processes, we deliver reliable, high-performance
            automotive solutions trusted by customers worldwide.
          </p>

          <p
            className="body-text text-[#4B5563] mb-6 xl:mb-6 2xl:mb-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="450"
            data-aos-once="true"
          >
            Our dedication to quality, sustainability, and continuous
            improvement enables us to create durable products and build
            long-term partnerships across the global automotive industry.
          </p>

          {/* Button */}
          <div
            className="inline-flex order-3 xl:order-none"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="550"
            data-aos-once="true"
          >
            <Button href="#" bgColor="#ED1C24" textColor="#FFFFFF">
              Know About Us
            </Button>
          </div>
        </div>

        {/* Image */}
        <div
          className="relative w-full xl:w-[52%] h-[400px] md:h-[550px] xl:h-auto xl:min-h-[650px] rounded-2xl overflow-hidden flex-shrink-0 order-2 xl:order-1"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            src="/moto/ditas/who.png"
            alt="DİTAŞ facility"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}