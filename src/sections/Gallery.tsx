import { useEffect, useRef, useState } from 'react';
import { Camera } from 'lucide-react';

const galleryImages = [
  { src: '/gallery-01.jpg', alt: 'Site worker in safety gear' },
  { src: '/gallery-02.jpg', alt: 'Conveyor belt system' },
  { src: '/gallery-03.jpg', alt: 'Team working on conveyor' },
  { src: '/gallery-04.jpg', alt: 'Mining site operations' },
  { src: '/gallery-05.jpg', alt: 'Night shift conveyor work' },
  { src: '/gallery-06.jpg', alt: 'Conveyor maintenance' },
  { src: '/gallery-07.jpg', alt: 'Industrial equipment' },
  { src: '/gallery-08.jpg', alt: 'Site operations' },
  { src: '/gallery-09.jpg', alt: 'Conveyor installation' },
  { src: '/gallery-10.jpg', alt: 'Team at work' },
  { src: '/gallery-11.jpg', alt: 'Equipment maintenance' },
  { src: '/gallery-12.jpg', alt: 'Conveyor rollers' },
  { src: '/gallery-13.jpg', alt: 'Site inspection' },
  { src: '/gallery-14.jpg', alt: 'Belt repair work' },
  { src: '/gallery-15.jpg', alt: 'Plant maintenance' },
  { src: '/gallery-16.jpg', alt: 'Conveyor structure' },
  { src: '/gallery-17.jpg', alt: 'Field operations' },
];

export function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Double the images for seamless loop
  const allImages = [...galleryImages, ...galleryImages];

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-brand-dark overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(255, 161, 46, 0.1) 20px,
              rgba(255, 161, 46, 0.1) 40px
            )`,
          }}
        />
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="px-6 sm:px-8 lg:px-16 xl:px-24 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <div
                  className={`inline-block bg-brand-orange text-brand-dark px-4 py-1 font-condensed font-bold text-sm mb-4 transition-all duration-600 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  OUR WORK
                </div>
                <h2
                  className={`font-condensed text-4xl sm:text-5xl lg:text-6xl font-bold text-white transition-all duration-800 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: '0.1s' }}
                >
                  SITE GALLERY
                </h2>
              </div>
              <p
                className={`text-gray-400 max-w-md transition-all duration-800 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                <Camera className="inline-block h-5 w-5 text-brand-orange mr-2" />
                Real shots from the field - our team in action
              </p>
            </div>
          </div>
        </div>

        {/* Scrolling Gallery - Right to Left */}
        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '0.3s' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex overflow-hidden">
            <div
              className={`flex gap-4 ${isPaused ? '' : 'animate-scroll-left'}`}
              style={{
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {allImages.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="group relative flex-shrink-0 w-72 sm:w-80 lg:w-96 h-48 sm:h-56 lg:h-64 overflow-hidden cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-colors duration-300" />
                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-b-[40px] border-b-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Left to Right (Opposite direction) */}
        <div
          className={`relative mt-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '0.5s' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track - Reverse */}
          <div className="flex overflow-hidden">
            <div
              className={`flex gap-4 ${isPaused ? '' : 'animate-scroll-right'}`}
              style={{
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {[...allImages].reverse().map((image, index) => (
                <div
                  key={`reverse-${image.src}-${index}`}
                  className="group relative flex-shrink-0 w-72 sm:w-80 lg:w-96 h-48 sm:h-56 lg:h-64 overflow-hidden cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-colors duration-300" />
                  {/* Corner Accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[40px] border-r-transparent border-b-[40px] border-b-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="px-6 sm:px-8 lg:px-16 xl:px-24 mt-12">
          <div className="max-w-7xl mx-auto">
            <div
              className={`flex flex-wrap justify-center gap-8 sm:gap-16 transition-all duration-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.7s' }}
            >
              <div className="text-center">
                <div className="font-condensed text-4xl sm:text-5xl font-bold text-brand-orange">17+</div>
                <div className="text-gray-400 text-sm">Projects Documented</div>
              </div>
              <div className="text-center">
                <div className="font-condensed text-4xl sm:text-5xl font-bold text-brand-orange">24/7</div>
                <div className="text-gray-400 text-sm">Site Operations</div>
              </div>
              <div className="text-center">
                <div className="font-condensed text-4xl sm:text-5xl font-bold text-brand-orange">100%</div>
                <div className="text-gray-400 text-sm">Safety Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
