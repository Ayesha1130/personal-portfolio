import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border pt-14 pb-8 text-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-[clamp(20px,6vw,110px)]">

        {/* Contact Banner */}
        <div className="relative overflow-hidden bg-surface border border-border rounded-3xl py-8 px-6 md:px-10 text-center mb-12 shadow-lg">
          <div className="absolute top-0 left-0 w-40 h-40 bg-accent/10 blur-[90px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 blur-[90px] rounded-full pointer-events-none" />

          <p className="relative z-10 text-base md:text-lg font-medium text-primary">
            Interested in working together?
          </p>

          <Link
            href="mailto:ayeshaiqbal.dev@gmail.com"
            className="relative z-10 inline-block mt-4 bg-primary text-bg py-3 px-7 rounded-xl font-semibold hover:bg-accent hover:scale-105 transition-all duration-300 shadow-md"
          >
            ayeshaiqbal.dev@gmail.com
          </Link>
        </div>

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/dp.jpeg"
              alt="Ayesha Iqbal"
              width={46}
              height={46}
              className="rounded-full object-cover border border-border group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
              Ayesha Iqbal
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium">
            <Link
              href="/projects"
              className="text-muted hover:text-accent transition-colors duration-300"
            >
              Projects
            </Link>

            <Link
              href="/services"
              className="text-muted hover:text-accent transition-colors duration-300"
            >
              Services
            </Link>

            <Link
              href="/contact"
              className="text-muted hover:text-accent transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">

            <Link
              href="https://www.facebook.com/profile.php?id=61592748684406"
              target="_blank"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-white hover:bg-accent transition-all duration-300"
            >
              <FaFacebook />
            </Link>

            <Link
              href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/"
              target="_blank"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-white hover:bg-accent transition-all duration-300"
            >
              <FaLinkedin />
            </Link>

            <Link
              href="https://github.com/Ayesha1130"
              target="_blank"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-white hover:bg-accent transition-all duration-300"
            >
              <FaGithub />
            </Link>

          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-xs text-muted mt-10 border-t border-border pt-6">
          &copy; {new Date().getFullYear()} Ayesha Iqbal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}