export default function NewsletterSection() {
  return (
    <section className="bg-[#f5f4f2] py-16 twok">
      <div className="mx-auto max-w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: heading + description + CTA */}
        <div className="flex flex-col gap-5">
          <div data-aos="fade-right">
            <h2 className="heading">
              Sign Up For Our Newsletter
            </h2>
          </div>
          <p data-aos="fade-up" data-aos-delay="150" className="content max-w-sm">
            Do you want to stay up to date with all the latest news, promotions, and trade fair participations? Then subscribe to our newsletter.
          </p>

          {/* Ribbon-style button */}
          <div data-aos="fade-up" data-aos-delay="250" className="flex items-center">
            <button className="relative bg-[#c9a84c] text-white font-black uppercase tracking-widest text-xs px-10 py-3 hover:bg-[#b8973b] transition-colors"
              style={{ clipPath: "polygon(0% 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, 16px 100%, 0% calc(100% - 16px))" }}
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right: form card */}
        <div data-aos="fade-left" data-aos-delay="150" className="bg-white rounded-xl shadow-sm border border-gray-100 px-8 py-8">
          <form className="flex flex-col gap-6">
            {/* Row 1: Name + Company Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-gray-500 text-sm">Name*</label>
                <input
                  type="text"
                  className="border-b border-gray-300 bg-transparent pb-2 text-sm text-gray-800 outline-none focus:border-[#b5451b] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-500 text-sm">Company Name</label>
                <input
                  type="text"
                  className="border-b border-gray-300 bg-transparent pb-2 text-sm text-gray-800 outline-none focus:border-[#b5451b] transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Email */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-500 text-sm">Email Address*</label>
              <input
                type="email"
                className="border-b border-gray-300 bg-transparent pb-2 text-sm text-gray-800 outline-none focus:border-[#b5451b] transition-colors"
              />
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
