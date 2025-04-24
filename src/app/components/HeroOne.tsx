"use client";

import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});
export default function HeroOne() {
  return (
    <div className="relative bg-bgColor">
      {/* SVG Background */}
      <div
        className="absolute inset-0 w-full h-full z-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: 'url("/heroBg.svg")' }}
        aria-hidden="true"
      />

      <div className="relative isolate px-6 pt-10 lg:px-8">
        {/* BLOB BG 1 */}
        {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#6ecc46] to-[#fdf60f] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div> */}
        <div className="mx-auto max-w-5xl py-28 sm:py-44 lg:py-52">
          <div className="text-center">
            <div className="max-w-[800px] w-full mx-auto">
              <h1 className="font-semibold text-balance text-gray-100 text-[32px] sm:text-6xl home text-center max-w-[340px] sm:max-w-[615px] mx-auto sm:leading-[64px] tracking-[-1.1px]">
                <div className={bricolageGrotesque.className}>
                  <span>Organize your Shots </span>
                  <span>in Seconds, Not Hours</span>
                </div>
              </h1>
              <p className="mt-4 text-base sm:text-[18px] sm:leading-[27px] font-medium text-center text-white/70">
                Clova is your AI assistant, automating footage categorization
                and delivering instant, organized clips for a faster, more
                efficient editing process.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-[linear-gradient(90deg,_rgb(126,_217,_87)_0%,_rgb(201,_226,_101)_100%)] px-3.5 py-2.5 font-semibold text-gray-900 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
              </div>
            </div>
            {/* DASHBOARD IMAGE */}
            <div className="mt-16 sm:mt-12 w-full">
              <div className="relative w-full flex flex-col items-center">
                <div className="relative w-full">
                  <Image
                    alt="Seline dashboard page screenshot"
                    aria-labelledby="tab-1"
                    width="2688"
                    height="1504"
                    decoding="async"
                    data-nimg="1"
                    className="mb-6 w-full h-auto rounded-lg border border-border/30 relative z-[2] shadow-dashboard block shadow-[0_0_35px_rgba(126,217,87,0.25),0_0_15px_rgba(201,226,101,0.15)]"
                    style={{ color: "transparent" }}
                    sizes="(max-width: 500px) 350px, (max-width: 1200px) 1100px"
                    src="/ClovaMain.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BLOB BG 2 */}
        {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#fdf60f] to-[#6ecc46] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div> */}
      </div>
    </div>
  );
}
