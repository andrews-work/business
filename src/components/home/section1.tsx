// root / sro / components / home / section1 / section1.tsx

import React from "react";
import Left from "@/components/home/left";
import Right from "@/components/home/right";

interface Section1Props {
  hoveredInfo: string;
  setHoveredInfo: React.Dispatch<React.SetStateAction<string>>;
}

const Section1 = ({ hoveredInfo, setHoveredInfo }: Section1Props) => {
  return (
    <div className="flex w-full h-[80vh] border-b border-gray-900 items-center justify-center px-8">
      <div className="flex">
        <Left setHoveredInfo={setHoveredInfo} />
        <Right hoveredInfo={hoveredInfo} />
      </div>
    </div>
  );
};

export default Section1;