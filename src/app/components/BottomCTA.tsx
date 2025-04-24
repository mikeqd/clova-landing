import { Bricolage_Grotesque } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const BottomCTA = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8">
      <div className="relative py-16 my-20">
        {/* Container with glass-like effect and rounded corners */}
        <div className="relative border border-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden bg-[rgba(10,10,10,0.8)] backdrop-blur-sm">
          {/* Bright dot pattern background */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `radial-gradient(circle, #7ED957 1px, transparent 1px)`,
              backgroundSize: "16px 16px",
            }}
          ></div>

          {/* Next.js inspired gradient accents */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#7ED957] rounded-full opacity-[0.15] blur-[60px]"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#C9E265] rounded-full opacity-[0.15] blur-[70px]"></div>

          {/* Linear gradient border at top */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7ED957]Z to-transparent opacity-60"></div>

          {/* Content with proper padding */}
          <div className="px-6 sm:px-10 py-20 relative z-10">
            <div className="flex flex-col gap-2 text-center w-full items-center">
              <h1 className="bg-gradient-to-r from-[#7ED957] to-[#C9E265] font-bold text-transparent bg-clip-text text-[26px] sm:text-[48px]">
                <div className={bricolageGrotesque.className}>
                  Instantly find all of your media today
                </div>
              </h1>
              <p className="max-w-[660px] leading-6 text-wrap text-center text-[#E5E5E5] text-base sm:text-lg mt-2">
                Unlock the full potential of your media library with
                Clova&apos;s AI-powered search and organization. Start your
                journey to faster, smarter media management.
              </p>
              <div className="mt-9">
                <a
                  href="https://clovaapp.com/"
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 text-base font-semibold text-black bg-gradient-to-r from-[#7ED957] to-[#C9E265] rounded-md hover:opacity-90 transition-opacity duration-300 border border-[rgba(255,255,255,0.1)]"
                >
                  <span>Try Clova For Free</span>
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCTA;
