"use client";

import Button from "./Button";

const newsItems = [
  {
    title: "Research and Development Activities",
    description:
      "Connects the steering to the wheel for precise control.",
    image: "/moto/ditas/news2.jpg",
  },
  {
    title: "Participation in Scientific Congresses",
    description:
      "Sponsored and presented research at the IMSEC engineering congress.",
    image: "/moto/ditas/news3.jpg",
  },
  {
    title: "Adana BTÜ Cooperation Protocol",
    description:
      "Strengthening R&D and innovation through university collaboration.",
    image: "/moto/ditas/news1.jpg",
  },
];

export default function News() {
  return (
    <section className="w-full py-16 md:py-20 xl:py-[100px]">
      <div className="custom-container">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div
            className="max-w-[716px]"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-once="true"
          >
            <h2 className="section-title mb-4 text-[#272727]">
              Latest News &amp; Updates
            </h2>

            <p
              className="body-text text-[#4B5563]"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="150"
              data-aos-once="true"
            >
              Stay updated with DİTAŞ&rsquo;s latest developments,
              innovations, achievements, and industry news as we continue to
              advance through technology, quality, and excellence.
            </p>
          </div>

          <div
            className="inline-flex"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
            data-aos-once="true"
          >
            <Button
              href="#"
              bgColor="#ED1C24"
              textColor="#FFFFFF"
              className="flex-shrink-0"
            >
              View All
            </Button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className={`
                flex flex-col rounded-[5px] border border-[#CCCCCC] bg-white p-[10px]
                ${
                  index === 2
                    ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[420px] xl:col-span-1 xl:mx-0 xl:max-w-none"
                    : ""
                }
              `}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={index * 150}
              data-aos-once="true"
            >
              <div className="mb-4 h-[344px] w-full overflow-hidden rounded-[6px] shadow-[0_3px_8px_rgba(0,0,0,0.24)]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="card-title mb-3 text-center text-[#272727]">
                {item.title}
              </h3>

              <p className="body-text mx-auto mb-4 max-w-[75%] flex-1 text-center text-[#4B5563]">
                {item.description}
              </p>

              <a
                href="#"
                className="link-text mt-auto text-right text-[#ED1C24] transition-opacity hover:opacity-80"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}