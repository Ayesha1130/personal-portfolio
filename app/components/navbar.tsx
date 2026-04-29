"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-[clamp(20px,6vw,110px)] py-4 flex items-center justify-between ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/">
        <span className="text-2xl md:text-3xl font-bold tracking-wide text-primary hover:text-accent transition-colors duration-300 cursor-pointer">
          Ayesha Iqbal
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {[
          { label: "Projects", href: "/projects" },
          { label: "Services", href: "/services" },
          { label: "Contact", href: "/contact" },
        ].map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="relative text-[17px] font-semibold text-primary hover:text-accent transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            {label}
          </Link>
        ))}

        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-white transition-all duration-300 text-primary"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        )}
      </nav>

      {/* Mobile Right Side */}
      <div className="md:hidden flex items-center gap-3">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-white transition-all duration-300 text-primary"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        )}

        <button
          className="p-2 rounded-md bg-secondary text-primary hover:bg-accent hover:text-white transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-bg/95 backdrop-blur-md border-t border-border shadow-lg flex flex-col items-center py-6 gap-5 md:hidden animate-fadeIn">
          {[
            { label: "Projects", href: "/projects" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-base font-semibold text-primary hover:text-accent transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}