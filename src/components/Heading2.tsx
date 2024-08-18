'use client';
import React from 'react';

export const Heading2 = ({ title, desc }: any) => {
  return (
    <>
      <div>
        <h1 className="mt-3 mb-4 block font-extrabold font-sans !leading-tight text-2xl lg:text-4xl xl:text-[2rem] text-white">
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </h1>
        <p className="text-md font-medium text-ebony-700 dark:text-[#9ca3af]">
          {desc}
        </p>
      </div>
    </>
  );
};
