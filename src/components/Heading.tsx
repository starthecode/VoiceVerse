'use client';
import React from 'react';

export const Heading = ({ title, desc }: any) => {
  return (
    <>
      <div>
        <h1 className="mt-3 mb-4 block font-extrabold font-sans !leading-tight text-2xl lg:text-4xl xl:text-[3.5rem] text-white">
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </h1>
        <p className="text-md font-medium text-ebony-700 dark:text-[#9ca3af]">
          {desc}
        </p>
      </div>
    </>
  );
};
