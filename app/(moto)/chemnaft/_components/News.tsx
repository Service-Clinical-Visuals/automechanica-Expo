import Container from "./Container";

const newsItems = [
  { img: "/moto/chemnaft/news/news1.png", title: "Workshop Technology Fair" },
  { img: "/moto/chemnaft/news/news2.png", title: "Product Name Update" },
  { img: "/moto/chemnaft/news/news3.png", title: "QUALITIUM POWER FE" },
  { img: "/moto/chemnaft/news/news4.png", title: "Automechanika Fair In Frankfurt" },
];

function ArrowIcon() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#CF3232] ml-1.5 shrink-0">
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function News() {
  return (
    <section className="bg-[#E2EFFF] py-16">
      <Container>
        {/* Heading */}
        <div className="max-w-[1100px] mx-auto text-center px-6 mb-10" data-aos="fade-up">
          <h2 className="heading mb-4">Latest News & Updates</h2>
          <p className="content">
            Discover the latest news, product updates, exhibition highlights, and company announcements
            from Qualitium. Stay connected with our innovations, achievements, and activities across
            global markets.
          </p>
        </div>

        <hr className="border-t border-[#b0cfe0] mb-12" />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsItems.map((item, i) => (
            <div
              key={item.title}
              className="bg-white max-w-[400px] max-h-[427px] border border-gray-100 shadow-sm flex flex-col p-4"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center py-5 px-4 gap-3">
                <p className="heading2 text-[22px]! text-[#10355F]! text-center">{item.title}</p>
                <a
                  href="#"
                  className="flex text-[22px]! items-center content text-[#333333]! font-bold underline underline-offset-2"
                >
                  Read More <ArrowIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
