import { useEffect, useRef, useState } from 'react';
import { 
  MoveRight, 
  Zap, 
  CircleDot, 
  Disc, 
  ShieldAlert,
  Frame,
  Scissors,
  RefreshCw,
  Navigation
} from 'lucide-react';

const products = [
  { icon: MoveRight, name: 'Conveyor Belts', description: 'Heavy-duty belts for all applications' },
  { icon: Zap, name: 'Motors', description: 'High-performance drive motors' },
  { icon: CircleDot, name: 'Idlers', description: 'Precision-engineered idler rollers' },
  { icon: Disc, name: 'Pulleys', description: 'Drive and tail pulleys' },
  { icon: ShieldAlert, name: 'Impacts', description: 'Impact beds and cradles' },
  { icon: Frame, name: 'Conveyor Frames', description: 'Through & return frames' },
  { icon: Scissors, name: 'Belt Scrapers', description: 'Primary and secondary cleaners' },
  { icon: RefreshCw, name: 'Rollers', description: 'Carrying and return rollers' },
  { icon: Navigation, name: 'Steering Frames', description: 'Belt tracking solutions' },
];

export function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      id="products"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-brand-concrete overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/products-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Grid Lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-brand-concrete"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div
              className={`inline-block bg-brand-orange text-brand-concrete px-4 py-1 font-condensed font-bold text-sm mb-4 transition-all duration-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              WHAT WE SUPPLY
            </div>
            <h2
              className={`font-condensed text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-concrete mb-6 transition-all duration-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              OUR PRODUCTS
            </h2>
            <p
              className={`text-lg text-brand-gray max-w-2xl mx-auto transition-all duration-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              Quality conveyor components and spare parts from leading manufacturers.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={product.name}
                className={`group relative bg-white shadow-industrial overflow-hidden transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${0.3 + index * 0.05}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover Background */}
                <div
                  className={`absolute inset-0 bg-brand-orange transition-transform duration-500 origin-bottom ${
                    hoveredIndex === index ? 'scale-y-100' : 'scale-y-0'
                  }`}
                />

                {/* Content */}
                <div className="relative p-8">
                  <div
                    className={`w-16 h-16 flex items-center justify-center mb-6 transition-all duration-300 ${
                      hoveredIndex === index ? 'bg-brand-concrete' : 'bg-brand-orange/10'
                    }`}
                  >
                    <product.icon
                      className={`h-8 w-8 transition-colors duration-300 ${
                        hoveredIndex === index ? 'text-brand-orange' : 'text-brand-orange'
                      }`}
                    />
                  </div>

                  <h3
                    className={`font-condensed text-xl font-bold mb-2 transition-colors duration-300 ${
                      hoveredIndex === index ? 'text-brand-concrete' : 'text-brand-concrete'
                    }`}
                  >
                    {product.name}
                  </h3>

                  <p
                    className={`text-sm transition-colors duration-300 ${
                      hoveredIndex === index ? 'text-brand-concrete/80' : 'text-brand-gray'
                    }`}
                  >
                    {product.description}
                  </p>

                  {/* Animated Line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-brand-concrete transition-all duration-500 ${
                      hoveredIndex === index ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`mt-12 text-center transition-all duration-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            <p className="text-brand-gray mb-4">
              Need a specific part? We can source specialized components for your equipment.
            </p>
            <button
              className="inline-flex items-center gap-2 bg-brand-concrete text-white px-8 py-4 font-condensed font-bold hover:bg-brand-orange hover:text-brand-concrete transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              REQUEST A QUOTE
              <MoveRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
