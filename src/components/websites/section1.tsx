// root / src / components / websites / section1.tsx

import React from 'react';
import { cardData } from './data';
import Card from './card';

const Section1 = () => {
  return (
    <div className="flex w-full h-[35vh] items-center justify-center px-8 mt-[10vh]">
      <div className='w-[90vw] h-[30vh] flex flex-col items-center justify-center'>
        <div className='flex justify-center items-center w-[90vw] h-[3vh] '>
          <h1 className='text-2xl'>simple</h1>
        </div>
        <div className='flex items-center justify-center w-[70vw] h-[25vh] border-b'>
          {cardData.map((card) => (
            <Card
              key={card.id}
              iconUrl={card.iconUrl}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
