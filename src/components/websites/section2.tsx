// root / src / components / websites / section1.tsx

import React from 'react';
import { cardData } from './data2';
import Card from './card';

const Section1 = () => {
  return (
    <div className="flex w-full h-[30vh] items-center justify-center px-8 ">
      <div className='w-[90vw] flex flex-col items-center justify-center'>
        <div className='flex justify-center items-center w-[90vw] h-[3vh]'>
          <h1 className='text-2xl'>advanced</h1>
        </div>
        <div className='flex items-center justify-center w-[70vw] h-[20vh]'>
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
