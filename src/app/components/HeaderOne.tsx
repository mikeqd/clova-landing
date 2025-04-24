"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const HeaderOne = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 px-4">
        <div
          className={`transition-all duration-300 ${
            isScrolled ? "py-2" : "py-6"
          }`}
        >
          <header className="border border-black/10 backdrop-blur-lg supports-[backdrop-filter]:bg-white/10 mx-auto flex h-fit max-w-5xl items-center justify-between rounded-[10px]">
            <nav
              className="flex items-center justify-between p-2 lg:px-6 w-full"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                  <Image
                    className="h-12 w-auto"
                    src="/logo.webp"
                    alt=""
                    height={60}
                    width={60}
                  />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="size-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                <Link
                  href="/"
                  className="text-sm/6 font-medium text-white/70 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-sm/6 font-medium text-white/70 hover:text-white"
                >
                  Demo Video
                </Link>
                <Link
                  href="#"
                  className="text-sm/6 font-medium text-white/70 hover:text-white"
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="text-sm/6 font-medium text-white/70 hover:text-white"
                >
                  Use Cases
                </Link>
                <Link
                  href="#"
                  className="text-sm/6 font-medium text-white/70 hover:text-white"
                >
                  FAQs
                </Link>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a
                  href="#"
                  className="text-sm/6 font-semibold text-gray-900 bg-[linear-gradient(90deg,_rgb(126,_217,_87)_0%,_rgb(201,_226,_101)_100%)]
    px-5 py-2 rounded-md"
                >
                  Get Started
                </a>
              </div>
            </nav>
          </header>
        </div>
      </div>

      {/* Mobile menu - moved outside the header container */}
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed inset-0 z-50 bg-gray-800/50 bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={menuRef}
          className={`fixed inset-y-0 right-0 z-50 w-[70%] overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={toggleMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden={true}
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Demo Video
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Use Cases
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderOne;
