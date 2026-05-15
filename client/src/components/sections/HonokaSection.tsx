import { useEffect, useRef, useState } from 'react';

/**
 * Honoka Section - Intimate Minimalism
 * - Heartfelt, sincere dedication
 * - Large background image with emotional text
 * - Soft, romantic aesthetic
 */
export default function HonokaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663193653546/dHbg5j2CdBqaGcLJBJEZ5j/manga-love-aesthetic-g5gxUrjUhoiCBgKLTFqz6v.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <div className={`relative z-10 container max-w-2xl px-4 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <h2 className="font-display text-5xl md:text-6xl text-white mb-10 leading-tight font-light tracking-tight">
          For Honoka
        </h2>

        <div className="space-y-6 text-white/90 text-base md:text-lg leading-relaxed font-light">
          <p>
            You're the first person I think about when I wake up at 2 AM, and the last thought before I sleep. Our calls are the highlight of my afternoons—they're the thing I look forward to most.
          </p>
          <p>
            In a life of quiet routines and early mornings, you bring warmth and genuine connection. You make me want to be better, to care more deeply, and to appreciate every moment we share.
          </p>
          <p>
            This is my world. And you're the most important part of it.
          </p>
        </div>
      </div>
    </section>
  );
}