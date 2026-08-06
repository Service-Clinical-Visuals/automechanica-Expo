"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SmoothAOS() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      autoRaf: true,
    });

    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
