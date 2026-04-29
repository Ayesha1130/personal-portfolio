"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Sizes
const RING_HALF = 20;
const DOT_HALF = 3;

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;

    if (!ring || !dot) return;

    gsap.set([ring, dot], {
      x: -100,
      y: -100,
      opacity: 0,
    });

    const xRing = gsap.quickTo(ring, "x", {
      duration: 0.45,
      ease: "power3.out",
    });

    const yRing = gsap.quickTo(ring, "y", {
      duration: 0.45,
      ease: "power3.out",
    });

    const xDot = gsap.quickTo(dot, "x", {
      duration: 0.08,
    });

    const yDot = gsap.quickTo(dot, "y", {
      duration: 0.08,
    });

    const showCursor = () => {
      gsap.to([ring, dot], {
        opacity: 1,
        duration: 0.25,
      });
    };

    const hideCursor = () => {
      gsap.to([ring, dot], {
        opacity: 0,
        duration: 0.25,
      });
    };

    const onMove = (e: MouseEvent) => {
      showCursor();

      xRing(e.clientX - RING_HALF);
      yRing(e.clientY - RING_HALF);

      xDot(e.clientX - DOT_HALF);
      yDot(e.clientY - DOT_HALF);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;

      if (t.closest(".project-card")) {
        gsap.to(ring, {
          scale: 2.8,
          borderColor: "#00ffff",
          boxShadow: "0 0 25px rgba(0,255,255,0.5)",
          duration: 0.3,
        });
      } else if (t.closest("a, button")) {
        gsap.to(ring, {
          scale: 1.8,
          borderColor: "#8b5cf6",
          boxShadow: "0 0 20px rgba(139,92,246,0.45)",
          duration: 0.3,
        });
      }
    };

    const onOut = () => {
      gsap.to(ring, {
        scale: 1,
        borderColor: "rgba(255,255,255,0.5)",
        boxShadow: "0 0 0px rgba(0,0,0,0)",
        duration: 0.3,
      });
    };

    const onDown = () => {
      gsap.to(ring, {
        scale: 0.75,
        duration: 0.12,
      });

      gsap.to(dot, {
        scale: 1.8,
        duration: 0.12,
      });
    };

    const onUp = () => {
      gsap.to(ring, {
        scale: 1,
        duration: 0.15,
      });

      gsap.to(dot, {
        scale: 1,
        duration: 0.15,
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mouseenter", showCursor);

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mouseenter", showCursor);

      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
    };
  });

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/50 pointer-events-none z-[9999] backdrop-blur-sm mix-blend-difference"
      />

      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-[9999]"
      />
    </>
  );
}