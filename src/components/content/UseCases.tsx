import Image from 'next/image';
import { Heading2 } from '../Heading2';

export const UseCases = () => {
  return (
    <div className="relative custom_background rounded-none before:rounded-none mt-20">
      <div className="mx-auto w-[60rem] relative z-20">
        <Heading2
          title={'Use <span style="color: #af207a">Cases</span> <br/>For You'}
          desc={
            'Create natural sounding Text to Speech (TTS) using our latest neural Al Voice generator. Accelerate video production using our Al writer and Video creator.'
          }
        />
      </div>
      <div className="w-[60rem] grid grid-cols-2 mx-auto">
        <div className="relative z-20 w-full flex text-left items-start justify-start">
          <div className="">
            <ul className="mt-10 flex flex-col gap-5">
              <li className="border-b border-white/10 pb-3">
                <h4 className="flex gap-2 h-fit items-center">
                  <Image
                    width={20}
                    height={20}
                    src="/like.png"
                    alt="socila content"
                  />{' '}
                  Social Content
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s.
                </p>
              </li>
              <li className="border-b border-white/10 pb-5">
                <h4 className="flex gap-2 h-fit items-center">
                  <Image
                    width={20}
                    height={20}
                    src="/library.png"
                    alt="socila content"
                  />{' '}
                  Training/E-Learning
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s.
                </p>
              </li>
              <li className="border-b border-white/10 pb-5">
                <h4 className="flex gap-2 h-fit items-center">
                  <Image
                    width={20}
                    height={20}
                    src="/video.png"
                    alt="socila content"
                  />{' '}
                  Explainer Videos
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s.
                </p>
              </li>
              <li className="border-b border-white/10 pb-5">
                <h4 className="flex gap-2 h-fit items-center">
                  <Image
                    width={20}
                    height={20}
                    src="/audio-book.png"
                    alt="socila content"
                  />{' '}
                  Audiobooks
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s.
                </p>
              </li>
              <li className="pb-5">
                <h4 className="flex gap-2 h-fit items-center">
                  <Image
                    width={20}
                    height={20}
                    src="/smart-tv.png"
                    alt="socila content"
                  />{' '}
                  IVR & Brodcasting
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative z-20 flex items-center justify-center h-full">
          <Image width={400} height={500} src="/2151065070.jpg" alt="image01" />
        </div>
      </div>
    </div>
  );
};
