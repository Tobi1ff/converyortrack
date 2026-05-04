import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-brand-dark/95 backdrop-blur-md shadow-industrial py-2'
            : 'bg-transparent py-3'
        }`}
      >
        <div className="px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto flex items-center justify-between">

            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="flex items-center group transition-transform duration-300 hover:scale-105"
              aria-label="Back to top"
            >
              <img
                src="/Conveyor_Track_logo_design.png"
                alt="Conveyor Track"
                className="h-14 w-auto object-contain"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white/80 hover:text-brand-orange font-condensed text-sm tracking-wider transition-colors duration-300"
                >
                  {link.label.toUpperCase()}
                </button>
              ))}
            </div>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+27649865970"
                className="hidden sm:flex items-center gap-2 bg-brand-orange text-brand-dark px-4 py-2 font-condensed font-bold text-sm hover:bg-white transition-colors duration-300"
              >
                <Phone className="h-4 w-4" />
                064 986 5970
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-brand-dark/95 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-0 right-0 bg-brand-dark border-t border-white/10 p-6 transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="space-y-4">
            {navLinks.map((link, index) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-white font-condensed text-xl py-3 border-b border-white/10 hover:text-brand-orange transition-colors duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {link.label.toUpperCase()}
              </button>
            ))}
            <a
              href="tel:+27649865970"
              className="flex items-center justify-center gap-2 bg-brand-orange text-brand-dark px-6 py-4 font-condensed font-bold mt-6"
            >
              <Phone className="h-5 w-5" />
              CALL NOW: 064 986 5970
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
