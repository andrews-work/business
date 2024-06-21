// root / sro / components / home / section1 / card.tsx

import React from "react";

interface CardProps {
  iconUrl: string;
  title: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Card: React.FC<CardProps> = ({ iconUrl, title, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="rounded-lg flex flex-col h-[20vh] w-[20vw] items-center justify-center mx-8"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={iconUrl} alt="icon" className="h-auto w-auto mb-8" />
      <h1 className="text-center text-white text-lg">{title}</h1>
    </div>
  );
};

export default Card;
