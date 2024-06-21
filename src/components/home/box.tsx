// root / sro / components / home / section1 / box.tsx

import React from 'react';

interface CardProps {
  info: string;
}

const Box: React.FC<CardProps> = ({ info }) => {
  return (
    <div className="flex items-center justify-center px-8">
      <div className="flex ">
        <h1 className="text-2xl">{info}</h1>
      </div>
    </div>
  );
};

export default Box;
