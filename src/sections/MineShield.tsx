import { useRef } from 'react';
import { CheckCircle, ShieldCheck, Clock, Zap, DollarSign } from 'lucide-react';

export function MineShield() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="mineshield" ref={sectionRef} className="bg-white">
      {/* Featured Header */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <img 
          src="/hero-bg.jpg" 
          alt="Conveyor System" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/70 flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="font-condensed text-6xl lg:text-8xl font-bold text-white mb-4 tracking-tighter">MINE-SHIELD</h2>
            <p className="font-condensed text-2xl lg:text-3xl text-brand-orange font-bold uppercase tracking-widest">
              Polyurethane Belt Repair
            </p>
            <p className="text-xl text-white mt-4 font-bold uppercase tracking-widest">
              Fast. Strong. Reliable.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-8 lg:px-16 xl:px-24 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-brand-dark leading-relaxed mb-8">
              A high performance, two-component polyurethane system designed for the repair and protection of conveyor belts. Engineered for the toughest mining and industrial environments.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: 'EXTENDS BELT LIFE', desc: 'Restores and protects against wear, impact and abrasion.' },
                { icon: Clock, title: 'MINIMISES DOWNTIME', desc: 'Quick and easy application gets your conveyor back in action faster.' },
                { icon: Zap, title: 'STRONG & DURABLE', desc: 'Exceptional adhesion and flexibility for long-lasting repairs.' },
                { icon: DollarSign, title: 'COST EFFECTIVE', desc: 'Reduce replacement costs and maintenance expenses.' },
              ].map((item) => (
                <div key={item.title} className="bg-brand-dark text-white p-6 border border-brand-dark">
                  <item.icon className="h-8 w-8 text-brand-orange mb-4" />
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-brand-dark text-white p-10 grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-condensed font-bold text-2xl mb-6 text-brand-orange">IDEAL FOR REPAIRING:</h4>
              <ul className="space-y-3">
                {['Cuts and tears', 'Impact damage', 'Pulley lagging', 'Edge damage', 'Worn conveyor belts'].map(item => (
                  <li key={item} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-brand-orange" /> {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-condensed font-bold text-2xl mb-6 text-brand-orange">SUITABLE FOR:</h4>
              <ul className="space-y-3">
                {['MINING', 'QUARRYING', 'AGGREGATES', 'CEMENT', 'POWER GENERATION'].map(item => (
                  <li key={item} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-brand-orange" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
