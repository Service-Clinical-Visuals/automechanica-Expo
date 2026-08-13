"use client";

const News = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="section-title font-primary font-medium text-[#111111] leading-tight">
            Why Air Filter Maintenance Matters
          </h2>
          <p className="section-text font-secondary font-normal text-[#484848] leading-relaxed">
            When Your Air Filter Is Not Cleaned Regularly, Your Engine Is Forced To Work Harder, Resulting In Poor Fuel Economy, Higher Emissions, And, In The Long Run, A Loss Of Engine Power.
          </p>
        </div>

        {/* Two Images Grid */}
        <div className="w-full max-w-[1134px] mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" data-aos="fade-up" data-aos-delay="100">

          <div className="w-full h-auto rounded-2xl md:rounded-[28px]  overflow-hidden flex items-center justify-center ">
            <img
              src="/moto/hannfilter/n1.png"
              alt="Air Filter Type 1"
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 mix-blend-multiply"
              onError={(e) => {
                e.currentTarget.src = "/moto/swd/abt.png";
              }}
            />
          </div>

          <div className="w-full h-auto rounded-2xl md:rounded-[28px] overflow-hidden flex items-center justify-center p-4">
            <img
              src="/moto/hannfilter/n2.png"
              alt="Air Filter Type 2"
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.src = "/moto/swd/abt.png";
              }}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default News;
