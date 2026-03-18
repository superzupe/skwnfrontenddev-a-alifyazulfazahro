import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  recBedroom,
  recLivingRoom,
  recHomeOffice,
  recGamingRoom,
} from "../assets";

interface Category {
  id: string;
  name: string;
  desc: string;
  image: string;
}

const Recommendations = () => {
  const [activeId, setActiveId] = useState("living-room");

  const categories: Category[] = [
    {
      id: "bedroom",
      name: "Bedroom",
      desc: "Enjoy a great living room aesthetics with your family Designs created for increased comfortability",
      image: recBedroom,
    },
    {
      id: "living-room",
      name: "Living Room",
      desc: "Enjoy a great living room aesthetics with your family Designs created for increased comfortability",
      image: recLivingRoom,
    },
    {
      id: "home-office",
      name: "Home Office",
      desc: "Boost productivity with organized workspaces and ergonomic chair sets.",
      image: recHomeOffice,
    },
    {
      id: "gaming-room",
      name: "Gaming Room",
      desc: "Ultimate setups with high-performance desks for immersive gaming sessions.",
      image: recGamingRoom,
    },
  ];

  const activeIndex = categories.findIndex((cat) => cat.id === activeId);

  return (
    <section className="w-full py-12 md:py-20 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
        {/*  MOBILE TOP  */}
        <div className="w-full md:w-1/3 text-brown-1 order-1 md:order-2">
          <p className="text-sm md:text-2xl mb-2 text-center md:text-left">
            Categories
          </p>

          <h2 className="text-xl md:text-5xl font-bold leading-tight mb-6 text-center md:text-left">
            Furniture Sets Recommendations
          </h2>

          <div className="flex flex-col gap-2 bg-gray-50 p-3 rounded-xl">
            {categories.map((cat) => {
              const isActive = cat.id === activeId;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className={`text-black p-4 rounded-lg text-left transition-all duration-300 ease-in-out cursor-pointer ${
                    isActive ? "bg-khaki" : "hover:bg-gray-100"
                  }`}>
                  <h3 className="text-base font-bold">{cat.name}</h3>

                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 0.8 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="text-sm mt-1 leading-relaxed overflow-hidden">
                        {cat.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>

        {/*  DESKTOP CAROUSEL  */}
        <div className="hidden md:flex w-full md:w-2/3 h-131 overflow-hidden">
          {categories.map((cat, index) => {
            const isActive = cat.id === activeId;

            let start = activeIndex - 1;
            if (start < 0) start = 0;
            if (start > categories.length - 3) start = categories.length - 3;

            const isVisible = index >= start && index < start + 3;

            return (
              <motion.div
                key={cat.id}
                layout
                initial={false}
                animate={{
                  width: isVisible ? "100%" : "0%",
                  flex: isVisible ? (isActive ? 3 : 1) : 0,
                  opacity: isVisible ? 1 : 0,
                  marginRight: isVisible && index !== start + 2 ? 16 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 26,
                }}
                style={{ display: "flex" }}
                className="h-full overflow-hidden rounded-xl shadow-sm relative shrink-0 bg-gray-100 cursor-pointer"
                onClick={() => setActiveId(cat.id)}>
                <img
                  src={cat.image}
                  className="w-full h-full object-cover"
                  alt={cat.name}
                />
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE IMAGE PREVIEW */}
        <div className="flex md:hidden gap-3 overflow-x-auto order-2">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className="min-w-27.5 h-28 rounded-xl overflow-hidden cursor-pointer">
              <img
                src={cat.image}
                className="w-full h-full object-cover"
                alt={cat.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
