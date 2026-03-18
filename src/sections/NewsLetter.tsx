import { mail } from "../assets";

const Newsletter = () => {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-24">
      <div className="max-w-7xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-14 text-brown-1 text-center md:text-left">
        {/* LABEL */}
        <p className="text-sm md:text-2xl mb-4 md:mb-6 font-medium tracking-wider">
          LIMITED DEALS
        </p>

        {/* TITLE */}
        <h2 className="text-2xl md:text-6xl font-bold leading-[1.2] mb-8 md:mb-12">
          Become a member and get 10% off of your first purchase
        </h2>

        {/* FORM */}
        <form className="flex flex-col md:flex-row gap-4 md:gap-0 max-w-xl mx-auto md:mx-0">
          <input
            type="email"
            placeholder="Enter your email here"
            className="w-full py-4 md:py-6 px-6 md:px-9 rounded-xl md:rounded-l-xl md:rounded-r-none text-base md:text-2xl outline-none placeholder:text-brown-2 focus:ring-2 focus:ring-khaki transition-all duration-300 ease-in-out"
          />

          <button className="bg-khaki hover:bg-white rounded-xl md:rounded-r-xl md:rounded-l-none px-6 py-4 md:p-7 flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer">
            <img
              src={mail}
              alt="Mail Icon"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
