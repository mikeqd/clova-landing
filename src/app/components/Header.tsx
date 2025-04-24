import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="sticky border border-slate-300/10 backdrop-blur supports-[backdrop-filter]:bg-slate-900/75 left-0 right-0 top-4 z-50 sm:mx-auto flex h-fit max-w-5xl items-center justify-between rounded-[10px] p-2 my-2">
      <h1 className="ml-2">
        <Link href="/">
          <Image
            src="/eirenlogo.png"
            className="h-9 w-18"
            alt="Logo"
            height={20}
            width={110}
          />
        </Link>
      </h1>
      <div className="flex items-center gap-8 mr-2">
        <div className="hidden sm:flex items-center gap-4 text-sm">
          <Link
            className="text-primary/80 transition-all hover:-mt-px text-white hover:mb-px hover:text-[#1e7d94] font-semibold"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-primary/80 transition-all hover:-mt-px hover:mb-px hover:text-[#1e7d94] font-semibold text-white"
            href="/my-story"
          >
            My Story
          </Link>
          <Link
            className="text-primary/80 transition-all hover:-mt-px hover:mb-px hover:text-[#1e7d94] font-semibold text-white"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-primary/80 transition-all hover:-mt-px hover:mb-px hover:text-[#1e7d94] font-semibold text-white"
            href="/cta"
          >
            Pricing
          </Link>
        </div>
      </div>
    </nav>
  );
}
