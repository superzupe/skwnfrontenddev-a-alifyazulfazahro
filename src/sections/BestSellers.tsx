import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  imgVelvetSofa,
  imgUndChair,
  imgOrangeSofa,
  imgTableLegs,
  imgWallShelves,
  arrowLeft,
  arrowRight,
} from "../assets";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const BestSellers = () => {
  const [activeId, setActiveId] = useState("und-chair");
  const scrollRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: "velvet-sofa",
      name: "Velvet Sofa",
      price: 450,
      image: imgVelvetSofa,
    },
    { id: "und-chair", name: "Und Chair", price: 329, image: imgUndChair },
    {
      id: "orange-sofa",
      name: "Orange Sofa",
      price: 599,
      image: imgOrangeSofa,
    },
    { id: "table-legs", name: "Table Legs", price: 150, image: imgTableLegs },
    {
      id: "wall-shelves",
      name: "Wall Shelves",
      price: 89,
      image: imgWallShelves,
    },
  ];

  const activeIndex = products.findIndex((p) => p.id === activeId);

  //  scroll ke item
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const cardWidth = 176; // 160 + gap
    const scrollX = index * cardWidth;

    container.scrollTo({
      left: scrollX,
      behavior: "smooth",
    });
  };

  const prev = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    setActiveId(products[newIndex].id);
    scrollToIndex(newIndex);
  };

  const next = () => {
    const newIndex = Math.min(products.length - 1, activeIndex + 1);
    setActiveId(products[newIndex].id);
    scrollToIndex(newIndex);
  };

  return (
    <section className="w-full py-12 md:py-16 px-6 md:px-24 bg-brown-1 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6 md:mb-9">
          <div className="text-khaki">
            <p className="text-xs md:text-2xl tracking-wider mb-2 md:mb-4">
              OUR PRODUCTS
            </p>
            <h2 className="text-lg md:text-5xl font-bold">
              This month's best seller
            </h2>
          </div>

          <button className="bg-khaki text-brown-1 px-4 md:px-9 py-2 md:py-3.5 rounded-xl text-xs md:text-base hover:bg-white transition-all duration-300 ease-in-outcursor-pointer">
            SEE MORE
          </button>
        </div>

        {/*  MOBILE  */}
        <div className="relative md:hidden">
          {/* LEFT */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-khaki w-10 h-10 rounded-full flex items-center justify-center shadow">
            <img
              src={arrowLeft}
              className="w-5 h-5"
            />
          </button>

          {/* SCROLL */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto px-10 scroll-smooth overflow-hidden">
            {products.map((prod) => {
              const isActive = prod.id === activeId;

              return (
                <div
                  key={prod.id}
                  onClick={() => {
                    setActiveId(prod.id);
                    const index = products.findIndex((p) => p.id === prod.id);
                    scrollToIndex(index);
                  }}
                  className={`min-w-40 h-60 rounded-xl overflow-hidden relative cursor-pointer transition ${
                    isActive ? "scale-105" : "opacity-80"
                  }`}>
                  <img
                    src={prod.image}
                    className="w-full h-full object-cover"
                    alt={prod.name}
                  />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-4 left-4">
                        <p className="bg-gray-2 w-fit text-sm text-brown-1 px-3 py-1 rounded-lg mb-2">
                          ${prod.price}
                        </p>
                        <h3 className="text-white text-lg font-semibold">
                          {prod.name}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-khaki w-10 h-10 rounded-full flex items-center justify-center shadow">
            <img
              src={arrowRight}
              className="w-5 h-5"
            />
          </button>
        </div>

        {/*  DESKTOP  */}
        <div className="hidden md:flex h-118 items-start justify-center w-full min-w-full overflow-hidden">
          {products.map((prod, index) => {
            const isActive = prod.id === activeId;

            let start = activeIndex - 1;
            if (start < 0) start = 0;
            if (start > products.length - 5) start = products.length - 5;

            const isVisible = index >= start && index < start + 5;

            return (
              <motion.div
                key={prod.id}
                layout
                initial={false}
                animate={{
                  width: isVisible ? "100%" : "0%",
                  flex: isActive ? 2 : 1,
                  height: isActive ? "100%" : "84%",
                  marginRight: isVisible && index !== start + 4 ? 24 : 0,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 26 }}
                style={{ display: "flex" }}
                className="overflow-hidden rounded-xl shadow-lg relative shrink-0 cursor-pointer"
                onClick={() => setActiveId(prod.id)}>
                <img
                  src={prod.image}
                  className="w-full h-full object-cover"
                  alt={prod.name}
                />

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute bottom-10 left-8">
                      <p className="bg-gray-2 text-2xl text-brown-1 px-4 py-2 rounded-xl inline-block mb-4">
                        ${prod.price}
                      </p>
                      <h3 className="text-5xl text-white">{prod.name}</h3>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        {/* DESKTOP NAV */}
        <div className="hidden md:flex justify-end gap-6 mt-6">
          <button
            onClick={prev}
            className="p-4 bg-khaki rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
            <img
              src={arrowLeft}
              className="w-6 h-6"
            />
          </button>

          <button
            onClick={next}
            className="p-4 bg-khaki rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
            <img
              src={arrowRight}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
