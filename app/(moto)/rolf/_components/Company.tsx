import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Company() {
  const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-1">
      <circle cx="12" cy="12" r="12" fill="#FFCD00"/>
      <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section className="relative w-full py-16 bg-transparent" data-aos="fade-up">
      <div className="custom-container flex flex-col items-center">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mx-auto mb-8  " data-aos="fade-up">
          <Typography variant="h2" color="white" className="mb-6">
            The Company History
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed xl:max-w-[60%]">
            Since its establishment, ROLF Lubricants GmbH has continuously expanded its expertise, production capabilities, and global presence. Through innovation, strategic partnerships, and advanced lubricant technologies, we have grown into a trusted supplier of premium lubricants serving customers across international markets.
          </Typography>
          <hr className="w-full mt-4 h-[1px] bg-white/40 mx-auto"/>
        </div>

        {/* Content Block */}
        <div className="flex flex-col xl:flex-row gap-10 w-full items-center xl:items-stretch">
          {/* Image */}
          <div className="w-full xl:w-[45%] order-last  xl:order-first flex justify-center h-full" data-aos="fade-right">
            <img 
              src="/moto/rolf/section2.png" 
              alt="ROLF Headquarters" 
              className="w-full h-full border-[1px] border-white/70 object-cover rounded-2xl md:rounded-[2rem]" 
            />
          </div>

          {/* Text and Cards */}
          <div className="w-full xl:w-[55%] flex flex-col justify-center order-first xl:order-last" data-aos="fade-left">
            <Typography variant="p" color="white" className="mb-8 leading-relaxed">
              From its foundation, ROLF Lubricants GmbH has been driven by innovation, technical expertise, and a commitment to quality. Through continuous product development, expanded manufacturing capabilities, and international market growth, we have established a strong reputation as a trusted supplier of high-performance lubricants, delivering reliable solutions for diverse automotive and industrial applications with exceptional quality and reliability.
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-lg flex items-start gap-4">
                <CheckIcon />
                <Typography variant="p" color="muted"  className="leading-relaxed ">
                  Expert Foundation – Established by petrochemical specialists focused on lubricant formulations.
                </Typography>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white p-6 rounded-lg flex items-start gap-4">
                <CheckIcon />
                <Typography variant="p" color="muted"   className="leading-relaxed ">
                  International Growth – Expanded the distribution network into China, Mongolia, and Middle East.
                </Typography>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-lg flex items-start gap-4">
                <CheckIcon />
                <Typography variant="p" color="muted"  className="leading-relaxed ">
                  Manufacturing Expansion – Began licensed production, expanding the ROLF portfolio globally.
                </Typography>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-lg flex items-start gap-4">
                <CheckIcon />
                <Typography variant="p" color="muted"  className="leading-relaxed ">
                  Global Presence – Delivering premium lubricant solutions trusted worldwide.
                </Typography>
              </div>
            </div>

            <div className="flex">
               <Button text="Learn More About Us" href="#about" showIcon={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
