import {
  CheckCircleIcon,
  ClockIcon,
  EyeSlashIcon,
  FolderOpenIcon,
} from "@heroicons/react/24/outline";
import { Bricolage_Grotesque } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export default function Problem() {
  return (
    <div id="problem" className="max-w-6xl mx-auto px-6 sm:px-8 pt-20">
      <div className="relative pb-0 -mt-10 w-full z-10"></div>
      <div className="mt-4 section-content relative flex flex-col md:flex-row justify-between gap-8 md:gap-16">
        <div className="flex flex-col text-center w-full mb-5">
          <div className="text-center">
            <h2
              className="bg-gradient-to-r from-[#7ED957] to-[#C9E265] 
                 font-bold text-transparent bg-clip-text text-[26px] sm:text-[40px]"
            >
              <div className={bricolageGrotesque.className}>The Problem</div>
            </h2>

            <p className=" text-gray-200 max-w-2xl mx-auto mt-4 mb-8">
              Manually sorting footage is{" "}
              <span className="text-[#C9E265] font-medium italic">tedious</span>{" "}
              and{" "}
              <span className="text-[#C9E265] font-medium italic">
                slows down
              </span>{" "}
              your editing process.
            </p>
          </div>

          {/* CARDS */}
          <div>
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}

const Cards = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Card 1 */}
      <div className="group">
        <div className="bg-white/7 border border-[#2e2d2d] backdrop-blur-lg rounded-xl p-6 transition-all duration-300 hover:bg-[linear-gradient(rgb(36,36,36),rgba(255,255,255,0.02)_40.62%)] hover:shadow-[0_0_25px_rgba(126,217,87,0.1)] hover:border-[#5c5c5c]">
          <div className="flex flex-col h-full space-y-4">
            <div className="w-full flex justify-between gap-2 sm:gap-0 sm:items-center flex-col-reverse sm:flex-row items-start">
              {/* Title */}
              <h3 className="text-[#EEEEEF] text-xl font-semibold text-left">
                Manual Footage Sorting Drains Time
              </h3>
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-lg bg-[rgba(126,217,87,0.1)] flex items-center justify-center">
                <ClockIcon className="w-6 h-6 text-[#7dd956]" />
              </div>
            </div>
            {/* Description */}
            <p className="text-[rgba(255,255,255,0.7)] text-sm leading-relaxed text-left">
              Sorting through footage manually wastes valuable editing time and
              creates workflow bottlenecks.
            </p>
            {/* Optional: Impact statement */}
            <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.1)]">
              <p className="text-xs text-gray-400 flex items-start sm:items-center">
                <span className="inline-block w-2 h-2 bg-[#7dd956] rounded-full mr-2"></span>
                <span className="text-left">
                  Editors lose up to 40% of their time on manual organization.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group">
        <div className="bg-white/7 border border-[#2e2d2d] backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-[linear-gradient(rgb(36,36,36),rgba(255,255,255,0.02)_40.62%)] hover:shadow-[0_0_25px_rgba(126,217,87,0.1)] hover:border-[#5c5c5c] h-full">
          <div className="flex flex-col h-full space-y-4">
            <div className="w-full flex justify-between gap-2 sm:gap-0 sm:items-center flex-col-reverse sm:flex-row items-start">
              {/* Title */}
              <h3 className="text-[#EEEEEF] text-xl font-semibold text-left">
                Hard to Find the Right Shot Fast
              </h3>
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-lg bg-[rgba(126,217,87,0.1)] flex items-center justify-center">
                <FolderOpenIcon className="w-6 h-6 text-[#7dd956]" />
              </div>
            </div>
            {/* Description */}
            <p className="text-[rgba(255,255,255,0.7)] text-sm leading-relaxed text-left h-full">
              Without quick organization, finding the best clips can take
              forever.
            </p>
            {/* Optional: Impact statement */}
            <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.1)]">
              <p className="text-xs text-gray-400 flex items-start sm:items-center">
                <span className="inline-block w-2 h-2 bg-[#7dd956] rounded-full mr-2"></span>
                <span className="text-left">
                  Searching through unorganized footage can increase editing
                  time by 60%.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group">
        <div className="bg-white/7 border border-[#2e2d2d] backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-[linear-gradient(rgb(36,36,36),rgba(255,255,255,0.02)_40.62%)] hover:shadow-[0_0_25px_rgba(126,217,87,0.1)] hover:border-[#5c5c5c]">
          <div className="flex flex-col h-full space-y-4">
            <div className="w-full flex justify-between gap-2 sm:gap-0 sm:items-center flex-col-reverse sm:flex-row items-start">
              {/* Title */}
              <h3 className="text-[#EEEEEF] text-xl font-semibold text-left">
                Hidden Gems Get Overlooked
              </h3>
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-lg bg-[rgba(126,217,87,0.1)] flex items-center justify-center">
                <EyeSlashIcon className="w-6 h-6 text-[#7dd956]" />
              </div>
            </div>
            {/* Description */}
            <p className="text-[rgba(255,255,255,0.7)] text-sm leading-relaxed text-left">
              Manually managing footage often leads to missing the best shots
              without realizing it.
            </p>
            {/* Optional: Impact statement */}
            <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.1)]">
              <p className="text-xs text-gray-400 flex items-start sm:items-center">
                <span className="inline-block w-2 h-2 bg-[#7dd956] rounded-full mr-2"></span>
                <span className="text-left">
                  Up to 30% of quality footage never makes it into the final
                  edit.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="group">
        <div className="bg-white/7 border border-[#2e2d2d] backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-[linear-gradient(rgb(36,36,36),rgba(255,255,255,0.02)_40.62%)] hover:shadow-[0_0_25px_rgba(126,217,87,0.1)] hover:border-[#5c5c5c]">
          <div className="flex flex-col h-full space-y-4">
            <div className="w-full flex justify-between gap-2 sm:gap-0 sm:items-center flex-col-reverse sm:flex-row items-start">
              {/* Title */}
              <h3 className="text-[#EEEEEF] text-xl font-semibold text-left">
                Overwhelming Amounts of Footage
              </h3>
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-lg bg-[rgba(126,217,87,0.1)] flex items-center justify-center">
                <CheckCircleIcon className="w-6 h-6 text-[#7dd956]" />
              </div>
            </div>
            {/* Description */}
            <p className="text-[rgba(255,255,255,0.7)] text-sm leading-relaxed text-left">
              Unorganized footage leads to wasted time and missed creative
              opportunities.
            </p>
            {/* Optional: Impact statement */}
            <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.1)]">
              <p className="text-xs text-gray-400 flex items-start sm:items-center">
                <span className="inline-block w-2 h-2 bg-[#7dd956] rounded-full mr-2"></span>
                <span className="text-left">
                  Projects with 100+ clips become 3x harder to manage manually.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
