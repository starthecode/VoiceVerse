import { FaPlay, FaPause } from 'react-icons/fa';
import { BsArrowRepeat } from 'react-icons/bs';
import { MdOutlineFileDownload } from 'react-icons/md';
import { useState, useRef, useEffect } from 'react';

const AudioPlayer = ({ file }: any) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeDownload, setActiveDownload] = useState(false);

  useEffect(() => {
    file ? setActiveDownload(true) : setActiveDownload(false);
    const audio = audioRef.current as any;

    const updateCurrentTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const setAudioDuration = () => {
      setDuration(audio.duration);
    };

    const handleAudioEnd = () => {
      audio.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', updateCurrentTime);
    audio.addEventListener('loadedmetadata', setAudioDuration);
    audio.addEventListener('ended', handleAudioEnd);

    return () => {
      audio.removeEventListener('timeupdate', updateCurrentTime);
      audio.removeEventListener('loadedmetadata', setAudioDuration);
      audio.removeEventListener('ended', handleAudioEnd);
    };
  }, [file]);

  useEffect(() => {
    const audio = audioRef.current as any;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setCurrentTime(0);
      setDuration(0);
      setIsPlaying(false);
      if (file) {
        audio.load();
      }
    }
  }, [file]);

  const togglePlayPause = () => {
    const audio = audioRef.current as any;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleRangeChange = (e: any) => {
    const audio = audioRef.current as any;
    const duration = audio.duration;
    const value = parseFloat(e.target.value);

    if (isFinite(duration) && isFinite(value)) {
      audio.currentTime = (duration / 100) * value;
    }
  };

  const formatTime = (time: any) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="w-full p-4 rounded-lg flex items-center">
      <audio
        id="tts_player"
        className="bg-transparent"
        preload="none"
        ref={audioRef}
        src={file}
      ></audio>
      <button
        onClick={togglePlayPause}
        className="text-white flex justify-center items-center focus:outline-none rounded-full border border-onyx-400/30 px-2 py-2 mt-1"
      >
        {isPlaying ? (
          <FaPause
            size={12}
            className="dark:fill-junglegreen-600 fill-flamingo-500"
          />
        ) : (
          <FaPlay
            size={12}
            className="dark:fill-junglegreen-600 fill-flamingo-500"
          />
        )}
      </button>

      <div className="flex w-full mx-4 relative items-center">
        <input
          type="range"
          className="w-full h-4 bg-gray-700 rounded-lg overflow-hidden appearance-none focus:outline-none focus:ring-0 cursor-pointer"
          value={
            isFinite((currentTime / duration) * 100)
              ? (currentTime / duration) * 100
              : 0
          }
          onChange={handleRangeChange}
        />
      </div>

      <div className="text-gray-400 text-sm flex">
        <span className="text-woodsmoke-600 pr-1">{formatTime(currentTime)}</span> /{' '}
        <strong className="text-flamingo-500 dark:text-junglegreen-600">
          {formatTime(duration)}
        </strong>
      </div>

      <button className="text-white ml-4 focus:outline-none">
        <BsArrowRepeat />
      </button>

      {activeDownload && (
        <a
          href={file ? file : '/'}
          download
          className="text-white ml-4 focus:outline-none"
        >
          <MdOutlineFileDownload />
        </a>
      )}
    </div>
  );
};

export default AudioPlayer;
