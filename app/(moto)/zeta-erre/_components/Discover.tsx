"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const products = [
  {
    image: "/moto/zeta-erre/fiscover/1.png",
    title: "Driveshaft",
    description:
      "The driveshaft (axle shaft) transfers engine power to the wheels while enabling smooth steering and adapting to suspension movement for reliable vehicle performance.",
  },
  {
    image: "/moto/zeta-erre/fiscover/2.png",
    title: "Intermediate CV Joints",
    description:
      "These are standard outer joints for vehicles with any type of drive system. They can be designed according to load requirements, steering angle and the anti-lock braking system.",
  },
  {
    image: "/moto/zeta-erre/fiscover/3.png",
    title: "Intermediate Shaft",
    description:
      "These are connecting components between the inner joint and the differential, designed to transmit motion and torque. They are engineered according to the power output.",
  },
];

export default function Discover() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="discover">
      <Container>
        <div className="text-center max-w-[85%] mx-auto mb-12" data-aos="fade-up">
          <h2 className="heading mb-4">Explore Our Solutions</h2>
          <p className="content">
            Discover Zeta-Erre&apos;s comprehensive range of precision-engineered transmission
            components designed for the automotive aftermarket. From CV Shafts and CV Joints to
            Tripods and related driveline solutions, every product is manufactured to
            OEM-equivalent standards, ensuring exceptional durability, precise fitment, and
            reliable performance. Built with advanced engineering and rigorous quality control,
            our components deliver smooth power transmission and long-lasting dependability for a
            wide variety of passenger vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10  mb-8" data-aos="fade-up">
          {products.map((product) => (
            <div key={product.title} className="relative p-8 border-3 border-[#EAEAEA]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-contain mb-6"
              />

              <h3 className="subheading mb-3 font-bold!">{product.title}</h3>
              <p className="content mb-10">{product.description}</p>

              <div className="absolute -bottom-3 -right-3 flex items-center justify-center w-24 h-24 rounded-full bg-white border-3 border-[#EAEAEA] border-b-0 border-r-0 -m-1!">
                <Link
                  href="#"
                  aria-label={`View ${product.title}`}
                  className="flex items-center justify-center w-18 h-18 rounded-full bg-[#F5A623] text-[#1A1A1A] hover:bg-[#e0961c] transition-colors"
                >
                  <ArrowRight size={30} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-right">
          <Link href="#" className="navlink text-primary! font-normal! whitespace-nowrap">
            View All Products
          </Link>
        </div>
      </Container>
    </section>
  );
}
