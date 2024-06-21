// root / src / components / websites / section1.tsx

import React from 'react';
import { cardData } from './data';
import Card from './card';

const Section1 = () => {
  return (
    <div className="flex w-full h-[80vh] flex items-center justify-center border border-white px-8">
      <div className='w-[90vw] h-[60vh] flex-col items-center justify-center border border-white'>
        <div className='flex justify-center items-center w-[90vw] h-[5vh]'>
          <h1 className='text-4xl'>simple</h1>
        </div>
        <div className='flex items-center justify-center w-[70vw] h-[40vh] border border-white'>
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
