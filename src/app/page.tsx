import { CTO } from '@/components/content/CTO';
import { Faq } from '@/components/content/Faq';
import { Features } from '@/components/content/Features';
import { Stories } from '@/components/content/Stories';
import { UseCases } from '@/components/content/UseCases';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TTSForm } from '@/components/TTSForm';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <TTSForm />
      <Features />
      <UseCases />
      <Stories />
      <CTO />
      <Faq />
      <Footer />
    </div>
  );
}
