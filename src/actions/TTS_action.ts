'use server';
// lib/ttsMaker.js
const API_KEY = 'ttsmaker_demo_token'; // Replace with your actual API key

export const convertTextToSpeech = async ({
  text,
  speaker,
  selectedLanguage,
}: any) => {
  const params = {
    token: 'ttsmaker_demo_token',
    language: selectedLanguage,
    text: text, // Pass text directly as a string
    voice_id: speaker,
    audio_format: 'mp3',
    audio_speed: 1.0,
    audio_volume: 0,
    text_paragraph_pause_time: 0,
  };

  try {
    // console.log('text.length', text.length);

    if (text.length < 5) {
      throw new Error('Add some more Text for better conversion');
    }

    const response = await fetch(
      'https://api.ttsmaker.com/v1/create-tts-order',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to convert text to speech');
    }

    const data = await response.json();
    console.log('API response data:', data);

    return data;
  } catch (error) {
    console.error('Error converting text to speech:', error);
    throw error;
  }
};
