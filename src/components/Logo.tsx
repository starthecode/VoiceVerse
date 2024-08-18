import React from 'react';
import { Wave } from './Wave';

export const Logo = () => {
  return (
    <div className="flex gap-2">
      <Wave />
      <span className="text-white font-bold text-lg">VoiceVerse</span>
    </div>
  );
};
