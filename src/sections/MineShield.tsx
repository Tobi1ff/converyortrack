import { useRef } from 'react';
import { CheckCircle, ShieldCheck, Clock, Zap, DollarSign } from 'lucide-react';

export function MineShield() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="mineshield" ref={sectionRef} className="py-24 bg-brand-dark text-white">
      <div className="px-6 sm:px-8 lg:px-16 xl:px-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-condensed text-5xl font-bold text-white mb-6">MINE-SHIELD</h2>
            <p className="text-xl text-brand-orange font-bold mb-4">POLYURETHANE BELT REPAIR</p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              A high performance, two-component polyurethane system designed for the repair and protection of conveyor belts. Engineered for the toughest mining and industrial environments.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: 'EXTENDS BELT LIFE', desc: 'Restores and protects against wear, impact and abrasion.' },
                { icon: Clock, title: 'MINIMISES DOWNTIME', desc: 'Quick and easy application gets your conveyor back in action faster.' },
                { icon: Zap, title: 'STRONG & DURABLE', desc: 'Exceptional adhesion and flexibility for long-lasting repairs.' },
                { icon: DollarSign, title: 'COST EFFECTIVE', desc: 'Reduce replacement costs and maintenance expenses.' },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 p-4 border border-white/10">
                  <item.icon className="h-6 w-6 text-brand-orange mb-2" />
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 text-brand-dark grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4 text-brand-dark">IDEAL FOR REPAIRING:</h4>
              <ul className="space-y-2">
                {['Cuts and tears', 'Impact damage', 'Pulley lagging', 'Edge damage', 'Worn conveyor belts'].map(item => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-brand-orange" /> {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-brand-dark">SUITABLE FOR:</h4>
              <ul className="space-y-2">
                {['MINING', 'QUARRYING', 'AGGREGATES', 'CEMENT', 'POWER GENERATION'].map(item => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-brand-orange" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
