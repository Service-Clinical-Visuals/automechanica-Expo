import React from 'react';

export default function AboutUs() {
  const specializations = [
    { name: "Fuel Filter", icon: "/moto/muller-filter/abt1.png" },
    { name: "Oil Filter", icon: "/moto/muller-filter/abt2.png" },
    { name: "Air Filter", icon: "/moto/muller-filter/abt3.png" },
    { name: "Cabin air filter", icon: "/moto/muller-filter/abt4.png" }
  ];

  return (
    <section className="w-full text-white py-12 lg:py-20 bg-[#008F33]">
      <div className="custom-container px-6 lg:px-20">
        {/* Header Section */}
        <div className="text-center" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4">
            <div className="w-1.5 h-10 lg:h-12 bg-[#F3DD01] rounded-full"></div>
            <h2 className="section-title font-semibold font-chakra m-0 tracking-wide">About Our Company</h2>
          </div>
          <p className="max-w-6xl section-text leading-[1.6] font-mulish mt-6 mb-6 mx-auto text-center font-semibold">
            With 40 years experience in OE filter development, places itself like an European Independent
            {/* <br className="hidden lg:block"/> */}
            After market key supplier, offering an original quality range with a continuous product extension.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6 lg:gap-10 items-center mt-12">
          {/* Left: Image */}
          <div className="2xl:col-span-7 rounded-2xl overflow-hidden shadow-2xl relative h-[400px] lg:h-[550px] 2xl:h-[550px] w-full" data-aos="fade-right">
            <img 
              src="/moto/muller-filter/abt.png" 
              alt="Muller Filter Headquarters" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Right: Text and Specialized Box */}
          <div className="2xl:col-span-5 flex flex-col justify-center gap-4 mt-6 2xl:mt-0" data-aos="fade-left">
            <div className="space-y-4  section-text leading-[1.6]  font-mulish font-normal  ">
              <p>
                The advantages of a family-owned company permit Muller Filter to reach fast decision-making process and reply
              </p>
              <p>
                <strong>MULLER FILTER</strong> has its headquarters in Campiglione F.le (Italy) about 40 KMS. with a surface of 35.000 square meters, 12.000 mq of them covered.
              </p>
              <p>
                <strong>MULLER FILTER</strong> product line, with over 2,200 types of oil, fuel, air and cabin air filters, covers about 98 percent of European and Asiatic passenger car and light commercial vehicles applications.
              </p>
            </div>

            {/* Specialized Box */}
            <div className="bg-white rounded-2xl p-4 lg:p-6 text-black relative overflow-hidden shadow-xl ">
              <div className="absolute inset-0  pointer-events-none" style={{ backgroundImage: 'url(/moto/muller-filter/abtbg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              
              <div className="relative z-10">
                <h3 className="text-center font-bold sub-title font-chakra mb-8 text-[#1e1e1e]">We are Specialized</h3>
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-y-6">
                  {specializations.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-3">
                      <div className="w-14 h-14 lg:w-20 lg:h-20 flex items-center justify-center">
                        <img src={item.icon} alt={item.name} className="w-full h-full object-contain drop-shadow-md hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className=" text-[#1e1e1e] section-text font-bold text-center leading-[1.6] font-chakra">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
