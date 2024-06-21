// root / sro / components / home / section1 / left.tsx

import React from "react";
import Card from "./card";
import { cardData } from "./data";

interface LeftProps {
  setHoveredInfo: React.Dispatch<React.SetStateAction<string>>;
}

const Left = ({ setHoveredInfo }: LeftProps) => {
  const handleMouseEnter = (info: string) => {
    setHoveredInfo(info);
  };

  const handleMouseLeave = () => {
    setHoveredInfo("");
  };

  return (
    <div className="flex h-[60vh] w-[50vw] px-8">
      <div className="flex items-center justify-center w-full">
        {cardData.map((card) => (
          <Card
            key={card.id}
            iconUrl={card.iconUrl}
            title={card.title}
            onMouseEnter={() => handleMouseEnter(card.info)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default Left;
