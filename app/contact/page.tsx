"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import VantaGlobe from "../components/background animations/vantaGlobe";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg">

      {/* Globe hero banner */}
      <div className="relative h-[50vh]">
        <VantaGlobe />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary mb-4">
            Let&apos;s Talk.
          </h1>
          <p className="text-xl text-muted max-w-xl">
            Have a project in mind or just want to say hello? Drop me a message.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-8">

          {/* Email */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
            <a
              href="mailto:ayeshaiqbal.dev@gmail.com"
              className="text-muted hover:text-accent transition-colors"
            >
              ayeshaiqbal.dev@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Socials</h3>
            <div className="flex flex-col gap-3">

              <a
                href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
              >
                <FaLinkedin size={20} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <a
                href="https://github.com/Ayesha1130"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
              >
                <FaGithub size={20} />
                <span className="text-sm font-medium">GitHub</span>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61592748684406"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
              >
                <FaFacebook size={20} />
                <span className="text-sm font-medium">Facebook</span>
              </a>

            </div>
          </div>

          {/* Info Box */}
          <div className="bg-surface rounded-2xl p-6">
            <p className="text-sm text-muted leading-relaxed">
              I typically respond within 24 hours. For urgent inquiries, feel free to reach out directly via email or LinkedIn.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}