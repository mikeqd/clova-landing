import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[rgba(255,255,255,0.06)] pt-16 pb-8">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Link href="/" className="mb-6 transition-opacity hover:opacity-90">
            <Image
              src="/logo.webp"
              alt="Clova Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Tagline */}
          <p className="text-[rgba(255,255,255,0.7)] text-sm text-center max-w-md mb-8">
            Organize and find your media with the power of AI
          </p>

          {/* Copyright */}
          <div className="border-t border-[rgba(255,255,255,0.06)] pt-8 w-full">
            <p className="text-[rgba(255,255,255,0.5)] text-sm text-center">
              © {currentYear} Clova. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
