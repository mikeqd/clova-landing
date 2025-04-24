"use client";

import HeroOne from "./components/HeroOne";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import UseCases from "./components/UseCases";
import FAQ from "./components/FAQ";
import BottomCTA from "./components/BottomCTA";
import Footer from "./components/Footer";
import HeaderOne from "./components/HeaderOne";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <HeaderOne />
        {/* Add padding top here to push content below the header */}
        {/* Adjust pt-16 sm:pt-20 based on your actual header height */}
        <main className="">
          <HeroOne />
          <Problem />
          <Solution />
          <UseCases />
          <FAQ />
          <BottomCTA />
          <Footer />
        </main>{" "}
      </div>
    </div>
  );
}
