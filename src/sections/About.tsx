import { useEffect, useRef, useState } from 'react';
import { Award, Clock, Users, Shield } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Quality',
    description: 'Delivering high-quality products and services that exceed industry standards.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'Providing prompt and dependable service when you need it most.',
  },
  {
    icon: Users,
    title: 'Customer Satisfaction',
    description: 'Building long-term relationships through exceptional customer service.',
  },
  {
    icon: Shield,
    title: 'Safety',
    description: 'Ensuring a safe working environment for our employees and customers.',
  },
];

export function About() {
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
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-brand-concrete overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/about-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Rotating Gear Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5 pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          className={`w-full h-full animate-rotate-gear ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transition: 'opacity 1s ease' }}
        >
          <path
            fill="currentColor"
            className="text-brand-concrete"
            d="M100 10 L110 10 L115 30 L125 32 L135 15 L145 20 L140 40 L150 45 L165 30 L175 40 L160 55 L165 65 L185 60 L190 70 L170 80 L172 90 L195 95 L195 105 L172 110 L170 120 L190 130 L185 140 L165 135 L160 145 L175 160 L165 170 L150 155 L140 160 L145 180 L135 185 L125 168 L115 170 L110 190 L100 190 L95 170 L85 168 L75 185 L65 180 L70 160 L60 155 L45 170 L35 160 L50 145 L45 135 L25 140 L20 130 L40 120 L38 110 L15 105 L15 95 L38 90 L40 80 L20 70 L25 60 L45 65 L50 55 L35 40 L45 30 L60 45 L70 40 L65 20 L75 15 L85 32 L95 30 Z M100 60 A40 40 0 1 0 100 140 A40 40 0 1 0 100 60"
          />
        </svg>
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <div
              className={`inline-block bg-brand-orange text-brand-concrete px-4 py-1 font-condensed font-bold text-sm mb-4 transition-all duration-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              ABOUT US
            </div>
            <h2
              className={`font-condensed text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-concrete mb-6 transition-all duration-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              COMPANY OVERVIEW
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            {/* Left Column - Company Info */}
            <div
              className={`transition-all duration-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <p className="text-lg text-brand-gray leading-relaxed mb-6">
                <strong className="text-brand-concrete">Conveyor Track Pty Ltd</strong> is a leading supplier of conveyor belts and provider of conveyor plant repair and maintenance services. We cater to the needs of various industries, including mining, manufacturing, and logistics.
              </p>
              <p className="text-lg text-brand-gray leading-relaxed mb-8">
                Founded by <strong className="text-brand-concrete">Mr. Mona Prince Mbatini</strong> (pictured right), a visionary entrepreneur with a passion for delivering exceptional quality and service, our company is committed to excellence and dedicated to making a positive impact in the industries we serve.
              </p>

              {/* Mission & Vision */}
              <div className="space-y-6">
                <div className="border-l-4 border-brand-orange pl-6">
                  <h3 className="font-condensed text-xl font-bold text-brand-concrete mb-2">OUR MISSION</h3>
                  <p className="text-brand-gray">
                    To deliver high-quality products and services that meet the evolving needs of our customers, while ensuring a safe and reliable working environment.
                  </p>
                </div>
                <div className="border-l-4 border-brand-orange pl-6">
                  <h3 className="font-condensed text-xl font-bold text-brand-concrete mb-2">OUR VISION</h3>
                  <p className="text-brand-gray">
                    To be the preferred supplier of conveyor belt products and services in the region, recognized for our commitment to quality, reliability, and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div
              className={`relative transition-all duration-800 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="relative h-full min-h-[400px] overflow-hidden">
                <img
                  src="/the-ceo.jpg"
                  alt="Mr. Mona Prince Mbatini, Founder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-concrete/60 to-transparent" />
                
                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-4">
                      <div className="font-condensed text-3xl font-bold text-brand-orange">Level 1</div>
                      <div className="text-white text-sm">BBBEE Certified</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4">
                      <div className="font-condensed text-3xl font-bold text-brand-orange">24/7</div>
                      <div className="text-white text-sm">Emergency Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div>
            <h3
              className={`font-condensed text-2xl font-bold text-brand-concrete mb-8 transition-all duration-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              OUR VALUES
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`group bg-white p-6 shadow-industrial card-lift transition-all duration-600 ${
                    isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-brand-orange/10 flex items-center justify-center mb-4">
                    <value.icon className="h-7 w-7 text-brand-orange icon-flip" />
                  </div>
                  <h4 className="font-condensed text-xl font-bold text-brand-concrete mb-2">
                    {value.title}
                  </h4>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
