import { search, playButton, heroBanner, arrowRightWhite } from "../assets";

const Hero = () => {
  return (
    <section className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-2/3 bg-white flex flex-col justify-center items-center px-6 md:px-24 py-12 md:py-20 text-center md:text-left">
        {/* TITLE */}
        <h1 className="font-extrabold text-brown-1 text-3xl sm:text-4xl md:text-7xl leading-tight">
          The kind of <br />
          <span className="text-khaki-2">furniture</span> you have <br />
          been looking for
        </h1>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 mt-8 md:mt-15 text-brown-1 text-sm md:text-2xl w-full max-w-xs md:max-w-full md:w-auto">
          <button className="flex w-full md:w-auto justify-center items-center gap-3 md:gap-4 px-6 md:px-12 py-4 md:py-5 rounded-xl bg-khaki hover:bg-khaki-2 transition-all duration-300 ease-in-out cursor-pointer">
            <img
              className="w-4 h-4 md:w-5 md:h-5"
              src={search}
              alt="Search"
            />
            SEARCH CATALOG
          </button>

          <button className="flex w-full md:w-auto justify-center items-center gap-3 md:gap-4 px-6 md:px-12 py-4 md:py-5 rounded-xl border border-brown-1 hover:ring hover:ring-brown-1 transition-all duration-300 ease-in-out cursor-pointer">
            <img
              src={playButton}
              alt="Watch Video"
              className="w-4 h-4 md:w-5 md:h-5"
            />
            WATCH VIDEO
          </button>
        </div>
      </div>

      <HeroBanner />
    </section>
  );
};

const HeroBanner = () => {
  return (
    <div className="w-full md:w-1/3 relative md:h-auto">
      <img
        src={heroBanner}
        alt="Sofa"
        className="w-full h-96 md:h-190 object-cover"
      />

      <div className="absolute bottom-6 left-6 md:bottom-32 md:left-24 space-y-2">
        <p className="text-xs md:hidden text-white/80 mb-42">
          HIGHLIGHTED PRODUCT
        </p>

        <div className="flex items-center bg-gray-2 px-3 py-1 md:px-4 md:py-2 w-fit rounded-xl text-sm md:text-2xl text-brown-1">
          <span>$329</span>
        </div>

        <h2 className="text-2xl md:text-6xl py-2 md:py-4 text-white">
          Pösht Sofa
        </h2>

        <button className="flex items-center gap-2 bg-brown-1 text-white px-4 md:px-6 py-3 md:py-4 rounded-xl hover:bg-brown-2 transition-all duration-300 ease-in-out cursor-pointer text-sm md:text-base">
          <span>VIEW DETAILS</span>
          <img
            className="w-4 h-4 md:w-5 md:h-5"
            src={arrowRightWhite}
            alt="Arrow Right"
          />
        </button>
      </div>
    </div>
  );
};

export default Hero;
