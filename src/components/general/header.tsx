// root / src / components / general / header.tsx

import React from "react";
import Link from "next/link";

interface HeaderProps {
  setHoveredInfo: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ setHoveredInfo }: HeaderProps) => {
  const handleMouseEnter = (info: string) => {
    setHoveredInfo(info);
  };

  const handleMouseLeave = () => {
    setHoveredInfo("");
  };

  return (
    <div className="flex w-full h-[10vh] border-b border-gray-900 items-center justify-center px-8">
      <div className="w-[90vw] flex justify-between">
        <div>
          <Link href="/" className="no-underline">
            <h1 className="text-xl">it&apos;s technical</h1>
          </Link>
        </div>
        <div className="flex">
          <Link
            href="/websites"
            className="px-6 no-underline"
            onMouseEnter={() => handleMouseEnter("websites info")}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="text-xl inline-block py-2 hover:border-b hover:border-white">websites</h1>
          </Link>
          <Link
            href="/scraping"
            className="px-6 no-underline"
            onMouseEnter={() => handleMouseEnter("web scraping info")}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="text-xl inline-block py-2 hover:border-b hover:border-white">web scraping</h1>
          </Link>
          <Link
            href="/data"
            className="px-6 no-underline"
            onMouseEnter={() => handleMouseEnter("data analysis info")}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="text-xl inline-block py-2 hover:border-b hover:border-white">data analysis</h1>
          </Link>
          <Link
            href="/mobile"
            className="px-6 no-underline"
            onMouseEnter={() => handleMouseEnter("mobile apps info")}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="text-xl inline-block py-2 hover:border-b hover:border-white">mobile apps</h1>
          </Link>
          <Link
            href="/mobile"
            className="px-6 no-underline"
            onMouseEnter={() => handleMouseEnter("mobile apps info")}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="text-xl inline-block py-2 hover:border-b hover:border-white">hosting</h1>
          </Link>
          <Link
            href="/contact"
            className="px-6 no-underline"
          >
            <h1 className="text-xl inline-block py-2 hover:border-b hover:border-white">contact</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
