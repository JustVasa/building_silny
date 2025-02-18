"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-4 py-2 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[rgba(0,0,0,0.7)] text-white shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-between w-full pl-4 md:pl-8">
        {/* Logo přikotveno k levému okraji */}
        <Link href="/" className="flex items-center">
          <Image src="/logo1.png" alt="Logo" width={150} height={150} className="mr-2" />
        </Link>

        {/* Desktop Menu */}
        <div className="text-xl hidden md:flex space-x-6 font-poppins">
          <Link href="/menu" className="hover:opacity-70">
            ČINNOST
          </Link>
          <Link href="/reference" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
            REFERENCE
          </Link>
          <Link href="/contact" className="hover:opacity-70">
            O NÁS
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none z-50 relative"
        >
          <div className={`w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-[rgba(0,0,0,0.9)] text-white flex flex-col items-center justify-center space-y-6 text-2xl font-semibold transform transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <Link href="/menu" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
          ČINNOST
        </Link>
        <Link href="/reference" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
          REFERENCE
        </Link>
        <Link href="/contact" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
          O NÁS
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
