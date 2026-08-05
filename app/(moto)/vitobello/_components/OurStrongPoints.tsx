import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function OurStrongPoints() {
  return (
    <section className="w-full py-16 lg:py-20 bg-[#27292A]" id="strong-points">
      <div className="custom-container">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center max-w-7xl flex flex-col gap-4">
            <Typography variant="h1" color="white" className="font-semibold">Our Strong Points</Typography>
            <Typography variant="p" color="white" className="text-white/80 text-sm md:text-base leading-relaxed">
              At Vitobello Ricambi S.r.l., we combine quality products with exceptional customer service. From a seamless purchasing experience and reliable shipping to dedicated after-sales support, we are committed to delivering value, efficiency, and complete customer satisfaction at every stage of the journey, ensuring long-term partnerships through trust, innovation, consistent support, and dependable automotive solutions.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Card 1 */}
            <div className="bg-[#171717] border border-white/25 rounded-sm flex flex-col p-4 lg:p-6">
              <div className="aspect-[4/3] w-full">
                <img src="/moto/vitobello/s1.png" alt="Sales" className="w-full h-full object-cover rounded-sm" />
              </div>
              <div className="pt-2 pb-5 flex flex-col gap-4 flex-1">
                <Typography variant="h3" color="white" className="pt-3">Sales</Typography>
                <Typography variant="p" color="white" className="text-white/80 text-xs leading-relaxed flex-1">
                  Vitobello Ricambi Srl has always focused on making the purchasing experience simple and convenient for all customers looking for high-quality mechanical parts.
                </Typography>
                <div className="mt-1">
                  <Button text="Learn More" href="#sales" showIcon={true} />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#171717] border border-white/25 rounded-sm flex flex-col p-4 lg:p-6">
              <div className="aspect-[4/3] w-full">
                <img src="/moto/vitobello/s2.png" alt="Shipment" className="w-full h-full object-cover rounded-sm" />
              </div>
              <div className="pt-2 pb-5 flex flex-col gap-4 flex-1">
                <Typography variant="h3" color="white" className="pt-3">Shipment</Typography>
                <Typography variant="p" color="white" className="text-white/80 text-xs leading-relaxed flex-1">
                  Vitobello Ricambi Srl offers a reliable and cost-effective shipping service, ensuring fast deliveries, secure packaging, and customer satisfaction.
                </Typography>
                <div className="mt-1">
                  <Button text="Learn More" href="#shipment" showIcon={true} />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#171717] border border-white/25 rounded-sm flex flex-col p-4 lg:p-6">
              <div className="aspect-[4/3] w-full">
                <img src="/moto/vitobello/s3.png" alt="Aftersales" className="w-full h-full object-cover rounded-sm" />
              </div>
              <div className="pt-2 pb-5 flex flex-col gap-4 flex-1">
                <Typography variant="h3" color="white" className="pt-3">Aftersales</Typography>
                <Typography variant="p" color="white" className="text-white/80 text-xs leading-relaxed flex-1">
                  Vitobello Ricambi is committed to ensuring customer satisfaction by offering continuous support even after the sale.
                </Typography>
                <div className="mt-1">
                  <Button text="Learn More" href="#aftersales" showIcon={true} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
