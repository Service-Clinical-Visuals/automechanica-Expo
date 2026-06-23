import Image from "next/image";

const quickLinks = [
  ["Home", "Oil Advisor"],
  ["Products", "News"],
  ["Segments", "Contact"],
  ["About Us", ""],
  ["Brandportal", ""],
];

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white twok">
      {/* Main footer content */}
      <div className="mx-auto max-w-[90%] py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1: Logo + description */}
        <div data-aos="fade-up" className="flex flex-col gap-4">
          <Image
            src="/moto/synmar/logo.png"
            alt="Synmar Logo"
            width={220}
            height={50}
            className="object-contain mb-5"
          />
          <p className="content-white">
            SYNMAR®, KEEPS YOU MOVING! SYNMAR is a young and dynamic company specialized in lubricants and other technical fluids. We are active in different countries with a wide range of high-quality products.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col gap-4">
          <h3 className="subheading-white">Quick Links</h3>
          <div className="border-t border-gray-600 pt-4">
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              {quickLinks.map(([left, right], i) => (
                <div key={i} className="contents">
                  {left && (
                    <a href="#" className="content-white hover:text-[#c9a84c] transition-colors">
                      {left}
                    </a>
                  )}
                  {right && (
                    <a href="#" className="content-white hover:text-[#c9a84c] transition-colors">
                      {right}
                    </a>
                  )}
                  {!right && <span />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Column 3: Contact Details */}
        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col gap-4">
          <h3 className="subheading-white">Contact details</h3>
          <div className="flex flex-col gap-4 pt-1">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <span className="text-[#c9a84c]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span className="content-white">+31 (0) 33 303 3044</span>
            </div>
            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="text-[#c9a84c]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <span className="content-white">Info@Synmar.NL</span>
            </div>
            {/* Address */}
            <div className="flex items-start gap-3">
              <span className="text-[#c9a84c] mt-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span className="content-white">
                Albert Schweitzerstraat 7<br />
                7131 PG Lichtenvoorde<br />
                The Netherlands
              </span>
            </div>
          </div>
        </div>

        {/* Column 4: Follow Us */}
        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col gap-4">
          <h3 className="subheading-white">Follow us</h3>
          <div className="flex gap-3 pt-1">
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-[#2e2e2e] flex items-center justify-center hover:bg-[#c9a84c] transition-colors group">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#c9a84c] group-hover:text-black transition-colors">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#2e2e2e] flex items-center justify-center hover:bg-[#c9a84c] transition-colors group">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#c9a84c] group-hover:text-black transition-colors">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-[#2e2e2e] flex items-center justify-center hover:bg-[#c9a84c] transition-colors group">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#c9a84c] group-hover:text-black transition-colors">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-[#2e2e2e] flex items-center justify-center hover:bg-[#c9a84c] transition-colors group">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#c9a84c] group-hover:text-black transition-colors">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon fill="#1e1e1e" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="content">
        <div className="mx-auto max-w-[90%] py-4 flex flex-wrap items-center justify-center gap-1 text-gray-500 ">
          <span>Synmar© 2026</span>
          <span>|</span>
          <a href="#" className="hover:text-[#c9a84c] transition-colors">Terms and Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-[#c9a84c] transition-colors">Privacy Statement</a>
          <span>|</span>
          <a href="#" className="hover:text-[#c9a84c] transition-colors">Cookie Statement</a>
        </div>
      </div>
    </footer>
  );
}
