"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowRight } from "lucide-react";

const catalogues = [
  {
    id: 1,
    image: "/moto/jp-group/explore1.png",
    title: "VW Classic",
    text: "Parts and accessories for classic Volkswagen models.",
  },
  {
    id: 2,
    image: "/moto/jp-group/explore2.png",
    title: "Porsche Classic",
    text: "Genuine parts and technical data for Porsche classics.",
  },
  {
    id: 3,
    image: "/moto/jp-group/explore3.png",
    title: "Classic car Catalogue",
    text: "A Wide range Of parts for multiple classic car brands.",
  },
  {
    id: 4,
    image: "/moto/jp-group/explore4.png",
    title: "Contemporary Catalogue",
    text: "Up-to-date parts and solutions for modern vehicles.",
  }
];

const Explore = () => {
  return (
    <section className="w-full py-10  min-[3800px]:py-32 bg-white relative" id="catalogues">
      <div className="custom-container flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 min-[2500px]:gap-5 mb-5 min-[2500px]:mb-20 min-[3800px]:mb-32" data-aos="fade-up">
          <Typography variant="h4" color="primary" className="font-bold text-sm uppercase  tracking-wide">
            Catalogues
          </Typography>
          <Typography variant="h2" color="dark" className="font-bold ">
            Explore Our Catalogues
          </Typography>
          <Typography variant="p" color="dark" className=" text-sm md:text-base  mt-2 max-w-full ">
            Access the latest product information and technical details for classic and contemporary vehicles.
          </Typography>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-[2500px]:gap-12 min-[3800px]:gap-20 w-full" data-aos="fade-up" data-aos-delay="100">
          {catalogues.map((item) => (
            <div key={item.id} className="flex flex-col bg-white border border-gray-100 rounded-sm overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] group hover:-translate-y-1 transition-transform duration-300">

              {/* Image Container with inner padding if needed to match design */}
              <div className="w-full aspect-[4/3] bg-white overflow-hidden relative border-b border-gray-100 p-2 min-[2500px]:p-4">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 min-[2500px]:p-12 min-[3800px]:p-16 flex flex-col flex-1">
                <Typography variant="h3" color="dark" className="font-bold mb-3 min-[2500px]:text-3xl min-[3800px]:text-4xl">
                  {item.title}
                </Typography>
                <Typography variant="p" color="muted" className="text-sm min-[2500px]:text-xl min-[3800px]:text-3xl mb-6 flex-1">
                  {item.text}
                </Typography>

                <div className="flex items-center text-dark font-bold text-sm min-[2500px]:text-xl min-[3800px]:text-3xl cursor-pointer group/btn w-fit">
                  View Catalogue
                  <ArrowRight className="w-4 h-4 min-[2500px]:w-8 min-[2500px]:h-8 ml-2 text-[#E11313] group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
