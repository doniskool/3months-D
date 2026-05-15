import { useEffect, useRef, useState } from 'react';

interface TimelineItem {
  time: string;
  activity: string;
  description: string;
  icon: string;
}

const routineItems: TimelineItem[] = [
  {
    time: '10 PM - 11 PM',
    activity: 'Sleep',
    description: 'Winding down for the night, preparing for rest',
    icon: '🌙',
  },
  {
    time: '2:00 AM - 2:30 AM',
    activity: 'Wake Up',
    description: 'Early riser, starting the day while the world sleeps',
    icon: '⏰',
  },
  {
    time: 'Before 3 AM',
    activity: 'Shower',
    description: 'Refreshing start to the morning routine',
    icon: '🚿',
  },
  {
    time: '3 AM - 5:30 AM',
    activity: 'Reading & Watching',
    description: 'Enjoying romance manga/manhwa or YouTube in the quiet hours',
    icon: '📚',
  },
  {
    time: '5:30 AM',
    activity: 'Getting Ready',
    description: 'Preparing for school, fixing up the day ahead',
    icon: '🎒',
  },
  {
    time: 'After School',
    activity: 'Assignments',
    description: 'Completing one or two assignments from the day',
    icon: '✏️',
  },
  {
    time: 'Afternoon',
    activity: 'Call with Honoka',
    description: 'Meaningful time connecting with the person I care about most',
    icon: '💕',
  },
  {
    time: 'Evening',
    activity: 'Friends & Games',
    description: 'Playing games or doing random things online with friends',
    icon: '🎮',
  },
  {
    time: '8 PM - 9 PM',
    activity: 'Dinner',
    description: 'Taking time to eat and refuel',
    icon: '🍽️',
  },
  {
    time: 'Before Sleep',
    activity: 'Wind Down',
    description: 'Watching YouTube or showering before bed',
    icon: '📱',
  },
];

/**
 * Daily Routine Section - Intimate Minimalism
 * - Vertical timeline showing daily activities
 * - Staggered animation for each item
 * - Soft cards with gentle hover effects
 */
export default function DailyRoutineSection() {
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
    <section className="py-24 px-4 bg-gradient-to-b from-background via-background to-background/95">
      <div className="container max-w-3xl">
        {/* Section header */}
        <div className="mb-20">
          <h2 className="font-section-title text-foreground mb-3">My Day</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent via-secondary to-accent/30 rounded-full" />
          <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
            A glimpse into how I spend my days, from early mornings to quiet nights
          </p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-secondary/20 to-transparent transform -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-8">
            {routineItems.map((item, index) => (
              <div
                key={index}
                data-index={index}
                className={`relative transition-all duration-700 ${
                  visibleItems.has(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Alternating layout */}
                <div className={`flex gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content card */}
                  <div className="flex-1">
                    <div className="rounded-lg p-5 bg-card/40 backdrop-blur-sm border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:bg-card/60 hover:shadow-lg hover:shadow-accent/20 group">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground text-base">{item.activity}</h3>
                          <p className="text-xs text-muted-foreground font-medium mt-0.5">{item.time}</p>
                        </div>
                      </div>
                      <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="flex items-start justify-center pt-5">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-secondary shadow-md shadow-accent/40 ring-2 ring-background" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}