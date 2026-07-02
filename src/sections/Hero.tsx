import { useEffect, useRef, useState } from 'react';
import { Phone, ArrowRight, ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dividerAngle, setDividerAngle] = useState(75);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const angle = 70 + x * 10;
      setDividerAngle(angle);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-brand-dark"
    >
      {/* Background Image with Parallax */}
      <div
        className={`absolute inset-0 transition-all duration-1500 ${
          isLoaded ? 'scale-100 blur-0' : 'scale-110 blur-md'
        }`}
        style={{
          clipPath: `polygon(${dividerAngle}% 0, 100% 0, 100% 100%, ${dividerAngle - 15}% 100%)`,
          transition: 'clip-path 0.3s ease-out',
        }}
      >
        <img
          src="/hero-bg.jpg"
          alt="Industrial conveyor system"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-brand-dark/90" />
        <div className="absolute inset-0 bg-brand-dark/40" />
      </div>

      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-2xl">
            {/* Divider Line */}
            <div
              className={`absolute top-0 w-px bg-gradient-to-b from-transparent via-brand-yellow to-transparent transition-all duration-1200 ${
                isLoaded ? 'h-full opacity-100' : 'h-0 opacity-0'
              }`}
              style={{
                left: `${dividerAngle - 7}%`,
                transitionDelay: '0.3s',
              }}
            />

            {/* Heading */}
            <h1
              className={`font-condensed text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              CONVEYOR
            </h1>
            <h1
              className={`font-condensed text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-brand-yellow leading-none tracking-tight transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              BELT SOLUTIONS
            </h1>

            <p
              className={`text-lg sm:text-xl text-gray-300 mb-8 max-w-lg transition-all duration-800 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              High-performance maintenance & supply for mining, manufacturing, and logistics industries.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-800 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              <Button
                size="lg"
                className="bg-brand-yellow hover:bg-brand-yellow/90 text-white font-condensed text-lg px-8 py-6 animate-pulse-glow"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                DISCOVER OUR SERVICES
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-gray-500/50 text-gray-300 hover:border-white/50 hover:text-white hover:bg-white/10 font-condensed text-lg px-8 py-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                CONTACT US
              </Button>

              <Button asChild size="lg" className="bg-white text-brand-dark hover:bg-gray-200 font-condensed text-lg px-8 py-6">
                <a href="/company-profile.pdf" download target="_blank" rel="noopener noreferrer">
                  DOWNLOAD COMPANY PROFILE
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div
              className={`flex items-center gap-4 transition-all duration-800 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '1s' }}
            >
              <div className="flex items-center gap-2 text-white">
                <Phone className="h-5 w-5 text-brand-yellow" />
                <span className="font-medium">064 986 5970</span>
              </div>
              <div className="h-4 w-px bg-white/30" />
              <span className="text-brand-yellow font-condensed text-sm">24/7 EMERGENCY LINE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-brand-yellow transition-all duration-500 cursor-pointer ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1.2s' }}
      >
        <span className="text-xs font-condensed tracking-widest">SCROLL</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </button>

      {/* BBBEE Badge - Centered on Mobile, Top Right on Desktop */}
      <div
        className={`absolute top-8 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 bg-brand-yellow text-brand-dark px-4 py-2 font-condensed font-bold text-sm transition-all duration-800 ${
          isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-4'
        }`}
        style={{ transitionDelay: '1s' }}
      >
        LEVEL 1 BBBEE
      </div>
    </section>
  );
}
