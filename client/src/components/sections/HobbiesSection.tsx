import { useEffect, useRef, useState } from 'react';

interface Hobby {
  category: string;
  items: string[];
  description: string;
  icon: string;
}

const hobbies: Hobby[] = [
  {
    category: 'Manga & Manhwa',
    items: ['Romance series', 'Action series', 'Late-night reading sessions'],
    description: 'I love getting lost in compelling stories, especially romance narratives that explore genuine human connection',
    icon: '📖',
  },
  {
    category: 'Sports',
    items: ['Badminton (my strength)', 'Soccer', 'School competitions'],
    description: 'I enjoy the discipline and teamwork of sports, particularly badminton where I excel',
    icon: '🏸',
  },
  {
    category: 'Gaming & Online',
    items: ['Gaming with friends', 'YouTube', 'Exploring new games'],
    description: 'I spend quality time online with friends, enjoying games and discovering new content',
    icon: '🎮',
  },
];

/**
 * Hobbies Section - Intimate Minimalism
 * - Card-based layout showcasing interests
 * - Staggered animation on scroll
 * - Warm, inviting design
 */
export default function HobbiesSection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = containerRef.current?.querySelectorAll('[data-index]');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container max-w-4xl">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="font-section-title text-foreground mb-3">What I Love</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent via-secondary to-accent/30 rounded-full" />
        </div>

        {/* Hobbies grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              data-index={index}
              className={`transition-all duration-700 ${
                visibleItems.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="rounded-lg p-6 bg-card/50 backdrop-blur-sm border border-accent/20 h-full hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:bg-card/70">
                <div className="text-4xl mb-4">{hobby.icon}</div>
                <h3 className="font-semibold text-foreground text-lg mb-3">{hobby.category}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">{hobby.description}</p>
                <div className="space-y-2">
                  {hobby.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-accent/60 mt-0.5 text-sm">→</span>
                      <span className="text-sm text-foreground/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}