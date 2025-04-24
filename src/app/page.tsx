"use client";

import HeroOne from "./components/HeroOne";
import { Inter } from "next/font/google";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import UseCases from "./components/UseCases";
import FAQ from "./components/FAQ";
import BottomCTA from "./components/BottomCTA";
import Footer from "./components/Footer";
import HeaderOne from "./components/HeaderOne";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={inter.className}>
      <HeaderOne />
      <div className="pt-0">
        {" "}
        {/* Add padding top to account for fixed header */}
        <HeroOne />
        <div className="max-w-[1024px] w-full mx-auto px-6 lg:px-0">
          <Problem />
          <Solution />
          <UseCases />
          <FAQ />
          <BottomCTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}
