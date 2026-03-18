import { dekoorLogo } from "../assets";

const footerColumns = [
  {
    title: "Support",
    links: ["FAQ", "Shipping & Returns", "Care guide", "Redeem warranty"],
  },
  {
    title: "Social Media",
    links: ["Instagram", "Facebook", "Twitter", "TikTok"],
  },
  {
    title: "About Us",
    links: ["Our story", "Designer", "Craftmanship", "Sustainability"],
  },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 py-14 md:py-20 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* LEFT (BRANDING) */}
          <div className="md:col-span-5">
            <img
              src={dekoorLogo}
              alt="Dekoor Logo"
              className="mb-6 h-6 md:h-7"
            />

            <p className="text-gray-500 leading-relaxed mb-8 md:mb-12 max-w-sm text-sm md:text-base">
              Dekoor is a furniture company created to fulfill the needs of
              family with aesthetic feeling in their furniture. Always pay
              attention to details and give clear communication for the
              customers. Priority of our design is comfortability.
            </p>

            <p className="text-gray-400 text-xs md:text-sm">
              ©Copyright 2022 Dekoor
            </p>
          </div>

          {/* RIGHT (LINKS) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerColumns.map((col, idx) => (
              <div key={idx}>
                <h4 className="text-gray-900 font-semibold text-sm md:text-lg mb-4 md:mb-6">
                  {col.title}
                </h4>

                <ul className="space-y-3 text-gray-500 text-sm md:text-base">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="hover:text-brown-1 transition-all duration-200 ease-in-out">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
