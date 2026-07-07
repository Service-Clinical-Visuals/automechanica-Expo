"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";

const productsData = [
  {
    id: "01",
    title: "Ignition Cables",
    desc: "TESLA BLATNÁ is the largest European manufacturer of ignition cables and one of the main suppliers of other ignition...",
    image: "/moto/tesla/product1.png"
  },
  {
    id: "02",
    title: "Ignition Coils",
    desc: "Ignition coils are a key part of the ignition system of petrol engines. Their job is to convert the low battery voltage (12 volts)...",
    image: "/moto/tesla/product2.png"
  },
  {
    id: "03",
    title: "Automotive Bulbs",
    desc: "TESLA Blatná has long been known as a leading supplier of a wide range of automotive light bulbs...",
    image: "/moto/tesla/product3.png"
  },
  {
    id: "04",
    title: "Fuses",
    desc: "A fuse is a small but very important safety part. It is designed to stop current from exceeding the rating of the wires or components...",
    image: "/moto/tesla/product4.png"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-20 ">
      <Container>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div data-aos="fade-down-right" data-aos-duration="1000">
            <div className="mb-1">
              <div className="flex gap-1.5 mb-[-15] ml-1">
                <div className="w-2.5 h-2.5 bg-primary"></div>
                <div className="w-2.5 h-2.5 bg-primary"></div>
              </div></div>
            <Typography variant="h2" color="dark" className="">
              Automotive Products
            </Typography>
          </div>
          <div data-aos="fade-down-left" data-aos-duration="1000" data-aos-delay="200">
            <Button text="Shop Now" variant="primary" showIcon={true} />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {productsData.map((product, index) => (
            <div
              key={product.id}
              className="relative bg-white pt-8 pb-6 px-6 h-full flex flex-col group shadow-sm hover:shadow-md transition-shadow"
              data-aos="zoom-in-up"
              data-aos-duration="800"
              data-aos-delay={index * 150}
            >
              {/* Custom Border with Notch */}
              <div className="absolute top-0 left-0 right-[72px] h-[2px] bg-[#143B7D]"></div>
              <div className="absolute bottom-0 right-0 top-[72px] w-[2px] bg-[#143B7D]"></div>
              <div className="absolute bottom-0 left-0  right-0 h-[2px] bg-[#143B7D]"></div>
              <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-[#143B7D]"></div>
              <div className="absolute top-0 right-0 w-[72px] h-[72px] border-b-[2px] border-l-[2px] border-[#143B7D] rounded-bl-[16px]"></div>

              {/* Number Box */}
              <div className="absolute top-[2px] right-[2px] w-[65px] h-[65px] rounded-none rounded-bl-[14px] bg-[#2B2B2B] flex items-center justify-center  shadow-sm transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 z-10">
                <Typography variant="h1" color="none" className="text-white  leading-none m-0">
                  {product.id}
                </Typography>
              </div>

              {/* Title & Divider constrained by notch */}
              <div className="pr-[48px] relative z-10">
                <Typography variant="h4" color="dark" className="font-bold mb-4 text-[#143B7D]">
                  {product.title}
                </Typography>
                <div className="w-full h-[1px] bg-[#000000] mb-5"></div>
              </div>

              {/* Desc */}
              <div className="mb-6 flex-grow relative z-10">
                <Typography variant="p" color="muted" className=" leading-relaxed mb-6">
                  {product.desc}
                </Typography>
                <Link href="#" className="inline-block">
                  <Typography variant="h6" color="dark" className="font-bold underline decoration-2 decoration-gray-300 underline-offset-4 hover:decoration-[#143B7D] transition-colors text-[12px]">
                    Read More...
                  </Typography>
                </Link>
              </div>

              {/* Image inside inner box */}
              <div className="w-full h-[180px] shadow-md relative mt-auto flex items-center justify-center p-4 border border-gray-200 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] rounded-[2px] z-10">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full max-h-full object-fill mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        {/* <div className="flex items-center justify-center gap-2 mt-16" data-aos="fade-up">
          <div className="w-12 h-1.5 bg-primary rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
        </div> */}

      </Container>
    </section>
  );
}
