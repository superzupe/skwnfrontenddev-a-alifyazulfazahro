import { useState } from "react";
import { dekoorLogo, shopbag, arrowDown, bars } from "../assets";

/* HEADER */
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full shadow-md font-inter">
      <div className="flex flex-row justify-between items-center px-9 md:px-12 py-6">
        {/* Logo */}
        <img
          src={dekoorLogo}
          alt="Dekoor Logo"
          className="h-8 md:h-auto"
        />

        {/* Desktop Navbar */}
        <div className="hidden md:flex">
          <Navbar />
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex">
          <NavbarActions />
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1 p-2">
          <img
            className="w-6 h-6"
            src={bars}
            alt="Bars"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden px-6 pb-6 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}>
        <Navbar mobile />
        <NavbarActions mobile />
      </div>
    </div>
  );
};

/* TYPES  */
type NavbarProps = {
  mobile?: boolean;
};

type NavbarActionsProps = {
  mobile?: boolean;
};

/* NAVBAR  */
const Navbar: React.FC<NavbarProps> = ({ mobile = false }) => {
  const [isFurnitureOpen, setIsFurnitureOpen] = useState<boolean>(false);

  const navbarItems: string[] = [
    "About Us",
    "Furniture",
    "Partnership",
    "Contact",
  ];

  const furnitureItems: string[] = [
    "Living Room",
    "Bedroom",
    "Home Office",
    "Gaming Room",
  ];

  return (
    <ul
      className={`flex ${
        mobile
          ? "flex-col gap-4 mt-4"
          : "flex-row justify-center items-center gap-12"
      } text-brown-1 font-medium`}>
      {navbarItems.map((item) =>
        item === "Furniture" ? (
          <li
            key={item}
            className="relative">
            {/* MAIN BUTTON */}
            <div
              onClick={() => setIsFurnitureOpen(!isFurnitureOpen)}
              className="flex flex-row items-center gap-1 hover:bg-black/5 rounded-full transition-all duration-300 ease-in-out px-3 py-2 cursor-pointer">
              <span>{item}</span>
              <img
                src={arrowDown}
                alt="Arrow Down"
                className={`w-4 h-4 transition-transform ${
                  isFurnitureOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* DROPDOWN */}
            <ul
              className={`
    ${
      mobile
        ? "mt-2 flex flex-col gap-2"
        : "absolute top-12 left-0 bg-white shadow-lg rounded-xl p-3 w-44"
    }
    transition-all duration-300 ease-in-out
    ${
      isFurnitureOpen
        ? "opacity-100 scale-100 block"
        : "opacity-0 scale-95 hidden"
    }
  `}>
              {furnitureItems.map((sub) => (
                <li key={sub}>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-lg hover:bg-black/5 transition">
                    {sub}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li key={item}>
            <a
              href="#"
              className="block hover:bg-black/5 rounded-full transition-all duration-300 ease-in-out px-3 py-2">
              {item}
            </a>
          </li>
        ),
      )}
    </ul>
  );
};

/* ACTIONS */
const NavbarActions: React.FC<NavbarActionsProps> = ({ mobile = false }) => {
  return (
    <div
      className={`flex ${
        mobile ? "flex-row mt-6 gap-3 items-center" : "flex-row gap-4"
      }`}>
      <button className="flex-1 py-3 px-6 bg-khaki rounded-lg text-brown-1 font-medium hover:bg-khaki-2 transition-all duration-300 ease-in-out cursor-pointer">
        Sign Up
      </button>

      <button className="bg-brown-2 p-3 rounded-lg hover:bg-brown-1 transition-all duration-300 ease-in-out cursor-pointer flex justify-center items-center">
        <img
          src={shopbag}
          alt="Shop Bag"
        />
      </button>
    </div>
  );
};

export default Header;
