import React from 'react';
import { Heading2 } from '../Heading2';
import { Badge } from '../Badge';
import { Items } from './Items';

export const Footer = () => {
  return (
    <div className="relative flex flex-col justify-center items-center z-20 bg-[#0f103d] rounded-tl-[2rem] rounded-tr-[2rem] py-10">
      <div className="container">
        <div className="w-full flex flex-col text-center items-center justify-center ">
          <Heading2
            title={
              '<span style="color: #af207a">AI supports</span> these languages'
            }
          />

          <div className="mt-5">
            <Badge isClick={false} />
            <div className="mt-8 border-b border-white/20" />
          </div>

          <Items />
        </div>
      </div>
    </div>
  );
};
