import { useEffect, useRef, useState } from 'react';
import { Wrench, Settings, Lightbulb, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Conveyor Belt Repair',
    description: 'Prompt and reliable repair services to minimize downtime and keep your operations running smoothly. Our expert technicians are available 24/7 for emergency repairs.',
    features: ['Emergency repairs', 'Belt splicing', 'Patch repairs', 'Vulcanizing services'],
  },
  {
    icon: Settings,
    title: 'Plant Maintenance',
    description: 'Regular maintenance to ensure optimal conveyor belt performance and extend equipment lifespan. Preventive maintenance programs tailored to your needs.',
    features: ['Scheduled inspections', 'Preventive maintenance', 'Performance optimization', 'Equipment upgrades'],
  },
  {
    icon: Lightbulb,
    title: 'Customized Solutions',
    description: 'Tailored solutions to meet specific customer requirements. We design and implement custom conveyor systems for unique operational challenges.',
    features: ['System design', 'Custom fabrication', 'Installation services', 'Technical consulting'],
  },
];

export function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
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
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-brand-dark overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/services-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark" />
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <div
              className={`inline-block bg-brand-orange text-brand-dark px-4 py-1 font-condensed font-bold text-sm mb-4 transition-all duration-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              WHAT WE DO
            </div>
            <h2
              className={`font-condensed text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              OUR SERVICES
            </h2>
            <p
              className={`text-lg text-gray-400 max-w-2xl transition-all duration-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              Comprehensive conveyor belt solutions designed to keep your operations running at peak efficiency.
            </p>
          </div>

          {/* Services Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Service Cards */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`group cursor-pointer transition-all duration-500 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                  onClick={() => setActiveService(index)}
                >
                  <div
                    className={`p-6 border-l-4 transition-all duration-300 ${
                      activeService === index
                        ? 'bg-white/10 border-brand-orange'
                        : 'bg-transparent border-white/20 hover:bg-white/5 hover:border-white/40'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 flex items-center justify-center transition-all duration-300 ${
                          activeService === index ? 'bg-brand-orange' : 'bg-white/10'
                        }`}
                      >
                        <service.icon
                          className={`h-6 w-6 transition-colors duration-300 ${
                            activeService === index ? 'text-brand-dark' : 'text-white'
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-condensed text-xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Active Service Details */}
            <div
              className={`relative transition-all duration-800 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-brand-orange flex items-center justify-center">
                    {(() => {
                      const IconComponent = services[activeService].icon;
                      return <IconComponent className="h-8 w-8 text-brand-dark" />;
                    })()}
                  </div>
                  <h3 className="font-condensed text-2xl font-bold text-white">
                    {services[activeService].title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-condensed text-sm font-bold text-brand-orange uppercase tracking-wider">
                    Key Features
                  </h4>
                  {services[activeService].features.map((feature, idx) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-gray-300"
                      style={{
                        animation: `slide-up 0.4s ease-out ${idx * 0.1}s forwards`,
                        opacity: 0,
                      }}
                    >
                      <CheckCircle className="h-5 w-5 text-brand-orange flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-400">Emergency Line</div>
                      <div className="text-xl font-bold text-brand-orange">+27 64 986 5970</div>
                    </div>
                    <button
                      className="bg-brand-orange text-brand-dark px-6 py-3 font-condensed font-bold hover:bg-white transition-colors duration-300"
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        contactSection?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      GET QUOTE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
