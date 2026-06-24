import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[#163360] text-white">
      {/* Main footer */}
      <Container>
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[20fr_15fr_15fr_35fr_15fr] gap-10">

          {/* Logo + tagline */}
          <div className="lg:col-span-1 flex flex-col items-start gap-3">
            <img src="/moto/chemnaft/footerlogo.png" alt="Chemnaft" className="h-50 w-auto mb-4" />
            <p className="content-white text-[16px]!">Producer of lubricating oils</p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <p className="content-white font-bold mb-4 text-[19px]!">Quick Links</p>
            <ul className="space-y-2 content-white text-[16px]!">
              {["Home", "Qualitium", "Products", "About us", "Contact", "Choose the oil"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* OUR BRANDS */}
          <div className="lg:col-span-1">
            <p className="content-white font-bold mb-4 text-[19px]!">Contact Us</p>
            <ul className="space-y-3 font-normal content-white text-[16px]!">
              <li className="flex items-center gap-2 ">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#CF3232]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.29 6.29l1.42-1.42a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +48 518 820 975
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#CF3232]">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Export@Chemnaft.Com
              </li>
              <li className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-[#CF3232]">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Chemnaft Sp. Z O.O. S.K.A.<br />
                  Brześnie Nowe 11B/2<br />
                  09-130 Baboszewo<br />
                  NIP: 9581664337
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <p className="content-white text-[19px]! font-bold mb-4">Newsletter</p>
            <p className="content-white text-[16px]! mb-8">
              Stay informed with the latest product launches, industry news, technical updates, and
              innovations from Chemnaft and Qualitium.
            </p>
            <div className="flex bg-white rounded-md max-w-[340px]!">
              <input
                type="email"
                placeholder="Email Address..."
                className="flex-1 text-[#1a2e5a] text-sm px-3 py-2.5 outline-none placeholder-gray-400"
              />
              <button className="bg-[#CF3232] px-3 py-3 hover:bg-[#b02828] transition-colors shrink-0 m-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <p className="content-white font-bold mb-5 text-[19px]!">Social Media Links</p>
            <div className="flex gap-1">
              <a href="#" className="w-12 h-12 hover:opacity-80 transition-opacity">
                <img src="/moto/chemnaft/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain" />
              </a>
              <a href="#" className="w-12 h-12 hover:opacity-80 transition-opacity">
                <img src="/moto/chemnaft/insta.png" alt="Instagram" className="w-full h-full object-contain" />
              </a>
              <a href="#" className="w-12 h-12 hover:opacity-80 transition-opacity">
                <img src="/moto/chemnaft/fb.png" alt="Facebook" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-4">
          <p className="text-center content-white font-light! text-[16px]!">
            © Copyright 2022 - CHEMNAFT
          </p>
        </div>
      </Container>
    </footer>
  );
}
