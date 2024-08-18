'use client';
import React from 'react';
import { Badge } from './Badge';
import toast from 'react-hot-toast';
import { convertTextToSpeech } from '@/actions/TTS_action';
import AudioPlayer from './AudioPlayer';
import { Button } from './Button';

const languages = [
  { name: 'English', code: 'gb' },
  { name: 'Chinese', code: 'cn' },
  { name: 'Spanish', code: 'es' },
  { name: 'Hindi', code: 'in' },
  { name: 'Portuguese', code: 'br' },
  { name: 'French', code: 'fr' },
  { name: 'German', code: 'de' },
  { name: 'Japanese', code: 'jp' },
  { name: 'Arabic', code: 'ar' },
  { name: 'Russian', code: 'ru' },
  { name: 'Korean', code: 'kr' },
  { name: 'Indonesian', code: 'id' },
  { name: 'Italian', code: 'it' },
  { name: 'Dutch', code: 'de' },
  { name: 'Turkish', code: 'tr' },
  { name: 'Polish', code: 'pl' },
  { name: 'Swedish', code: 'sv' },
  { name: 'Filipino', code: 'ph' },
  { name: 'Malay', code: 'ms' },
  { name: 'Romanian', code: 'ro' },
  { name: 'Ukrainian', code: 'ua' },
  { name: 'Greek', code: 'gr' },
  { name: 'Czech', code: 'cz' },
  { name: 'Danish', code: 'dk' },
  { name: 'Finnish', code: 'fi' },
  { name: 'Bulgarian', code: 'bg' },
  { name: 'Croatian', code: 'hr' },
  { name: 'Slovak', code: 'sk' },
];

type FormState = {
  state: 'loading' | 'error' | 'success' | string;
  message: string;
  text: string;
  speaker: string;
};

export const TTSForm = () => {
  const [form, setForm] = React.useState<FormState>({
    state: '',
    message: '',
    text: '',
    speaker: '2597',
  });

  const [loading, setLoading] = React.useState(false);

  const [audioData, setAudioData] = React.useState<any>([]);

  const [selectedLanguage, setSelectedLanguage] = React.useState('gb');

  const [isVerified, setIsVerified] = React.useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    // Dynamically update the state based on the input field's name
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const { text, speaker } = form; // Destructure values from form state

    if (text && text.length > 10 && text.length < 500) {
      setForm((prevForm) => ({ ...prevForm, state: 'loading' }));
      try {
        const data = await convertTextToSpeech({
          text,
          speaker,
          selectedLanguage,
        });

        if (data) {
          setLoading(false);
          setAudioData(data);
          toast.success('Your File is Ready');
          //   console.log('check data', data);
        } else {
          console.error('No data returned from API');
        }
      } catch (error: any) {
        console.error('Error:', error);
        setLoading(false);

        toast.error(error);
      }
    } else if (text.length < 10) {
      setLoading(false);
      toast.error('Add some more Text for better conversion.');
    } else if (text.length > 100) {
      setLoading(false);
      toast.error('Only 500 Char Max.');
    }
  };

  return (
    <section className="relative z-20 w-full flex flex-col justify-center text-center items-center pt-20 pb-20">
      <Badge
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />

      <div className="min-h-[20vh] w-full relative flex items-center justify-center overflow-hidden mt-10">
        <div className="relative z-10 mt-10 w-[55rem]">
          <div className="relative p-5 group h-full inner-content  rounded-[2rem] bg-[#05072d] border-white/15 before:rounded-[2rem] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 before:border-white/20 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:shadow before:shadow-gray-950">
            <form
              className="flex-1 relative z-20"
              onSubmit={(e) => onSubmitForm(e)}
            >
              <div className="mb-3">
                <textarea
                  id="text"
                  name="text"
                  value={form.text || ''}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-2 border border-transparent bg-transparent focus:outline-none text-white"
                  placeholder="Type the text here and listen to the magic work."
                ></textarea>
              </div>
              <div className="flex justify-start">
                <div className="relative inline-flex items-center gap-2 w-fit h-full text-white text-sm px-3 py-1 focus-within:ring-2 focus-within:ring-transparent hover:ring-1 hover:ring-orange-400  rounded-full bg-[#05072d] border-white/15 before:rounded-[1rem] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 before:border-white/20 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:shadow before:shadow-gray-950 ">
                  <label className="block text-flamingo-500 dark:text-junglegreen-600">
                    Speaker:{' '}
                  </label>
                  <select
                    id="speaker"
                    name="speaker" // added name attribute
                    value={form.speaker} // bind select value to form state
                    onChange={handleChange} // handle change
                    className="block relative z-20 w-full px-0 py-1 pr-2 leading-tight bg-transparent text-woodsmoke-900 dark:text-woodsmoke-400 rounded focus:outline-none focus:ring-none"
                  >
                    <option
                      value={2596}
                      className="text-gray-300 bg-gray-800 hover:bg-gray-700 p-4"
                    >
                      Male Voice
                    </option>
                    <option
                      value={2597}
                      className="text-gray-300 bg-gray-800 hover:bg-gray-700"
                    >
                      Female Voice
                    </option>
                  </select>
                </div>
              </div>

              <div className="block my-4">
                <hr className="border-[0.2px] border-gray-400/10" />
              </div>

              {/* <div>
                <CaptchaCode setIsVerified={setIsVerified} />
              </div> */}

              {loading && (
                <div className="">
                  <span className="w-full absolute flex justify-center bottom-0 z-10">
                    <span className="w-fit absolute flex justify-center top-0 h-full items-center z-20">
                      Converting...
                    </span>
                  </span>
                </div>
              )}

              <AudioPlayer file={audioData?.audio_file_url} />
              <div className="w-full flex justify-center items-center pt-2">
                <div className="w-fit">
                  <Button text={'Convert to Speech'} link={''} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
