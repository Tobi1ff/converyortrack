import { MoveRight, Facebook } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Conveyor Belt Repair',
  'Plant Maintenance',
  'Customized Solutions',
  'Emergency Services',
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark border-t border-brand-dark/10">
      {/* Main Footer */}
      <div className="px-6 sm:px-8 lg:px-16 xl:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-orange flex items-center justify-center">
                  <MoveRight className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-condensed text-2xl font-bold text-white">
                    CONVEYOR TRACK
                  </h3>
                  <p className="text-brand-orange text-xs font-condensed">
                    PTY LTD
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Empowering Progress, One Conveyor at a Time. We are driven by a passion for delivering exceptional quality, service, and value to the industries we serve.
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-brand-orange text-white px-4 py-2 font-condensed font-bold text-sm">
                  LEVEL 1 BBBEE
                </div>
                <div className="text-gray-400 text-sm">
                  CK: 2025/194588/07
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-condensed text-lg font-bold text-white mb-6">
                QUICK LINKS
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-brand-orange transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-condensed text-lg font-bold text-white mb-6">
                SERVICES
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-gray-300">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 sm:px-8 lg:px-16 xl:px-24 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Conveyor Track Pty Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://www.facebook.com/conveyortrack" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-orange transition-colors duration-300"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <span className="text-gray-400 text-sm">
              Emergency: <span className="text-brand-orange font-bold">+27 64 986 5970</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
