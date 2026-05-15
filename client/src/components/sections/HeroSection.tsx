import { useEffect, useState } from 'react';

/**
 * Hero Section - Intimate Minimalism
 * - Large background image with warm early morning aesthetic
 * - Centered text with emotional introduction
 * - Soft fade-in animation on load
 */
export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663193653546/dHbg5j2CdBqaGcLJBJEZ5j/hero-early-morning-9fpG262EuKavAtSsicxiDm.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Content */}
      <div className={`relative z-10 container max-w-2xl text-center px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <h1 className="font-display text-6xl md:text-7xl text-white mb-6 leading-tight font-light tracking-tight">
          For Honoka
        </h1>
        <p className="text-lg md:text-xl text-white/85 font-light leading-relaxed mb-2">
          A glimpse into my everyday
        </p>
        <p className="text-base md:text-lg text-white/70 font-light">
          my routines, my interests, and what matters to me
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-5 h-5 text-white/60 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}