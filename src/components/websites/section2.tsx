import React from 'react';
import Basic from '@/components/websites/basic';
import Complex from '@/components/websites/complex';

const Section2 = () => {
  return (
    <div className="flex w-full h-[100vh] items-center justify-center px-8">
      <Basic />
      <Complex />
    </div>
  );
};

export default Section2;