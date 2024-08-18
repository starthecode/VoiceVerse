'use client';
import React, { useState } from 'react';
import { Heading2 } from '../Heading2';
import { BiChevronDown } from 'react-icons/bi';

export const Faq = () => {
  return (
    <div className="mx-auto w-[60rem] relative z-20 pb-40">
      <div className="flex flex-col justify-center text-center items-center">
        <div className="w-[40rem]">
          <Heading2
            title={' Frequently Asked Questions'}
            desc={
              'Create natural sounding Text to Speech (TTS) using our latest neural Al Voice generator. Accelerate video production using our Al writer and Video creator.'
            }
          />
        </div>
      </div>
      <div className="container mt-10">
        <div className="flex flex-wrap justify-center w-full">
          <AccordionItem
            header="This is a dummy question for testing?"
            text="We’re happy to hear that you’re interested in joining Bizmetric! To apply for a position, please visit our Careers page, where you’ll find all the relevant details. Typically, you will apply with your CV. We will thoroughly review your application and come back to you as soon as possible."
          />
          <AccordionItem
            header="This is a dummy question for testing?"
            text="We’re happy to hear that you’re interested in joining Bizmetric! To apply for a position, please visit our Careers page, where you’ll find all the relevant details. Typically, you will apply with your CV. We will thoroughly review your application and come back to you as soon as possible."
          />
          <AccordionItem
            header="This is a dummy question for testing?"
            text="We’re happy to hear that you’re interested in joining Bizmetric! To apply for a position, please visit our Careers page, where you’ll find all the relevant details. Typically, you will apply with your CV. We will thoroughly review your application and come back to you as soon as possible."
          />

          <AccordionItem
            header="This is a dummy question for testing?"
            text="We’re happy to hear that you’re interested in joining Bizmetric! To apply for a position, please visit our Careers page, where you’ll find all the relevant details. Typically, you will apply with your CV. We will thoroughly review your application and come back to you as soon as possible."
          />
          <AccordionItem
            header="This is a dummy question for testing?"
            text="We’re happy to hear that you’re interested in joining Bizmetric! To apply for a position, please visit our Careers page, where you’ll find all the relevant details. Typically, you will apply with your CV. We will thoroughly review your application and come back to you as soon as possible."
          />
          <AccordionItem
            header="This is a dummy question for testing?"
            text="We’re happy to hear that you’re interested in joining Bizmetric! To apply for a position, please visit our Careers page, where you’ll find all the relevant details. Typically, you will apply with your CV. We will thoroughly review your application and come back to you as soon as possible."
          />
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ header, text }: any) => {
  const [active, setActive] = useState(false);

  const handleToggle = ({ e }: any) => {
    setActive(!active);
  };
  return (
    <div className="custom_background w-[40rem] mb-3">
      <button
        className={`faq-btn flex w-full text-left items-center relative z-20`}
        onClick={(e) => handleToggle(e)}
      >
        <div
          className={`transition-colors duration-700 mr-5 flex px-1 py-2 w-full max-w-[40px] items-center justify-center rounded-lg bg-flamingo-500 dark:bg-junglegreen-600 ${
            active ? 'dark:bg-flamingo-500 bg-junglegreen-500' : ''
          }`}
        >
          <BiChevronDown
            className={`fill-[#af207a] stroke-primary duration-200 ease-in-out ${
              active ? 'rotate-180' : ''
            }`}
            size={30}
          />
        </div>

        <div className="w-full">
          <h4 className="text-lg font-medium text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? 'block' : 'hidden'
        }`}
      >
        <p className="py-3 text-md leading-relaxed font-normal text-ebony-700 dark:text-[#9ca3af]">
          {text}
        </p>
      </div>
    </div>
  );
};
