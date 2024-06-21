// root / sro / components / websites / card.tsx

import React from "react";

interface CardProps {
  iconUrl: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ iconUrl, title }) => {
  return (
    <div className="rounded-lg flex flex-col h-[20vh] w-[20vw] items-center justify-center mx-8">
      <img src={iconUrl} alt="icon" className="h-auto w-auto mb-8" />
      <h1 className="text-center text-white text-lg">{title}</h1>
    </div>
  );
};

export default Card;

