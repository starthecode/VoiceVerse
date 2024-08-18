import React from 'react';
import { Heading2 } from '../Heading2';
import { Wave } from '../Wave';
import { Button } from '../Button';
import Image from 'next/image';

export const CTO = () => {
  return (
    <div className="mx-auto w-[60rem] relative z-20 pb-40">
      <div className="custom_background">
        <div className="grid grid-cols-2">
          <div>
            <div className="flex gap-2">
              <Wave />
              <span className="text-white font-bold text-lg">VoiceVerse</span>
            </div>

            <Heading2
              title={
                ' The best AI Voice <span style="color: #af207a">Generation Platform</span> for leading enterprices and teams'
              }
              desc={
                'Create natural sounding Text to Speech (TTS) using our latest neural Al Voice generator. Accelerate video production using our Al writer and Video creator.'
              }
            />
            <Button text={'Start for free!'} link={'#generate'} />
          </div>
          <div className="relative z-20 flex items-center justify-center h-full">
            <Image
              width={350}
              height={350}
              src="/image-5465.png"
              alt="image01"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
