"use client";

import React from "react";
import Container from "./Container";

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="about-us">
      <Container>
        <div className="flex flex-col xl:flex-row gap-12  items-center">
          {/* Left: Text Content */}
          <div className="w-full xl:w-[60%]">
            {/* Title */}
            <div className="mb-6">
              <h2 className="heading inline-block">
                About Our Company
              </h2>
              <div className="h-[3px] w-50 bg-primary mt-2" />
            </div>

            {/* Body paragraphs */}
            <div className="space-y-5 content text-justify tracking-[0%]! leading-[32px]!">
              <p>
                We are a Polish limited liability company (sp. z o.o.) established in 2016. Since our inception, we have been
                manufacturing products for the automotive and industrial sectors, such as engine oils, transmission oils, hydraulic
                oils, and other lubricating oils. We also manufacture grease, coolant, windshield washer fluid, and other automotive
                care products. The second part of our business involves the sale of chemical raw materials to the food industry,
                agriculture, and other sectors.
              </p>

              <p className="font-bold italic text-primary text-[23px]! text-[#B1110E]!">
                &ldquo;COME AND SEE WHAT WE CAN OFFER YOU&rdquo;
              </p>

              <p>
                We have a large, highly efficient bottling and packaging machinery fleet, which makes us ready to collaborate with
                companies seeking contractors for their private label brands.
              </p>

              <p>
                Our guiding principle is the production of high-quality products and the provision of product consulting services.
                Our products are made from the best components available on the market. The high technical quality of our
                production is subject to constant laboratory monitoring in our in-house laboratory.
              </p>

              <p>
                We have our own transport and are happy to use it to deliver goods to our customers as quickly as possible.
                Thanks to investments in high-performance production and packaging lines, we are highly flexible in terms of
                timely order fulfillment and delivery. Our warehouse can accommodate thousands of pallets, fully securing
                distribution and guaranteeing timely order fulfillment and delivery.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full xl:w-[40%]">
            <img
              src="/moto/speedcar/about.png"
              alt="SpeedCar Oil Product"
              className="h-full max-h-[735px] w-full object-cover rounded"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
