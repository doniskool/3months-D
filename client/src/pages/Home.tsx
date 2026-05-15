import { useEffect, useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import DailyRoutineSection from '@/components/sections/DailyRoutineSection';
import HobbiesSection from '@/components/sections/HobbiesSection';
import HonokaSection from '@/components/sections/HonokaSection';
import Footer from '@/components/Footer';

/**
 * Design Philosophy: Intimate Minimalism with Warm Nostalgia
 * - Single-column scrolling timeline that unfolds like diary entries
 * - Generous breathing room between sections
 * - Gentle reveals and smooth transitions
 * - Warm color palette: cream, charcoal, sage green, muted rose
 */
export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663193653546/dHbg5j2CdBqaGcLJBJEZ5j/texture-background-h79EFXdCt2YrbvsZVt8xf9.webp)',
          backgroundSize: 'cover',
        }}
      />

      <main className="relative z-10">
        <HeroSection />
        <DailyRoutineSection />
        <HobbiesSection />
        <HonokaSection />
        <Footer />
      </main>
    </div>
  );
}