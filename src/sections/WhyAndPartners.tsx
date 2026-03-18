import {
  gustoLogo,
  stripeLogo,
  treehouseLogo,
  upworkLogo,
  searchKhaki,
  shopbagKhaki,
} from "../assets";

const WhyAndPartners = () => {
  const features = [
    {
      id: 1,
      title: "Manufactured with quality materials",
      icon: searchKhaki,
    },
    {
      id: 2,
      title: "5 Years of warranty for each product",
      icon: "5",
    },
    {
      id: 3,
      title: "20 Years of expertise",
      icon: shopbagKhaki,
    },
  ];

  return (
    <section className="w-full">
      <div className="bg-brown-1 py-12 md:py-18 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          {/* TITLE SMALL */}
          <p className="text-khaki text-sm md:text-2xl mb-6 md:mb-14 tracking-widest text-center md:text-left">
            WHY CHOOSE US?
          </p>

          {/* TITLE BIG */}
          <h2 className="text-khaki text-2xl md:text-6xl font-bold mb-10 md:mb-16 text-center md:text-left leading-snug">
            We care about details and the quality of our products
          </h2>

          {/* FEATURES */}
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-12 text-khaki">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex items-center md:items-start gap-4">
                {/* ICON */}
                <div className="bg-gray w-12 h-12 rounded-xl shrink-0 flex items-center justify-center">
                  {feature.icon === "5" ? (
                    <span className="text-xl font-bold text-khaki">5</span>
                  ) : (
                    <img
                      className="w-5 h-5 md:w-6 md:h-6 object-contain"
                      src={feature.icon}
                      alt={feature.title}
                    />
                  )}
                </div>

                {/* TEXT */}
                <p className="text-sm md:text-2xl font-bold uppercase leading-snug">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PartneredBrand />
    </section>
  );
};

const PartneredBrand = () => {
  const brands = [
    { name: "Gusto", logo: gustoLogo },
    { name: "Stripe", logo: stripeLogo },
    { name: "Treehouse", logo: treehouseLogo },
    { name: "Upwork", logo: upworkLogo },
  ];

  return (
    <div className="bg-white py-10 md:py-16 px-6 md:px-24 md:mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center justify-center gap-8 md:gap-12">
        {/* TEXT */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-3xl md:text-8xl font-extrabold text-brown-1">
            25+
          </h3>
          <p className="text-brown-1 text-sm md:text-2xl uppercase tracking-wide">
            Partnered Brands
          </p>
        </div>

        {/* LOGOS */}
        <div className="flex items-center flex-wrap justify-center gap-8 md:gap-25">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
              className="h-6 md:h-13 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyAndPartners;
