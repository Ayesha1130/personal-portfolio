"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import VantaFog from "./background animations/vantaFogBg";

gsap.registerPlugin(useGSAP);

const WORDS = ["Websites", "AI Agents", "Experiences", "Products"];

export default function HeroSection() {
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [current, setCurrent] = useState(0);

  useGSAP(() => {
    const total = WORDS.length;
    let idx = 0;

    wordRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { y: i === 0 ? 0 : 60, opacity: i === 0 ? 1 : 0 });
    });

    const cycle = () => {
      const current = wordRefs.current[idx];
      const next = wordRefs.current[(idx + 1) % total];
      if (!current || !next) return;

      const tl = gsap.timeline({
        onComplete: () => {
          idx = (idx + 1) % total;
          setCurrent(idx);
          setTimeout(cycle, 2000);
        },
      });

      tl.to(current, {
        y: -60,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });

      tl.set(next, { y: 60, opacity: 0 });

      tl.to(next, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const timer = setTimeout(cycle, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-[clamp(20px,6vw,110px)] pt-24 pb-16 overflow-hidden">
      {/* Background Animation */}
      {/* <VantaFog /> */}

      {/* Soft Gradient Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-14 md:gap-20">
        
        {/* Left Content */}
        <div className="flex-1 min-w-0 text-center md:text-left">
          <span className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 text-sm text-muted mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            Available for work
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-tight">
            Building{" "}
            <span className="relative inline-block overflow-hidden align-top">
              <span className="invisible whitespace-nowrap">Experiences</span>

              {WORDS.map((word, i) => (
                <span
                  key={word}
                  ref={(el) => {
                    wordRefs.current[i] = el;
                  }}
                  className="absolute left-0 top-0 whitespace-nowrap text-accent"
                  style={{ willChange: "transform, opacity", opacity: 0 }}
                >
                  {word}
                </span>
              ))}
            </span>
            <br />
            that matter.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl leading-relaxed mx-auto md:mx-0">
            Full-Stack Developer &amp; AI Engineer crafting modern web apps and
            intelligent systems — from idea to deployment.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              href="/projects"
              className="inline-block bg-primary text-bg px-8 py-3.5 font-semibold rounded-xl hover:bg-accent hover:scale-105 transition-all duration-300 shadow-md"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="inline-block border-2 border-primary text-primary px-8 py-3.5 font-semibold rounded-xl hover:bg-primary hover:text-bg hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right Profile Card */}
        <div className="flex-shrink-0">
          <div className="relative w-72 h-80 lg:w-80 lg:h-96 bg-surface border border-border rounded-[28px] overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-500">
            <Image
              src="/images/dp.jpeg"
              alt="Ayesha Iqbal"
              fill
              unoptimized
              className="object-cover object-top"
            />

            {/* Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-bg/80 backdrop-blur-md rounded-2xl px-4 py-3 border border-border">
              <p className="text-sm font-semibold text-primary">
                Ayesha Iqbal
              </p>
              <p className="text-xs text-muted">
                Full-Stack Dev &amp; AI Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}