import React from 'react';
import { Logo } from '../Logo';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { ContactForm } from './ContactForm';
import Link from 'next/link';

export const Items = () => {
  return (
    <footer className="mt-10">
      <div className="">
        <div className="grid grid-cols-3 gap-8 lg:grid-cols-3">
          <div className="flex flex-col text-left gap-4">
            <Logo />
            <p className="text-left mt-2">
              Create natural sounding Text to Speech (TTS) using our latest
              neural Al Voice generator.{' '}
            </p>
            <span className="text-xs text-white/40">
              &copy; 2022. VoiceVerse. All rights reserved.
            </span>
            <ul className="flex gap-5">
              <li>
                <FaFacebook color="white" />
              </li>
              <li>
                <FaInstagram color="white" />
              </li>
              <li>
                <FaTwitter color="white" />
              </li>
              <li>
                <FaLinkedin color="white" />
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-left">
              <h2 className="font-semibold text-white">Quick Links</h2>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-white/60 transition hover:opacity-75"
                  >
                    Features
                  </Link>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-white/60 transition hover:opacity-75"
                  >
                    {' '}
                    Use cases
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-white/60 transition hover:opacity-75"
                  >
                    {' '}
                    Account
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-white/60 transition hover:opacity-75"
                  >
                    {' '}
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col text-left">
            <h2 className="font-semibold text-white mb-5">Contact Us</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </footer>
  );
};
