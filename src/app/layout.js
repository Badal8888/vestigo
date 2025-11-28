"use client";

import { useEffect } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-24 min-h-screen bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
