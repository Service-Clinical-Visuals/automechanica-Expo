"use client";

import React from "react";
import Container from "./Container";

const posts = [
  {
    img: "/moto/eurolub/blog/1.png",
    day: "07",
    month: "Mar",
    category: "Automotive Insights",
    comments: 8,
    title: "How Advanced Lubricants Improve Engine Performance and Efficiency",
  },
  {
    img: "/moto/eurolub/blog/2.png",
    day: "04",
    month: "Mar",
    category: "Industry Trends",
    comments: 15,
    title: "5 Key Trends Shaping the Future of Automotive Lubricants",
  },
  {
    img: "/moto/eurolub/blog/3.png",
    day: "01",
    month: "Mar",
    category: "Expert Insights",
    comments: 10,
    title: "Choosing the Right Lubricant for Maximum Vehicle Protection",
  },
];

export default function Blog() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24" id="blog">
      <Container>
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-14" data-aos="fade-up">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004A72]! shrink-0" />
            <span className="content font-semibold! text-[#004A72]! uppercase tracking-wide">
              Blog
            </span>
          </div>
          <h2 className="heading mb-4 leading-[36px]! ">
            Stay Updated with Our Latest Insights &amp; News
          </h2>
          <p className="content">
            Stay updated with industry trends, company news, and expert insights. Discover the
            latest innovations and developments from our field.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {posts.map((post, index) => {
            const isLast = index === posts.length - 1;
            return (
              <div
                key={post.title}
                className={`border border-[#E5E7EB] rounded-xl overflow-hidden flex flex-col h-full w-full ${
                  isLast
                    ? "md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto xl:col-span-1 xl:max-w-none xl:mx-0"
                    : ""
                }`}
                data-aos="fade-up"
              >
                <div className="relative aspect-[16/11]">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute z-100 heading-white text-[32px]! font-semibold! -bottom-10 right-0 sm:-bottom-7 2xl:-bottom-10 bg-primary text-white text-center rounded-md px-5 py-6 leading-none">
                    <div>{post.day}</div>
                    <div>{post.month}</div>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <p className="content text-[#4B5563]!">
                    {post.category} <span className="mx-1">|</span> {post.comments} Comments
                  </p>
                  <h3 className="subheading text-bold!">
                    {post.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
