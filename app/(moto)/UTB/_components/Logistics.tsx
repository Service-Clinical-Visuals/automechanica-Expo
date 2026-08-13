"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";

const Logistics = () => {
  return (
    <section className="py-20 bg-white relative" id="logistics">
      <Container>
        <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-10">

          {/* Left Content */}
          <div className="w-full xl:w-1/2 flex flex-col order-2 xl:order-1" data-aos="fade-right" data-aos-duration="1000">
            <img
              src="/moto/UTB/heading4.png"
              alt="Logistics"
              className="h-12 md:h-18 lg:h-20 w-auto object-contain mb-4 object-left"
            />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-[20%] h-1 rounded bg-secondary"></div>
              <Typography variant="h4" color="primary" weight="medium" className="italic">
                UTB Logistics
              </Typography>
            </div>

            <div className="space-y-5 mb-8 tracking-wide leading-5">
              <Typography variant="body" color="body">
                In our warehouses and bulk storages facilities we can store more than 1 million
                litres and kilograms of finished lubricants, base oils, white oils, vaseline's,
                greases and antifreeze so that we can immediately respond on costumers
                demand.
              </Typography>
              <Typography variant="body" color="body">
                Our logistic department takes care of the daily transport of finished lubricants,
                base oils, white oils, vaseline's, greases and antifreeze in the Netherlands and all
                over the world. Our fleet for transportation of lubricants in bulk and packaging
                can contain 5.000 to 40.000 litres of products and are all equipped with
                advanced metering systems, compartments, loading lifts and electric pallet
                lifts. With our advanced planning and real time bulk storage system we are able
                to provide our customers the best service and delivery times. If necessary we
                take care of your concerns about the availability of lubricants in your tanks
                through a remote content measurement system. If necessary we can provide
                you the same day with product.
              </Typography>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="w-full xl:w-1/2 order-1 xl:order-2" data-aos="fade-left" data-aos-duration="1000">
            <div className="w-full h-[400px] md:h-[500px] xl:h-[600px] overflow-hidden rounded shadow-lg border border-gray-100">
              <img
                src="/moto/UTB/section4.png"
                alt="UTB Logistics Truck"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/moto/UTB/section3(1).jpg";
                }}
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Logistics;
