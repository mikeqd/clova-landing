import Image from "next/image";
import { Bricolage_Grotesque } from "next/font/google";
import {
  FolderIcon,
  MagnifyingGlassIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const Solution = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8">
      <div className="mt-28 section-content relative flex flex-col justify-between gap-8">
        <div className="flex flex-col text-center w-full">
          <h2 className="mt-1 home bg-gradient-to-r from-[#7ED957] to-[#C9E265] font-bold text-transparent bg-clip-text text-[26px] sm:text-[40px]">
            <div className={bricolageGrotesque.className}>The Solution</div>
          </h2>
          <p className="mt-4">
            Automate Footage Sorting & Find The{" "}
            <span className="text-green-100">Right Shots </span>
            in Just a<span className="text-green-100"> Few Clicks</span>
          </p>
        </div>

        {/* FEATURE ONE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center py-8 lg:py-12">
          {/* Image Section - First on mobile */}
          <div
            className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center order-1 lg:order-2 shadow-[0_0_25px_rgba(126,217,87,0.15),0_0_10px_rgba(201,226,101,0.1)] 
                     hover:shadow-[0_0_35px_rgba(126,217,87,0.25),0_0_15px_rgba(201,226,101,0.15)] 
                     transition-shadow duration-300 rounded-2xl"
          >
            <Image
              src="/clova-feature1.gif"
              fill
              className="object-contain"
              unoptimized
              alt="Import footage demonstration"
            />
          </div>

          {/* Text Section - Second on mobile */}
          <div className="space-y-4 sm:space-y-5 order-2 lg:order-1 mt-6 lg:mt-0">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-[rgba(126,217,87,0.1)] flex items-center justify-center">
                <FolderIcon className="w-6 h-6 text-[#7ED957]" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white">
              Import Your Footage
            </h2>
            <p className="text-base text-gray-300">
              Quickly import your video files and let Clova handle the rest.
              Support for all major video formats.
            </p>
            <div>
              <a
                href="https://clovaapp.com/"
                target="_blank"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-base font-semibold text-black bg-gradient-to-r from-[#5BAA47] to-[#A3C85B] rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span>Get Started</span>
              </a>
            </div>
          </div>
        </div>

        {/* FEATURE TWO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center py-8 lg:py-12">
          {/* Image Section - First on mobile */}
          <div
            className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center order-1 lg:order-1 shadow-[0_0_25px_rgba(126,217,87,0.15),0_0_10px_rgba(201,226,101,0.1)] 
                     hover:shadow-[0_0_35px_rgba(126,217,87,0.25),0_0_15px_rgba(201,226,101,0.15)] 
                     transition-shadow duration-300 rounded-2xl"
          >
            <Image
              src="/clova-feature2.gif"
              fill
              className="object-contain"
              unoptimized
              alt="Search functionality demonstration"
            />
          </div>

          {/* Text Section - Second on mobile */}
          <div className="space-y-4 sm:space-y-5 order-2 lg:order-2 mt-6 lg:mt-0">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-[rgba(126,217,87,0.1)] flex items-center justify-center">
                <MagnifyingGlassIcon className="w-6 h-6 text-[#7ED957]" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white">
              Search for Specific Segments
            </h2>
            <p className="text-base text-gray-300">
              Easily search through your footage using natural language to find
              exactly what you need, when you need it.
            </p>
            <div>
              <a
                href="https://clovaapp.com/"
                target="_blank"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-base font-semibold text-black bg-gradient-to-r from-[#5BAA47] to-[#A3C85B] rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span>Get Started</span>
              </a>
            </div>
          </div>
        </div>

        {/* FEATURE THREE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center py-8 lg:py-12">
          {/* Image Section - First on mobile */}
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center order-1 lg:order-2">
            <Image
              src="/clova-feature3.png"
              fill
              className="object-contain"
              unoptimized
              alt="Editor integration demonstration"
            />
          </div>

          {/* Text Section - Second on mobile */}
          <div className="space-y-4 sm:space-y-5 order-2 lg:order-1 mt-6 lg:mt-0">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-[rgba(126,217,87,0.1)] flex items-center justify-center">
                <BoltIcon className="w-6 h-6 text-[#7ED957]" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white">
              Seamlessly Integrate with Your Editor
            </h2>
            <p className="text-base text-gray-300">
              Drop the organized folders directly into Final Cut Pro, Adobe
              Premiere, or DaVinci Resolve to start editing right away!
            </p>
            <div>
              <a
                href="https://clovaapp.com/"
                target="_blank"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-base font-semibold text-black bg-gradient-to-r from-[#5BAA47] to-[#A3C85B] rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span>Get Started</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
