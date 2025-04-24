import {
  FolderIcon,
  UserIcon,
  BookmarkIcon,
  MusicalNoteIcon,
  VideoCameraIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import { Bricolage_Grotesque } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const UseCases = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8">
      <div className="mt-28 section-content relative flex flex-col justify-between gap-8">
        <div className="flex flex-col  text-center w-full items-center mb-5">
          <h2 className="mt-1 home bg-gradient-to-r from-[#7ED957] to-[#C9E265] font-bold text-transparent bg-clip-text text-[26px] sm:text-[40px]">
            <div className={bricolageGrotesque.className}>Use Cases</div>
          </h2>
          <p className="max-w-[560px] leading-6 text-wrap text-center mt-4">
            Plus, easily view organized footage and get quick access to
            categorized clips, helping you streamline your editing process.
          </p>
        </div>
        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Footage Organization */}
          <div className="bg-[linear-gradient(rgb(36,36,36),rgba(255,255,255,0.02)_70.62%)] border border-[#2e2d2d]  backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-[linear-gradient(rgb(36,36,36),rgba(255,255,255,0.02)_40.62%)] hover:shadow-[0_0_25px_rgba(126,217,87,0.1)]  hover:border-[#5c5c5c]">
            <div className="flex flex-col space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[rgba(126,217,87,0.1)] flex items-center justify-center">
                <FolderIcon className="w-6 h-6 text-[#7dd956]" />
              </div>
              <h3 className="text-[#EEEEEF] text-xl font-semibold">
                Footage Organization
              </h3>
              <p className="text-[rgba(255,255,255,0.7)] text-sm leading-relaxed">
                Automatically categorize and organize your clips with AI-driven
                precision.
              </p>
            </div>
          </div>

          {/* Card 2: Facial Recognition */}
          <div className="bg-[linear-gradient(rgb(36,36,36),rgba(255,255,255,0.02)_70.62%)] border border-[#2e2d2d]  backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-[linear-gradient(rgb(36,36,36),rgba(255,255,255,0.02)_40.62%)] hover:shadow-[0_0_25px_rgba(126,217,87,0.1)] hover:border-[#5c5c5c]  ">
            <div className="flex flex-col space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[rgba(126,217,87,0.1)] flex items-center justify-center">
                <UserIcon className="w-6 h-6 text-[#7dd956]" />
              </div>
              <h3 className="text-[#EEEEEF] text-xl font-semibold">
                Facial Recognition
              </h3>
              <p className="text-[rgba(255,255,255,0.7)] text-sm leading-relaxed">
                Easily identify and all shots of the same person for faster
                editing.
              </p>
            </div>
          </div>

          {/* Card 3: Custom Tags */}
          <div className="bg-[linear-gradient(rgb(36,36,36),rgba(255,255,255,0.02)_70.62%)] border border-[#2e2d2d]  backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-[linear-gradient(rgb(36,36,36),rgba(255,255,255,0.02)_40.62%)] hover:shadow-[0_0_25px_rgba(126,217,87,0.1)] hover:border-[#5c5c5c]  ">
            <div className="flex flex-col space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[rgba(126,217,87,0.1)] flex items-center justify-center">
                <BookmarkIcon className="w-6 h-6 text-[#7dd956]" />
              </div>
              <h3 className="text-[#EEEEEF] text-xl font-semibold">
                Custom Tags
              </h3>
              <p className="text-[rgba(255,255,255,0.7)] text-sm leading-relaxed">
                Add personalized tags to specific clips, making them even easier
                to find during editing.
              </p>
            </div>
          </div>

          {/* Card 4: Audio-Based Sorting */}
          <div className="bg-[linear-gradient(rgb(36,36,36),rgba(255,255,255,0.02)_70.62%)] border border-[#2e2d2d]  backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-[linear-gradient(rgb(36,36,36),rgba(255,255,255,0.02)_40.62%)] hover:shadow-[0_0_25px_rgba(126,217,87,0.1)] hover:border-[#5c5c5c]  ">
            <div className="flex flex-col space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[rgba(126,217,87,0.1)] flex items-center justify-center">
                <MusicalNoteIcon className="w-6 h-6 text-[#7dd956]" />
              </div>
              <h3 className="text-[#EEEEEF] text-xl font-semibold">
                Audio-Based Sorting
              </h3>
              <p className="text-[rgba(255,255,255,0.7)] text-sm leading-relaxed">
                Organize and sort footage by dialogue, making it seamless to
                find key moments during editing.
              </p>
            </div>
          </div>

          {/* Card 5: A-Roll and B-Roll Sorting */}
          <div className="bg-[linear-gradient(rgb(36,36,36),rgba(255,255,255,0.02)_70.62%)] border border-[#2e2d2d]  backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-[linear-gradient(rgb(36,36,36),rgba(255,255,255,0.02)_40.62%)] hover:shadow-[0_0_25px_rgba(126,217,87,0.1)] hover:border-[#5c5c5c]  ">
            <div className="flex flex-col space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[rgba(126,217,87,0.1)] flex items-center justify-center">
                <VideoCameraIcon className="w-6 h-6 text-[#7dd956]" />
              </div>
              <h3 className="text-[#EEEEEF] text-xl font-semibold">
                A-Roll and B-Roll Sorting
              </h3>
              <p className="text-[rgba(255,255,255,0.7)] text-sm leading-relaxed">
                Automatically separate your A-roll and B-roll, making it easy to
                access the right clips for your edits.
              </p>
            </div>
          </div>

          {/* Card 6: Seamless Integration */}
          <div className="bg-[linear-gradient(rgb(36,36,36),rgba(255,255,255,0.02)_70.62%)] border border-[#2e2d2d]  backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-[linear-gradient(rgb(36,36,36),rgba(255,255,255,0.02)_40.62%)] hover:shadow-[0_0_25px_rgba(126,217,87,0.1)] hover:border-[#5c5c5c]  ">
            <div className="flex flex-col space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[rgba(126,217,87,0.1)] flex items-center justify-center">
                <BoltIcon className="w-6 h-6 text-[#7dd956]" />
              </div>
              <h3 className="text-[#EEEEEF] text-xl font-semibold">
                Seamless Integration
              </h3>
              <p className="text-[rgba(255,255,255,0.7)] text-sm leading-relaxed">
                Use the organized footage in your favorite video editor like
                Final Cut Pro, Adobe Premiere, or DaVinci Resolve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
