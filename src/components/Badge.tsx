'use client';
import Image from 'next/image';
import React from 'react';
import { BsGlobe } from 'react-icons/bs';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

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
  { name: 'Dutch', code: 'nl' },
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

export const Badge = ({
  selectedLanguage,
  setSelectedLanguage,
  isClick,
}: any) => {
  const handleChange = (e: any) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <section className="w-full flex flex-col justify-center text-center items-center">
      {isClick && (
        <h2 className="flex gap-1 items-center mb-4 text-white text-center">
          Click and Select <BsGlobe />
          Language as per your choice
        </h2>
      )}

      <div className="relative z-10 w-[60rem]">
        <ul className="flex-wrap flex gap-2 justify-center">
          {languages.map((item, index) => (
            <li key={index} className="inline-flex items-center w-fit">
              {isClick && (
                <input
                  type="radio"
                  id={`language-${index}`}
                  name="language"
                  value={item.code}
                  onChange={handleChange}
                  checked={selectedLanguage === item.code}
                  className="relative hidden peer"
                />
              )}

              <label
                htmlFor={`language-${index}`}
                className={`relative inline-flex items-center gap-2 w-full h-full text-white text-sm pr-6 pl-2 py-1 focus-within:ring-2 focus-within:ring-transparent hover:ring-1 hover:ring-orange-400  rounded-full bg-[#05072d] border-white/15 before:rounded-[1rem] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 before:border-white/20 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:shadow before:shadow-gray-950 ${
                  selectedLanguage === item.code && isClick
                    ? 'ring-orange-400 ring-1'
                    : ''
                }`}
              >
                <Image
                  className="object-cover rounded-full ml-2 object-center w-[15px] h-[14px]"
                  width={17}
                  height={17}
                  src={`https://flagcdn.com/${item.code}.svg`}
                  alt={item.code}
                />
                {item.name}
                {selectedLanguage === item.code && (
                  <span className="absolute right-1">
                    <IoMdCheckmarkCircleOutline
                      className="fill-green-400"
                      size={15}
                    />
                  </span>
                )}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
