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
            <h1 className="text-3xl">it's technical</h1>
          </Link>
        </div>
        <div className="flex">
          <Link
            href="/new"
            className="px-6 no-underline"
            onMouseEnter={() => handleMouseEnter("websites info")}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="text-3xl">websites</h1>
          </Link>
          <Link
            href="/new"
            className="px-6 no-underline"
            onMouseEnter={() => handleMouseEnter("web scraping info")}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="text-3xl">web scraping</h1>
          </Link>
          <Link
            href="/new"
            className="px-6 no-underline"
            onMouseEnter={() => handleMouseEnter("data analysis info")}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="text-3xl">data analysis</h1>
          </Link>
          <Link
            href="/new"
            className="px-6 no-underline"
            onMouseEnter={() => handleMouseEnter("mobile apps info")}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="text-3xl">mobile apps</h1>
          </Link>
          <Link
            href="/new"
            className="px-6 no-underline"
          >
            <h1 className="text-3xl">contact</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
