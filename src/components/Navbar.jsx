"use client"
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "../assets/logo.png";
import vitLogo from "../assets/vitLogo.png";
const menuItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Blogs",
    to: "/blog",
  },
  {
    name: "Events",
    to: "/events",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full  shadow-orange-400 sticky top-0 bg-black text-white z-50 ease-in-out ${
        isScrolled ? "bg-opacity-10 bg-white backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className="h-[10%]">
            <img src={Logo} alt="Club Logo" className="h-[3.5rem]" />
          </span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.to}
                  className={({ isActive }) =>
                    `text-sm font-semibold hover:text-orange-500 ${
                      isActive ? "text-orange-500" : "text-gray-100"
                    }`
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <img src={vitLogo} alt="VIT Logo" className="h-[3rem]" />
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img src={Logo} alt="Club Logo" className="h-[2rem]" />
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.to}
                        className={({ isActive }) =>
                          `-m-3 flex items-center rounded-md p-3 text-sm font-semibold ${
                            isActive ? "text-orange-500" : "text-gray-100"
                          }`
                        }
                      >
                        <span className="ml-3 text-base font-medium">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                <img
                  src={vitLogo}
                  alt="VIT Logo"
                  className="h-[3rem] my-4 mx-auto"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
