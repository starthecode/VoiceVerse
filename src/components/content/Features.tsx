import React from 'react';
import Image from 'next/image';
import { Heading2 } from '../Heading2';

export const Features = () => {
  return (
    <div id="features" className="relative z-20 h-fit text-white p-8">
      <div className="w-full flex text-center items-center justify-center">
        <div className="w-[40rem]">
          <Heading2
            title={'<span style="color: #af207a">AI</span> Features'}
            desc={
              'Create natural sounding Text to Speech (TTS) using our latest neural Al Voice generator. Accelerate video production using our Al writer and Video creator.'
            }
          />
        </div>
      </div>

      <div className="w-[60rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="col-span-2 grid">
          <div className="custom_background flex gap-5">
            <div className="max-w-[50%]">
              <span className="relative inline-flex items-center gap-2 w-fit h-fit text-white text-sm px-2 py-2 focus-within:ring-2 focus-within:ring-transparent  rounded-md bg-[#05072d] border-white/15 before:rounded-md before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 before:border-white/20 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:shadow before:shadow-gray-950 ">
                <Image
                  className="transform -rotate-180"
                  width={25}
                  height={25}
                  src="/nib.png"
                  alt="card img"
                />
              </span>
              <h3 className="mt-3">Video dubbing</h3>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s simply dummy text of the printing.
              </p>
            </div>
            <div className="flex items-center">
              <Image
                className="rounded-xl"
                width={300}
                height={300}
                src="/card_img01.jpg"
                alt="card img"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-5">
            <div className="h-fit custom_background">
              <div>
                <span className="relative inline-flex items-center gap-2 w-fit h-fit text-white text-sm px-2 py-2 focus-within:ring-2 focus-within:ring-transparent  rounded-md bg-[#05072d] border-white/15 before:rounded-md before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 before:border-white/20 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:shadow before:shadow-gray-950">
                  <Image
                    className=""
                    width={25}
                    height={25}
                    src="/voice-command.png"
                    alt="card img"
                  />
                </span>
                <h3 className="mt-3 ">AI Voice Cloning</h3>
                <p className="text-ebony-700 dark:text-[#9ca3af] mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s simply dummy text of
                  the printing.
                </p>
                <div className="flex justify-center items-center">
                  <Image
                    className="rounded-xl"
                    width={300}
                    height={300}
                    src="/card_img03.jpg"
                    alt="card img"
                  />
                </div>
              </div>
            </div>
            <div className="h-fit custom_background">
              <span className="relative inline-flex items-center gap-2 w-fit h-fit text-white text-sm px-2 py-2 focus-within:ring-2 focus-within:ring-transparent  rounded-md bg-[#05072d] border-white/15 before:rounded-md before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 before:border-white/20 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:shadow before:shadow-gray-950 ">
                <Image
                  className=""
                  width={25}
                  height={25}
                  src="/music.png"
                  alt="card img"
                />
              </span>
              <h3 className="mt-3 ">Background Music</h3>
              <p className="text-md text-ebony-700 dark:text-[#9ca3af] mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s simply dummy text of the printing.
              </p>
              <div className="flex justify-center items-center">
                <Image
                  className="rounded-xl"
                  width={300}
                  height={300}
                  src="/card_img04.jpg"
                  alt="card img"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="h-fit custom_background">
            <span className="relative inline-flex items-center gap-2 w-fit h-fit text-white text-sm px-2 py-2 focus-within:ring-2 focus-within:ring-transparent  rounded-md bg-[#05072d] border-white/15 before:rounded-md before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 before:border-white/20 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:shadow before:shadow-gray-950 ">
              <Image
                className="transform -rotate-180"
                width={25}
                height={25}
                src="/box.png"
                alt="card img"
              />
            </span>
            <h3 className="mt-3 ">Marketing &amp; Advertising</h3>
            <p className="text-md text-ebony-700 dark:text-[#9ca3af] mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s simply dummy text of the printing.
            </p>

            <div className="flex justify-center items-center">
              <Image
                className="rounded-xl"
                width={300}
                height={300}
                src="/card_img02.jpg"
                alt="card img"
              />
            </div>
          </div>
          <div className="h-fit rounded-lg flex items-center justify-center my-auto">
            <div className="py-20 px-10 shadow-md rounded-lg bg-gradient-to-b from-[#af207a] to-[#470c31] text-white flex items-center justify-center w-full">
              <div className="p-1 rounded-3xl bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
                <a
                  className="items-center shadow-flamingo-500/10 dark:shadow-junglegreen-500/10 group relative z-[1] flex w-full h-11 gap-1.5 rounded-3xl border border-flamingo-600 dark:border-junglegreen-600 bg-flamingo-500 dark:bg-junglegreen-500 px-4 shadow-md before:absolute before:inset-0 before:rounded-3xl before:border before:border-flamingo-500 before:bg-gradient-to-b before:from-flamingo-600 dark:before:border-junglegreen-700 dark:before:bg-gradient-to-b dark:before:from-junglegreen-600"
                  href="#"
                >
                  <span className="relative z-[2] flex items-center font-bold text-white text-xs lg:text-md xl:text-md">
                    Try it for Free!
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="ml-2 w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
