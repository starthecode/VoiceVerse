import React from 'react';
import { Heading } from './Heading';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="relative z-20 flex flex-col justify-center text-center items-center w-full mt-20">
      <div className="w-[500px]">
        <div className="relative z-20">
          <Heading
            classes={
              'mt-3 mb-4 block font-extrabold font-sans !leading-tight text-3xl lg:text-4xl xl:text-[3.5rem] text-white'
            }
            title={'AI Powered, <br/>Human Like'}
            desc={
              'Create natural sounding Text to Speech (TTS) using our latest neural Al Voice generator. Accelerate video production using our Al writer and Video creator.'
            }
          />
        </div>

        <div className="absolute inset-0 -top-20 grid justify-center items-center w-full">
          <Image
            className="opacity-40"
            width={300}
            height={100}
            src="/sound-wave.png"
            alt="img"
          />
        </div>

        <div className="w-fill relative overflow-hidden z-10">
          <form className="flex relative overflow-hidden mt-14 w-[500px] h-fit px-4 pr-1 py-1 focus-within:ring-2 focus-within:ring-transparent hover:ring-2 hover:ring-transparent  rounded-full bg-[#05072d] border-white/15 before:rounded-[1rem] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 before:border-white/20 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:shadow before:shadow-gray-950">
            <div className="absolute inset-0 grid items-center left-2 z-20">
              <Image
                className="opacity-40"
                width={20}
                height={20}
                src="/mail.png"
                alt="img"
              />
            </div>
            <input
              className="w-full appearance-none focus:outline-none bg-transparent relative z-20 text-white pl-5"
              placeholder="Your email"
            />
            <div className="relative flex w-full justify-end">
              <button
                className="ml-2 inline-flex rounded-full relative z-20 bg-gradient-to-b from-[#af207a] to-[#470c31] text-white px-3 py-2 text-sm font-medium hover:from-orange-400 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-transparent"
                type="submit"
              >
                Get Free
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
