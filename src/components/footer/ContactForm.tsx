import React from 'react';
import { CgMail } from 'react-icons/cg';
import { Button } from '../Button';

export const ContactForm = () => {
  return (
    <div className="w-fill relative overflow-hidden z-10">
      <form className="flex flex-col gap-5 relative overflow-hidden">
        <div className="flex relative overflow-hidden px-4 pr-1 py-1 focus-within:ring-2 focus-within:ring-transparent hover:ring-2 hover:ring-transparent bg-[#05072d] border-white/15 rounded-[1rem] before:rounded-[1rem] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 before:border-white/20 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:shadow before:shadow-gray-950">
          <div className="absolute inset-0 grid items-center left-2 z-20">
            <CgMail color="white" />
          </div>
          <input
            className="w-full appearance-none focus:outline-none bg-transparent relative z-20 text-white pl-5"
            placeholder="Example@mail.com"
          />
        </div>
        <div className="flex relative overflow-hidden px-4 pr-1 py-1 focus-within:ring-2 focus-within:ring-transparent hover:ring-2 hover:ring-transparent bg-[#05072d] border-white/15 rounded-[1rem] before:rounded-[1rem] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 before:border-white/20 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:shadow before:shadow-gray-950">
          <textarea
            className="w-full appearance-none focus:outline-none bg-transparent relative z-20 text-white pl-5"
            placeholder="Message"
          ></textarea>
        </div>

        <div className="relative flex w-full justify-start -mt-7">
          <Button text={'Submit'} />
        </div>
      </form>
    </div>
  );
};
