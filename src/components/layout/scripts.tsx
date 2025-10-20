"use client";
import React, { useEffect, useState } from "react";

const Scripts = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const scripts = [
      "/assets/js/jquery-3.6.0.min.js",
      "/assets/js/jquery-migrate-3.4.0.min.js",
      "/assets/js/plugins.js",
      "/assets/js/gsap.min.js",
      "/assets/js/ScrollSmoother.min.js",
      "/assets/js/ScrollTrigger.min.js",
      "/assets/js/smoother-script.js",
      "/assets/js/scripts.js",

      "/assets/vendor/jquery/jquery.min.js",
      "/assets/vendor/gsap/gsap.min.js",

      // ✅ Animation & plugin scripts (parallel load)

      "/assets/vendor/gsap/ScrollToPlugin.min.js",
      "/assets/vendor/gsap/ScrollTrigger.min.js",
      "/assets/vendor/lenis.js",

      // ✅ Utility scripts

      "/assets/vendor/isotope/imagesloaded.pkgd.min.js",
      "/assets/vendor/isotope/isotope.pkgd.min.js",
      "/assets/vendor/isotope/packery-mode.pkgd.min.js",

      // ✅ UI components

      "/assets/vendor/fancybox/js/fancybox.umd.js",
      "/assets/vendor/swiper/js/swiper-bundle.min.js",

      // ✅ Your main theme file last
      "/assets/js/theme.js",
    ];

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = false; // Load in order
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
      });
    };

    // Load scripts sequentially
    const loadAllScripts = async () => {
      try {
        for (const scriptSrc of scripts) {
          await loadScript(scriptSrc);
          console.log(`Loaded: ${scriptSrc}`);
        }
        console.log("All scripts loaded successfully");
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    loadAllScripts();

    // Cleanup function
    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          script.remove();
        }
      });
    };
  }, [mounted]);

  return null; // This component doesn't render anything
};

export default Scripts;
