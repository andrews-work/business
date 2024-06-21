// root / sro / components / home / section1 / right.tsx

import React from "react";
import Box from "./box";
import { cardData } from "./data";
import { useState } from "react";
import Left from "./left";

const Right = ({ hoveredInfo }: { hoveredInfo: string }) => {
  return (
    <div className="flex h-[60vh] w-[35vw] items-center justify-center px-8">
      <div className="flex justify-between">
        <Box info={hoveredInfo} />
      </div>
    </div>
  );
};

export default Right;
