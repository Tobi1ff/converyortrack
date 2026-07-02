import { useEffect, useRef, useState } from 'react';
import { Target, TrendingUp, Heart } from 'lucide-react';

const goals = [
  {
    icon: Target,
    title: 'Expand Offerings',
    description: 'To expand our product and service offerings to meet the evolving needs of our customers.',
  },
  {
    icon: TrendingUp,
    title: 'Increase Market Share',
    description: 'To increase our market share in the region through strategic partnerships and marketing initiatives.',
  },
  {
    icon: Heart,
    title: 'Maintain Excellence',
    description: 'To maintain a high level of customer satisfaction through exceptional service delivery.',
  },
];

export function Goals() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-brand-orange overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <div
                className={`inline-block bg-brand-concrete text-white px-4 py-1 font-condensed font-bold text-sm mb-4 transition-all duration-600 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                OUR COMMITMENT
              </div>
              <h2
                className={`font-condensed text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-concrete mb-6 transition-all duration-800 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '0.1s' }}
              >
                OUR GOALS
              </h2>
              <p
                className={`text-lg text-brand-concrete/80 mb-8 transition-all duration-800 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                We are driven by a passion for delivering exceptional quality, service, and value. Our goals reflect our commitment to growth and excellence.
              </p>

              {/* Tagline */}
              <div
                className={`bg-brand-concrete text-white p-8 transition-all duration-800 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '0.3s' }}
              >
                <p className="font-condensed text-2xl font-bold text-brand-orange mb-2">
                  "Empowering Progress, One Conveyor at a Time"
                </p>
                <p className="text-gray-400 text-sm">
                  Join us on our journey to empower progress in the industries we serve.
                </p>
              </div>
            </div>

            {/* Right - Goals Cards */}
            <div className="space-y-6">
              {goals.map((goal, index) => (
                <div
                  key={goal.title}
                  className={`group bg-white shadow-industrial p-6 flex items-start gap-6 transition-all duration-600 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-brand-orange flex items-center justify-center flex-shrink-0 group-hover:bg-brand-concrete transition-colors duration-300">
                    <goal.icon className="h-7 w-7 text-brand-concrete group-hover:text-brand-orange transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-condensed text-xl font-bold text-brand-concrete mb-2">
                      {goal.title}
                    </h3>
                    <p className="text-brand-gray text-sm leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
