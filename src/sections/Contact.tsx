import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, AlertCircle, Send, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

// ─────────────────────────────────────────────────────────────
// 1. Go to https://formspree.io and sign up (free).
// 2. Create a new form — set the email to conveyortrack1116@gmail.com
// 3. Replace the placeholder below with your real Form ID, e.g.:
//    const FORMSPREE_ID = 'xpwzgkda';
// ─────────────────────────────────────────────────────────────
const FORMSPREE_ID = 'mdappkpr';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '1116 Zone E, Namakgale, Phalabowa 1391',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '064 986 5970',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@conveyortrack.co.za',
  },
  {
    icon: AlertCircle,
    label: 'Emergency Line',
    value: '+27 731 261 959',
    highlight: true,
  },
];

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setIsSubmitted(true);
        formRef.current?.reset();
        // Reset success state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setHasError(true);
        setTimeout(() => setHasError(false), 5000);
      }
    } catch {
      setHasError(true);
      setTimeout(() => setHasError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-brand-concrete overflow-hidden"
    >
      {/* Scanline Reveal Effect */}
      <div
        className={`absolute inset-0 bg-brand-concrete transition-all duration-1000 ${
          isVisible ? 'clip-path-full' : 'clip-path-hidden'
        }`}
        style={{
          clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
        }}
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 161, 46, 0.1) 2px,
              rgba(255, 161, 46, 0.1) 4px
            )`,
          }}
        />
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <div
              className={`inline-block bg-brand-orange text-brand-concrete px-4 py-1 font-condensed font-bold text-sm mb-4 transition-all duration-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              GET IN TOUCH
            </div>
            <h2
              className={`font-condensed text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              CONTACT US
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Contact Info */}
            <div
              className={`transition-all duration-800 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <p className="text-gray-400 mb-8 text-lg">
                For more information about our products and services, please contact us. Our team is ready to assist you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className={`flex items-start gap-4 transition-all duration-600 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div
                      className={`w-12 h-12 flex items-center justify-center flex-shrink-0 ${
                        info.highlight ? 'bg-brand-orange' : 'bg-white/10'
                      }`}
                    >
                      <info.icon
                        className={`h-5 w-5 ${
                          info.highlight ? 'text-brand-concrete' : 'text-brand-orange'
                        }`}
                      />
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm mb-1">{info.label}</div>
                      <div
                        className={`font-medium ${
                          info.highlight ? 'text-brand-orange text-lg' : 'text-white'
                        }`}
                      >
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Registration Info */}
              <div
                className={`mt-12 pt-8 border-t border-white/10 transition-all duration-800 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '0.7s' }}
              >
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-gray-500 text-sm mb-1">CK Number</div>
                    <div className="text-white font-mono">2025/194588/07</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">Tax Number</div>
                    <div className="text-white font-mono">9068010306</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div
              className={`transition-all duration-800 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-sm p-8 border border-white/10"
              >
                <h3 className="font-condensed text-2xl font-bold text-white mb-6">
                  SEND US A MESSAGE
                </h3>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-400">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-600 focus:border-brand-orange focus:ring-brand-orange"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-400">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-600 focus:border-brand-orange focus:ring-brand-orange"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="phone" className="text-gray-400">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-600 focus:border-brand-orange focus:ring-brand-orange"
                  />
                </div>

                <div className="space-y-2 mb-8">
                  <Label htmlFor="message" className="text-gray-400">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-600 focus:border-brand-orange focus:ring-brand-orange resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-6 font-condensed font-bold text-lg transition-all duration-300 ${
                    isSubmitted
                      ? 'bg-green-500 hover:bg-green-500 text-white'
                      : hasError
                      ? 'bg-red-500 hover:bg-red-500 text-white'
                      : 'bg-brand-orange hover:bg-white text-brand-concrete'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      SENDING...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      MESSAGE SENT!
                    </span>
                  ) : hasError ? (
                    <span className="flex items-center gap-2">
                      <XCircle className="h-5 w-5" />
                      FAILED — TRY AGAIN
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      SEND MESSAGE
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
