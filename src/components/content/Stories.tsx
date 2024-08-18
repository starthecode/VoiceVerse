import Image from 'next/image';
import { Heading2 } from '../Heading2';

export const Stories = () => {
  return (
    <div className="relative z-20 w-full mt-32 mb-32">
      <div className="mx-auto w-[60rem] relative z-20">
        <Heading2
          title={
            ' A real-live example of <span style="color: #af207a">VoiceVerse</span><br/> success with real-life stories'
          }
          desc={
            'Create natural sounding Text to Speech (TTS) using our latest neural Al Voice generator. Accelerate video production using our Al writer and Video creator.'
          }
        />
        <div className="grid grid-cols-2 mt-10">
          <div className="relative z-20 flex items-start justify-start h-full">
            <Image
              className="rounded-[1.5rem]"
              width={400}
              height={500}
              src="/women_voiceover01.jpg"
              alt="image01"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="custom_background h-fit">
              <h2 className="text-orange-500 text-3xl font-bold">-53%</h2>
              <span className="text-white">Poland Bank</span>
              <p>Conversational Ai reduced check balance lime by 80%</p>
            </div>
            <div className="custom_background h-fit">
              <h2 className="text-blue-500 text-3xl font-bold">-50%</h2>
              <span className="text-white">Farfetch Automation</span>
              <p>Conversational Ai reduced check balance lime by 80%</p>
            </div>
            <div className="custom_background h-fit">
              <h2 className="text-blue-500 text-3xl font-bold">+26%</h2>
              <span className="text-white">JK Moving Services</span>
              <p>Conversational Ai reduced check balance lime by 80%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
